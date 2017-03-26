import {Component} from '@angular/core';
import {CheckBox} from './textboxvm';


@Component({
    selector: 'mycheckbox',
    templateUrl: '../controls/checkbox.html'

})
export class CheckBoxComponent {

    model = new CheckBox({ cid: 18, defaultvalue: true,  label: 'Name chk1',  mandatory: false, requiredmessage: 'Name is required', maxlength: 25});

    completed()
    {
        this.model.defaultvalue = true;
    }
}