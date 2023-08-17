import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { ReverseStringPipe } from '../core/reverse-string.pipe';
import { ButtonCounterComponent } from './button-counter/button-counter.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    UserProfileComponent,
    ReverseStringPipe,
    ButtonCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
