import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormInfo, CreatorInfo, CreatorFormAction, CheckerInfo, CheckerFormAction, BaseFormAction } from '../../models';

@Component({
  selector: 'app-new-authorization-form',
  templateUrl: './new-authorization-form.component.html',
  styleUrls: ['./new-authorization-form.component.scss']
})
export class NewAuthorizationFormComponent implements OnInit {
  parentFormGroup: FormGroup;
  model: FormInfo = new FormInfo();
  constructor(
    private cdRef: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {
    this.model = this.getDummyService();
  }

  ngOnInit() {
    this.createForm();
  }
  
  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  createForm() {
    this.parentFormGroup = this.formBuilder.group({});
  }


  nextButtonClicked() {
    console.log(this.parentFormGroup.value);
    console.log(this.model);
  }

  creatorChange($event){
  }

  checkerChange($event){
  }
  
  getDummyService(){
    var result = new FormInfo();
    result.CreatorInfo = new CreatorInfo();
    result.CreatorInfo.FormAction = new CreatorFormAction();
    result.CreatorInfo.FormAction.BaseAction = new BaseFormAction();
    result.CreatorInfo.FormAction.BaseAction.NameSurname = "Şafak";
    result.CheckerInfo = new CheckerInfo();
    result.CheckerInfo.FormAction = new CheckerFormAction();
    result.CheckerInfo.FormAction.BaseAction = new BaseFormAction();
    result.CheckerInfo.FormAction.BaseAction.NameSurname = "Temel";

    return result; 
  }
}
