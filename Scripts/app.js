// Splash Screen
const splash = document.querySelector('.splash');

splash.onanimationend = () => {
    console.log('Animation ended');
    setTimeout(()=>{
        // splash.classList.add('display-none');
        window.location.href = "Webpages/index.html";
    },500);
};

$(window).bind("pageshow", function() {
    var form = $('form'); 
    // let the browser natively reset defaults
    form[0].reset();
});

// Contact Me
function contactButton(args){
    if(args == "to"){
        document.getElementById("content").style.display = "none";
        document.getElementById("contact-container").style.display = "block";
        document.getElementById("contact-back").style.display = "block";
    }
    else{
        document.getElementById("content").style.display = "block";
        document.getElementById("contact-container").style.display = "none";
        document.getElementById("contact-back").style.display = "none";
    }
    
}

// Contact Form
function validateForm() {
    event.preventDefault();

    var email = $('#email').val();
    var fullname = $('#fullname').val();
    var message = $('#message').val();

    var errMsg = $('.errmsg');
    errMsg.empty();

     
    if(email == null || email == ""){
        // console.log("Email Missing");
        errMsg.append("Email Missing");
    }
    else if(!(email.length >5 && email.includes('@') && email.includes('.'))){
        // console.log("Email Format Invalid")
        errMsg.append("Email Format Invalid");
    }
    else if(fullname == null || fullname == ""){
        // console.log("Full Name Missing");
        errMsg.append("Full Name Missing");
    }
    else if(message == null || message == ""){
        // console.log("Message Missing");
        errMsg.append("Message Missing");
    }
    else {
        $(".contact-container").animate({
            "margin-left": "50%",
            "margin-right": "50%",
            opacity: "0"
        }, 2000);

        $(".contact-container > *").animate({
            "width": "15px",
            "height": "15px",
            opacity: "0"
        }, 2000);

        $('form').submit();
    }
}