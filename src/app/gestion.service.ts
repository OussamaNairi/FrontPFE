import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pfe } from './pfe';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  constructor( private http:HttpClient) { }
  getPfetype()
  {return this.http.get<Categorie[]>("http://127.0.0.1:8080/rest/categorie")}
  getAllPfe()
  {return this.http.get("http://127.0.0.1:8080/rest/listedepfe")}
  deletepfe(id:number)
  {return this.http.delete("http://127.0.0.1:8080/rest/deletepfe/"+id)}
  gettypepfe(id:number)
  {return this.http.get("http://127.0.0.1:8080/rest/pfebycategorie/"+id)}
  add(pfe:Pfe)
  {return this.http.post("http://127.0.0.1:8080/rest/addpfe/",pfe)}
  type()
  { return this.http.get("http://127.0.0.1:8080/rest/categorie") }
}