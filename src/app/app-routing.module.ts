import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'listar-producto'},
  {path:'agregar-producto', component:AgregarProductosComponent },
  {path:'editar-producto/:id', component:EditarProductosComponent },
  {path:'listar-producto', component:ListarProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
