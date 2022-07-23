let bikeData = [
{name:'Pulsar 150',image1:'https://apollo-singapore.akamaized.net/v1/files/6ckbxe7yzerh3-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/w17xje27sx0r-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/ykcd2ca18kiv1-IN/image;s=780x0;q=60',price:22000,km:12000,brand:'Bajaj',address:'Kamod Nagar',city:'Mumbai',description:`Good condition only battry needs to change 2010 model once in a month used`},
{name:'Thunderbird 350',image1:'https://apollo-singapore.akamaized.net/v1/files/sfldsacd28w23-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/yi3w14upknlt2-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/d809dlpo1s8d-IN/image;s=780x0;q=60',price:95000,km:33750,brand:'Royal Enfield',address:'Millat Nagar',city:'Pune',description:`Make: Royal Enfield

Model: Thunderbird 350

Color: Marine Blue

KMs driven: about 33750

New battery (Amaron) & rear tyre (Michelin), about 1 year old... front tyre is original

Mileage: 38 to 42 kmpl (mix of highway and city drive).

Registration: MH12

Ownership: First owner

Insurance: Valid

PUC: To be renewed

No accidents, no damage, clear papers

Both keys available.`},
{name:'Karizma ZMR Fi ',image1:'https://apollo-singapore.akamaized.net/v1/files/1tglxnfmdxki1-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/z8v7dg1ojtkp3-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/cncqkg5g1xvy1-IN/image;s=780x0;q=60',price:46500,km:24900,brand:'Hero',address:'BTM layout',city:'Bengalore',description:`Karizma ZMR Fi Orignal Company Condition..2013 Model..First Owner. Orignal Company Fitted Powerfull Engine..& Orignal Non Broken Body..It's Totally Orignal Condition With Fi ..Only Genuine Final buyers Call Me..Fix Price...No Bargaining`},
{name:'Yamaha FZS',image1:'https://apollo-singapore.akamaized.net/v1/files/9qlx881e2z32-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/z6knhbs109q93-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/pjtilyehs8pi2-IN/image;s=780x0;q=60',price:41000,km:24000,brand:'Yamaha',address:'Up hill',city:'Indore',description:`All paper available

RC, pollution , insurance

All updates

Running condition

Less use`},
{name:'Honda hornet 160 R',image1:'https://apollo-singapore.akamaized.net/v1/files/lc3wv8astoe-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/lc3wv8astoe-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/lc3wv8astoe-IN/image;s=780x0;q=60',price:45000,km:42000,brand:'Honda',address:'Naranpura',city:'Bhopal',description:`Good condition well maintain bike`},
{name:'BAJAJ Avenger 220 Cruise',image1:'https://apollo-singapore.akamaized.net/v1/files/85zv1wtb9j0b2-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/zq50c799vo073-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/jmr470y33lbm2-IN/image;s=780x0;q=60',price:75000,km:22000,brand:'Bajaj',address:'perkit',city:'Delhi',description:`• Model = 2018

• Colour  = white

• Owner =single

• Papper = All clear  ( WITH SERVICE RECORDS  )

• Conditions = Awesome

• KM = 22000

• Price  = 75000`},
{name:'Royal Enfield Meteor Stellar Black',image1:'https://apollo-singapore.akamaized.net/v1/files/ny028yyfhe262-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/ny028yyfhe262-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/ny028yyfhe262-IN/image;s=780x0;q=60',price:240000,km:10000,brand:'Royal Enfield',address:'Kapodra',city:'Mumbai',description:`Royal Enfield Meteor Stellar Black, only 160 km driven. Registration done on 19/07. I was out off station after purchasing the vehicle. You can swipe credit card to buy`},
{name:'Hero Honda Splendor',image1:'https://apollo-singapore.akamaized.net/v1/files/9jx540n4s4tm1-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/vcxshavtwksk2-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/nxnn7sdg9g99-IN/image;s=780x0;q=60',price:14000,km:35000,brand:'Hero',address:'Sector 50',city:'Pune',description:`Hero honda

2005 model

Koi kami nahi hai

New tyre new wheel fully

serviced`},
{name:'Yamaha YZF R3',image1:'https://apollo-singapore.akamaized.net/v1/files/icvlwgqzc2971-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/xswkdf6cpqli1-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/3r58gaa9dl1e2-IN/image;s=780x0;q=60',price:325000,km:6500,brand:'Yamaha',address:'Saket',city:'Bengalore',description:`Re registration bike, recently 3rd service finished. 2nd owner (KL02 registration bike, yamaha yzf r3 for sale.Touring Tyres rear 190 front 120, recently periodic services are done on the period at tha yamaha authorized service center. Papers are all clear ,the bike is good condition. Indicators new .Genuine buyers can contact. Price is slightly negotiable.`},
{name:'CB SHINE TN12AJ0275',image1:'https://apollo-singapore.akamaized.net/v1/files/392b5jghnftn3-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/5im4kl0jqua83-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/392b5jghnftn3-IN/image;s=780x0;q=60',price:69000,km:5605,brand:'Honda',address:'Vidiya nagar',city:'Indore',description:`Exchange offer available with the highest price in the Chennai

All Credit Cards Accepted

Show room timings

Monday - Saturday

10:00 am - 8:00 pm

Sunday :

10:00 am - 2:00pm`},
{name:'Bajaj DTS-i',image1:'https://apollo-singapore.akamaized.net/v1/files/avtg74co45m61-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/3r9tg9sraop92-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/jdg4u3jj2k333-IN/image;s=780x0;q=60',price:40000,km:78000,brand:'Bajaj',address:'Gagan vihar',city:'Bhopal',description:`Brand
Bajaj
Model
Pulsar
Year
2013
KM driven
78,000 km`},
{name:'Royal Enfield bullet (ABS MODEL)',image1:'https://apollo-singapore.akamaized.net/v1/files/wdzzduly3u762-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/i064fdrecu4s2-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/dh2hopv34vw42-IN/image;s=780x0;q=60',price:65000,km:25400,brand:'Royal Enfield',address:'Chandni chwok',city:'Delhi',description:`Company record available

Company service only

Tyre good condition

All comments okk

Engine good condition`},
{name:'Hunk',image1:'https://apollo-singapore.akamaized.net/v1/files/4vwr3k9c3wud2-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/4vwr3k9c3wud2-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/4vwr3k9c3wud2-IN/image;s=780x0;q=60',price:42000,km:32000,brand:'Hero',address:'Navi mumbai',city:'Mumbai',description:`Brand
Hero
Model
Splendor
Year
2018
KM driven
40 km`},
{name:'YAMAHA SALUTO RX',image1:'https://apollo-singapore.akamaized.net/v1/files/f1cuxq6a25cd-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/xwn1iatuqn5h1-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/vynmtjfzelxm2-IN/image;s=780x0;q=60',price:75000,km:23489,brand:'Yamaha',address:'Vikas puri',city:'Pune',description:`MADURAI REGISTRATION SINGLE OWNER VEHICLE GOOD CONDITION PAPERS CURRENT FINANCE AVAILABILITY CONTACT SANKAR.`},
{name:'CB Shine',image1:'https://apollo-singapore.akamaized.net/v1/files/2lyucwiqlb3b3-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/hecawgbyssql-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/kmj2raenly482-IN/image;s=780x0;q=60',price:32500,km:60000,brand:'Honda',address:'Sector 19',city:'Bengalore',description:`Brand
Honda
Model
CB
Year
2014
KM driven
78,000 km`},
{name:'Bajaj avenger 220',image1:'https://apollo-singapore.akamaized.net/v1/files/yhkna4cbkwlr2-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/swiym84znl1n1-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/9bcfxp46bgpi1-IN/image;s=780x0;q=60',price:63000,km:18000,brand:'Bajaj',address:'Nehru place',city:'Indore',description:`Singal owner

All papers are clear

Loan available on used bikes

Don't give cheap offers

Place : kandivali w`},
{name:'thunderbird 350x',image1:'https://apollo-singapore.akamaized.net/v1/files/1d5aq92kdeoa-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/1d5aq92kdeoa-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/1d5aq92kdeoa-IN/image;s=780x0;q=60',price:100000,km:25000,brand:'Royal Enfield',address:'New market',city:'Bhopal',description:`In mint condition. Both tyres and battery changed last year and driven minimally since then. Also has VIP 0050 number.`},
{name:'Hero Super Splendor',image1:'https://apollo-singapore.akamaized.net/v1/files/5r7d25kgpqv51-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/dtvzh9ioao3s2-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/ppdmqffmf2jd3-IN/image;s=780x0;q=60',price:28750,km:22218,brand:'Hero',address:'Ashta sunroof',city:'Delhi',description:`MADURAI REGISTRATION THIRD OWNER VEHICLE GOOD CONDITION CONTACT SANKAR MOTORS.`},
{name:'Yamaha MT-15 ABS',image1:'https://apollo-singapore.akamaized.net/v1/files/1bhwt8qscif02-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/0k3ge3vt96ig2-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/guit0q745clf3-IN/image;s=780x0;q=60',price:154000,km:5200,brand:'Yamaha',address:'Jayanagar',city:'Mumbai',description:`YAMAHA MT-15 ABS
MODEL 2021/SEP
OWNER 1st
Km 5200
BRAND NEW CONDITION
JUST LIKE NEW`},
{name:'Honda Navi',image1:'https://apollo-singapore.akamaized.net/v1/files/e6zljkrm9wq82-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/so3wzpbpr2sp1-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/o0uo9x6ge91l-IN/image;s=780x0;q=60',price:30000,km:19230,brand:'Honda',address:'Roshan pura',city:'Pune',description:`Honda Navi Single owner ...Excellent condition`},
{name:'Pulsar RS200',image1:'https://apollo-singapore.akamaized.net/v1/files/txf4vdbmozb41-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/4476kkctp6ju-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/lomp5zw9sqmr3-IN/image;s=780x0;q=60',price:77000,km:25027,brand:'Bajaj',address:'Banaswadi',city:'Bengalore',description:`I want to sell my bike pulsar rs200 urgently with mint condition`},
{name:'classic 350 ABS',image1:'https://apollo-singapore.akamaized.net/v1/files/vm987bs8sw94-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/ggko00b1hfly1-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/i3k2phz6e94y-IN/image;s=780x0;q=60',price:70000,km:10000,brand:'Royal Enfield',address:'Vijaywada',city:'Indore',description:`Loan possible with 60000dp
Rest emi for 3 years
Price is non nego
Exchange and credit card facility available
Single owner
New tyres with alloy wheels
DUAL DISK AND DUAL ABS
SIGNAL MODEL
ZERO WORK
UNDER COMPANY WARRANTY
JUST TAKE AND DRIVE
LOAN ONLY FOR MUMBAI, THANE,VASAI,VIRAR PALGHAR BHIWANDI KALYAN AREA.
OUTSIDE MUMBAI DONT ASK FOR LOAN`},
{name:'Passion Pro',image1:'https://apollo-singapore.akamaized.net/v1/files/n1v2u2aqm9kq2-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/7265w9eicicb2-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/0xq85jb9p8r62-IN/image;s=780x0;q=60',price:53500,km:15000,brand:'Hero',address:'Panchwati',city:'Bhopal',description:`Good condition
No any problem
Fix rate transfer ke sath
Address - drishti IAS coaching besides pragati hospital Bhopal`},
{name:'Yamaha R15 v3.0',image1:'https://apollo-singapore.akamaized.net/v1/files/6rhzanqzibv22-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/ffwkagm4x8t31-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/rfnxc6vzq65e-IN/image;s=780x0;q=60',price:162000,km:702,brand:'Yamaha',address:'Ashok Vihar',city:'Delhi',description:`Yamaha R15 Version 3.0
Year of manufacture - 2021
Month - July
Colour - Dark Knight
Single Owner
Just 700 kms driven
Insurance - 07.07.26 (Tp) ; 07.07.22 (od)`},
{name:'Honda shine',image1:'https://apollo-singapore.akamaized.net/v1/files/2sakroy1wp1m-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/a0nzgmcw9lum1-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/hx76j6e2ytci3-IN/image;s=780x0;q=60',price:60000,km:40000,brand:'Honda',address:'Mumbai Central',city:'Mumbai',description:`Well maintain bike`},
{name:'Bajaj dominar d',image1:'https://apollo-singapore.akamaized.net/v1/files/ryut4c3d4btx1-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/qy2cz7rtba7n2-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/lidzzf9v6dx52-IN/image;s=780x0;q=60',price:145000,km:22000,brand:'Bajaj',address:'Harikrishna nagar',city:'Pune',description:`Bajaj Dominar 400 cc
Beast next 2 Showroom Condition`},
{name:'Himalayan',image1:'https://apollo-singapore.akamaized.net/v1/files/ebs1bb8ys4wi3-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/pesgr9upcqa02-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/oeiuc9clfcr02-IN/image;s=780x0;q=60',price:169000,km:15000,brand:'Royal Enfield',address:'Industrial area',city:'Bengalore',description:`2017 end model
Second owner
15000kms
Showroom condition`},
{name:'Hero Glamour',image1:'https://apollo-singapore.akamaized.net/v1/files/l1ecdp63sqcs-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/ml9i54d0jnpw-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/rz05bhm8wgq-IN/image;s=780x0;q=60',price:68000,km:15660,brand:'Hero',address:'vijay nagar',city:'Indore',description:`Well Maintained single owner bike  
Price is slightly negotiable 
Hi friends I want to sale my GLamour Hero blue 2019 Model vehicle.
15670  km driven 
- don't text/call with cheap offers and prefer to call me directly `},
{name:'Yamaha R15',image1:'https://apollo-singapore.akamaized.net/v1/files/y59j7m707j523-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/m6akmgwiq5wh3-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/m6akmgwiq5wh3-IN/image;s=780x0;q=60',price:128000,km:600,brand:'Yamaha',address:'Indra vihar',city:'Bhopal',description:`Selling R15 ,best condition one hand use ,n looks like new one`},
{name:'Honda hornet 160r',image1:'https://apollo-singapore.akamaized.net/v1/files/rcd83ibm3o9r2-IN/image;s=780x0;q=60',image2:'https://apollo-singapore.akamaized.net/v1/files/ncqrolafea6y-IN/image;s=780x0;q=60',image3:'https://apollo-singapore.akamaized.net/v1/files/ncqrolafea6y-IN/image;s=780x0;q=60',price:55000,km:25000,brand:'Honda',address:'Lal chowk',city:'Delhi',description:`Vijayapura 586113
`}
]


