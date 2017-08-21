const customFormService = require('./customForm.service');

const logger = require('../../../../logger');

function addMemberForm(values,done){
  customFormService.addMemberForm(values,done);
}
function updateMemberForm(values,done){
  customFormService.updateMemberForm(values,done);
}

function getRegisteredForms(done){
	customFormService.getRegisteredForms(done);
}
function getRegisteredForm(email,done){
	customFormService.getRegisteredForm(email,done);
}

module.exports = {
  addMemberForm,
  getRegisteredForms,
  getRegisteredForm,
  updateMemberForm,
};
