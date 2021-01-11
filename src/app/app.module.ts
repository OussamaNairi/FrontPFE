import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AjoutComponent } from './ajout/ajout.component';
import { CategorieComponent } from './categorie/categorie.component';
import { GestionService } from './gestion.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AjoutComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
