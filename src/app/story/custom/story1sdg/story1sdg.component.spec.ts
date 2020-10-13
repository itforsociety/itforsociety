import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story1sdgComponent } from './story1sdg.component';

describe('Story1sdgComponent', () => {
  let component: Story1sdgComponent;
  let fixture: ComponentFixture<Story1sdgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story1sdgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story1sdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
