const cardholder=document.getElementById("cardholder_name")
const cardnumber=document.getElementById("cardholder_number")
const expiry=Array.from(document.querySelectorAll(".expiry"))
const cvcholder=document.getElementsByClassName("cvcholder")
const submit=document.getElementById("submit")
const nameoncard=document.querySelector(".card_name")
const numberoncard=document.querySelector(".number")
const expMM=document.querySelector(".month")
const expYY=document.querySelector(".year")
const cvcDisplay=document.querySelector("cvc")
const thankyou=document.getElementsById("cvcholder")
const thankyousection=document.getElementsById("thank-you")
const continuebtn=document.getElementById("continue")
const form=document.getElementsById("myform")
const expiryerrormsg=document.getElementsById("expiryerr")

function inputName(){
    nameoncard.innerHTML=cardholder.value;
    thankyou.innerHTML="Thank you ${cardholder.value}";
    if(nameoncard.innerHTML==""){
        nameoncard.innerHTML=cardholder.Placeholder;
    }
}
function inputCardNum(){
    let cardnumberInput= cardnumber.value;
    let formattednumber=cardnumberInput.replace(/[^\d]/g,"");
    formattednumber=formattednumber.substring(0,16);
    let cardnumbersections=formattednumber.match(/\d(1,4)/g);
    if(cardnumbersections!==null){
        formattednumber=cardnumbersections.join(" ");

    }
    if(cardnumberInput!=formattednumber){
        cardnumber.value=formattednumber;
    }
    numberoncard.innerHTML=cardnumber.value;
    if(cardnumber.value===""){
        numberoncard.innerHTML=cardnumber.Placeholder;

    }

}
function inputMM(){
    let formattedMM=expiry[0].value;
    formattedMM=formattedMM.substring(0,2);
    expiry[0].value=formattedMM;
    if(expiry[0].value===""){
        expMM.innerHTML=expiry[0].value;
    }
}
function inputYY(){
    let formattedYY=expiry[1].value;
    formattedYY=formattedYY.substring(0,4);
    expiry[1].value=formattedYY;
    if(expiry[1].value===""){
        expYY.innerHTML="0000";
    }
    else{
        expYY.innerHTML=expiry[1].value;
    }
}
function inputCvc(){
    let formattedCvc=cvc.value;
    formattedCvc=formattedCvc.substring(0,3);
    cvc.value=formattedCvc;
    if(cvc.value===""){
        cvcDisplay.innerHTML="000";
    }
    else{
        cvcDisplay.innerHTML=cvc.value;
    }
}
function massValidate(){
    function validatename(){
        let cardholderEXp=/^[A-Z a-z]+$/;
        let errormsg=document.getElementsById("errmsg")
        if(cardholder.value.match(cardholderEXp)){
            errormsg.textContent="";
        }
            else{
                errormsg.innerHTML="please enter cardholder name";
            }
        }
    
    function validatename(){
        let cardnumbererror=document.getElementsById("errnummsg")
        if(cardnumber.value.length>0 && cardnumber.value.length<16){
            cardnumbererror.innerHTML="wrong format";
        }
            else if(cardnumber.value==""){
                cardnumbererror.innerHTML="can' t be blank";
            }
            else{
                cardnumbererror.innerHTML="";
            }
        }
        function validateExpiry(){
            let expMonth=/^(0[0-9]1[1-2]){2}$/;
            let expYear=/^[0-9][0-2]{4}$/;
            if(expiry[0].value.match(expMonth)){
                expiryerrormsg.innerHTML="";
            }
            else if(expiry[0].value.match(expMonth) && expiry[1].value.match(expYear))
            {
                expiryerrormsg.innerHTML="";
            }
            else if(expiry[0]=="")
            {
                expiryerrormsg.innerHTML="can't be balnk";
            }
            else{
                expiryerrormsg.innerHTML="wrong format";
            }
        }
        function validateCvc(){
            let cvcerrormsg=document.getElementById("cvcerror");
            let cvcExp=/^[0-9]{3}$/;
            if(cvc.value===""){
                cvcerrormsg.innerHTML="can't be blank";
            }
                else if(cvc.value.match(cvcExp)){
                    cvcerrormsg.innerHTML="";
                }
                else{
                    cvcerrormsg.innerHTML="wrong format";
                }
            }
            validateCard();
            validatename();
            validateExpiry();
            validateCvc();
                if(nameoncard.innerHTML==cardholder.Placeholder || numberoncard.innerHTML==cardnumber.Placeholder ||expMM.innerHTML=="00" ||expYY.innerHTML=="0000" || cvcDisplay.innerHTML=="000"(cardnumber.value.length>0 && cardnumber.value.lenght<16))
                {
                    return false;
                }
                else{
                    return true;
                }
        }
    submit.addEventListener("click",function(){
        massValidate();
        if(massValidate()==false){
            event.preventDefault();
        }
        else{
            event.preventDefault();
            form.classList.add("hidden");
            thankyousection.classList.remove("hidden");
        }
    });

    continuebtn.addEventListener("click",function(){
        event.preventDefault();
        thankyousection.classList.add("hidden");
        form.classList.remove("hidden");
        nameoncard.innerHTML=cardholder.Placeholder;
        numberoncard.innerHTML=cardnumber.Placeholder;
        expMM.innerHTML=="00";
        expYY.innerHTML=="0000"
        cvcDisplay.innerHTML=="000";
        cardholder.value=="";
        cardnumber.value=="";
        expiry[0].value=="";
        expiry[1].value=="";
        cvc.value=="";
        expiryerrormsg.innerHTML=="";
    });
