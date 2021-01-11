import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddempComponent } from './addemp/addemp.component';
import { NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  {path: 'logout', component: LoginComponent},
  { path: 'employees-list', component: EmployeesComponent },
  { path: 'add-employee', component: AddempComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
