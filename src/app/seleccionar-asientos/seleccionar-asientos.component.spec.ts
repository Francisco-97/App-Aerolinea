import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarAsientosComponent } from './seleccionar-asientos.component';

describe('SeleccionarAsientosComponent', () => {
  let component: SeleccionarAsientosComponent;
  let fixture: ComponentFixture<SeleccionarAsientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionarAsientosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionarAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
