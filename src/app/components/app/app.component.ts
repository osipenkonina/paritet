import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import { Location } from '@angular/common'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'paritet'

    public link = ''

    items = [
        {link: 'movement', name: 'Движение — это жизнь'},
        {link: 'news', name: 'Новости'},
        {link: 'school', name: 'Школа'},
    ]

    constructor(private router: Router,
                private location: Location) {
        router.events.subscribe(() =>
            this.link = location.path())
    }

    ngOnInit() {
    }
}
