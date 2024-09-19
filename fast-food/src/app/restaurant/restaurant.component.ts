import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RestauranteService} from '../services/restaurante.service';
import { PosComponent } from '../pos/pos.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PosComponent, KitchenComponent, DeliveryPointComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit, OnChanges{

  private restauranteService: RestauranteService = inject(RestauranteService);

  protected pedidosListado: Pedido[] = [];

  ngOnInit(): void {
    this.loadPedidosListados();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadPedidosListados();
  }

  loadPedidosListados() {
      this.pedidosListado = this.restauranteService.getAllPedidosListados();
  }
}
