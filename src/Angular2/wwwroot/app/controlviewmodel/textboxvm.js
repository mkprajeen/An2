"use strict";
class TextBox {
    constructor(cid, inputtype, inputvalue, label, placeholder, inputmask, mandatory, requiredmessage, maxlength) {
        this.cid = cid;
        this.inputtype = inputtype;
        this.inputvalue = inputvalue;
        this.label = label;
        this.placeholder = placeholder;
        this.inputmask = inputmask;
        this.mandatory = mandatory;
        this.requiredmessage = requiredmessage;
        this.maxlength = maxlength;
    }
}
exports.TextBox = TextBox;
//# sourceMappingURL=textboxvm.js.map