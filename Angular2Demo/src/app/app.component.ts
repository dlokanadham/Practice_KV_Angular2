import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `<div><h1>{{getFullName()}}</h1>
                <img src='http://www.pragimtech.com/{{imgPath}}'/>
                <employee-app></employee-app>
                <button [disabled]='isDisabled'>View More</button>
                <span bind-innerHtml='pageHeader'></span>
                <div>{{badHtml}}</div>
                </div>`
})
export class AppComponent {

    pageHeader: string = "Employee Details";
    firstName: string = "Lokanadham";
    lastName: string = "Dasamukha";
    imgPath ="Images/Logo.JPG";
    isDisabled:boolean = false;
    badHtml :string = "Hello <scrpt>alert('Hacked');</script> world"
    getFullName(): string {
        return this.firstName +" "+ this.lastName;
    }

}