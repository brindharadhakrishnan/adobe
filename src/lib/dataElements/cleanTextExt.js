'use strict';

module.exports = function(settings) {
    
	/*if(!localStorage.getItem(settings.value))
		 input through input string 
		return settings.value.replace(/\s/g, '').toLowerCase();
	else
		 input through localstorage 
		return localStorage.getItem(settings.value).replace(/\s/g, '').toLowerCase();*/
	
	var text = settings.value;
	
	return function(text){
		turbine.logger.info('Replacing Text....');
		return text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
		
	};
};
