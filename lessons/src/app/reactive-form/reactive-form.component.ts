import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  search = new FormControl ('');
  userForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  });

  get f () {
    return this.userForm.controls;
  }

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    console.log(this.search.value);
  }

  onSubmit(){
    console.log(this.userForm.value);
  }
}
