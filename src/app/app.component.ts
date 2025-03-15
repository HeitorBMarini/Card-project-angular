import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardSaldoComponent } from "../components/card-saldo/card-saldo.component";
import { CardDebitoComponent } from "../components/card-debito/card-debito.component";
import { CardCreditoComponent } from "../components/card-credito/card-credito.component";
import { CardInfosComponent } from "../components/card-infos/card-infos.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CardSaldoComponent, CardDebitoComponent, CardCreditoComponent, CardInfosComponent]
})
export class AppComponent {
  title = 'Card-project';
}
