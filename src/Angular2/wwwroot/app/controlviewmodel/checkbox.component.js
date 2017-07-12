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
let CheckBoxComponent = class CheckBoxComponent {
    constructor() {
        this.model = new textboxvm_1.CheckBox({ cid: 18, defaultvalue: true, label: 'Name chk1', mandatory: false, requiredmessage: 'Name is required', maxlength: 25 });
    }
    completed() {
        this.model.defaultvalue = true;
    }
};
CheckBoxComponent = __decorate([
    core_1.Component({
        selector: 'mycheckbox',
        templateUrl: '../controls/checkbox.html'
    })
], CheckBoxComponent);
exports.CheckBoxComponent = CheckBoxComponent;
//# sourceMappingURL=checkbox.component.js.map