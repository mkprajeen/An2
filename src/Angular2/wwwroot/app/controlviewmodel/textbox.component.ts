import {Component} from '@angular/core';
import {TextBox} from './textboxvm';


@Component({
    selector: 'mytext',
    templateUrl: '../controls/textbox.html'

})
export class TextBoxComponent {
    
    model = new TextBox(18,'text', 'gdfg','Name','Ente name','##',true,'Name is required',10); 
    
  
    // TODO: Remove this when we're done
   // get diagnostic() { return JSON.stringify(this.model); }
}