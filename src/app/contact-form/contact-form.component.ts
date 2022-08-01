import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input'
import { Meta, Title} from '@angular/platform-browser';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input('mat-autosize')
  matAutosize: boolean

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(
    private meta:Meta,
    private title:Title
    ) {

      
    this.title.setTitle("Contact" + " | IT for Society");
    this.meta.updateTag({ name: "title", content: "Contact" + " | IT for Society" });
    this.meta.updateTag({ name: "description", content: "Contact and hire User Interface (UI) and User Experience (UX) designer" });
    this.meta.updateTag({ property: "og:title",content: "Contact" + " | IT for Society"});
    this.meta.updateTag({ property: "og:url",content: "https://itforsociety.com/contact"});
    this.meta.updateTag({ property: "og:description",content: "Contact and hire User Interface (UI) and User Experience (UX) designer"});
    this.meta.updateTag({ name: "twitter:title",content: "Contact" + " | IT for Society"});
    this.meta.updateTag({ name: "twitter:url",content: "https://itforsociety.com/contact"});
    this.meta.updateTag({ name: 'twitter:description', content: "Contact and hire User Interface (UI) and User Experience (UX) designer" });
     }

  ngOnInit(): void {
      
  }

}
