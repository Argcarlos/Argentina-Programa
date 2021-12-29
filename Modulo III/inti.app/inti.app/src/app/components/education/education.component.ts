import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  myPortfolio: any;
  educationList:any;
  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(dataPortfolio =>{
      console.log(dataPortfolio);
      this.myPortfolio= dataPortfolio;
      this.educationList= dataPortfolio;
    })
  }

}
