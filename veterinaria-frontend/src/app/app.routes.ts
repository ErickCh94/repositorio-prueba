import { Routes } from '@angular/router';
import { HomeComponentComponent } from './Componentes/home-component/home-component.component';
import { CitaFormularioComponentComponent } from './Componentes/cita-formulario-component/cita-formulario-component.component';
import { CitasListaComponentComponent } from './Componentes/citas-lista-component/citas-lista-component.component';
import { Error404ComponentComponent } from './Componentes/error404-component/error404-component.component';

export const routes: Routes = [
    {path:'', component: HomeComponentComponent},
    {path:'guardarCitas', component:CitaFormularioComponentComponent},
    {path:'listarCitas', component:CitasListaComponentComponent},
    {path: '**', component:Error404ComponentComponent}
];
