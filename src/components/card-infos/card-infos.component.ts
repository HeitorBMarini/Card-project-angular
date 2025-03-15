import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-card-infos',
  imports: [CommonModule],
  templateUrl: './card-infos.component.html',
  styleUrl: './card-infos.component.css'
})
export class CardInfosComponent {
  usuario = {
    nome: "Heitor Borba Marini",
    idade: 21,
    rendaMensal: 2000.00
  };
  
}
