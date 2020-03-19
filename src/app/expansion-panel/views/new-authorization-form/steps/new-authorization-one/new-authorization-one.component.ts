import { Component, OnInit, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NewAuthorizationBaseComponent } from '../base/new-authorization-base.component';

@Component({
  selector: 'app-new-authorization-one',
  templateUrl: './new-authorization-one.component.html',
  styleUrls: ['./new-authorization-one.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NewAuthorizationOneComponent),
      multi: true
    }
  ]
})
export class NewAuthorizationOneComponent extends NewAuthorizationBaseComponent implements OnInit {

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