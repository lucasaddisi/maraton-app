var request = function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

var callback = function(str){
  console.log(str);
}

var URL = "https://fastspeedster.herokuapp.com/api/tracks";
/*var URLArray = ["https://fastspeedster.herokuapp.com/api/tracks", "https://fastspeedster.herokuapp.com/api/runners",
 "https://fastspeedster.herokuapp.com/api/webcams"]; */
request(URL, callback);
