// Preloader
$(document).ready(function () {
    $(".loader").addClass("hide");
    setTimeout(function () {
        $(".loader").removeClass("hide");
    }, 4500);
});
// Preloader

// Dark Mode Toggler
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
// Dark Mode Toggler

// Menu Item Hover (Link)
$(document).ready(function () {
    $("#i1").hover(function () {
        $("#i2").addClass("hoverstate");
        $("#i3").addClass("hoverstate");
        $("#i4").addClass("hoverstate");
    },
        function () {
            $(".content__item").removeClass("hoverstate");
        });
});
$(document).ready(function () {
    $("#i2").hover(function () {
        $("#i1").addClass("hoverstate");
        $("#i3").addClass("hoverstate");
        $("#i4").addClass("hoverstate");
    },
        function () {
            $(".content__item").removeClass("hoverstate");
        });
});
$(document).ready(function () {
    $("#i3").hover(function () {
        $("#i2").addClass("hoverstate");
        $("#i1").addClass("hoverstate");
        $("#i4").addClass("hoverstate");
    },
        function () {
            $(".content__item").removeClass("hoverstate");
        });
});
$(document).ready(function () {
    $("#i4").hover(function () {
        $("#i2").addClass("hoverstate");
        $("#i3").addClass("hoverstate");
        $("#i1").addClass("hoverstate");
    },
        function () {
            $(".content__item").removeClass("hoverstate");
        });
});
// Menu Item Hover (Link)

// Menu Open Sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// Menu Open Sidenav

// Menu Hover Background Animation
$(document).ready(function () {
    $("#i1").hover(function () {
        $("#vendi").addClass("img-1");
    },
        function () {
            $("#vendi").removeClass("img-1");
        });
});
$(document).ready(function () {
    $("#i2").hover(function () {
        $("#vendi").addClass("img-2");
    },
        function () {
            $("#vendi").removeClass("img-2");
        });
});
$(document).ready(function () {
    $("#i3").hover(function () {
        $("#vendi").addClass("img-3");
    },
        function () {
            $("#vendi").removeClass("img-3");
        });
});
// Menu Hover Background Animation

// Change Assets when Dark Mode
$(document).ready(function () {
    var img = $('#div1');
    var prev = img[0].src;
    function toggle(img) {
        let src = img.src;
        if (src == prev) {
            img.src = "images/card-light.png";
        } else {
            img.src = prev;
        }
    }
    $('#menu-btn').on('click', function () {
        toggle(img[0]);
    })
});
$(document).ready(function () {
    var img = $('#mastercard');
    var prev = img[0].src;
    function toggle(img) {
        let src = img.src;
        if (src == prev) {
            img.src = "images/mastercard-light.svg";
        } else {
            img.src = prev;
        }
    }
    $('#menu-btn').on('click', function () {
        toggle(img[0]);
    })
});
$(document).ready(function () {
    var img = $('#ill');
    var prev = img[0].src;
    function toggle(img) {
        let src = img.src;
        if (src == prev) {
            img.src = "images/illustration-light.svg";
        } else {
            img.src = prev;
        }
    }
    $('#menu-btn').on('click', function () {
        toggle(img[0]);
    })
});
$(document).ready(function () {
    var img = $('#badge-1');
    var prev = img[0].src;
    function toggle(img) {
        let src = img.src;
        if (src == prev) {
            img.src = "images/badge-1-light.png";
        } else {
            img.src = prev;
        }
    }
    $('#menu-btn').on('click', function () {
        toggle(img[0]);
    })
});
$(document).ready(function () {
    var img = $('#badge-2');
    var prev = img[0].src;
    function toggle(img) {
        let src = img.src;
        if (src == prev) {
            img.src = "images/badge-2-light.png";
        } else {
            img.src = prev;
        }
    }
    $('#menu-btn').on('click', function () {
        toggle(img[0]);
    })
});
$(document).ready(function () {
    var img = $('#badge-3');
    var prev = img[0].src;
    function toggle(img) {
        let src = img.src;
        if (src == prev) {
            img.src = "images/badge-3-light.png";
        } else {
            img.src = prev;
        }
    }
    $('#menu-btn').on('click', function () {
        toggle(img[0]);
    })
});
$(document).ready(function () {
    var img = $('#smmyt');
    var prev = img[0].src;
    function toggle(img) {
        let src = img.src;
        if (src == prev) {
            img.src = "https://assets4.lottiefiles.com/packages/lf20_49ojohmi.json";
        } else {
            img.src = prev;
        }
    }
    $('#menu-btn').on('click', function () {
        toggle(img[0]);
    })
});
$(document).ready(function () {
    var img = $('#smmfb');
    var prev = img[0].src;
    function toggle(img) {
        let src = img.src;
        if (src == prev) {
            img.src = "https://assets1.lottiefiles.com/packages/lf20_zwe63f25.json";
        } else {
            img.src = prev;
        }
    }
    $('#menu-btn').on('click', function () {
        toggle(img[0]);
    })
});
$(document).ready(function () {
    var img = $('#smmig');
    var prev = img[0].src;
    function toggle(img) {
        let src = img.src;
        if (src == prev) {
            img.src = "https://assets1.lottiefiles.com/packages/lf20_zwe63f25.json";
        } else {
            img.src = prev;
        }
    }
    $('#menu-btn').on('click', function () {
        toggle(img[0]);
    })
});
// Change Assets when Dark Mode

// Card 3D Movement Mouse Follow
$(document).ready(function () {
    var $one = $('#div1'),
        browserPrefix = "",
        usrAg = navigator.userAgent;
    if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) {
        browserPrefix = "-webkit-";
    } else if (usrAg.indexOf("Opera") > -1) {
        browserPrefix = "-o";
    } else if (usrAg.indexOf("Firefox") > -1) {
        browserPrefix = "-moz-";
    } else if (usrAg.indexOf("MSIE") > -1) {
        browserPrefix = "-ms-";
    }

    $(document).mouseenter(function (event) {
        $('#wrapper').addClass('mouse-enter');
        setTimeout(function () {$('#wrapper').removeClass('mouse-enter');}, 400);
    });

    $(document).mousemove(function (event) {
        var cx = Math.ceil(window.innerWidth / 2.5),
            cy = Math.ceil(window.innerHeight / 2.5),
            dx = event.pageX - cx,
            dy = event.pageY - cy,
            tiltx = (dy / cy),
            tilty = - (dx / cx),
            radius = Math.sqrt(Math.pow(tiltx, 3) + Math.pow(tilty, 3)),
            degree = (radius * -15);
        $one.css(browserPrefix + 'transform', 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
    });
});
// Card 3D Movement Mouse Follow




