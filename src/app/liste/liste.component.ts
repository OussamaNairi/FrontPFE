import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from './../gestion.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  pfe: any = []
  constructor(private ser: GestionService, private route: Router) { }

  ngOnInit(): void {
    this.getPfes();
  }
  getPfes() {
    this.ser.getAllPfe().subscribe(

      (data) => {
        this.pfe = data;
      
      },
      (err) => { console.log(err) }



    )
  }
  deletepfe(id:number){
    this.ser.deletepfe(id).subscribe
    (
      data => {
        console.log(data);
        this.getPfes;
        this.route.navigate(["/liste"])
      },
      error => console.log(error));
}
}