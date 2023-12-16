import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServicesService } from '../services/api-services.service';
// import { Tags } from 'src/classFiles/tags';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private apiService: ApiServicesService) { }

  ngOnInit() {
  }


  onSubmitForm(form: NgForm) {
    console.log(form.value);

    let payload = new Tags();

    payload.name = form.value.name; 
    payload.description = form.value.description; 
    payload.slack_url = form.value.SlackUrl; 
    payload.tag = form.value.Tag; 

    this.apiService.saveTags(payload)
    .subscribe((response: any) => {
      console.log(response);
    });
  }
}

export class Tags {
  name: string;
  description: string;
  slack_url: string;
  tag: string;
}
