let text= document.getElementById("text");
let password= document.getElementById("password");
let card= document.getElementById("card");
let card1= document.getElementById("card1");
let number= document.getElementById("num");
let creditcard= document.getElementById("credit-card");

let month= document.getElementById("month");
let year= document.getElementById("year");
let cvv= document.getElementById("cvv");
let wort="";
let tab ="";

function clear(){
    number.value=""
    creditcard.value=""
        month.value=""
        year.value=""
        cvv.value=""
}

submit.onclick=function(){
    if((text.value=="omar")&&(password.value=="training")){
        console.log(text.value)
       
        card.style.display = "none";
        card1.style.display = "block";
        document.getElementById('credit-card').addEventListener('input', function (e) {
            const input = e.target;
            const value = input.value.replace(/\D/g, '');
            const formattedValue = value.match(/.{1,4}/g).join('  ');
            input.value = formattedValue;
        });
        submit1.onclick=function(){
            if ((number.value!="")&&(creditcard.value!="")&&(month.value!="")&&(month.value!=0)&&((year.value!=""))&&(creditcard.value.length==22)&&(cvv.value!="")&&(cvv.value.length==3)) {
            if (month.value<10){
         wort="0"+month.value+"/"+year.value[2]+year.value[3]
         console.log(wort)
            }
            if (month.value>=10){
                
                    wort=month.value+"/"+year.value[2]+year.value[3]
                    console.log(wort) 
            }
             console.log(creditcard.value)
            document.getElementById("dat").innerHTML =wort;
            document.getElementById("name").innerHTML =number.value.toUpperCase();
            document.getElementById("cod").innerHTML =creditcard.value;

            
        }
        clear();
        }
        
            }
}
