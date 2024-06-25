let statusCodeEle=document.getElementById("requestStatus");
let resBodyEle=document.getElementById("httpResponse");
let sendBtnEle=document.getElementById("sendGetRequestBtn");
let loadingEle=document.getElementById("loading");

function addInfo(jsonText){
    loadingEle.classList.add("d-none");
    statusCodeEle.classList.remove("d-none");
    let code=jsonText.code;
    let resBody=JSON.stringify(jsonText.data);
    statusCodeEle.textContent=code;
    resBodyEle.textContent=resBody;
}

function apply(){
    loadingEle.classList.remove("d-none");
    statusCodeEle.classList.add("d-none");

let urlText=document.getElementById("urlText").textContent;

let options={
    method:"GET"
}

fetch(urlText,options)
.then(function(response){
    return response.json();

})
.then(function(jsonText){
    addInfo(jsonText);
})
}
sendBtnEle.addEventListener("click",apply)