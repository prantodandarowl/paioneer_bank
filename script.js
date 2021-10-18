
// login handaler
const logBtn = document.getElementById("subButton");

logBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";


    const tran = document.getElementById("transation-area");
    tran.style.display = "block";
    tran.style.textAlign = "center";

})


// diposite



const dipositbtn = document.getElementById("addDiposite");

dipositbtn.addEventListener("click", function () {
    const dipositAmount = document.getElementById("dipositeAmount").value;
    const dipositNumber=parseFloat(dipositAmount);


calculatorOnDipo("currentDiposite",dipositNumber)
    // balance



calculatorOnDipo("currTotal",dipositNumber)
    document.getElementById("dipositeAmount").value='';
    

})

function calculatorOnDipo(id,dipositNumber) {
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const total=dipositNumber+currentNumber;


    document.getElementById(id).innerText=total;
    
}


//    ************************withdaw**************************


const addwithdraw=document.getElementById("addwithdraw");

addwithdraw.addEventListener("click",function() {
    const withdrawAmount=document.getElementById("withdawAmount").value;
    const converWithdarw=parseFloat(withdrawAmount);

    const currentWithdraw=document.getElementById("currentWithdraw").innerText;
    const convertcurrentWithdraw=parseFloat(currentWithdraw);

    const totalwithDraw=converWithdarw+convertcurrentWithdraw;
    document.getElementById("currentWithdraw").innerText=totalwithDraw;

    // calculating balance

    const current=document.getElementById("currTotal").innerText;
    const currentNumber=parseFloat(current);
    const total=currentNumber+-1*converWithdarw;
    document.getElementById("currTotal").innerText=total;
    document.getElementById("withdawAmount").value='';

    
})
