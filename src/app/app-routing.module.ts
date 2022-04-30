import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';



import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
{path: '', redirectTo:'/Home',pathMatch: 'full'},
{ path: 'Home', component: HeaderComponent} ,
{ path: 'About', component: IntroComponent},
{ path: 'Gallery', component: GalleryComponent},
{ path: 'Contact', component: ContactComponent},
];


@NgModule({
  imports:[
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations:[],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }



