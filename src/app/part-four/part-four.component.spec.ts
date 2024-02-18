import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFourComponent } from './part-four.component';

describe('PartFourComponent', () => {
  let component: PartFourComponent;
  let fixture: ComponentFixture<PartFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
