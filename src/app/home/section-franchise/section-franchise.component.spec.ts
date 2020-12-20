import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFranchiseComponent } from './section-franchise.component';

describe('SectionFranchiseComponent', () => {
  let component: SectionFranchiseComponent;
  let fixture: ComponentFixture<SectionFranchiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFranchiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
