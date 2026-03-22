(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	var responseBody = gs.getProperty('x_1463223_sadx.app_demo');
	response.setContentType('text/html');
	response.setStatus (200);
	response.getStreamWriter().writeString(responseBody);

})(request, response);