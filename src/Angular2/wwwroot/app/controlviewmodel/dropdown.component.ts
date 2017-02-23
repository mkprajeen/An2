import {Component} from '@angular/core';
import {DropDown} from './textboxvm';


@Component({
    selector: 'mydropdown',
    templateUrl: '../controls/dropdown.html'

})
export class DropDownComponent {

    model = new DropDown({
        cid: 18, defaultvalue: '3', label: 'Select  Option',
        placeholder: 'Ente name', inputmask: '##', mandatory: true,
        requiredmessage: 'Select an Item', maxlength: 25,
        options: [{ key: '', value: '' },{ key: '1', value: 'option1' }, { key: '2', value: 'option2' }, { key: '3', value: 'option3' }]
    });
 
    
    // TODO: Remove this when we're done
    // get diagnostic() { return JSON.stringify(this.model); }
}