import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `<button class="colorClass" [class]='classesToApply'>Click Me</button>
                <br/><br/>
                <button class="colorClass" [class.boldClass]='applyBoldClass'>Click Me</button>
                <br/><br/>
                <button class="colorClass" [ngClass]='addClasses()'>Click Me</button>
            `
})
export class AppComponent {
    classesToApply: string = 'boldClass italicClass';
    applyBoldClass: boolean = true;
    applyItalicClass: boolean = true;

    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        }

        return classes;
    }

}