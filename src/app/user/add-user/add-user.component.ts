import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
  }
  get f() { return this.userForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.f.firstName.errors)
    console.log(this.f.lastName.errors)
    console.log(this.f.email.errors)
    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
}
