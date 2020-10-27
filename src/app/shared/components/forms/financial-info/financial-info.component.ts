import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-info',
  templateUrl: './financial-info.component.html',
  styleUrls: ['./financial-info.component.scss']
})
export class FinancialInfoComponent implements OnInit {

  public editBankingInfo = false;
  public editConsultationInfo = false;

  constructor() { }

  ngOnInit(): void {
  }

  openEdit(whichEdit): any {
    switch (whichEdit) {
      case 'banking':
        this.editBankingInfo = !this.editBankingInfo;
        break;
      case 'consultation':
        this.editConsultationInfo = !this.editConsultationInfo;
        break;
      default:
      // code block
      console.error('No edit name');
    }
  }

}
