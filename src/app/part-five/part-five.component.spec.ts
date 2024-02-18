import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFiveComponent } from './part-five.component';

describe('PartFiveComponent', () => {
  let component: PartFiveComponent;
  let fixture: ComponentFixture<PartFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartFiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
