import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition}from '@angular/animations';
import {ButtonModule} from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import {TableModule} from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import { SampleComponent } from './sample/sample.component';  //required when using MegaMenu

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
   BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ToastModule,
    ButtonModule,
    StyleClassModule,
    TableModule,
    MenubarModule,
    MenuModule,


    RippleModule





  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
