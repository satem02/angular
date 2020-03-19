
import { Component, OnInit, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NewAuthorizationBaseComponent } from '../../..';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@Component({
  selector: 'app-user-approval-panel',
  templateUrl: './user-approval-panel.component.html',
  styleUrls: ['./user-approval-panel.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserApprovalPanelComponent),
      multi: true
    },{
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
  }
  ]
})
export class UserApprovalPanelComponent extends NewAuthorizationBaseComponent implements OnInit {

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
      NameSurname: new FormControl(),
      Description: new FormControl(),
      ActionType: new FormControl(),
      ActionDate: new FormControl(),
      Title: new FormControl()
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
