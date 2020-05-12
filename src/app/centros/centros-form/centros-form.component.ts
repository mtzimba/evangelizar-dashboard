import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CentrosFirebaseService } from '../centros-firebase.service';



@Component({
  selector: 'app-centros-form',
  templateUrl: './centros-form.component.html',
  styleUrls: ['./centros-form.component.css']
})
export class CentrosFormComponent implements OnInit {

  centrosForm: FormGroup;
  id: any;

  validation_messages = {
    'nome': [
      { type: 'required', message: 'Nome é obrigatório.' }
    ],
    'enderenco': [
      { type: 'required', message: 'Endereço é obrigatório.' }
    ],
    'telefone': [
      { type: 'required', message: 'Telefone é obrigatório.' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public service: CentrosFirebaseService) { }

  ngOnInit(): void {
    this.id = null;
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']) {
         this.service.getByKey(params['id']).subscribe(
           result => {
            this.id = result.payload.id;
            this.createForm(result.payload.data())});
        } else {
          this.createForm(null);
        }
      }
    );

  }

  createForm(value) {
    if (value) {
      this.centrosForm = this.fb.group({
        nome: [value.nome, Validators.required ],
        endereco: [value.endereco, Validators.required ],
        telefone: [value.telefone, Validators.required ]
      });
    } else {
      this.centrosForm = this.fb.group({
        nome: ['', Validators.required ],
        endereco: ['', Validators.required ],
        telefone: ['', Validators.required ]
      });
    }
    
  }

  resetFields(){
    this.centrosForm = this.fb.group({
      nome: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    if (this.id) {
      this.service.update(this.id, value).then(
        res => {
          this.resetFields();
          this.router.navigate(['/centros']);
        }
      )
    } else {
      this.service.create(value).then(
        res => {
          this.resetFields();
          this.router.navigate(['/centros']);
        }
      )
    }
  }

}
