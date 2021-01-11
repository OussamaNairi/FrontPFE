import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from '../modele/Categorie';

import { GestionService } from '../gestion.service';
import { pfe } from '../modele/Pfe';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  listType: categorie[] = [];
  pfe: pfe = new pfe();
  constructor(private ser: GestionService, private route: Router) { }

  ngOnInit(): void {
    this.getPfetypes();
  }
  gotoList() {
    this.route.navigate(['/']);
  }
  getPfetypes() {
    this.ser.getPfetype().subscribe(
      (data) => {
        this.listType = data;
       
      },
      (err) => { console.log(err) }
    )
  }
  savepfe(){
 
  this.ser.add(this.pfe).subscribe(
    data=>{this.route.navigate(["/liste"])},
    err=>{
      console.log(JSON.toString())
      console.log(pfe)
    }
  )
  }
}