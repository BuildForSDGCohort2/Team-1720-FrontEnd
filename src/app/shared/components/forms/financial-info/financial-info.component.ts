import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-info',
  templateUrl: './financial-info.component.html',
  styleUrls: ['./financial-info.component.scss']
})
export class FinancialInfoComponent implements OnInit {

  public hasDoctorAdded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
