import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent
    ],
        imports: [
        BrowserModule,
        HttpClientModule,
        ButtonModule,
        TableModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}