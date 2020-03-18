import { Component, OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-authorization-base',
  template: `
  Is Editable: {{isEditable}}
  Is Disable: {{isDisable}}
  Parent FormGroup: {{parentFormGroup}}
  Child PropertyName: {{childPropertyName}}
  Child RequestData: {{requestData}}
  Child ResponseData: {{responseData}}
  `
})
export class NewAuthorizationBaseComponent  {

  @Input() visible: boolean;
  @Input() readonly: boolean;
  @Input() parentFormGroup: FormGroup;
  @Input() childPropertyName: string;
  @Input() requestData: any;
  @Output() responseData = new EventEmitter<any>();;

  private childFormGroup: FormGroup;

  public addGroupToParentForm(form: FormGroup) {

    this.childFormGroup = form;

    this.parentFormGroup.addControl(
      this.childPropertyName,
      this.childFormGroup
    );

  }

  public addGroupToControl(data: Object) {
    this.parentFormGroup.addControl(
      this.childPropertyName,
      new FormControl(data)
    );
  }


}
