import { HomeComponent } from './home/home.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'person-edit', component: PersonEditComponent},
  { path: 'person-list', component: PersonListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
