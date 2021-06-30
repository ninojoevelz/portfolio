import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ninojoevelz';

  contactFormGroup: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.contactFormGroup = this.formBuild.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required]
    });
  }

  onSubmitContact() {}
}
