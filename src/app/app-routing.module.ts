import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './main/admin/admin.component';
import { AulasComponent } from './main/aulas/aulas.component';
import { HomeComponent } from './main/home/home.component';
import { SobreComponent } from './main/sobre/sobre.component';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'aulas', component: AulasComponent},
                        {path: 'sobre', component: SobreComponent},
                        {path: 'admin', component: AdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
