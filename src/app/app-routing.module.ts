import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShortlyComponent } from './shortly/shortly.component';


const routes: Routes = [
  { path: '', redirectTo: '/shortly', pathMatch: 'full' },
  { path: 'shortly', component: ShortlyComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
