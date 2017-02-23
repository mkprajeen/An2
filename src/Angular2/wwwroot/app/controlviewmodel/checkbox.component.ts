import {Component} from '@angular/core';
import {CheckBox} from './textboxvm';


@Component({
    selector: 'mycheckbox',
    templateUrl: '../controls/checkbox.html'

})
export class CheckBoxComponent {

   model = new CheckBox({ cid: 18, defaultvalue: 'true', label: 'Name',  mandatory: true, requiredmessage: 'Name is required', maxlength: 25 });


}