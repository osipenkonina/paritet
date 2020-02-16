import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {MainComponent} from './components/main/main.component'
import {MovementComponent} from './components/movement/movement.component'
import {NewsComponent} from './components/news/news.component'
import {SchoolComponent} from './components/school/school.component'


const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'movement', component: MovementComponent},
    {path: 'news', component: NewsComponent},
    {path: 'school', component: SchoolComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
