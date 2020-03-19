export class FormInfo {
    CreatorInfo: CreatorInfo;
    CheckerInfo: CheckerInfo;
    ApproveInfo: ApproveInfo;
    ActiveStep: number;
    ShowStep: number;
    Id: number;
    IsActive: number;
  }

  export class CreatorInfo {
    FormAction: CreatorFormAction;
    Country:string;
  }
  
  export class CreatorFormAction {
    BaseAction: BaseFormAction;
  }  

  export class CheckerInfo {
    FormAction: CheckerFormAction;
    City:string;
  }
  
  export class CheckerFormAction {
    BaseAction: BaseFormAction;
  }
  
  export class ApproveInfo {
    FormAction: ApproveFormAction;
  }
  
  export class ApproveFormAction {
    BaseAction: BaseFormAction;
  }

  export class BaseFormAction {
    Id: number;
    ActionType: number;
    ActionDate: string;
    NameSurname: string;
    Title: string;
    Description: string;
  }
