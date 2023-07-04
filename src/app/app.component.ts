import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { QuoteServiceService } from './quote-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  time : string;
  date : string;
  title = 'startup_page';

  quote : string;
  author : string;
  constructor(
    private datepipe : DatePipe,
    private servicefile : QuoteServiceService
  ){
  };
  
  ngOnInit(): void {
    this.getQuote()

    setInterval(()=>{
      this.timeRefresher();
    }, 1000);
  }

  timeRefresher(){
    this.time = this.datepipe.transform(new Date(),'mediumTime');
    this.date = this.datepipe.transform(new Date(),'fullDate');
    // this.time = (new Date()).toISOString();
    // return this.time;
  }

  
  getQuote(){
    this.servicefile.getQuotes().subscribe(
      {
        next:(data)=>{
          this.quote = data['content'];
          this.author = data['author'];
        }
      }
    )
    
  }
}
