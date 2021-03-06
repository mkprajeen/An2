"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const textboxvm_1 = require("./textboxvm");
let TextBoxComponent = class TextBoxComponent {
    constructor() {
        //model = new TextBox(18, 'text', '50px', 'Name', 'Ente name', '##', true, 'Name is required', 25); 
        this.model = new textboxvm_1.TextBox({ cid: 18, defaultvalue: '50px', label: 'Name', placeholder: 'Ente name', inputmask: '##', mandatory: true, requiredmessage: 'Name is required', maxlength: 200 });
        // TODO: Remove this when we're done
        // get diagnostic() { return JSON.stringify(this.model); }
    }
};
TextBoxComponent = __decorate([
    core_1.Component({
        selector: 'mytext',
        templateUrl: '../controls/textbox.html'
    })
], TextBoxComponent);
exports.TextBoxComponent = TextBoxComponent;
//# sourceMappingURL=textbox.component.js.map