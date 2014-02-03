var hello= "hello world!!";
var gaeHost = "https://footprinthh.appspot.com/";
var gaeAPI  ="update";
var baidu = "http://www.baidu.com/";


chrome.webRequest.onBeforeRequest.addListener(doUpdateData,
                        {urls:["<all_urls>"],types:["main_frame"]});
//chrome.webNavigation.onCommitted.addListener(doUpdateData
//                    ,{urls:["<all_urls>"]},["responseHeaders"]);
function doUpdateData(e){
    var xhr = new XMLHttpRequest();
    //xhr.open("GET",baidu , true);
    xhr.open("POST",gaeHost + gaeAPI , true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
        }
    }
    msg = "data=" + encodeURIComponent(e.url);
    xhr.send(msg);
}
