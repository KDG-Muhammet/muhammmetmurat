import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('muhammetmurat');
}
