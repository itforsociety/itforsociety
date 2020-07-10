import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../../../../src/app/material.module';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TodoDataService } from './service/todo-data.service';
import { FormsModule } from '@angular/forms';

const providers = []

const routes: Routes = [
  {
    path: 'todo',
    component: AppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule

  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})

export class TodoSharedModule{
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
