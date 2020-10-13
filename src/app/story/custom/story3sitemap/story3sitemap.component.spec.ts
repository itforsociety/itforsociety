import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story3sitemapComponent } from './story3sitemap.component';

describe('Story3sitemapComponent', () => {
  let component: Story3sitemapComponent;
  let fixture: ComponentFixture<Story3sitemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story3sitemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story3sitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
