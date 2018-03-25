"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = true;
    }
    AppComponent.prototype.getStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal'
        };
        return styles;
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n                <button style=\"color:red\" [style.fontWeight]=\"isBold?'bold':'normal'\">Click Me</button>\n                <br/><br/>\n                <button style=\"color:red\" [style.font-size.px]=\"fontSize\">Click Me</button>\n                <br/><br/>  \n                <button style=\"color:red\" [ngStyle]=\"getStyles()\">Click Me</button> \n            "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map