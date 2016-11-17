export class TextBox {
    constructor(
        public cid: number, 
        public inputtype:string,      
        public inputvalue: string,
        public label?: string,
        public placeholder?: string,
        public inputmask?: string,
        public mandatory?:boolean,
        public requiredmessage?: string,
        public maxlength?: number
        ) { }
}