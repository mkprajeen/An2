"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class control {
    constructor(options = {}) {
        this.cid = options.cid;
        this.defaultvalue = options.defaultvalue;
        this.label = options.label;
        this.placeholder = options.placeholder;
        this.inputmask = options.inputmask;
        this.mandatory = options.mandatory;
        this.requiredmessage = options.requiredmessage;
        this.maxlength = options.maxlength;
    }
}
exports.control = control;
class TextBox extends control {
    constructor(options = {}) {
        super(options);
        this.inputtype = "text";
    }
}
exports.TextBox = TextBox;
class PasswordTextBox extends control {
    constructor(options = {}) {
        super(options);
        this.inputtype = "password";
    }
}
exports.PasswordTextBox = PasswordTextBox;
class CheckBox extends control {
    constructor(options = {}) {
        super(options);
        this.inputtype = "checkbox";
    }
}
exports.CheckBox = CheckBox;
class Button extends control {
    constructor(options = {}) {
        super(options);
        this.inputtype = "button";
    }
}
exports.Button = Button;
class DropDown extends control {
    constructor(options = {}) {
        super(options);
        this.controlType = 'dropdown';
        this.options = [];
        this.options = options['options'] || [];
    }
}
exports.DropDown = DropDown;
//# sourceMappingURL=textboxvm.js.map