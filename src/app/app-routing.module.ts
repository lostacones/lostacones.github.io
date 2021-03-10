import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [

  { path: '', component: HeroComponent },

  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },

  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
