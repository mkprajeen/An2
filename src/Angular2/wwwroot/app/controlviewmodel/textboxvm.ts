
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
    constructor(
        cid: number,
        inputtype: string,
        defaultvalue: string,
        label?: string,
        placeholder?: string,
        inputmask?: string,
        mandatory?: boolean,
        requiredmessage?: string,
        maxlength?: number)
    {
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

export class TextBox extends control {
    constructor(
         cid: number,
         inputtype: string,
         defaultvalue: string,
         label?: string,
         placeholder?: string,
         inputmask?: string,
         mandatory?: boolean,
         requiredmessage?: string,
         maxlength?: number
    )    
    {
        super(cid, inputtype, defaultvalue, label, placeholder, inputmask, mandatory, requiredmessage, maxlength )
    }
}

export class TextBox1 {
    constructor(
        public cid: number, 
        public inputtype:string,      
        public defaultvalue: string,
        public label?: string,
        public placeholder?: string,
        public inputmask?: string,
        public mandatory?:boolean,
        public requiredmessage?: string,
        public maxlength?: number
        ) { }
}