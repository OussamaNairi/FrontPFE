import { GestionService } from './gestion.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'backend';
  pfetype: any = []
 
  constructor(private ser: GestionService, private route: Router) { }

  ngOnInit(): void {
    this.type();
  }
 
  type(){
    this.ser.type().subscribe(

      (data) => {
        this.pfetype = data;
        console.log(this.pfetype)
   
      },
      (err) => { console.log(err) }



    )
  }
  
}