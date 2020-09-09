import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRoutingComponent } from './section-routing.component';

describe('SectionRoutingComponent', () => {
  let component: SectionRoutingComponent;
  let fixture: ComponentFixture<SectionRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
