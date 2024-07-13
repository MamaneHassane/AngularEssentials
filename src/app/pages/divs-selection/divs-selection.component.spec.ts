import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivsSelectionComponent } from './divs-selection.component';

describe('DivsSelectionComponent', () => {
  let component: DivsSelectionComponent;
  let fixture: ComponentFixture<DivsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivsSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
