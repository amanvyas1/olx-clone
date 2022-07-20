let desktop_navbar=()=>{
    return `
    <div id="header">
    <div><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png" alt=""></div>
    <div><select>
        <option >Maharashtra</option>
        <option >Maharashtra</option>
        <option >Maharashtra</option>
        <option >Maharashtra</option>
        <option >Maharashtra</option>
    </select></div>
    <div>
        <input type="text" placeholder="Find Cars, Mobile Phones and More...">
        <button><i class="fa fa-search"></i></button>
    </div>
        
    <div><select >
        <option >ENGLISH </option>
    </select></div>
    <div><i class="fa-regular fa-comment"></i></div>
    <div><i class="fa-regular fa-bell"></i></div>
    <div><i class="fa-regular fa-circle"></i></div>
    <div><button>SELL</button></div>
</div>`
}
let mobile_navbar=()=>{
    return `
    <div id="head">
            <div>
               <div> <i class="fa-solid fa-bars"></i></div>
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png" ></div>
            </div>
            <div>India</div>
        </div>
        <div id="search">
            <input type="text"  placeholder="Find Cars, Mobile Phones and More...">
            <i class="fa fa-search"></i>
    </div>`
}

let menu = () =>{
    return `
    <h4>ALL CATEGORIES</h4>
    <a href="">Cars</a>
    <a href="">Motorcycles</a>
    <a href="">Mobile Phones</a>
    <a href="">For Sale: Houses & Apartments</a>
    <a href="">Scooters</a>
    <a href="">Commercial & Other Vehicles</a>
    <a href="">For Rent: Houses & Apartments</a>`
}


export  {desktop_navbar,mobile_navbar,menu};

