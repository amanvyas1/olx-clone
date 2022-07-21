   let products_details=[
   { name:"Hyundai Xcent Base",
    image:"https://apollo-singapore.akamaized.net/v1/files/p6x4f64p9thr2-IN/image;s=300x600;q=60",
    price: "₹ 5,20,000",
    adress:"Shyam Bazar",
    state:"Kolkata"
  },
  {
    name:"Hyundai Xcent Base",
    image:"https://apollo-singapore.akamaized.net/v1/files/ccz8pf0ie2q23-IN/image;s=300x600;q=60",
    price: "₹ 1,00,000",
    adress:"miya Bazar",
    state:"Kolkata"
  },
  {
    name:"Maruti Suzuki Wagnor H3",
    image:"https://apollo-singapore.akamaized.net/v1/files/w2d1dwk87fqb3-IN/image;s=300x600;q=60",
    price: "₹ 40,000",
    adress:"Mumbai",
    state:"Maharashtra"

  },

  {
    name:"Bolero",
    image:"https://apollo-singapore.akamaized.net/v1/files/zwnz8567xo2x-IN/image;s=300x600;q=60",
    price: "₹ 2,78,000",
    adress:"Thane,Mumbai",
    state:"Maharashtra"

  },
  {
    name:"B.S. Agro Rotavators",
    image:"https://apollo-singapore.akamaized.net/v1/files/sc27g3glbec22-IN/image;s=300x600;q=60",
    price: "₹ 80,000",
    adress:"Bhopal",
    state:"Madhya Pradesh"

  },
  {
    name:"Willy Jeep",
    image:"https://apollo-singapore.akamaized.net/v1/files/r2hh5gvd85l93-IN/image;s=300x600;q=60",
    price: "₹ 4,43,000",
    adress:"Indore",
    state:"Madhya Pradesh"

  },
  {
    name:"Piaggio-Appe",
    image:"https://apollo-singapore.akamaized.net/v1/files/ezwjfbefdsd32-IN/image;s=300x600;q=60",
    price: "₹ 33,000",
    adress:"Pkase1 Mohali",
    state:"Panjab"

  },
  {
    name:"Vintage wedding replica car",
    image:"https://apollo-singapore.akamaized.net/v1/files/c0ymdqcavxfu-IN/image;s=300x600;q=60",
    price: "₹ 5,53,000",
    adress:"Amritsar",
    state:"Panjab"

  },
  {
    name:" Restored Vintage car",
    image:"https://apollo-singapore.akamaized.net/v1/files/nxgtwxxqgj783-IN/image;s=300x600;q=60",
    price: "₹ 6,33,000",
    adress:"Jaipur",
    state:"Rajsthan"
},
{
name:"Jeep",
image:"https://apollo-singapore.akamaized.net/v1/files/fczdverzowpi3-IN/image;s=300x600;q=60",
price: "₹ 3,49,000",
adress:"Rajkot",
state:"Rajsthan"
},
{
name:"Mahindra Bolero Maxi Truck",
image:"https://apollo-singapore.akamaized.net/v1/files/703w3f2pm9db1-IN/image;s=300x600;q=60",
price: "₹ 6,62,000",
adress:"Ayodhya",
state:"Uttar Pradesh"
},
{
name:"Eicher School Bus",
image:"https://apollo-singapore.akamaized.net/v1/files/049619w7zzf7-IN/image;s=300x600;q=60",
price: "₹ 9,60,000",
adress:"Varanasi",
state:"Uttar Pradesh"
},


]

let more_data=[
    {
        name:" Restored Vintage car",
        image:"https://apollo-singapore.akamaized.net/v1/files/nxgtwxxqgj783-IN/image;s=300x600;q=60",
        price: "₹ 6,33,000",
        adress:"Jaipur",
        state:"Rajsthan"
    },
    {
    name:"Jeep",
    image:"https://apollo-singapore.akamaized.net/v1/files/fczdverzowpi3-IN/image;s=300x600;q=60",
    price: "₹ 3,49,000",
    adress:"Rajkot",
    state:"Rajsthan"
    },
    {
    name:"Mahindra Bolero Maxi Truck",
    image:"https://apollo-singapore.akamaized.net/v1/files/703w3f2pm9db1-IN/image;s=300x600;q=60",
    price: "₹ 6,62,000",
    adress:"Ayodhya",
    state:"Uttar Pradesh"
    },
    {
    name:"Eicher,School Bus",
    image:"https://apollo-singapore.akamaized.net/v1/files/049619w7zzf7-IN/image;s=300x600;q=60",
    price: "₹ 9,60,000",
    adress:"Varanasi",
    state:"Uttar Pradesh"
    },
    { name:"Hyundai Xcent Base",
    image:"https://apollo-singapore.akamaized.net/v1/files/p6x4f64p9thr2-IN/image;s=300x600;q=60",
    price: "₹ 5,20,000",
    adress:"Shyam Bazar",
    state:"Kolkata"
  },
  {
    name:"Hyundai Xcent Base",
    image:"https://apollo-singapore.akamaized.net/v1/files/ccz8pf0ie2q23-IN/image;s=300x600;q=60",
    price: "₹ 1,00,000",
    adress:"miya Bazar",
    state:"Kolkata"
  }

]
// console.log(product_details)
localStorage.setItem('products_details',JSON.stringify(products_details));

let data = JSON.parse(localStorage.getItem('products_details'));

let container=document.getElementById("commercial")

data.forEach(function(el){
    let div=document.createElement("div")

    let name=document.createElement("h3")
    name.innerText=el.name
    let image=document.createElement("img")
    image.src=el.image
    let price=document.createElement("h2")
    price.innerText=el.price
    let adress=document.createElement("h4")
    adress.innerText=el.adress
    let state=document.createElement("h4")
    state.innerText=el.state
    div.append(name,image,price,adress,state)
    container.append(div)
})

// let btn = document.getElementById('btn-load')
// more_data.forEach(function(el){
//     let div=document.createElement("div")

//     let name=document.createElement("h2")
//     name.innerText=el.name
//     let image=document.createElement("img")
//     image.src=el.image
//     let price=document.createElement("h2")
//     price.innerText=el.price
//     let adress=document.createElement("h5")
//     adress.innerText=el.adress
//     let state=document.createElement("h5")
//     state.innerText=el.state
//     div.append(name,image,price,adress,state)
//     btn.append(div)
// })


// btn.addEventListener('click',addData)


// function addData(){
//   append(more_data);
// }