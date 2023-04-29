function sendMail(params){
	var tempParams = {
		from_name:document.getElementById('fromName').value,
		to_name:document.getElementById('toName').value,
		message: document.getElementById('msg').value,
	}
	ElementInternals.js.send('service_a2j6yq6','template_wrdpbx6',tempParams)
	.then(function(res){
		console.log('successful',res.status);
	})
}