import {TodoSharedModule} from "../../projects/todo/src/app/app.module"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';

import {Routes,RouterModule} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FooterComponent } from './footer/footer.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import {StoryComponent} from './story/story.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Story3sitemapComponent } from './story/custom/story3sitemap/story3sitemap.component';
import { Story1sdgComponent } from './story/custom/story1sdg/story1sdg.component';
import { QuoteComponent } from './quote/quote.component';
import { ProductsComponent } from './products/products.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PopupComponent } from './popup/popup.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'stories',
    component: StoriesComponent
  },
  {
    path: 'quotes',
    component: QuotesComponent
  },
  {
    path: 'services',
    component: ProductsComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'story/:story_id/:story_tag',
    component: StoryComponent
  },
  {
    path: 'quote/:story_id/:story_tag',
    component: QuoteComponent
  },
  {
    path: 'registration',
    component: InputUserDataFormComponent
  },
  {
    path: 'user/:uid',
    component: DisplayUserDataComponent
  },
  {
    path: 'todo', 
    loadChildren: '../../projects/todo/src/app/app.module#TodoSharedModule'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputUserDataFormComponent,
    DisplayUserDataComponent,
    FooterComponent,
    QuotesComponent,
    HeaderComponent,
    StoriesComponent,
    StoryComponent,
    ComingSoonComponent,
    ContactFormComponent,
    Story3sitemapComponent,
    Story1sdgComponent,
    QuoteComponent,
    ProductsComponent,
    PrivacyComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    TodoSharedModule.forRoot(),
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    },)
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
/* 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); */