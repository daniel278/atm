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


var flag = false;

function start() {
    flag = true;
}


    function number(name) 
    {

        if (flag) {
    
        var x;
        var y;

        var xaccount = document.getElementById("noaccount").value;
        console.log(xaccount);
    
        x = xaccount;
        y = parseFloat(x);
        
        if(accounts_numbers_verify.includes(y)) {
            alert("fkagoae");
            console.log("eureka");
            
        }
        else if (accounts_numbers_verify.includes(y) == false) {
            alert ("ay cabron");
            
        }
    }
    }  




