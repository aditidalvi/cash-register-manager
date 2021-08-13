var bill_amount = document.querySelector('#bill-amount');

var valid = document.querySelector('#valid-amount');

var cashGiven = document.querySelector('#cash-given');

var check = document.querySelector('#check');

var twoThousand = document.querySelector("#twothousand");

var fiveHundred = document.querySelector('#fivehundred');

var hundred = document.querySelector("#hundred");

var twenty = document.querySelector('#twenty');

var ten = document.querySelector('#ten');

var five = document.querySelector('#five');

var one = document.querySelector('#one');


check.addEventListener('click',checkEventHandlers);



function checkEventHandlers(){
    if((bill_amount.value < 0) || (cashGiven.value < 0) ||  (isNaN(bill_amount.value)) || (isNaN(cashGiven.value)) || (bill_amount.value.length == 0)){
        console.log("enter valid amount and cash given to continue ");
        valid.innerText = "Enter valid bill amount and cash given to continue ";
    }
    else if(bill_amount.value > cashGiven.value){
        console.log("Cash is less than bill, please enter right amount")
        valid.innerText = "Cash is less than bill, please enter right amount";
    }
   
    else if(cashGiven.value === bill_amount.value){
        console.log('No amount should be returned ')
        valid.innerText = 'No amount should be returned ';
    }
    else{
        checkEventHandler();
    }
}

function checkEventHandler(){
    var fiveHundredCount =0 ,twoThousandCount = 0,hundredCount = 0,twentyCount = 0 ,tenCount=0 ,fiveCount =0 ,oneCount = 0;
    var cash_check = cashGiven.value - bill_amount.value;
    console.log(bill_amount.value);
    console.log(cashGiven.value);
    console.log(cash_check);
    
    while(cash_check!=0){
        if(cash_check>=2000){
            cash_check = cash_check-2000;
            twoThousandCount+=1;
        }
        else if(cash_check>=500 && cash_check<2000){
            cash_check = cash_check-500;
            fiveHundredCount++;
        }
        else if (cash_check>=100 && cash_check<500) {
            cash_check = cash_check-100;
            hundredCount++;
            
        } else if(cash_check>=20 && cash_check<100) {
            cash_check = cash_check-20;
            twentyCount++;
        }
        else if(cash_check>=10 && cash_check<20){
            cash_check = cash_check-10;
            tenCount++;
        }
        else if(cash_check>=5 && cash_check<10){
            cash_check = cash_check-5;
            fiveCount++;
        }
        else {
            cash_check = cash_check-1;
            oneCount++;
        }
    }
  
/*    
console.log(twoThousandCount);
console.log(fiveHundredCount);
console.log(hundredCount);
console.log(twentyCount);
console.log(tenCount);
console.log(fiveCount);
console.log(oneCount);

*/
   
if (twoThousandCount !== 0){
    twoThousand.innerText = twoThousandCount;
}

if (fiveHundredCount !== 0){
    fiveHundred.innerText = fiveHundredCount;
}

if (hundredCount !== 0){
    hundred.innerText = hundredCount;
}

if(twentyCount !== 0){
    twenty.innerText = twentyCount;
}

if(tenCount !== 0){
    ten.innerText = tenCount;
}

if(fiveCount !== 0){
    five.innerText = fiveCount;
}

if(oneCount !== 0){
    one.innerText = oneCount;
}
 
   
}





/** 
 * function clickHandler(){
    if(bill_amount.value === ''){

        valid.innerText = "Enter valid amount";
        console.log("the value is null");

    }
    else{
        console.log(bill_amount.value);
        valid.innerHTML = "Cash given";
        console.log(cashGiven.value);
        
    }
}

next.addEventListener('click',clickHandler);
 * 
*/



// 1, 5, 10, 20, 100, 500, 2000.
   