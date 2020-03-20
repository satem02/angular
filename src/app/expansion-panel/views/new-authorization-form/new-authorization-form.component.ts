import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormInfo, CreatorInfo, CreatorFormAction, CheckerInfo, CheckerFormAction, BaseFormAction } from '../../models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-authorization-form',
  templateUrl: './new-authorization-form.component.html',
  styleUrls: ['./new-authorization-form.component.scss']
})
export class NewAuthorizationFormComponent implements OnInit {
  parentFormGroup: FormGroup;
  model: FormInfo = new FormInfo();
  constructor(private datePipe: DatePipe,
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

  creatorChange($event) {
  }

  checkerChange($event) {
  }

  getDummyService() {
    var result = new FormInfo();
    result.CreatorInfo = new CreatorInfo();
    result.CreatorInfo.FormAction = new CreatorFormAction();
    result.CreatorInfo.FormAction.BaseAction = this.fillBaseAction();
    result.CheckerInfo = new CheckerInfo();
    result.CheckerInfo.FormAction = new CheckerFormAction();
    result.CheckerInfo.FormAction.BaseAction = this.fillBaseAction();

    return result;
  }

  fillBaseAction() {
    let baseAction = new BaseFormAction();
    baseAction.NameSurname = "Şafak Temel";
    baseAction.Title = "Software Developer";
    baseAction.ActionDate = this.datePipe.transform(new Date(), "dd-MM-yyyy")

    return baseAction;
  }
}
