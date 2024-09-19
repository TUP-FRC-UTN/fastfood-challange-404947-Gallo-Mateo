import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  //todos los pedidos realizados (se muestran en comp restaurant)
  private pedidosListados: Pedido[] = [
    {
      number: 266, 
      name: "Pedro",  
      description: "Pizza de Muzzarella",
      date: new Date(),
    },
    {
      number: 895, 
      name: "Juan",  
      description: "3 Super Panchos",
      date: new Date(),
    }
  ];

  getAllPedidosListados(){
    return this.pedidosListados;
  }

  addOnPedidosListados(pedido: Pedido) {
    this.pedidosListados.push(pedido);
  }

  //pedidos pendientes/ingresados (vienen del comp POS "point of sell", se muestran en comp kitchen)
  private pedidosPendientes: Pedido[] = [
    {
      number: 266, 
      name: "Pedro",  
      description: "Pizza de Muzzarella",
      date: new Date(),
    },
    {
      number: 895, 
      name: "Juan",  
      description: "3 Super Panchos",
      date: new Date(),
    }
  ];

  getAllPendientes(){
    return this.pedidosPendientes;
  }

  deleteInPendientes(pedido: Pedido) {
    // busca el index del pedido (pasado por parametro) en el array de pedidos en coccion
    const index = this.pedidosPendientes.indexOf(pedido);
    
    // si el pedido esta en el array, lo borra
    if (index > -1) {
      this.pedidosPendientes.splice(index, 1);
    }
  }

  addOnPendientes(pedido: Pedido) {
    this.pedidosPendientes.push(pedido);
  }


  //pedidos en coccion (pedidos"pendientes" q pasan al estado "en coccion"; se muestran en comp kitchen)
  private pedidoEnCoccion: Pedido[] = [
    {
      number: 179, 
      name: "Luis",  
      description: "6 empanadas de Carne",
      date: new Date(),
    }
  ];

  getAllEnCoccion(){
    return this.pedidoEnCoccion;
  }
  

  deleteInEnCoccion(pedido: Pedido) {
    // busca el index del pedido (pasado por parametro) en el array de pedidos en coccion
    const index = this.pedidoEnCoccion.indexOf(pedido);
    
    // si el pedido esta en el array, lo borra
    if (index > -1) {
      this.pedidoEnCoccion.splice(index, 1);
    }
  }

  addOnEnCoccion(pedido: Pedido) {
    this.pedidoEnCoccion.push(pedido);
  }


  //pedidos listos (vienen del comp kitchen, se muestran en comp point-of-delivery)
  private pedidosListos: Pedido[] = [
    {
      number: 348, 
      name: "Carlos",  
      description: "Pizza con piña",
      date: new Date(),
    },
    {
      number: 998, 
      name: "Mauricio",  
      description: "Choripan vegano",
      date: new Date(),
    }
  ];

  getAllListos(){
    return this.pedidosListos;
  }

  deleteInListos(pedido: Pedido) {
    // busca el index del pedido (pasado por parametro) en el array de pedidos listos
    const index = this.pedidosListos.indexOf(pedido);
    
    // si el pedido esta en el array, lo borra
    if (index > -1) {
      this.pedidosListos.splice(index, 1);
    }
  }

  addOnListos(pedido: Pedido) {
    this.pedidosListos.push(pedido);
  }
}
