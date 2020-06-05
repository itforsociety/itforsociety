import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TodoDataService } from './service/todo-data.service';

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
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})

export class TodoSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
