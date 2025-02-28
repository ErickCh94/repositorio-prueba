import { Component, inject, OnInit } from '@angular/core';
import { CitaServiceService } from '../../Servicios/cita-service.service';
import { Router } from '@angular/router';
import { Cita } from '../../Models/Cita';
import { Respuesta } from '../../Models/Respuesta';

@Component({
  selector: 'app-citas-lista-component',
  standalone: true,
  imports: [],
  templateUrl: './citas-lista-component.component.html',
  styleUrl: './citas-lista-component.component.css'
})
export class CitasListaComponentComponent implements OnInit{
  service = inject(CitaServiceService);
  router = inject(Router);
  citas: Cita[] = [];
  respuesta!: Respuesta;
  detalles!: Cita;
  botonDeshabilitado: boolean = true;

  ngOnInit() {
    this.service.listar().subscribe(data =>{
      this.respuesta = data;
      
      if (this.respuesta.success) {
        this.citas = this.respuesta.obj;
      }
    })
    
  }

  eliminarCita(cita : Cita) {
    if (confirm("¿Está seguro que desea eliminar esta cita?")) {
      this.service.eliminar(cita).subscribe(data => {
        this.respuesta = data;
        //alert(this.respuesta.mensaje);
        if (this.respuesta.success) {
          this.cargarCitas(); 
        }
        this.cargarCitas(); 
      });
    }
  }

  detallesCita(id : String){
    this.service.buscar(id).subscribe(data =>{
      this.detalles = data;
      console.log(data);

    })
  }

  cargarCitas() {
    this.service.listar().subscribe(data => {
      this.respuesta = data;
      if (this.respuesta.success) {
        this.citas = this.respuesta.obj;
      }
    });
  }

  botonEliminarTimeout() {
    this.botonDeshabilitado = true;
    setTimeout(() => {
      this.botonDeshabilitado = false;
    }, 2000);
  }

}
