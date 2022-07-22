



let products_details=[
    {
        name:"Honda dio",
        image:"https://apollo-singapore.akamaized.net/v1/files/2e5cvsaawmly-IN/image;s=300x600;q=60",
        price: 35000,
        adress:"Shyam Bazar",
        state:"Kolkata"
      },
      {
        name:"Honda km driven",
        image:"https://apollo-singapore.akamaized.net/v1/files/h9xvd6puu6f03-IN/image;s=300x600;q=60",
        price: 22000,
        adress:"miya Bazar",
        state:"Kolkata"
      },
      {
        name:"TVS Jupitor",
        image:"https://apollo-singapore.akamaized.net/v1/files/fjcyr90js5yv-IN/image;s=300x600;q=60",
        price: 40000,
        adress:"Mumbai",
        state:"Maharashtra"

      },

      {
        name:"Honda Activa Bs4",
        image:"https://apollo-singapore.akamaized.net/v1/files/87wrbewqrprh1-IN/image;s=300x600;q=60",
        price: 50000,
        adress:"Thane,Mumbai",
        state:"Maharashtra"

      },
      {
        name:"TVS Jupitor",
        image:"https://apollo-singapore.akamaized.net/v1/files/prjt1qbhnyfn-IN/image;s=300x600;q=60",
        price: 46000,
        adress:"Bhopal",
        state:"Madhya Pradesh"

      },
      {
        name:"Hero Pleasure Plus",
        image:"https://apollo-singapore.akamaized.net/v1/files/q93sbt354ee53-IN/image;s=300x600;q=60",
        price: 43000,
        adress:"Indore",
        state:"Madhya Pradesh"

      },
      {
        name:"Suzuki burgman",
        image:"https://apollo-singapore.akamaized.net/v1/files/tolqhtcbzi5i-IN/image;s=300x600;q=60",
        price: 53000,
        adress:"Pkase1 Mohali",
        state:"Panjab"

      },
      {
        name:"Honda Activa",
        image:"https://apollo-singapore.akamaized.net/v1/files/dl4eqr05pomx1-IN/image;s=300x600;q=60",
        price: 53000,
        adress:"Amritsar",
        state:"Panjab"

      },
      {
        name:"Honda Activa",
        image:"https://apollo-singapore.akamaized.net/v1/files/4i43xuhkrmek1-IN/image;s=300x600;q=60",
        price: 33000,
        adress:"Jaipur",
        state:"Rajsthan"
 },
 {
    name:"Honda Pleasure",
    image:"https://apollo-singapore.akamaized.net/v1/files/8gmxljcozsw83-IN/image;s=300x600;q=60",
    price: 49000,
    adress:"Rajkot",
    state:"Rajsthan"
},
{
    name:"Honda Activa",
    image:"https://apollo-singapore.akamaized.net/v1/files/ro9ta25j08fx2-IN/image;s=300x600;q=60",
    price: 62000,
    adress:"Ayodhya",
    state:"Uttar Pradesh"
},
{
    name:"Tvs Jupitor",
    image:"https://apollo-singapore.akamaized.net/v1/files/uaj5ixtlng471-IN/image;s=300x600;q=60",
    price: 60000,
    adress:"Varanasi",
    state:"Uttar Pradesh"
},


]

let moreData=[
  {
    name:"Suzuki burgman",
    image:"https://apollo-singapore.akamaized.net/v1/files/tolqhtcbzi5i-IN/image;s=300x600;q=60",
    price:  53000,
    adress:"Pkase1 Mohali",
    state:"Panjab"

  },
  {
    name:"Honda Activa",
    image:"https://apollo-singapore.akamaized.net/v1/files/dl4eqr05pomx1-IN/image;s=300x600;q=60",
    price: 53000,
    adress:"Amritsar",
    state:"Panjab"

  },
  {
    name:"Honda Activa",
    image:"https://apollo-singapore.akamaized.net/v1/files/4i43xuhkrmek1-IN/image;s=300x600;q=60",
    price: 33000,
    adress:"Jaipur",
    state:"Rajsthan"
},
{
name:"Honda Pleasure",
image:"https://apollo-singapore.akamaized.net/v1/files/8gmxljcozsw83-IN/image;s=300x600;q=60",
price: 49000,
adress:"Rajkot",
state:"Rajsthan"
},
{
name:"Honda Activa",
image:"https://apollo-singapore.akamaized.net/v1/files/ro9ta25j08fx2-IN/image;s=300x600;q=60",
price: 62000,
adress:"Ayodhya",
state:"Uttar Pradesh"
},
{
name:"Tvs Jupitor",
image:"https://apollo-singapore.akamaized.net/v1/files/uaj5ixtlng471-IN/image;s=300x600;q=60",
price: 60000,
adress:"Varanasi",
state:"Uttar Pradesh"
},


]

localStorage.setItem('products_details',JSON.stringify(products_details));

let data = JSON.parse(localStorage.getItem('products_details'));


let container=document.getElementById("scooters")


function append(data){
  container.innerHTML=null
  products_details.forEach(function(el){
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
    container.append(div)
})


}
append(data)

function append2(moreData){
    
  moreData.forEach(function(el){
      let div=document.createElement("div")
  
      let name=document.createElement("h2")
      name.innerText=el.name
      let image=document.createElement("img")
      image.src=el.image
      let price=document.createElement("h2")
      price.innerText=el.price
      let adress=document.createElement("h5")
      adress.innerText=el.adress
      let state=document.createElement("h5")
      state.innerText=el.state
      div.append(name,image,price,adress,state)
      container.append(div)
  
    
  })
  
  }
  
  
  let btn1= document.getElementById('btn-load');
  
  btn1.addEventListener('click',addData)
  
  
  function addData(){
    append2(moreData);
  }

   















let btn2=document.getElementById("btnback");
window.onscroll=function(){
  scrollFunction()
}
function  scrollFunction(){
  if(document.body.scrollTop>500 || document.documentElement.scrollTop>500){
    btn2.style.display='block';
  }else{
    btn2.style.display='none';
  }
}
function backTop(){
  document.documentElement.scrollTop=0;
}


