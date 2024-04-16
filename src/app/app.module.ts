import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgSwitchComponent } from './examples/ng-switch/ng-switch.component';
import { NgStyleComponent } from './examples/ng-style/ng-style.component';
import { NgClassComponent } from './examples/ng-class/ng-class.component';
import { NgIfComponent } from './examples/ng-if/ng-if.component';
import { NgForComponent } from './examples/ng-for/ng-for.component';
import { NgTemplateOutletComponent } from './examples/ng-template-outlet/ng-template-outlet.component';
import {
  DynamicComponent,
  NgComponentOutletComponent,
} from './examples/ng-component-outlet/ng-component-outlet.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgTemplateOutletComponent,
    NgComponentOutletComponent,
    DynamicComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
