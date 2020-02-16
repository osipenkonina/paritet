import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {AboutComponent} from './about/about.component';
import {MainComponent} from './components/main/main.component';
import {MovementComponent} from './components/movement/movement.component';
import {NewsComponent} from './components/news/news.component';
import {SchoolComponent} from './components/school/school.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        MainComponent,
        MovementComponent,
        NewsComponent,
        SchoolComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
