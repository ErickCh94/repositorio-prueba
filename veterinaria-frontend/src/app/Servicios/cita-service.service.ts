import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cita } from '../Models/Cita';
import { Respuesta } from '../Models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class CitaServiceService {
  http = inject(HttpClient);

  private urlListarCitas = 'http://localhost:8080/citas/listar';
  private urlGuardar = 'http://localhost:8080/citas/guardar'
  private urlBuscar = 'http://localhost:8080/citas/buscar/'
  private urlEliminar = 'http://localhost:8080/citas/eliminar'

  listar(){
    return this.http.get<Respuesta>(this.urlListarCitas);
  }

  guardar(cita : Cita){
    return this.http.post<Respuesta>(this.urlGuardar, cita);
  }

  buscar(idCita : String){
    return this.http.get<Cita>(this.urlBuscar + idCita);
  }

  eliminar(cita: Cita){
    return this.http.post<Respuesta>(this.urlEliminar, cita);
  }

}
