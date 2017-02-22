import {Component} from '@angular/core';
import {DropDown} from './textboxvm';


@Component({
    selector: 'mydropdown',
    templateUrl: '../controls/dropdown.html'

})
export class DropDownComponent {

    model = new DropDown({
        cid: 18, defaultvalue: '50px', label: 'Name',
        placeholder: 'Ente name', inputmask: '##', mandatory: true,
        requiredmessage: 'Name is required', maxlength: 25,
        options: [{ key: 1, value: 'option1' }, { key: 2, value: 'option2' }]
    });
    
    // TODO: Remove this when we're done
    // get diagnostic() { return JSON.stringify(this.model); }
}