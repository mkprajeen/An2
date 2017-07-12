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
let DropDownComponent = class DropDownComponent {
    constructor() {
        this.model = new textboxvm_1.DropDown({
            cid: 18, defaultvalue: '3', label: 'Select  Option',
            placeholder: 'Ente name', inputmask: '##', mandatory: true,
            requiredmessage: 'Select an Item', maxlength: 25,
            options: [{ key: '', value: '' }, { key: '1', value: 'option1' }, { key: '2', value: 'option2' }, { key: '3', value: 'option3' }]
        });
        // TODO: Remove this when we're done
        // get diagnostic() { return JSON.stringify(this.model); }
    }
};
DropDownComponent = __decorate([
    core_1.Component({
        selector: 'mydropdown',
        templateUrl: '../controls/dropdown.html'
    })
], DropDownComponent);
exports.DropDownComponent = DropDownComponent;
//# sourceMappingURL=dropdown.component.js.map