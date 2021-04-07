
var jsonData;
function stringifyJson(data){
	

	jsonData = JSON.parse(data);
	jsonData = JSON.parse(jsonData);
	jsonData = JSON.stringify(jsonData['mouthCues'])
	console.log(jsonData);
	jsonData = JSON.parse(jsonData);
	
	

	//jsonData.forEach((item) => {
		
		//window.alert(item.start)
	//})
	

}