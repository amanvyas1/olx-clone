let dataLs = JSON.parse(localStorage.getItem('item'));

let imagearr = [];

imagearr.push(dataLs.image1)
imagearr.push(dataLs.image2)
imagearr.push(dataLs.image2)


let container1 = document.getElementById('disc');

container1.append(dataLs.description)

let container3 = document.getElementById('details')
let pic = document.createElement('img');
    
function append2(dataLs){
    pic.src = dataLs.image1
    container3.append(pic);
}
append2(dataLs)



function append(dataLs){
    let container2 = document.getElementById('price')
    let p = document.createElement('h1');
    p.innerText = `${"₹"}`+dataLs.price; 
     
    let n = document.createElement('p');
    n.innerText = dataLs.name;

    let a = document.createElement('p');
    a.innerText = dataLs.address;

    container2.append(p,n,a);
}

append(dataLs)

let imgNum=0;

let btn = document.querySelectorAll('#details>button')

btn[0].addEventListener('click',function(){
    if(imgNum===0){
       
        imgNum = imagearr.length-1;
    }else{
        imgNum--;
    }
    pic.src = imagearr[imgNum]
})
btn[1].addEventListener('click',function(){
    if(imgNum===imagearr.length-1){
        imgNum = 0;
    }else{
        imgNum++;
    }
    pic.src = imagearr[imgNum]
})