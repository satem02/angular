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
  }
  
  export class CreatorFormAction {
    Id: number;
    ActionType: number;
    ActionDate: string;
    NameSurname: string;
    Title: string;
    Description: string;
  }  

  export class CheckerInfo {
    FormAction: CheckerFormAction;
  }
  
  export class CheckerFormAction {
    Id: number;
    ActionType: number;
    ActionDate: string;
    NameSurname: string;
    Title: string;
    Description: string;
  }
  
  export class ApproveInfo {
    FormAction: ApproveFormAction;
  }
  
  export class ApproveFormAction {
    Id: number;
    ActionType: number;
    ActionDate: string;
    NameSurname: string;
    Title: string;
    Description: string;
  }
  