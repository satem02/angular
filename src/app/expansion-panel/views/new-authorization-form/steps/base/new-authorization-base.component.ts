import { Component, Input, Output, EventEmitter, TemplateRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-authorization-base',
  templateUrl: './new-authorization-base.component.html',
  styleUrls: ['./new-authorization-base.component.scss']
})
export class NewAuthorizationBaseComponent {

  @Input() parentFormGroup: FormGroup;
  @Input() childPropertyName: string;
  @Input() requestData: any;
  @Output() responseData = new EventEmitter<any>();
  @Input() templateRef: TemplateRef<any>;


  public addGroupToParentForm(form: FormGroup) {

    this.parentFormGroup.addControl(
      this.childPropertyName,
      form
    );

  }

  public addGroupToControl(data: Object) {
    this.parentFormGroup.addControl(
      this.childPropertyName,
      new FormControl(data)
    );
  }

  public addGroupToFormControls(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(key => {
      let control = formGroup.controls[key];
      this.parentFormGroup.addControl(
        key,
        new FormControl(control.value, control.validator, control.asyncValidator)
      );
      this.parentFormGroup.setValidators(control.validator);
    });

  }

}
