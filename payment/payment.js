var customerAdd=JSON.parse(localStorage.getItem("custAdd"));
// console.log(customerAdd)
let cart = JSON.parse(localStorage.getItem("data"))
display(customerAdd);

function display(data){
    data.forEach(function(el){
        var d4=document.createElement("div");

        var custname=document.createElement("p")
        custname.innerText=el.name;

        var add=document.createElement("p")
        add.innerText=el.add;

        var mobile=document.createElement("p")
        mobile.innerText="+91-"+el.mobile;

       
    
    
    
    
        d4.append(custname,add,mobile);
        console.log(d4)
    
        document.querySelector("#customerAdd").append(d4);

    })

   }


   
function sum() {
    let total = 0
    let data = JSON.parse(localStorage.getItem("data"))
    for(let i=0;i<data.length;i++){
        if(data[i].min){
            total+=data[i].min;
        }
    }
    // console.log(data)
    return total
}

var cartsum="Rs"+" "+(sum())

document.querySelector(".changing").innerText=cartsum;
document.querySelector(".changing1").innerText=cartsum;


    


