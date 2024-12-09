import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgendaComponent } from "./agenda/agenda.component";
import { InicioComponent } from "./inicio/inicio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgendaComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetoAgenda1';
}
