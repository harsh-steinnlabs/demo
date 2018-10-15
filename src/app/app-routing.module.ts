import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageComponent } from './package/package.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PackageDetailsComponent } from './package-details/package-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'package',
    pathMatch: 'full'
  },
  {
    path: 'package',
    component: PackageComponent
  },
  {
    path: ':name/details',
    component: PackageDetailsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
