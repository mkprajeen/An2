"use strict";
class control {
    constructor(cid, inputtype, defaultvalue, label, placeholder, inputmask, mandatory, requiredmessage, maxlength) {
        this.cid = cid;
        this.inputtype = inputtype;
        this.defaultvalue = defaultvalue;
        this.label = label;
        this.placeholder = placeholder;
        this.inputmask = inputmask;
        this.mandatory = mandatory;
        this.requiredmessage = requiredmessage;
        this.maxlength = maxlength;
    }
}
exports.control = control;
class TextBox extends control {
    constructor(cid, inputtype, defaultvalue, label, placeholder, inputmask, mandatory, requiredmessage, maxlength) {
        super(cid, inputtype, defaultvalue, label, placeholder, inputmask, mandatory, requiredmessage, maxlength);
    }
}
exports.TextBox = TextBox;
class TextBox1 {
    constructor(cid, inputtype, defaultvalue, label, placeholder, inputmask, mandatory, requiredmessage, maxlength) {
        this.cid = cid;
        this.inputtype = inputtype;
        this.defaultvalue = defaultvalue;
        this.label = label;
        this.placeholder = placeholder;
        this.inputmask = inputmask;
        this.mandatory = mandatory;
        this.requiredmessage = requiredmessage;
        this.maxlength = maxlength;
    }
}
exports.TextBox1 = TextBox1;
//# sourceMappingURL=textboxvm.js.map