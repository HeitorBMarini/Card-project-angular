import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-credito',
  imports: [CommonModule],
  templateUrl: './card-credito.component.html',
  styleUrl: './card-credito.component.css'
})
export class CardCreditoComponent {
   cartaoCredito = {
    numero: "1234567891011",
    nome: "FELIPE DA SILVA FREITAS",
    bandeira: "MASTER CARD",
    limites: [
      { tipo: "Limite de Compra", valor: 1000.00 },
      { tipo: "Disponível", valor: 1200.00 },
      { tipo: "Limite de Saque", valor: 2000.00 },
      { tipo: "Disponível", valor: 1300.00 },
      { tipo: "Limite Total Utilizado", valor: 3000.00 }
    ]
  };
  
}
