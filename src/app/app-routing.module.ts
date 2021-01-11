import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  {path:'',component:ListeComponent},
  {path:'liste',component:ListeComponent},
  {path:'add',component:AjoutComponent},
  {path:'type/:id',component:CategorieComponent},
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
