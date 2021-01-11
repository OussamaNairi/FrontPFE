import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pfe } from './modele/Pfe';
import { categorie } from './modele/Categorie';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  constructor( private http:HttpClient) { }
  getPfetype()
  {return this.http.get<categorie[]>("http://127.0.0.1:8080/rest/categorie")}
  getAllPfe()
  {return this.http.get("http://127.0.0.1:8080/rest/listedepfe")}
  deletepfe(id:number)
  {return this.http.delete("http://127.0.0.1:8080/rest/deletepfe/"+id)}
  gettypepfe(id:number)
  {return this.http.get("http://127.0.0.1:8080/rest/pfebycategorie/"+id)}
  add(pfe:pfe)
  {return this.http.post("http://127.0.0.1:8080/rest/addpfe/",pfe)}
  type()
  { return this.http.get("http://127.0.0.1:8080/rest/categorie") }
}