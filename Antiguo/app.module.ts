import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatMenuModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AppComponent} from './app.component';

import {GestorService} from './shared/gestor/gestor.service';
import {HttpClientModule} from '@angular/common/http';

import {UsersListComponent} from './empleados-list/empleados-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersDeleteComponent } from './users-delete/users-delete.component';
import { DescargarPdfComponent } from './descargar-pdf/descargar-pdf.component';
/*import {DepartamentosListComponent} from './departamentos-list/departamentos-list.component';
import {DepartamentosEditComponent} from './departamentos-edit/departamentos-edit.component';
import {DelegacionesListComponent} from './delegaciones-list/delegaciones-list.component';
import {DelegacionesEditComponent} from './delegaciones-edit/delegaciones-edit.component';
*/
const appRoutes: Routes = [
  // GENERAL
  {path: '', redirectTo: '/', pathMatch: 'full'}
  // EMPLEADOS
  ,
  {
    path: 'users-list',
    component: UsersListComponent
  },
  {
    path: 'users-add',
    component: UsersAddComponent
  },
  {
    path: 'users-delete',
    component: UsersDeleteComponent
  },
  {
    path: 'descargar-PDF',
    component: DescargarPdfComponent
  }/*
  // DEPARTAMENTOS
  ,
  {
    path: 'departamentos-list',
    component: DepartamentosListComponent
  },
  {
    path: 'departamentos-add',
    component: DepartamentosEditComponent
  },
  {
    path: 'departamentos-edit/:id',
    component: DepartamentosEditComponent
  }
  // DELEGACIONES
  ,
  {
    path: 'delegaciones-list',
    component: DelegacionesListComponent
  },
  {
    path: 'delegaciones-add',
    component: DelegacionesEditComponent
  },
  {
    path: 'delegaciones-edit/:id',
    component: DelegacionesEditComponent
  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersAddComponent,
    UsersDeleteComponent,
    UsersDeleteComponent,
    DescargarPdfComponent,
    //EmpleadosEditComponent,
    //DepartamentosListComponent,
    //DepartamentosEditComponent,
    //DelegacionesListComponent,
    //DelegacionesEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GestorService],
  bootstrap: [AppComponent]
})
export class AppModule {}