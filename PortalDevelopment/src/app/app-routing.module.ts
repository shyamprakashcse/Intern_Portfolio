import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SampleComponent } from './sample/sample.component';

const routes:Routes=[
  {path:'',component:LandingPageComponent,pathMatch:"full"},
  {path:'sample',component:SampleComponent,pathMatch:"full"}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
