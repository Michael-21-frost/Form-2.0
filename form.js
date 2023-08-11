/*create and connect to the http server
let http=require('http');
http.createServer(function(req,res){
    res.write('This server is online!');
    res.end();
}).listen(8080);
*/
//get method

let testMsg="Request and Response is ready to be parsed";
console.log(testMsg);
alert("This is a test app created by Michael Otote");
alert("Please fill out the entire form and submit your accurate data");
function signUp(){
let FirstName=document.querySelector('.firstname').value;
let LastName=document.querySelector('.lastname').value;
let Mail=document.querySelector('.email').value;
let location=document.querySelector('.country').value;
let city=document.querySelector('.spec').value;
let City=document.querySelector('.spec').value;
let Check=document.querySelector('.check').value;
if (FirstName == ""){
    alert("ERROR...Please fill all details");
    return false;

}
else if(LastName == ""){
    alert("ERROR...Please fill all details");
    return false;
}
else if(Mail==""){
    alert("ERROR...Please fill all details");
    return false;
}
else if(location==""){
    alert("ERROR...Please fill all details");
    return false;
}
else if(city==""){
    alert("ERROR...Please fill all details");
    return false;

}
else if(City==""){
    alert("ERROR...Please fill all details");
    return false;

}
else if(Check==""){
    alert("ERROR...Please fill all details");
    return false;
}
else{
    alert("Welcome "+ FirstName+" "+LastName);
return true;
   

}
}