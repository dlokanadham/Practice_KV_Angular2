import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
                <button style="color:red" [style.fontWeight]="isBold?'bold':'normal'">Click Me</button>
                <br/><br/>
                <button style="color:red" [style.font-size.px]="fontSize">Click Me</button>
                <br/><br/>  
                <button style="color:red" [ngStyle]="getStyles()">Click Me</button> 
            `
})
export class AppComponent {
    isBold :boolean = true;
    fontSize: number = 30;
    isItalic : boolean = true;
    getStyles() {
        let styles = {
            'font-size.px': this.fontSize,
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style':this.isItalic?'italic':'normal'
        };
        return styles;
    };
}