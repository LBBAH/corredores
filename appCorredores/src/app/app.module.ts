import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './screen/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './screen/login/login.component';
import { RegistroComponent } from './screen/registro/registro.component';
import { ProductosComponent } from './screen/productos/productos.component';
import { ProductoIdComponent } from './screen/producto-id/producto-id.component';
import { PrivacidadComponent } from './screen/privacidad/privacidad.component';
import { SobreNosotrosComponent } from './screen/sobre-nosotros/sobre-nosotros.component';
import { PerfilUsuarioComponent } from './screen/perfil-usuario/perfil-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    ProductosComponent,
    ProductoIdComponent,
    PrivacidadComponent,
    SobreNosotrosComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
