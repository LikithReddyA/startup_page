import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

import { HttpClientModule} from '@angular/common/http';
import { SearchBoxComponent } from './search-box/search-box.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SocialMediaComponent } from './social-media/social-media.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import{MatChipsModule} from "@angular/material/chips";
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SocialMediaComponent,
    QuickLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule
    
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
