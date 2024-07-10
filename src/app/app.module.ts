import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesDashboardComponent } from './components/employees-dashboard/employees-dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { provideHttpClient } from '@angular/common/http';
import { SortByPipe } from './pipes/sort-by.pipe';
import { IsVipPipe } from './pipes/is-vip.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialUiModule } from './material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesDashboardComponent,
    EmployeeComponent,
    SortByPipe,
    IsVipPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialUiModule,
    FormsModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
