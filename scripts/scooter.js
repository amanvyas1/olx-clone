



let product_details=[
    {
        name:"Honda dio",
        image:"https://apollo-singapore.akamaized.net/v1/files/2e5cvsaawmly-IN/image;s=300x600;q=60",
        price: "₹ 35,000",
        adress:"Shyam Bazar",
        state:"Kolkata"
      },
      {
        name:"Honda km driven",
        image:"https://apollo-singapore.akamaized.net/v1/files/h9xvd6puu6f03-IN/image;s=300x600;q=60",
        price: "₹ 22,000",
        adress:"miya Bazar",
        state:"Kolkata"
      },
      {
        name:"TVS Jupitor",
        image:"https://apollo-singapore.akamaized.net/v1/files/fjcyr90js5yv-IN/image;s=300x600;q=60",
        price: "₹ 40,000",
        adress:"Mumbai",
        state:"Maharashtra"

      },

      {
        name:"Honda Activa Bs4",
        image:"https://apollo-singapore.akamaized.net/v1/files/87wrbewqrprh1-IN/image;s=300x600;q=60",
        price: "₹ 50,000",
        adress:"Thane,Mumbai",
        state:"Maharashtra"

      },
      {
        name:"TVS Jupitor",
        image:"https://apollo-singapore.akamaized.net/v1/files/prjt1qbhnyfn-IN/image;s=300x600;q=60",
        price: "₹ 46,000",
        adress:"Bhopal",
        state:"Madhya Pradesh"

      },
      {
        name:"Hero Pleasure Plus",
        image:"https://apollo-singapore.akamaized.net/v1/files/q93sbt354ee53-IN/image;s=300x600;q=60",
        price: "₹ 43,000",
        adress:"Indore",
        state:"Madhya Pradesh"

      },
      {
        name:"Suzuki burgman",
        image:"https://apollo-singapore.akamaized.net/v1/files/tolqhtcbzi5i-IN/image;s=300x600;q=60",
        price: "₹ 53,000",
        adress:"Pkase1 Mohali",
        state:"Panjab"

      },
      {
        name:"Honda Activa",
        image:"https://apollo-singapore.akamaized.net/v1/files/dl4eqr05pomx1-IN/image;s=300x600;q=60",
        price: "₹ 53,000",
        adress:"Amritsar",
        state:"Panjab"

      },
      {
        name:"Honda Activa",
        image:"https://apollo-singapore.akamaized.net/v1/files/4i43xuhkrmek1-IN/image;s=300x600;q=60",
        price: "₹ 33,000",
        adress:"Jaipur",
        state:"Rajsthan"
 },
 {
    name:"Honda Pleasure",
    image:"https://apollo-singapore.akamaized.net/v1/files/8gmxljcozsw83-IN/image;s=300x600;q=60",
    price: "₹ 49,000",
    adress:"Rajkot",
    state:"Rajsthan"
},
{
    name:"Honda Activa",
    image:"https://apollo-singapore.akamaized.net/v1/files/ro9ta25j08fx2-IN/image;s=300x600;q=60",
    price: "₹ 62,000",
    adress:"Ayodhya",
    state:"Uttar Pradesh"
},
{
    name:"Tvs Jupitor",
    image:"https://apollo-singapore.akamaized.net/v1/files/uaj5ixtlng471-IN/image;s=300x600;q=60",
    price: "₹ 60,000",
    adress:"Varanasi",
    state:"Uttar Pradesh"
},


]

// console.log(product_details)


let scooters=document.getElementById("scooters")

product_details.forEach(function(el){
    let div=document.createElement("div")

    let name=document.createElement("h2")
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
    scooters.append(div)
})


