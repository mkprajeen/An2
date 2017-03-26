import {Component} from '@angular/core';
import {TextBox} from './textboxvm';


@Component({
    selector: 'mytext',
    templateUrl: '../controls/textbox.html'

})
export class TextBoxComponent {
    
    //model = new TextBox(18, 'text', '50px', 'Name', 'Ente name', '##', true, 'Name is required', 25); 
    model = new TextBox({ cid: 18, defaultvalue: '50px', label: 'Name', placeholder: 'Ente name', inputmask: '##', mandatory: true, requiredmessage: 'Name is required', maxlength: 200 }); 

    // TODO: Remove this when we're done
   // get diagnostic() { return JSON.stringify(this.model); }
}