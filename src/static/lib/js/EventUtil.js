var EventUtil = {
    addHandle: function(elem,type,handle){
        if(elem.addEventListener){
            elem.addEventListener(type,handle,false);
        }else if(elem.attachEvent){
            elem.attachEvent('on'+type,handle);
        }else{
            elem["on"+type] = handle;
        }
    },
    removeHandle: function(elem,type,handle){
        if(elem.removeEventListener){
            elem.removeEventListener(type,handle,false);
        }else if(elem.dettachEvent){
            elem.dettachEvent('on'+type,handle);
        }else{
            elem['on'+type] = null;
        }
    },
    getEvent: function(event){
        return event || window.event;
    },

    getTarget: function(event){
        return event.target || event.srcElement;
    },

    preventDefault: function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = true;
        }
    },
    stopPropagation: function(event){
        if(event.stopProppagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}
