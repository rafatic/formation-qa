import { SpecificationsComponent } from './specifications/specifications.component';
import { PersonListComponent } from './person-list/person-list.component';
import { HomeComponent } from './home/home.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'person-edit', component: PersonEditComponent},
  { path: 'person-edit/:id', component: PersonEditComponent},
  { path: 'person-list', component: PersonListComponent},
  { path: 'specifications', component: SpecificationsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
