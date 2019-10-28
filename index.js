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

function bill(amount, value) 
{
    this.billAmount = amount;
    this.billValue = value;
}

//I want the atm has equity in value of each bill

equity();

function equity(params) 
{
    totalvaluebills = 5000;
    vhundred = 100;
    xhundred = totalvaluebills/vhundred; // 50

    vfifty = 50;
    xfifty = totalvaluebills/vfifty;

    vten = 10;
    xten = totalvaluebills/vten,

    vfive = 5;
    xfive = totalvaluebills/vfive;

    vone = 1;
    xone = totalvaluebills/vone;

}

var onedollar = new bill(xone, vone);
var fivedollar = new bill(xfive, vfive);
var tendollar = new bill (xten, vten);
var fiftydollar = new bill (xfifty, vfifty);
var hundreddollar = new bill (xhundred, vhundred);

document.getElementById("send_accountnumber").addEventListener("click", number);
document.getElementById("noaccount").addEventListener('keypress',
function (e) 
{
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
        //the code is for create a new text input and button, because they will do diferrents functions,
        // than the frist inpust. <p> have onclick, because, I find this way to js detect this <p>, 
        // before this, add.eventListener don't work  
        document.getElementById("image").src = "../img/teclado.jpg";
        document.getElementById("atm").innerHTML = "<div id='key'> <p>Pasword</p> <input id='number2' onclick='problem();' type='number'> <input id='send2' onclick='password();' type='button' value='Send'> </div>";
        console.log("eureka");

        if (accounts_numbers_verify[0] == y) 
        {
            z = passwords[0];
            console.log(z);
        }
            
    }

    else if (accounts_numbers_verify.includes(y) == false) 
    {
        alert ("there is no this account number in our data base");
    }
}

function problem(params) 
{
//number2 is the id of the input put in innerHTML
document.getElementById("number2").addEventListener('keypress', function (e) 
    {
        var key = e.which || e.keyCode;
        if (key === 13) 
        { // 13 is enter
        // code for enter
        password();
        }
    });
}

function password(params) 
{
    pass = document.getElementById("number2").value;
    n = parseFloat(pass);
    b = passwords.indexOf(n);

    if (v == b) 
    {
        document.getElementById("atm").innerHTML = "<p>How many dollars you want?</p><input id='dollar' onclick='input3();' type='number'> <input id='give'type='button' onclick='give();' value='Give me'>";       
    } 
    
    else 
    {
        alert("INCORRECT PASSWORD");
    };
}

function input3(params) 
{
//number2 is the id of the input put in innerHTML
document.getElementById("dollar").addEventListener('keypress', function (e) 
    {
        var key = e.which || e.keyCode;
        if (key === 13) 
        { // 13 is enter
        // code for enter
        give();
        }
    });
}

function give(params) {
    many = document.getElementById("dollar").value;

    if (many%10 == 0) 
    {
        console.log("good");
            
    }
    
    else
    {
        alert("The ATM can't give you that amount of dollars, only multiples of ten");
    }

}