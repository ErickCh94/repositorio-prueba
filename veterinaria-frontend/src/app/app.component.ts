import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veterinaria-frontend';
  router = inject(Router);

  listarCitas(){
    this.router.navigate(['listarCitas'])
  }

  guardarCitas(){
    this.router.navigate(['guardarCitas'])
  }

  inicio(){
    this.router.navigate([''])
  }

}
