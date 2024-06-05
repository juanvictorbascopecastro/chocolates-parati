import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-loaders',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>Hola Mundo</h1> `,
})
export class UsersLoaderComponent {
  constructor() {}
}
