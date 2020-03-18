import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NewAuthorizationBaseComponent } from '../base/new-authorization-base.component';

@Component({
  selector: 'app-new-authorization-two',
  templateUrl: './new-authorization-two.component.html',
  styleUrls: ['./new-authorization-two.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NewAuthorizationTwoComponent),
      multi: true
    }
  ]
})
export class NewAuthorizationTwoComponent extends NewAuthorizationBaseComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.initValue();
    this.createForm();
  }

  initValue() {

  }

  createForm() {
    this.form = this.formBuilder.group({
      NameSurname: new FormControl()
    });

    this.addGroupToParentForm(this.form);
    this.onChanges();
  }

  onChanges(): void {
    this.form.valueChanges.subscribe(res => {
      this.responseData.emit();
    });
  }
}