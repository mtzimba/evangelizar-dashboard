import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventosFirebaseService } from '../eventos-firebase.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {

  itens: Array<any>;

  constructor(
    private router: Router,
    public service: EventosFirebaseService) { }

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
    this.router.navigate(['/eventos/'+ item.payload.doc.id + '/editar']);
  }

  new(){
    this.router.navigate(['/eventos/novo']);
  }

  delete(item){
    this.service.delete(item.payload.doc.id).then(
      res => {
        this.router.navigate(['/eventos']);
      }
    )
  }

}
