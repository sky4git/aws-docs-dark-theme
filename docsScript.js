'use strict';

var arrXX = ["aws-nav", "left-col-header", 'footer'];

arrXX.map((item)=>{
    if( document.getElementById(item)  ){
        document.getElementById(item).remove();
    }
});    
//document.body.style.backgroundColor="#4e4e4e"
