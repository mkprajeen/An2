
export class control<T> {
    public cid: number;
    public inputtype: string;
    public defaultvalue: T;
    public label: string;
    public placeholder: string;
    public inputmask: string;
    public mandatory: boolean;
    public requiredmessage: string;
    public maxlength: number;
    constructor(options: {
        cid?: number,
        defaultvalue?: T,
        label?: string,
        placeholder?: string,
        inputmask?: string,
        mandatory?: boolean,
        requiredmessage?: string,
        maxlength?: number
        } = {}) {
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

export class TextBox extends control<string> {
    inputtype = "text";
    constructor(options: {} = {}) {
        super(options);
    }
}
export class PasswordTextBox extends control<string> {
    inputtype = "password";
    constructor(options: {} = {}) {
        super(options);
    }
}

export class CheckBox extends control<boolean> {
    inputtype = "checkbox";
    constructor(options: {} = {}) {
        super(options);
    }
}

export class Button extends control<string> {
    inputtype = "button";
    constructor(options: {} = {}) {
        super(options);
    }
}

export class DropDown extends control<string> {
    controlType = 'dropdown';
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }

}