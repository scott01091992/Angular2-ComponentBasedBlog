import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { HeaderComponent } from './static/header.component';
import { NavigationComponent } from './static/navigation.component';
import { ArtboardComponent } from './home/artboard.component';
import { FooterComponent } from './static/footer.component';
import { CssSpinnersComponent } from './home/cssSpinners.component';
import { CssShapesComponent } from './home/cssShapes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CssSpinnersComponent,
    CssShapesComponent,
    HeaderComponent,
    NavigationComponent,
    ArtboardComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
