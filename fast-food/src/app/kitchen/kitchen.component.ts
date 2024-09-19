import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RestauranteService } from '../services/restaurante.service';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnInit, OnChanges {

  private restauranteService: RestauranteService = inject(RestauranteService);

  protected pedidosPendientes: Pedido[] = [];
  protected pedidosEnCoccion: Pedido[] = [];

  ngOnInit(): void {
    this.loadPedidosPendientes();
    this.loadPedidosEnCoccion();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadPedidosPendientes();
    this.loadPedidosEnCoccion();
  }

  //pedidos pendientes...
  loadPedidosPendientes() {
      this.pedidosPendientes = this.restauranteService.getAllPendientes();
  }

  cocinarPedido(pedido: Pedido){
    this.restauranteService.deleteInPendientes(pedido);
    this.loadPedidosPendientes();

    this.restauranteService.addOnEnCoccion(pedido);
    this.loadPedidosEnCoccion();
  }

  //pedidos en coccion...
  loadPedidosEnCoccion() {
      this.pedidosEnCoccion = this.restauranteService.getAllEnCoccion();
  }

  pedidoTerminado(pedido: Pedido){
    this.restauranteService.deleteInEnCoccion(pedido);
    this.loadPedidosEnCoccion();

    this.restauranteService.addOnListos(pedido);
  }
}
