//添加滚轮事件 
jQuery.fn.extend({
     mousewheel:function(up,down){  //向上向下
            this.each(function(index,obj){
               if(obj.attachEvent){obj.attachEvent("onmousewheel",scrollFn);}  //IE、opera
         	   else if(obj.addEventListener){
                obj.addEventListener("mousewheel",scrollFn,false);  
                //chrome,safari    -webkit-
                obj.addEventListener("DOMMouseScroll",scrollFn,false);  
                //firefox     -moz-
                }
                function scrollFn(e){
                var ev=e||window.event;
                 //阻止浏览器的默认行为
                 if(ev.preventDefalut){
                ev.preventDefalut();
                 }else{ev.returnValue=false;}
                 var val=ev.detail||ev.wheelDelta;
                 if(val==3||val==-120) //up
                {  if(down){
                    down.call(this);//这个时候 this指的是window
                  }
                 }
                else if(val==-3||val==120){
                if(up)//如果参数存在，执行函数，如果参数不存在就直接略过
                {
                up.call(this)
            }}

         }







   

            })
   


     }


})