import { APP_ID, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API:string = 'https://localhost:7249/api/Productos';
  constructor(private http: HttpClient, private router:Router) { }

  public AgregarProducto(producto:Producto):Observable<Producto>{    
    return this.http.post<Producto>(this.API,producto);
  }

  public ListarProducto():Observable<Producto[]>{
    console.log(this.http.get(this.API));
    return this.http.get<Producto[]>(this.API);
  }

  public eliminarProducto(id:number):Observable<any>{

    return this.http.delete(`${this.API}/${id}`);

  }

  public editarProducto(producto:Producto):Observable<any>{
    
    return this.http.put(`${this.API}/${producto.id}`,producto);
  }
  public obtenerProducto(id:number){
    return this.http.get<Producto>(`${this.API}/${id}`);
  }
}
