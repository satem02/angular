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
    FormExpanded:boolean;
    Readonly:boolean;
    Visible:boolean;
  }
  
  export class CreatorFormAction {
    BaseAction: BaseFormAction;
  }  

  export class CheckerInfo {
    FormAction: CheckerFormAction;
    City:string;
    FormExpanded:boolean;
    Readonly:boolean;
    Visible:boolean;
  }
  
  export class CheckerFormAction {
    BaseAction: BaseFormAction;
  }
  
  export class ApproveInfo {
    FormAction: ApproveFormAction;
    District:string;
    FormExpanded:boolean;
    Readonly:boolean;
    Visible:boolean;
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
