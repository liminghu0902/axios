export default{
	parseUrl() {
		let arr = location.search.split('?')[1].split('&');
		let obj = {};
		for(var i=0; i<arr.length; i++) {
			 let item = arr[i].split('=');
			 obj[item[0]] = item[1];
		}
		return obj;
	},
	getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
} 