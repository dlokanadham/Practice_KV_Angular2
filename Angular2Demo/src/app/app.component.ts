import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    //template: `
    //            <input type="text" [value]='name' (input)='name=$event.target.value'/>
    //            <br/>
    //           You Entered: {{name}}
    //        `
            template: `
                    <input [(ngModel)]='name'/>
                    <br/>
                   You Entered: {{name}}
                `
})
export class AppComponent {
    name: string = "lokanadham";
}