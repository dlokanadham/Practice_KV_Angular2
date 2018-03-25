import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
                <button (click)='onClick1()'>Button1</button> 
                <br/>
                <button on-click='onClick2()'>Button2</button> 
            `
})
export class AppComponent {
    onClick1(): void {
        console.log('Button1 Clicked');
    }
    onClick2(): void {
        console.log('Button2 Clicked');
    }
}