import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EvangelizationCenterFirebaseService } from '../evangelization-center-firebase.service';

@Component({
  selector: 'app-evangelization-center-form',
  templateUrl: './evangelization-center-form.component.html',
  styleUrls: ['./evangelization-center-form.component.css']
})
export class EvangelizationCenterFormComponent implements OnInit {

  ecForm: FormGroup;

  validation_messages = {
    'name': [
      { type: 'required', message: 'Nome é obrigatório.' }
    ],
    'address': [
      { type: 'required', message: 'Endereço é obrigatório.' }
    ],
    'phoneNumber': [
      { type: 'required', message: 'Telefone é obrigatório.' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    public service: EvangelizationCenterFirebaseService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.ecForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ],
      phoneNumber: ['', Validators.required ]
    });
  }

  resetFields(){
    this.ecForm = this.fb.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.service.create(value).then(
      res => {
        this.resetFields();
        //this.router.navigate(['/home']);
      }
    )
  }

}
