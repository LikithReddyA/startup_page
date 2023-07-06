import { Component, OnInit } from '@angular/core';
import { SearchEngine } from '../models/search_engine';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit{

  searchEngines : SearchEngine[]=[];

  ngOnInit(): void {
    
  }

  constructor(){
    this.searchEngines.push(new SearchEngine("Amazon","assets/social_media_icons/amazon.png","https://www.amazon.in/"));
    this.searchEngines.push(new SearchEngine("Hotstar","assets/social_media_icons/disney.png","https://www.hotstar.com/in/"));
    this.searchEngines.push(new SearchEngine("Drive","assets/social_media_icons/drive.png","https://drive.google.com/drive/my-drive"));
    this.searchEngines.push(new SearchEngine("Facebook","assets/social_media_icons/facebook.png","https://www.facebook.com/"));
    this.searchEngines.push(new SearchEngine("Flipkart","assets/social_media_icons/flipkart.png","https://www.flipkart.com/"));
    this.searchEngines.push(new SearchEngine("Github","assets/social_media_icons/github.png","https://www.github.com/"));
    this.searchEngines.push(new SearchEngine("Gmail","assets/social_media_icons/gmail.png","https://mail.google.com/mail/u/0/#inbox"));
    this.searchEngines.push(new SearchEngine("Instagram","assets/social_media_icons/instagram.png","https://www.instagram.com"));
    this.searchEngines.push(new SearchEngine("Linkedin","assets/social_media_icons/linkedin.png","https://www.linkedin.com/"));
    this.searchEngines.push(new SearchEngine("Netflix","assets/social_media_icons/netflix.png","https://www.netflix.com/"));
    this.searchEngines.push(new SearchEngine("Amazon Prime Video","assets/social_media_icons/prime.png","https://www.primevideo.com/"));
    this.searchEngines.push(new SearchEngine("SunNXT","assets/social_media_icons/sunnxt.webp","https://www.sunnxt.com/"));
    this.searchEngines.push(new SearchEngine("Whatsapp","assets/social_media_icons/whatsapp.png","https://web.whatsapp.com/"));
    this.searchEngines.push(new SearchEngine("Youtube","assets/social_media_icons/youtube.png","https://www.youtube.com"));
    this.searchEngines.push(new SearchEngine("Zee5","assets/social_media_icons/zee5.png","https://www.zee5.com"));
  }

  goto(selected:SearchEngine){
    window.open(selected.url,"_self");
  }
}
