import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {

  formularioProducto: FormGroup;
  producto: Producto | undefined;
  valid = false;
  @Output() respuesta = new EventEmitter<string>();
  constructor(
    public formulario: FormBuilder,
    private productoService: ProductosService,
    private router: Router
  ) {
    this.formularioProducto = this.formulario.group({
      nombre: ['', Validators.required],
      marca: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }
  submit(): any {
    this.valid = this.formularioProducto.valid;
    if (this.valid) {

      //Se instancia 
      this.producto = new Producto();
      this.producto.nombre = this.formularioProducto.value["nombre"];
      this.producto.marca = this.formularioProducto.value["marca"];
      this.producto.precio = this.formularioProducto.value["precio"];
      //se conecta al servicio
      this.productoService.AgregarProducto(this.producto).subscribe(data => {
        this.respuesta.emit("agregado");
        this.formularioProducto.reset();
      });
      confirm('Se agrego el producto');
    }
    else {
      alert("Los campos no pueden estar vacios!");
    }

    this.valid = false;
  }
  ngOnInit(): void {
  }
}
