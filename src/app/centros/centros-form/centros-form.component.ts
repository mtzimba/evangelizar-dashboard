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
    this.createForm();
  }

  createForm() {
    this.centrosForm = this.fb.group({
      nome: ['', Validators.required ],
      endereco: ['', Validators.required ],
      telefone: ['', Validators.required ]
    });
  }

  resetFields(){
    this.centrosForm = this.fb.group({
      nome: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.service.create(value).then(
      res => {
        this.resetFields();
        this.router.navigate(['/home']);
      }
    )
  }

}
