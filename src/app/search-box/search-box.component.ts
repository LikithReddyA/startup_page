import { Component, OnInit } from '@angular/core';
import { SearchEngine } from '../models/search_engine';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchEngines : SearchEngine[]=[];
  searchQuery : string;
  searchOptionsElement : HTMLElement;
  outerDiv:HTMLElement;
  selectedSearchEngine:SearchEngine;


  constructor(private root:ActivatedRoute){
    this.searchEngines.push(new SearchEngine("Google","../../assets/icons/google.png","https://www.google.com/search?q="));
    this.searchEngines.push(new SearchEngine("Youtube","../../assets/icons/youtube.png","https://www.youtube.com/results?search_query="));
    this.searchEngines.push(new SearchEngine("PubDev","../../assets/icons/dart.png","https://pub.dev/packages?q="));
    this.searchEngines.push(new SearchEngine("StackOverFlow","../../assets/icons/stackoverflow.png","https://stackoverflow.com/search?q="));
    this.selectedSearchEngine=this.searchEngines[0];
    this.searchQuery="";
  }
  ngOnInit(): void {
    
  }

  changeSearchEngine(){
    this.searchOptionsElement =  document.getElementsByClassName("search-options")[0] as HTMLElement;
    this.searchOptionsElement.style.display = "block";
    this.outerDiv=  document.getElementsByClassName("outerDiv")[0] as HTMLElement;
    this.outerDiv.style.display = "block";
  }

  search(){
    if(this.searchQuery==""){
      return;
    }
    let searchUri = encodeURIComponent(this.searchQuery);
    this.searchQuery="";
    console.log("Qurey:",this.searchQuery);
    console.log("Uri:",searchUri);
    window.open(this.selectedSearchEngine.url+searchUri,"_self");

  }
  selectSearchEngine(selected:SearchEngine){
    this.outerDiv.style.display='none';
    this.searchOptionsElement.style.display='none';
    this.selectedSearchEngine=selected;
  }
  hideSearchOptions(){
    this.searchOptionsElement =  document.getElementsByClassName("search-options")[0] as HTMLElement;
    this.outerDiv=  document.getElementsByClassName("outerDiv")[0] as HTMLElement;
    this.searchOptionsElement.style.display = "none";
    this.outerDiv.style.display = "none";
  }
}
