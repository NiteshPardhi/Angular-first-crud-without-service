import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActiveGuard } from './Guards/canActivateGaurd';
import { CanDeactivateGaurd } from './Guards/canDeactivateGaurd';

const routes: Routes = [
  //{path: '', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}, //if u have to firstly redirect login component
  // {path: '**', redirectTo: '/register'},  //after login redirect to register component
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canDeactivate: [CanDeactivateGaurd]},
  {path: 'register/:id', component: RegisterComponent},
  {path: 'table', component: TableComponent, canActivate: [CanActiveGuard] },
  {path: 'test', component: TestComponent},
  {path: 'dashboard', component: DashboardComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
