import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {
    loginForm: FormGroup;

}