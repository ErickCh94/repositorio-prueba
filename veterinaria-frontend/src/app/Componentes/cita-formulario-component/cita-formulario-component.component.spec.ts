import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaFormularioComponentComponent } from './cita-formulario-component.component';

describe('CitaFormularioComponentComponent', () => {
  let component: CitaFormularioComponentComponent;
  let fixture: ComponentFixture<CitaFormularioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaFormularioComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaFormularioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
