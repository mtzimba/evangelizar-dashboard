import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CentrosFirebaseService } from '../centros-firebase.service';
import { Centro } from '../centro';



@Component({
  selector: 'app-centros-form',
  templateUrl: './centros-form.component.html',
  styleUrls: ['./centros-form.component.css']
})
export class CentrosFormComponent implements OnInit {

  id: string;
  centro: Centro;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public service: CentrosFirebaseService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']) {
         this.service.getByKey(params['id']).subscribe(
           result => {
            this.id = result.payload.id;
            let dataFire: any = result.payload.data();
            this.centro = new Centro(dataFire.nome, dataFire.endereco, dataFire.telefone);
          });
        } else {
          this.centro = new Centro("","","");
        }
      }
    );

  }

  onSubmit(){
    if (this.id)  {
      this.service.update(this.id, this.centro).then(
        res => {
          this.router.navigate(['/centros']);
        }
      )
    } else {
      this.service.create(this.centro).then(
        res => {
          this.router.navigate(['/centros']);
        }
      )
    }
  }

}
