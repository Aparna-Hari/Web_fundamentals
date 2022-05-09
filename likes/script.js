
var count1=9;
var count2=12;
var count3=9;
var countElement1=document.querySelector(".like1");
var countElement2=document.querySelector(".like2");
var countElement3=document.querySelector(".like3");

function add1(countElement){
 count1++;
 countElement1.innerHTML=  +count1 + " like(s)" ;
}

function add2(countElement){
    count2++;
    countElement2.innerHTML=  +count2 + " like(s)" ;
}


function add3(countElement){
    count3++;
    countElement3.innerHTML=  +count3 + " like(s)" ;
}


// var count2=12;
// var countElement2=document.querySelector(".name2 h3")
// function add2(){
//  count2++;
//  countElement2.innerText=  +count2 + " like(s)" ;
// }