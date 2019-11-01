//db because data base, that help me to remember
var dbaccount = [];
var dbpassword = [];
var dbbalance = [];

function account(noaccount, password, balance) 
{
    this.accountNumber = noaccount;
    this.accountPassword = password;
    this.accountBalance = balance;

    return dbaccount.push(this.accountNumber) + dbpassword.push(this.accountPassword) + dbbalance.push(this.accountBalance);    
}

var account0 = new account(900800501, 213, 5000);
var account1 = new account(912491902, 255, 300);
var account2 = new account(915392124, 149, 50);

var atmbills = [];
var atmbillsrc = [];

function bill(amount, value, src) 
{
    this.billAmount = amount;
    this.billValue = value;
    this.billSrc = src;

    return atmbills.push(this.billValue) + atmbillsrc.push(this.billSrc) ;
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

var hundreddollar = new bill (xhundred, vhundred, "../img/hundreddollar.png");
var fiftydollar = new bill (xfifty, vfifty, "../img/fiftydollar.png");
var tendollar = new bill (xten, vten, "../img/tendollar.png");
var fivedollar = new bill(xfive, vfive, "../img/fivedollar.png");
var onedollar = new bill(xone, vone, "../img/onedollar.png");

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
    v = dbaccount.indexOf(y);
        
    if(dbaccount.includes(y) == true) 
    {
        //the code is for create a new text input and button, because they will do diferrents functions,
        // than the frist inpust. <p> have onclick, because, I find this way to js detect this <p>, 
        // before this, add.eventListener don't work  
        document.getElementById("image").src = "../img/teclado.jpg";
        document.getElementById("atm").innerHTML = "<div id='key'> <p>Pasword</p> <input id='number2' onclick='problem();' type='number'> <input id='send2' onclick='password();' type='button' value='Send'> </div>";
        console.log("eureka");  
    }

    else if (dbaccount.includes(y) == false) 
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
    b = dbpassword.indexOf(n);

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

function sortNumber(a, b) {
    return b - a;
  }
  
var numArray = [57, 140000, 104, 99];
numArray.sort(sortNumber);
atmbills.sort(sortNumber);

var givebills = [];

function giveamount(params) 
{

    for (let index = 0; index <= 4; index++) 
    {

        math0 = parseInt(many/atmbills[index]); //amount of bills        
        many = many%atmbills[index];
        givebills.push(math0);
    }
}

function give(params) {
    many = document.getElementById("dollar").value;
    many = parseFloat(many);

    if (many%10 == 0) 
    {
        if (many < dbbalance[v]) 
        {
            dbbalance[v] = dbbalance[v] - many;
            alert("You have retired " + many + " dollars, your balance is " + dbbalance[v]);

            document.getElementById("atm").innerHTML = "Thanks for use our ATM";
            giveamount();

            var image_x = document.getElementById('image');
            image_x.parentNode.removeChild(image_x);            

            function repeatbill() 
            {
                var givebill = document.getElementById("divimage");     
                for (i = 0; i < givebills[0]; i++)
                {
                    console.log("hola ");
                    
                    givebill.innerHTML += "<img src= '" + atmbillsrc[0] + "' width='300px'>" ;
                }
                
                for (i = 0; i < givebills[1]; i++)
                {
                    console.log("hola ");
                    
                    givebill.innerHTML += "<img src= '" + atmbillsrc[1] + "' width='300px'>" ;
                }
                for (i = 0; i < givebills[2]; i++)
                {
                    console.log("hola ");
                    
                    givebill.innerHTML += "<img src= '" + atmbillsrc[2] + "' width='300px'>" ;
                }
                for (i = 0; i < givebills[3]; i++)
                {
                    console.log("hola ");
                    
                    givebill.innerHTML += "<img src= '" + atmbillsrc[3] + "' width='300px'>" ;
                }
                for (i = 0; i < givebills[4]; i++)
                {
                    console.log("hola ");
                    
                    givebill.innerHTML += "<img src= '" + atmbillsrc[4] + "' width='300px'>" ;
                }

            }

            repeatbill();

            //givebills.innerHTML = "<img>" +  "grr";

        } 
        
        else 
        {
            alert("You don't have enough money");
        }            
    }
    
    else
    {
        alert("The ATM can't give you that amount of dollars, only multiples of ten");
    }

}