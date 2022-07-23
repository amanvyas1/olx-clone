let navbar = () =>{
    return `
    <div id="header-container">
    <div id="header">
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png" id="home" alt="error"></div>
        <div><select>
            <option>Select State</option>
            <option >Maharashtra</option>
            <option >Karnataka</option>
            <option >Rajasthan</option>
            <option >Delhi</option>
            <option >Madhya Pradesh</option>
        </select></div>
        <div>
            <input type="text" placeholder="Find Cars, Mobile Phones and More...">
            <button><i class="fa fa-search"></i></button>
        </div>
            
        <div><i class="fa-regular fa-comment"></i></div>
        <div><i class="fa-regular fa-bell"></i></div>
        <div id="login1">Login</i></div>
       <div><button style="display: none;"id="logout" >Logout</button></div>
        <div><button id="sell">SELL</button></div>
    </div>
</div>
<div id="divider">
    
</div>
<div id="menu">
    <h4 id="mega-menu">ALL CATEGORIES</h4>
    <a href="cars.html">Cars</a>
    <a href="motorcycles.html">Motorcycles</a>
    <a href="phone.html">Mobile Phones</a>
    <a href="house.html">For Sale: Houses & Apartments</a>
    <a href="scooter.html">Scooters</a>
    <a href="commercial.html">Commercial & Other Vehicles</a>
</div>
<div id="megamenu-box">
    <div id="mega-content">
        <div id="row">
            <h4>OLX Autos (Cars)</h4>
            <ul class="megamenu-links">
                
            </ul>
        </div>
        <div id="row">
            <h4>Jobs</h4>
            <ul class="megamenu-links">
                <li><a href="">Data entry & Back office</a></li>
                <li><a href="">Sales & Marketing</a></li>
                <li><a href="">BPO & Telecaller</a></li>
                <li><a href="">Driver</a></li>
                <li><a href="">Office Assistant</a></li>
                <li><a href="">Delivery & Collection</a></li>
                <li><a href="">Teacher</a></li>
                <li><a href="">Cook</a></li>
                <li><a href="">Receptionist & Front office</a></li>
                <li><a href="">Operator & Technician</a></li>
                <li><a href="">IT Engineer & Developer</a></li>
                <li><a href="">Hotel & Travel Executive</a></li>
                <li><a href="">Accountant</a></li>
                <li><a href="">Designer</a></li>
                <li><a href="">Other Jobs</a></li>
                
            </ul>
        </div>
        <div id="row">
            <h4>Electronics & Appliances</h4>
            <ul class="megamenu-links">
                <li><a href="">TVs, Video - Audio</a></li>
                <li><a href="">Kitchen & Other Appliances</a></li>
                <li><a href="">Computers & Laptops</a></li>
                <li><a href="">Cameras & Lenses</a></li>
                <li><a href="">Games & Entertainment</a></li>
                <li><a href="">Fridges</a></li>
                <li><a href="">Computer Accessories</a></li>
                <li><a href="">Hard Disks, Printers & Monitors</a></li>
                <li><a href="">ACs</a></li>
                <li><a href="">Washing Machines</a></li>
            </ul>
        </div>
        <div id="row">
            <h4>Fashion</h4>
            <ul class="megamenu-links">
                <li><a href="">Men</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">Kids</a></li>
            </ul>
        </div>
        <div id="row">
            <h4>Mobiles</h4>
            <ul class="megamenu-links">
                <li><a href="">Mobile Phones</a></li>
                <li><a href="">Accessories</a></li>
                <li><a href="">Tablets</a></li>
            </ul>
        </div>
        <div id="row">
            <h4>Commercial Vehicles & Spares</h4>
            <ul class="megamenu-links">
                <li><a href="">Commercial & Other Vehicles</a></li>
                <li><a href="">Spare Parts</a></li>
            </ul>
        </div>
        <div id="row">
            <h4>Pets</h4>
            <ul class="megamenu-links">
                <li><a href="">Fishes & Aquarium</a></li>
                <li><a href="">Pet Food & Accessories</a></li>
                <li><a href="">Dogs</a></li>
                <li><a href="">Other Pets</a></li>

            </ul>
        </div>

        <div id="row">
            <h4>Bikes</h4>
            <ul class="megamenu-links">
                <li><a href="">Motorcycles</a></li>
                <li><a href="">Scooters</a></li>
                <li><a href="">Spare Parts</a></li>
                <li><a href="">Bicycles</a></li>

            </ul>
        </div>

        <div id="row">
            <h4>Furniture</h4>
            <ul class="megamenu-links">
                <li><a href="">Sofa & Dining</a></li>
                <li><a href="">Beds & Wardrobes</a></li>
                <li><a href="">Home Decor & Garden</a></li>
                <li><a href="">Kids Furniture</a></li>
                <li><a href="">Other Household Items</a></li>

            </ul>
        </div>

        <div id="row">
            <h4>Services</h4>
            <ul class="megamenu-links">
                <li><a href="">Electronics & Computer</a></li>
                <li><a href="">Education & Classes</a></li>
                <li><a href="">Drivers & Taxi</a></li>
                <li><a href="">Health & Beauty</a></li>
                <li><a href="">Other Services</a></li>
            </ul>
        </div>

        

      
    </div>
</div>

<div id="mobile-header">
    <div id="head">
        <div>
           <div> <i class="fa-solid fa-bars"></i></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png" ></div>
        </div>
        <div>India</div>
    </div>
    <div id="search">
        <input type="text" id="query"  placeholder="Find Cars, Mobile Phones and More...">
        <i class="fa fa-search"></i>
</div>
    
    
</div>

<div id="login-signup">
    <div id="auth-container">
        <input type="text" id="check_email" placeholder="Email Id">
        <button id="btn-checklogin">Submit</button>

    </div>
    <div id="signup" style="display: none;">
       
        <input type="text" id="signup_email" placeholder="Email Id">
        <input type="text" id="signup_name" placeholder="Enter Name">
        <input type="text" id="signup_pass" placeholder="Password">
        <input type="text" id="signup_cpass" placeholder="Confirm Password">
        <button id="btn-signup">Submit</button>

    </div>
    <div id="login" style="display: none;">
        <input type="text" id="login_email" placeholder="Email Id">
        <input type="text" id="login_pass" placeholder="Password">
        <button id="btn-login">Submit</button>

    </div>
</div>
    `
}
export default navbar;