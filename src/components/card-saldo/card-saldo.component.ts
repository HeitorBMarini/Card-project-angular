import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card-saldo',
  imports: [FontAwesomeModule , CommonModule], // alternatively, individual components can be imported
  templateUrl: './card-saldo.component.html',
  styleUrl: './card-saldo.component.css'
})
export class CardSaldoComponent {
 
dadosFinanceiros = [
    { titulo: "Conta Corrente", valor: 200.00 },
    { titulo: "Conta Corrente Saldo Vinculados", valor: 300.00 },
    { titulo: "Conta Poupança Saldo Vinculados", valor: 400.00 },
    { titulo: "Investimentos com Baixa Automática", valor: 500.00 },
    { titulo: "Investimentos sem Baixa Automática", valor: 500.00 },
    { titulo: "SALDO TOTAL", valor: 1000.00, destaque: true },
    { titulo: "LIVRE PARA MOVIMENTAÇÃO", valor: 1000.00, destaque: true }
];

}
