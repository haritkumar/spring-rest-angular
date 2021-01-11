import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddempComponent } from './addemp/addemp.component';
import { NotfoundComponent} from './notfound/notfound.component';
import { AccessGuard} from './access-gaurd';
import { LoginGuard } from './login-gaurd';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent, data: { requiresLogin: true }, canActivate: [AccessGuard]},
  { path: 'logout', component: LoginComponent},
  { path: 'employees-list', component: EmployeesComponent, data: { requiresLogin: true }, canActivate: [AccessGuard] },
  { path: 'add-employee', component: AddempComponent, data: { requiresLogin: true }, canActivate: [AccessGuard]},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