let append = (data)=>{
    let container = document.querySelector("#products")
    container.innerHTML = null;
    data.forEach((el)=>{
        let card = document.createElement("div")
        card.setAttribute("class", "items")
        card.addEventListener("click", (event)=>{
            addtoLS(el)
        })
        let imgDiv = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.image1
        imgDiv.append(img)
        let detailsDiv = document.createElement("div")
        let price = document.createElement("h3")
        price.innerText = `₹ ${el.price}`
        let km = document.createElement("p")
        km.innerText = `${el.km} km`
        km.setAttribute("class", "grey")
        let name = document.createElement("h4")
        name.innerText = el.name
        name.setAttribute("class", "name")
        let add = document.createElement("p")
        add.innerText = `${el.address},${el.city}`
        add.setAttribute("class", "add")
        detailsDiv.append(price,km,name,add)
        card.append(imgDiv,detailsDiv)
        container.append(card)
    })
}

append(bikeData)

let addtoLS = (el) =>{
    localStorage.setItem("item", JSON.stringify(el))
    window.location.href = "description.html"
}

document.querySelector("#sort").addEventListener("change", ()=>{
    handleSorting()
})

let handleSorting = (event) => {
    let lc = document.querySelector("#lc")
    lc.innerText = `Used Bike in India`
    let selected = document.querySelector("#sort").value
    if(selected=="relevance"){
        window.location.reload()
    }else if(selected=="lth"){
        bikeData.sort((a,b)=>{
            return a.price - b.price
        })
        append(bikeData)
    }else {
        bikeData.sort((a,b)=>{
            return b.price - a.price
        })
        append(bikeData)
    }
}




