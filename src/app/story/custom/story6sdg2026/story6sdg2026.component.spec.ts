import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story6sdg2026Component } from './story6sdg2026.component';

describe('Story6sdg2026Component', () => {
  let component: Story6sdg2026Component;
  let fixture: ComponentFixture<Story6sdg2026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story6sdg2026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story6sdg2026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tell the Sierra Leone story and cite the 2026 scorecard', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Sierra Leone');
    expect(text).toContain('36%');
    expect(text).toContain('23.1%');
    expect(text).toContain('Dig deeper');
    expect(text).toContain('Sources');
  });
});
