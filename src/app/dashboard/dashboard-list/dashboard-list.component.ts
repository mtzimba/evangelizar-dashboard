import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardFirebaseService } from '../dashboard-firebase.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {

  pessoas: Array<any>;
  eventos: Array<any>;

  constructor(
    private router: Router,
    public service: DashboardFirebaseService) { }

  ngOnInit(): void {
    this.getEventos();
    this.getPessoasByEventos(null);
  }
  
  loadPessoas(e) {
    let eventoSelecionado = null;
    if(e.target.value) { 
      eventoSelecionado = e.target.value;
    }

    this.getPessoasByEventos(eventoSelecionado);
  }

  getEventos(){
    this.service.getEventos()
      .subscribe(result => {
        this.eventos = result;
    })
  }


  getPessoasByEventos(evento){
    this.service.getPessoasByEventos(evento)
      .subscribe(result => {
        this.pessoas = result;
    })
  }

  delete(item){
    this.service.deletePessoa(item.payload.doc.id).then(
      res => {
        this.router.navigate(['/pessoas']);
      }
    )
  }

}