let loadMore = document.querySelector("#btn-load")
loadMore.addEventListener("click", (event) =>{
    load(bikeData)
})

let load = (data)=>{
    let container = document.querySelector("#products")
    data.forEach((el)=>{
        let card = document.createElement("div")
        card.setAttribute("class", "items")
        card.addEventListener("click", (event)=>{
            addtoLS(el)
        })
        let imgDiv = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.image1
        imgDiv.append(img)
        let detailsDiv = document.createElement("div")
        let price = document.createElement("h3")
        price.innerText = `₹ ${el.price}`
        let km = document.createElement("p")
        km.setAttribute("class", "grey")
        km.innerText = `${el.km} km`
        let name = document.createElement("h4")
        name.innerText = el.name
        name.setAttribute("class", "name")
        let add = document.createElement("p")
        add.innerText = `${el.address},${el.city}`
        add.setAttribute("class", "add")
        detailsDiv.append(price,km,name,add)
        card.append(imgDiv,detailsDiv)
        container.append(card)
    })
}

let btn2 = document.getElementById('btnback');
btn2.addEventListener("click", backTop);

  window.onscroll = function(){
    scrollFunction()
  }

  function scrollFunction(){
    if(document.body.scrollTop >500 || document.documentElement.scrollTop > 500 ){
      btn2.style.display = 'block';
    }else{
      btn2.style.display = 'none';
    }
  }

 function backTop(){
    document.body.scrollIntoView({
             behavior: "smooth",
       });
 }


 let location = document.querySelectorAll("#location>p")
