import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardSaldoComponent } from "../components/card-saldo/card-saldo.component";
import { CardDebitoComponent } from "../components/card-debito/card-debito.component";
import { CardCreditoComponent } from "../components/card-credito/card-credito.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CardSaldoComponent, CardDebitoComponent, CardCreditoComponent]
})
export class AppComponent {
  title = 'Card-project';
}
