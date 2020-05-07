import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CentrosFirebaseService } from './centros-firebase.service';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {

  itens: Array<any>;

  constructor(
    private router: Router,
    public service: CentrosFirebaseService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getAll()
      .subscribe(result => {
        this.itens = result;
    })
  }

  edit(item){
    this.router.navigate(['/centros/'+ item.payload.doc.id + 'editar']);
  }

  new(){
    this.router.navigate(['/centros/novo']);
  }
}

