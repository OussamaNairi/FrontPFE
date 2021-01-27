import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';

import { GestionService } from '../gestion.service';
import { Pfe } from '../pfe';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  listType: Categorie[] = [];
  pfe: Pfe = new Pfe();
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
      console.log(this.pfe)
    }
  )
  }
}