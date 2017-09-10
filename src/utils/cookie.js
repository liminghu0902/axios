export default {
	setCookie(name, value, Hours) {
	    var d = new Date();
	    var offset = 8;
	    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	    var nd = utc + (3600000 * offset);
	    var exp = new Date(nd);
	    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
	    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=360doc.com;"
	},
	getCookie(name) {
	    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	    if (arr != null) return unescape(arr[2]);
	    return null
	},
	 removeCookie(sKey,sDomain) {
         var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getItem(sKey);
        if (cval != null){
             document.cookie = encodeURIComponent(sKey)+"="+cval+ ";expires="+ exp.toUTCString() + "; domain=.happyeasygo.com ;path=/";
        }
        return true;
    },
    hasCookie(sKey) {
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }
}