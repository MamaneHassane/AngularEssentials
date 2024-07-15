import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponent } from './lazy.component';

describe('LazyComponentComponent', () => {
  let component: LazyComponent;
  let fixture: ComponentFixture<LazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
