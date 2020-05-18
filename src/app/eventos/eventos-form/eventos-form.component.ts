import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventosFirebaseService } from '../eventos-firebase.service';
import { Evento } from '../evento';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent implements OnInit {

  id: string;
  evento: Evento;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public service: EventosFirebaseService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']) {
         this.service.getByKey(params['id']).subscribe(
           result => {
            this.id = result.payload.id;
            let dataFire: any = result.payload.data();
            this.evento = new Evento(dataFire.nome, dataFire.descricao);
          });
        } else {
          this.evento = new Evento("","");
        }
      }
    );

  }

  onSubmit(){
    if (this.id)  {
      this.service.update(this.id, this.evento).then(
        res => {
          this.router.navigate(['/eventos']);
        }
      )
    } else {
      this.service.create(this.evento).then(
        res => {
          this.router.navigate(['/eventos']);
        }
      )
    }
  }
}
