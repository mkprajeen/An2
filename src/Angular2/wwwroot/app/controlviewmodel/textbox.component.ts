import {Component} from '@angular/core';
import {TextBox} from './textboxvm';


@Component({
    selector: 'mytext',
    templateUrl: '../controls/textbox.html'

})
export class TextBoxComponent {
    
    model = new TextBox(18,'text', '50px','Name','Ente name','##',true,'Name is required',25); 
    
  
    // TODO: Remove this when we're done
   // get diagnostic() { return JSON.stringify(this.model); }
}