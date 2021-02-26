import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IsLoggedGuard } from './shared/guard/isLogged/is-logged.guard';
import { IsNotLoggedGuard } from './shared/guard/isNotLogged/is-not-logged.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./loggedin-area/loggedin-area.module')
    .then(m => m.LoggedinAreaModule),
    canActivate: [IsLoggedGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
    .then(m => m.LoginModule),
    canActivate: [IsNotLoggedGuard]
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
