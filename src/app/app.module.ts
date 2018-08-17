import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FruitsComponent } from './fruits/fruits.component';


const routes: Routes = [
  {
    path : 'fruits',
    component : FruitsComponent,
  },
  // {
  //   path : 'vegetables',
  //   component : ,
  // },
  // {
  //   path : 'dairy',
  //   component : ,
  // },
  // {
  //   path : 'dryfruits',
  //   component : ,
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FruitsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