for(let i=0; i<location.length; i++){
    location[i].addEventListener("click",(event)=>{
        locationFilter(event.target.innerText)
    })
}

let locationFilter= (val)=>{
    let filterd = bikeData.filter((el)=>{
        return el.city == val
    })
    append(filterd)
    let lc = document.querySelector("#lc")
    lc.innerText = `Used Bikes in ${val}`
}

let brand = document.querySelectorAll("#brand>p")
for(let i=0; i<brand.length; i++){
    brand[i].addEventListener("click",(event)=>{
        brandFilter(event.target.innerText)
    })
}

let brandFilter= (val)=>{
    let filB = bikeData.filter((el)=>{
        return el.brand == val
    })
    append(filB)
    let lc = document.querySelector("#lc")
    lc.innerText = `Used Bikes in India`
}


let budget = document.querySelectorAll("#budget>p")
for(let i=0; i<budget.length; i++){
    budget[i].addEventListener("click",(event)=>{
        budgetFilter(event.target.innerText)
    })
}

let budgetFilter = (val)=>{
    let lc = document.querySelector("#lc")
    lc.innerText = `Used Bikes in India`
    if(val == "Below 30000 Rs"){
        let filbudget = bikeData.filter((el)=>{
            return el.price < 30000;
        }) 
        append(filbudget)
    }else if(val == "30000 - 45000 Rs"){
        let filbudget = bikeData.filter((el)=>{
            return el.price > 30000 && el.price <= 45000;
        }) 
        append(filbudget)
    }else if(val == "45000 - 60000 Rs"){
        let filbudget = bikeData.filter((el)=>{
            return el.price > 45000 && el.price <= 60000;
        }) 
        append(filbudget)
    }else if(val == "60000 - 75000 Rs"){
        let filbudget = bikeData.filter((el)=>{
            return el.price > 60000 && el.price <= 75000;
        }) 
        append(filbudget)
    }else if(val == "75000 - 90000 Rs"){
        let filbudget = bikeData.filter((el)=>{
            return el.price > 75000 && el.price <= 90000;
        }) 
        append(filbudget)
    }else{
        let filbudget = bikeData.filter((el)=>{
            return el.price > 90000;
        }) 
        append(filbudget)
    }
}


let kilometer = document.querySelectorAll("#kilometer>p")
for(let i=0; i<kilometer.length; i++){
    kilometer[i].addEventListener("click",(event)=>{
        kilometerFilter(event.target.innerText)
    })
}


let kilometerFilter = (val)=>{
    let lc = document.querySelector("#lc")
    lc.innerText = `Used Bikes in India`
    if(val == "Below 10000km"){
        let filbudget = bikeData.filter((el)=>{
            return el.km < 10000;
        }) 
        append(filbudget)
    }else if(val == "10000 - 20000km"){
        let filbudget = bikeData.filter((el)=>{
            return el.km > 10000 && el.km <= 20000;
        }) 
        append(filbudget)
    }else if(val == "20000 - 30000km"){
        let filbudget = bikeData.filter((el)=>{
            return el.km > 20000 && el.km <= 30000;
        }) 
        append(filbudget)
    }else if(val == "30000 - 40000km"){
        let filbudget = bikeData.filter((el)=>{
            return el.km > 30000 && el.km <= 40000;
        }) 
        append(filbudget)
    }else{
        let filbudget = bikeData.filter((el)=>{
            return el.km > 40000;
        }) 
        append(filbudget)
    }
}