let product = document.querySelector(".product")
let company = document.querySelector(".company")
let connect = document.querySelector(".connect")

function dropDownProduct(){
    if(product.className === "product"){
        product.className += " product-drop-down"
    }
    else{
        product.className = "product"
    }
}



function dropDownCompany(){
    if(company.className === "company"){
        company.className += " company-drop-down"
    }
    else{
        company.className = "company"
    }
}

function dropDownConnect(){
    if(connect.className === "connect"){
        connect.className += " connect-drop-down"
    }
    else{
        connect.className = "connect"
    }
}

function myFunction(){
    let hamburger = document.querySelector('#toggle')
    let navbar = document.getElementById('myNavLinks');
    if (navbar.className==="nav-links") {
        hamburger.src = "../images/icon-close.svg"
        navbar.className+=" responsive";
    } else {
        navbar.className="nav-links"
        hamburger.src="../images/icon-hamburger.svg"
    }
}
