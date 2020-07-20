import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormInfo, CreatorInfo, CreatorFormAction, CheckerInfo, CheckerFormAction, BaseFormAction, ApproveInfo, ApproveFormAction } from '../../models';
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
    result.CreatorInfo.FormExpanded = true;
    result.CreatorInfo.Country = "TURKEY";
    result.CreatorInfo.Readonly = true;
    result.CreatorInfo.Visible = true;
    result.CreatorInfo.FormAction.BaseAction = this.creatorFillBaseAction();
    
    result.CheckerInfo = new CheckerInfo();
    result.CheckerInfo.FormExpanded = true;
    result.CheckerInfo.Readonly = false;
    result.CheckerInfo.Visible = true;
    result.CheckerInfo.FormAction = new CheckerFormAction();
    result.CheckerInfo.FormAction.BaseAction = this.checkerFillBaseAction();

    
    result.ApproveInfo = new ApproveInfo();
    result.ApproveInfo.FormExpanded = false;
    result.ApproveInfo.Readonly = false;
    result.ApproveInfo.Visible = false;
    result.ApproveInfo.FormAction = new ApproveFormAction();
    result.ApproveInfo.FormAction.BaseAction = this.approveFillBaseAction();

    return result;
  }

  creatorFillBaseAction() {
    let baseAction = new BaseFormAction();
    baseAction.NameSurname = "Ömer Temel";
    baseAction.Title = "Software Developer";
    baseAction.ActionDate = this.datePipe.transform(new Date(), "dd/MM/yyyy");
    baseAction.ActionType = 1;
    baseAction.Description = "Go next step.";
    return baseAction;
  }

  checkerFillBaseAction() {
    let baseAction = new BaseFormAction();
    baseAction.NameSurname = "Şafak Temel";
    baseAction.Title = "Software Developer";
    baseAction.ActionDate = this.datePipe.transform(new Date(), "dd/MM/yyyy");
    //baseAction.ActionType = 1;
    baseAction.Description = "Current Step.";
    return baseAction;
  }

  approveFillBaseAction() {
    let baseAction = new BaseFormAction();
    baseAction.NameSurname = "Şafak Temel";
    baseAction.Title = "Software Developer";
    baseAction.ActionDate = this.datePipe.transform(new Date(), "dd/MM/yyyy");
    //baseAction.ActionType = 1;
    baseAction.Description = "Next Step.";
    return baseAction;
  }
}
