'use strict';

var arrXX = ["m-nav"];

arrXX.map((item)=>{
    if( document.getElementById(item)  ){
        document.getElementById(item).remove();
    }
});    
//document.body.style.backgroundColor="#4e4e4e"
