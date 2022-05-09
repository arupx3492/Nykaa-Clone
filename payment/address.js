  
// let product_data = [
//     {
//         image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/e/beardo-hair-growth-oil.jpg",
//         name: "Beardo Hair Growth Oil",
//         price: "750"
//         // about:"But 2 get 1 free"
//     },

//     {
//         image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/89c57d9NYKAB00000528_1.jpg",
//         name: "Nykaa SKINRX Oil Free Vitamin C - Illuminate +",
//         price: "299"
//         // about:
//     },

//     {
//         image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/7/57c37308904223818706_1.jpg",
//         name: "Ustraa Hair Growth Vitalizer - Boost Hair Growth, Prevents H...",
//         price: "699"
//         // about:
//     },

//     {
//         image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/9/994a850NYKAB00000184_1.jpg",
//         name: "Nykaa Naturals Tea Tree & Neem Purifying & Hydrating Gel",
//         price: "262"
//         // about:
//     },

//     {
//         image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/b/1bca9528907367001867_1.jpg",
//         name: "The Man Company Charcoal Face Wash With",
//         price: "244"
//         // about:
//     },

//     {
//         image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/a/2abbcfbNYKMCF0000002_1NV.jpg",
//         name: "MCaffeine Exfoliating Coffee Body Scrub for Tan",
//         price: "359"
//         // about:
//     }
// ]

// // var product=JSON.parse(localStorage.getItem(data))

let cart = JSON.parse(localStorage.getItem("data"))

// localStorage.setItem("cart",JSON.stringify(product_data));

var rcart=document.querySelector("#cartDetail")

function display(cartdata){
    // cart.innerHTML=null

    cartdata.forEach(function(ele){

        var card=document.createElement("div")

        var d1=document.createElement("div")

        var img=document.createElement("img")
        img.src=ele.img;

        var d2=document.createElement("div")
        var desc=document.createElement("p")
        desc.innerText=ele.desc;

        var price=document.createElement("p")
        price.innerText=ele.min;

        d1.append(img);
        d2.append(desc,price);
        card.append(d1,d2);
        
        rcart.append(card);

    })

   

}





document.querySelector("form").addEventListener("submit",addDetail)
var addArr=[];

 function addDetail(event){
    event.preventDefault();

    if(form.name.value==="" || form.mobile.value==="" || 
    form.code.value==="" || form.address.value==="" ){
        alert("Please fill all the blank fields");
    }

    else{
    var addObj={
                name:form.name.value,
                mobile:form.mobile.value,
                code:form.code.value,
                add:form.address.value,


                };

            addArr.push(addObj);
            console.log(addArr);

            localStorage.setItem("custAdd",JSON.stringify(addArr));
            window.location.href="payment.html";
    }
}

display(cart);


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

 
















