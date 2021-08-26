import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TitleRoutingModule} from './title-screen.routing.module';
import {TitleScreenComponent} from './title-screen.component';

@NgModule({
  declarations: [TitleScreenComponent],
  imports: [
    CommonModule,
    FormsModule,
    TitleRoutingModule
  ],
  entryComponents: [TitleScreenComponent]
})
export class TitleModule { }
