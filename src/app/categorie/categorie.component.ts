import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  num :number;
  pfe: any = []
  constructor(private ser: GestionService, private act:ActivatedRoute) {
    this.num =this.act.snapshot.params["id"];
    this.ser.gettypepfe(this.num).subscribe(
      (data) =>{ this.pfe=data},
      (err) =>{}
    )}
 
  ngOnInit(): void {
    
  }
  
  deletepfe(id:number){
    this.ser.deletepfe(id).subscribe
    (
      data => {
        console.log(data);
        this.pfe;
      },
      error => console.log(error));
}
}