import { Component, inject } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Form, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RestauranteService } from '../services/restaurante.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  pedido: Pedido = {
    number: undefined, 
    name: "", 
    description: "",
    date:  undefined
  }

  private restauranteService: RestauranteService = inject(RestauranteService);

  ordenarPedido(form: NgForm){

    const copyPedido = {
      ...this.pedido
    }
    copyPedido.number = Math.round(Math.random() * 1000);
    copyPedido.date = new Date();

    console.log(copyPedido);
    this.restauranteService.addOnPendientes(copyPedido);
    this.restauranteService.addOnPedidosListados(copyPedido);
    form.reset();
  }
}
