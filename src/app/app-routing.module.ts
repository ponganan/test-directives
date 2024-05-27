import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForComponent } from './pages/for/for.component';

const routes: Routes = [
  { path: 'for', component: ForComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
