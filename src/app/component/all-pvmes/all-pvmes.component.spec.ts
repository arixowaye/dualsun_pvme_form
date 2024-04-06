import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPvmesComponent } from './all-pvmes.component';

describe('AllPvmesComponent', () => {
  let component: AllPvmesComponent;
  let fixture: ComponentFixture<AllPvmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPvmesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPvmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
