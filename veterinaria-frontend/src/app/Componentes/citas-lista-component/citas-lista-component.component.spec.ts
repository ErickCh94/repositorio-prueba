import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasListaComponentComponent } from './citas-lista-component.component';

describe('CitasListaComponentComponent', () => {
  let component: CitasListaComponentComponent;
  let fixture: ComponentFixture<CitasListaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasListaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasListaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
