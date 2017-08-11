const templateDataService = require('./templateData.service');

const logger = require('../../../../logger');

function addTemplateData(values,done){
  templateDataService.addTemplateData(values,(done));
}
function getTemplateData(done){
	templateDataService.getTemplateData(done);
}

function getTemplateStateData(state,done){
	templateDataService.getTemplateStateData(state,(done));
}


module.exports = {
  addTemplateData,
  getTemplateData,
  getTemplateStateData,
};
