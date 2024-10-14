import { BrowserModule } from "@angular/platform-browser";
import { NgModule} from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Login/login/login.component';
import { HttpClientModule } from "@angular/common/http";

import { TablaTramiteComponent} from'./tabla-tramite/tabla-tramite.component';

@NgModule({
    declarations:[
        AppComponent, LoginComponent,TablaTramiteComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}