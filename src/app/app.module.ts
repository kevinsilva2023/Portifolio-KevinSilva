import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rotas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';

// home
import { HomePortifolioComponent } from './pages/home-portifolio/home-portifolio.component';

// spotify
import { ProjetoSpotifyComponent } from './pages/projeto-spotify/projeto-spotify.component';
import { HeaderComponent } from './pages/projeto-spotify/header/header.component';
import { SidebarComponent } from './pages/projeto-spotify/sidebar/sidebar.component';

import { FooterComponent } from './pages/projeto-spotify/footer/footer.component';
import { MainComponent } from './pages/projeto-spotify/main/main.component';

// Angular Material


@NgModule({
  declarations: [
    AppComponent,
    HomePortifolioComponent,
    ProjetoSpotifyComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
