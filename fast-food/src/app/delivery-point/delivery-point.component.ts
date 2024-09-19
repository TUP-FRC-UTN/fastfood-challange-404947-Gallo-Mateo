import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RestauranteService } from '../services/restaurante.service';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent implements OnInit, OnChanges {
  private restauranteService: RestauranteService = inject(RestauranteService);

  protected pedidosListos: Pedido[] = [];

  ngOnInit(): void {
    this.loadPedidosListos();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadPedidosListos();  
  }

  loadPedidosListos() {
      this.pedidosListos = this.restauranteService.getAllListos();
  }

  //entregar el pedido implica borrarlo de la lista de pedidos listos
  entregarPedido(pedido: Pedido){
    this.restauranteService.deleteInListos(pedido);
    this.loadPedidosListos();
  }
}
