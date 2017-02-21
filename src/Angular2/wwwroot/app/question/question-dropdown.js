"use strict";
const question_base_1 = require('./question-base');
class DropdownQuestion extends question_base_1.QuestionBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'dropdown';
        this.options = [];
        this.options = options['options'] || [];
    }
}
exports.DropdownQuestion = DropdownQuestion;
//# sourceMappingURL=question-dropdown.js.map