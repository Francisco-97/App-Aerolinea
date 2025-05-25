import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMillasComponent } from './ver-millas.component';

describe('VerMillasComponent', () => {
  let component: VerMillasComponent;
  let fixture: ComponentFixture<VerMillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerMillasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
