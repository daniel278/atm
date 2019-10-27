var accounts_numbers_verify = 
[
    900800501,
    632513563,
    987632125,
    412898914,
    418241241,
    769239537,
    142984127,
    142084120,
    520937851,
    199014124,
    936840952,
    529808712
]

document.getElementById("send_accountnumber").addEventListener("click", number);

function number() 
{    
      var xaccount = document.getElementById("noaccount").value;
      console.log(xaccount);
 
      x = xaccount;
      y = parseFloat(x);
        
     if(accounts_numbers_verify.includes(y)) 
     {
         document.getElementById("text").innerHTML = "Password";
         document.getElementById("noaccount").value = "";
         document.getElementById("atm").innerHTML = "<img src='../img/teclado.jpg'<div> <p>Pasword</p> <input id='number2' type='number'> <input id='send2' type='button' value='Send'></div>";
        console.log("eureka");
            
    }
        else if (accounts_numbers_verify.includes(y) == false) {
        alert ("there is no this account number in our data base");
    }
}


