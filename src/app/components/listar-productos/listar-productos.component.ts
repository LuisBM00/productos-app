import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  //variables
  productos: Producto[];
  tNombre = '';
  tMarca = '';
  tPrecio = 0.0;

  constructor(
    private productoService: ProductosService,
  ) {
    this.productos = [];
  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.productoService.ListarProducto().subscribe(response => {
      this.productos = response;
    })
  }

  Eliminar(obj: Producto, iControl: any) {
    if (confirm("Estas seguro de eliminar?")) {
      this.productoService.eliminarProducto(obj.id).subscribe(response => {
        this.productos.splice(iControl, 1);
        this.ngOnInit();
      })
    }
  }

}
