var xhr = {
    postMessage: function(msg,url){
        var request = new XMLHttpRequest();
        request.open('POST',url);
        request.setRequestHeader("Content-Type","text/plain;chartset=UTF-8");
        requset.send(msg);
    },
    getMessage: function(url,callback){
        var request = new XMLHttpRequest();
        request.open('GET',url);
        request.onreadystatechange = function(error){
            if(request.readyState == 4 && request.status == 200){
                callback(request.responseText);
            }else{
                console.err(error);
            }
        }
    }
}
