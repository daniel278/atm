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
]

var passwords = 
[
    213,
    214,
    634,
    737,
    373,
    234,
    474,
    846,
    242,
    467,
    145
]

document.getElementById("send_accountnumber").addEventListener("click", number);
document.getElementById("noaccount").addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter
      number();
    }
});

function number() 
{    
      var xaccount = document.getElementById("noaccount").value;
      console.log(xaccount);
 
      x = xaccount;
      y = parseFloat(x);
      v = accounts_numbers_verify.indexOf(y);
        
     if(accounts_numbers_verify.includes(y)) 
     {
         document.getElementById("atm").innerHTML = "<img src='../img/teclado.jpg'<div> <p>Pasword</p> <input id='number2' type='number'> <input id='send2' onclick='password();' type='button' value='Send'></div>";
         console.log("eureka");

         if (accounts_numbers_verify[0] == y) 
         {
             z = passwords[0];
             console.log(z);
         }
            
    }
        else if (accounts_numbers_verify.includes(y) == false) {
        alert ("there is no this account number in our data base");
    }
}

document.getElementById("number2").addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter
      password();
    }
});

function password(params) 
{
    pass = document.getElementById("number2").value;
    n = parseFloat(pass);
    b = passwords.indexOf(n);

    if (v == b) 
    {
        console.log("la verga");
        
    } else {
        alert("INCORRECT PASSWORD");
    };
}

