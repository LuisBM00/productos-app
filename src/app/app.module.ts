import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { DetalleProductosComponent } from './components/detalle-productos/detalle-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    AgregarProductosComponent,
    EditarProductosComponent,
    DetalleProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
