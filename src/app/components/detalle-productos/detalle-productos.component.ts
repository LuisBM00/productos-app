
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import{NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent {
  @Input() item: Producto;
  producto:Producto | undefined;
  formularioProducto:FormGroup;
  constructor(
    //variables
    public formulario:FormBuilder, 
    private modalService:NgbModal

  ) { 
    this.item = new Producto();
    this.formularioProducto = this.formulario.group({
      nombre:['', Validators.required],
      marca:['',Validators.required],
      precio:['',Validators.required]
    });
  }
  ngOnInit(): void {

    this.formularioProducto.controls["nombre"].setValue(this.item.nombre);
    this.formularioProducto.controls["marca"].setValue(this.item.marca);
    this.formularioProducto.controls["precio"].setValue(this.item.precio);
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
