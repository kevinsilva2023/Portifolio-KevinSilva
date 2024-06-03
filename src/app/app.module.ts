import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rotas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { SideBarComponent } from './app/home/side-bar/side-bar.component';
import { MenuLateralComponent } from './app/home/menu-perfil/menu-perfil.component';
import { ConteudoPrincipalComponent } from './app/home/conteudo-principal/conteudo-principal.component';
import { SobreMimComponent } from './app/home/conteudo-principal/sobre-mim/sobre-mim.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    MenuLateralComponent,
    ConteudoPrincipalComponent,
    SobreMimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
