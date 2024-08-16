// JavaScript source code


// BTN 1
$(document).ready(function () {
    $(".btn_1").click(function () {
        $(this).toggleClass("active");
    });
});


// BTN 2
$(document).ready(function () {
    $(".btn_2").click(function () {
        $(".btn_in_2").addClass("active");
    });
    $(".btn_2b").click(function () {
        $(".btn_in_2").removeClass("active");
    });
});

// BTN 3
$(document).ready(function () {
    $(".btn_3").click(function () {
        $(".btn_in_3").slideDown(2000);
    });
});


// BTN 4
$(document).ready(function () {
    $(".btn_4").click(function () {
        $(".btn_in_4").hide(2000);
    });
});

// BTN 5
$(document).ready(function () {
    $(".btn_5").click(function () {
        $(".btn_in_5").css({fontSize: "20px", color:"#f00", fontWeight:"800"});
    });
});


// BTN 6
$(document).ready(function () {
    $(".btn_6").click(function () {
        $(".btn_in_6").append("<p>this is</p>")
    });
});


// BTN 7
$(document).ready(function () {
    $(".btn_7").click(function () {
        $(".btn_in_7 b").slideToggle(3000);
    });
});


// BTN 8
$(document).ready(function () {
    $(".btn_8").click(function () {
        $(".btn_in_8").css({ fontSize: "30px", color: "#f00", background: "#ccc" });
        /*$(".btn_in_8").css({ "background": "green", "font-size": "20px", "color": "#fff", "padding": "10px" });*/
    });
});


// BTN 9
$(document).ready(function () {
    $(".btn_9").click(function () {
        $(".btn_in_9").animate({ backgroundColor: "gray", color: "#fff", fontSize: "+=5px", height: "100px", left: "50px" }, 1500).css({ backgroundColor: "#f00", color: "#fff", padding: "10px" });
    });
});



// BTN 10
$(document).ready(function () {
    $(".btn_10").click(function () {
        let tomorrow = "rain"
        if (tomorrow == "norain") {
            $(".btn_in_10").css({fontSize: "20px", color: "#f00"})
        }
        else {
            $(".btn_in_10").css({ fontSize: "20px", color: "#3366e8" }).delay(5000)
        }
    });
});




// class toggle
$(document).ready(function () {
    $(".animation3 .btn8").click(function () {
        $(".animation3").toggleClass("active");
    });
});

// BTN 9
$(document).ready(function () {
    $(".animation3 .btn9").click(function () {
        $(".btn9_in").slideToggle(1000);
    });
});




$(document).ready(function () {
    $(".divclickbtn6").click(function () {
        $(".divclickbtn6-in").css({ fontSize: "+=30px", color: "#ccc", background: "#f00" });
        /*$(".divclickbtn6-in").fadeToggle();*/
    });
});





