import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  profile = {
    username: 'Bob',
    email: 'abc@deg.com'
    ,
    facebook: 'facebook.com'
    ,
    twitter: 'twitter.com'
    ,
    website: 'example.com'
    ,
    tel: '1234-5678-90'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(profileForm) {
    throw new Error('da co loi xay ra');
  }

}
