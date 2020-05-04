import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EvangelizationCenterFirebaseService } from '../evangelization-center-firebase.service';

@Component({
  selector: 'app-evangelization-center-edit',
  templateUrl: './evangelization-center-edit.component.html',
  styleUrls: ['./evangelization-center-edit.component.css']
})
export class EvangelizationCenterEditComponent implements OnInit {

  ecForm: FormGroup;
  item: any;

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
  }

  createForm() {
    this.ecForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ],
      phoneNumber: ['', Validators.required ]
    });
  }

  onSubmit(value){
    value.avatar = this.item.avatar;
    value.age = Number(value.age);
    this.service.update(this.item.id, value)
    .then(
      res => {
        //this.router.navigate(['/home']);
      }
    )
  }

  delete(){
    this.service.delete(this.item.id)
    .then(
      res => {
        //this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    )
  }

  cancel(){
    //this.router.navigate(['/home']);
  }

}
