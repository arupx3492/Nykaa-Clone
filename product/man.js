// var btn =document.querySelectorAll(".btn")

// console.log(btn.innerText)
// function cartbutton(){
//     console.log("added to bag")
    
// 
var product=[
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/e/beardo-hair-growth-oil.jpg",
        desc:"Beardo Hair Growth Oil",
        mrp:"MRP:₹",
        max:750,
        min:650,
        off:"25% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/7/57c37308904223818706_1.jpg",
        desc:"Ustraa Hair Growth Vitalizer - Boost Hair Growth, Prevents H...",
        mrp:"MRP:₹",
        max:750,
        min:550,
        off:"25% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } ,  
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/5/05e9578nymcfn0000025_1rvm.jpg",
        desc:"MCaffeine Naked & Raw Moisturizing Coffee Body Lotion",
        mrp:"MRP:₹",
        max:380,
        min:300,
        off:"25% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    },   
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/v/e/versace_dylanblue_50ml_bottle.jpg",
        desc:"Versace Pour Homme Dylan Blue Eau De Toilette",
        mrp:"MRP:₹",
        max:5000,
        min:4000,
        off:"20% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } ,  
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/1/f1f1e04NYMCFN0000035_nws1.jpg",
        desc:"MCaffeine Coffee Look Gift Kitl",
        mrp:"MRP:₹",
        max:2550,
        min:1999,
        off:"10% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } ,  
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/f/efd9418NYMCFN0000029_1.jpg",
        desc:"MCaffeine Naked and Raw Coffee Under Eye Cream ",
        mrp:"MRP:₹",
        max:575,
        min:485,
        off:"35% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } ,  
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/c/acf7879NYKMCF0000004_1.jpg",
        desc:"MCaffeine Exfoliating Coffee Face Scrub with Walnut &",
        mrp:"MRP:₹",
        max:349,
        min:295,
        off:"25% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } , 
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/b/1bca9528907367001867_1.jpg",
        desc:"The Man Company Charcoal Face Wash With Ylang-Ylang &",
        mrp:"MRP:₹",
        max:349,
        min:244,
        off:"25% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } , 
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/89c57d9NYKAB00000528_1.jpg",
        desc:"Nykaa SKINRX Oil Free Vitamin C - Illuminate + Day Moisturiz...",
        mrp:"MRP:₹",
        max:599,
        min:399,
        off:"40% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } , 
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/9/994a850NYKAB00000184_1.jpg",
        desc:"Nykaa Naturals Tea Tree & Neem Purifying & Hydrating Gel",
        mrp:"MRP:₹",
        max:350,
        min:280,
        off:"20% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } , 
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/1/f122feeMCAFF00000193_1NV.jpg",
        desc:"MCaffeine Exfoliating Coffee Body Scrub For Tan Removal &",
        mrp:"MRP:₹",
        max:280,
        min:199,
        off:"25% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } ,  
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/e/eecd789NYMCFCOM00033.jpg",
        desc:"MCaffeine Body Polishing Kit",
        mrp:"MRP:₹",
        max:1000,
        min:650,
        off:"25% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } ,  
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/1/c157735nymcfn0000032_nkw1.jpg",
        desc:"MCaffeine Naked & Raw Tan Removal Coffee Face Mask",
        mrp:"MRP:₹",
        max:645,
        min:550,
        off:"30% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } , 
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/8/b8e2578nykmcf0000009_1rvm.jpg",
        desc:"MCaffeine Coffee Hydrating Face Serum For Glowing Skin with ...",
        mrp:"MRP:₹",
        max:575,
        min:450,
        off:"25% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } ,
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3349666007891.jpg",
        desc:"Paco Rabanne 1 Million Eau De Toilette",
        mrp:"MRP:₹",
        max:4500,
        min:3000,
        off:"45% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } ,  
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/0/4045787232233_1.jpg",
        desc:"Schwarzkopf Professional Osis + Session Label Strong Hold Ha...",
        mrp:"MRP:₹",
        max:750,
        min:600,
        off:"30% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } , 
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/0/7027578nymcfn0000026_1rvm.jpg",
        desc:"MCaffeine Naked & Rich Deep Moisturizing Choco Body Lotion",
        mrp:"MRP:₹",
        max:400,
        min:300,
        off:"20% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } ,  
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/a/1a28038NYMCFCOM00062_1.jpg",
        desc:"MCaffeine Coffee-Choco Cocktail Kit - Relax & De-Stress",
        mrp:"MRP:₹",
        max:850,
        min:600,
        off:"35% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } ,  
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/0/c084a91NYKAB00000507_1.jpg",
        desc:"Nykaa SKINRX 5% Niacinamide Spot Correct Day Moisturiser",
        mrp:"MRP:₹",
        max:399,
        min:299,
        off:"25% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } , 
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/8/783320971563_2_.jpg",
        desc:"BVLGARI Man In Black Eau De Parfum",
        mrp:"MRP:₹",
        max:8999,
        min:6500,
        off:"30% OFF",
        star:"https://cdn-icons-png.flaticon.com/128/992/992000.png" 
    } , 
    
    
        
    
    ];
    let arr=JSON.parse(localStorage.getItem("data")) || [] ;
    // localStorage.setItem("cartdata",JSON.stringify(product))
    var cart=document.querySelector("#product")
    function display(data){
        data.forEach(function (ele) {
            var card=document.createElement("div")
            card.setAttribute("class","card")
            var img=document.createElement("img")
            img.setAttribute("class","img")
            var name=document.createElement("h4")
            name.setAttribute("class","name")
            var d1=document.createElement("div")
            d1.setAttribute("class","d1")
            // var rs1=document.createElement("div")
            // rs1.setAttribute("class","rs1")
            var mrp=document.createElement("h5")
            mrp.setAttribute("class","mrp")
            var maxi=document.createElement("h5")
            maxi.setAttribute("class","maxi")
            // var rs2=document.createElement("div")
            // rs2.setAttribute("class","rs2")
            var mini=document.createElement("h5")
            mini.setAttribute("class","mini")
            var offer=document.createElement("p")
            offer.setAttribute("class","offer")
            var rating=document.createElement("img")
            rating.setAttribute("class","img2")
            var btn=document.createElement("button")
    
            card.setAttribute("id","btn")
            btn.addEventListener("click",function (){
    
            addtocart(ele)
    
            
    
            })
           
            img.src=ele.img
            name.innerText=ele.desc
            mrp.innerText=ele.mrp
            maxi.innerText=ele.max
            mini.innerText=ele.min
            offer.innerText=ele.off
            rating.src=ele.star
          
           d1.append(mrp,maxi,mini,offer)
            btn.innerText="ADD TO BAG"
            card.append(img,name,d1,rating,btn)
            cart.append(card)
        });
    }
    function addtocart(ele){
       
        // console.log(ele)
        arr.push(ele)
        // console.log(arr)
        localStorage.setItem("data",JSON.stringify(arr))
    }
    display(product)   
            
        
    
    
    