import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import{NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit{
  formularioProducto:FormGroup;

  @Input() item: Producto;
  @Output() respuesta = new EventEmitter<string>();
  producto:Producto | undefined;

  constructor(
    //variables
    public formulario:FormBuilder, 
    private productosService:ProductosService,
    private router:Router,
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
  submit():any{
    if(confirm('Esta seguro de editar este producto?')){

      //Se instancia 
      this.producto = new Producto();
      this.producto.id = this.item.id;
      this.producto.nombre = this.formularioProducto.value["nombre"];
      this.producto.marca = this.formularioProducto.value["marca"];
      this.producto.precio = this.formularioProducto.value["precio"];
      
      //se conecta al servicio
      
      this.productosService.editarProducto(this.producto).subscribe(data=>{
        this.modalService.dismissAll(); 
        this.respuesta.emit("edito");
      }); 
     }
  }

}
