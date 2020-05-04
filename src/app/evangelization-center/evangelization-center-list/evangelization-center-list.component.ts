import { Component, OnInit } from '@angular/core';
import { EvangelizationCenterFirebaseService } from '../evangelization-center-firebase.service';

@Component({
  selector: 'app-evangelization-center-list',
  templateUrl: './evangelization-center-list.component.html',
  styleUrls: ['./evangelization-center-list.component.css']
})
export class EvangelizationCenterListComponent implements OnInit {

  items: Array<any>;

  constructor(public service: EvangelizationCenterFirebaseService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getAll()
      .subscribe(result => {
        this.items = result;
    })
  }

  viewDetails(item){
    //this.router.navigate(['/details/'+ item.payload.doc.id]);
  }
}

