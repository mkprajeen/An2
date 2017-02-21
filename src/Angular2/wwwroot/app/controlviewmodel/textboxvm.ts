
export class control {
    public cid: number;
    public inputtype: string;
    public defaultvalue: string;
    public label: string;
    public placeholder: string;
    public inputmask: string;
    public mandatory: boolean;
    public requiredmessage: string;
    public maxlength: number;
    constructor(options: {
        cid?: number,
       // inputtype?: string,
        defaultvalue?: string,
        label?: string,
        placeholder?: string,
        inputmask?: string,
        mandatory?: boolean,
        requiredmessage?: string,
        maxlength?: number
        } = {})
    {
        this.cid = options.cid;
        //this.inputtype = options.inputtype;
        this.defaultvalue = options.defaultvalue;
        this.label = options.label;
        this.placeholder = options.placeholder;
        this.inputmask = options.inputmask;
        this.mandatory = options.mandatory;
        this.requiredmessage = options.requiredmessage;
        this.maxlength = options.maxlength;
    }
}

export class TextBox extends control {
    inputtype = "text";
    constructor(options: {} = {})     
    {
        super(options);  
    }
}

export class DropDown extends control {
    controlType = 'dropdown';
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
    
}