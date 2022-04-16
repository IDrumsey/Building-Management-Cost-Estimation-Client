import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// https://stackoverflow.com/a/43220824/17712310
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LocationCardComponent } from './core/components/location-card/location-card.component';
import { ProjectCardComponent } from './core/components/project-card/project-card.component';
import { TaskCardComponent } from './core/components/task-card/task-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CostCardComponent } from './core/components/cost-card/cost-card.component';
import { ButtonComponent } from './core/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationCardComponent,
    ProjectCardComponent,
    TaskCardComponent,
    CostCardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
