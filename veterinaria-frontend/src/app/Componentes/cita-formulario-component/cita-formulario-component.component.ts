import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CitaServiceService } from '../../Servicios/cita-service.service';
import { Router } from '@angular/router';
import { Respuesta } from '../../Models/Respuesta';
import { Cita } from '../../Models/Cita';
import { NgbDateStruct, NgbModule, NgbTimepickerModule, NgbTimeStruct  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cita-formulario-component',
  standalone: true,
  imports: [FormsModule,NgbModule,NgbTimepickerModule],
  templateUrl: './cita-formulario-component.component.html',
  styleUrl: './cita-formulario-component.component.css'
})
export class CitaFormularioComponentComponent {
  service = inject(CitaServiceService);
  router = inject(Router);
  respuesta!: Respuesta;
  cita : Cita = new Cita();
  date!: String;
  test!: String;

  fecha: NgbDateStruct | null = null;
  tiempo: NgbTimeStruct | null = null;
  spinners = true;

  guardar() {
    if (!this.cita.nombreCliente) {
      alert("El campo Nombre del Cliente es obligatorio");
      return;
    } 
    if (!this.cita.nombreMascota) {
      alert("El campo Nombre de la Mascota es obligatorio");
      return;
    } 
    if (!this.cita.razonCita) {
      alert("El campo Razón de la Cita es obligatorio");
      return;
    } 
    if (!this.fecha || !this.tiempo) { 
      alert("Debe seleccionar una fecha y hora para la cita");
      return;
    }  
    //fusionando fecha & tiempo
    const fechaStr = `${this.fecha.year}-${this.pad(this.fecha.month)}-${this.pad(this.fecha.day)}`;
    const horaStr = `${this.pad(this.tiempo.hour)}:${this.pad(this.tiempo.minute)}:${this.pad(this.tiempo.second)}`;
    this.cita.fechaHora = `${fechaStr} ${horaStr}`;

    this.service.guardar(this.cita).subscribe(data => {
      this.respuesta = data;
      alert(this.respuesta.mensaje);
      if (this.respuesta.success) {
        this.router.navigate(['listarCitas']);
      }
    });
  }
  //aux para confirmar dobles dígitos
  pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
  
}
