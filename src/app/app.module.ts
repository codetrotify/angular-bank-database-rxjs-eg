import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BankhttpService } from './bankhttp.service';





import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { MatButtonToggleModule } from '@angular/material';
import { MatBadgeModule, MatPaginatorModule, MatCheckboxModule, MatSortModule } from '@angular/material';



@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatBadgeModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,

    HttpClientModule, RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])],
  declarations: [AppComponent, HelloComponent, HomeComponent],
  providers: [BankhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
