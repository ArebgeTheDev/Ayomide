// Create a bank ussd code using if statement

// Airtime Code

var initialBalance = 100000;

var ussd = prompt("Enter Ussd Code");

if (ussd == "*123#") {
    var entry = prompt("Enter your Operation \n Press 1 to Buy Airtime \n Press 2 to Buy Data \n Press 3 to Transfer to Banks \n Press 4 to Check Balance \n Press 0 to Cancel Operation \n");
    if (entry == 1){
        var airtime = Number(prompt("Enter Airtime Amount"));
        if (airtime <= 10000){
            var phone= prompt("Enter Your Phone Number");
            if (phone.length == 11){
                    alert(`${phone} has been credited with the sum of ${airtime}`);
                    alert("Thanks for using this Channel");
            }else{
                alert("Incorrect Phone Number")
            }
        }else{
            alert("You Have Exceeded Your Daily Target")
        }
    }
}else {
    alert("Unknown Ussd code");
}

// Data Code

if (entry == 2){
    var data = Number(prompt("Enter Data Amount"));
    if (data <= 10000){
        var phone1=prompt("Enter your Phone Number");
        if (phone1.length == 11){
            alert(`${phone1} has been credited with the sum of ${data}MB`);
            alert("Thank You For Banking with us");
        }else{
            alert("Incorrect Phonne Number")
        }
    }else{
        alert("You Have Exceeded Your Daily Target")
    }
}

// Transfer to Banks Code

if (entry == 3){
    var bank = Number(prompt("Enter Amount"));
    if (bank <= 100000){
        var phone2=prompt("Enter Account Number");
        if(phone2.length == 10){
            alert("Transaction Successful");
            alert("Thank You For Banking with us")
        }else{
            alert("Incorrect Account Number")
        }
    }else {
        alert("You have Exceeded Your initial Balance")
    }
}

// Code To Check Balance

if (entry == 4) {
    alert("Your Initial Balance is" +  initialBalance);
}

if (entry == 0) {
    alert("Ussd Closed");
}