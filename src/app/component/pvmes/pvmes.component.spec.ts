import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvmesComponent } from './pvmes.component';

describe('PvmesComponent', () => {
  let component: PvmesComponent;
  let fixture: ComponentFixture<PvmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PvmesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PvmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
