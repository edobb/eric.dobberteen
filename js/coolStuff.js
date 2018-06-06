var projects = [
    {
        category : "design",
        thumb: "union3.jpg",
        full: "poster4.jpg",
        heading: "Graphic Design / Marketing",
        blurb: "UNAC Nurse's Union</b><br> Poster for social media contract negotiation campaign.",
        link: ""
    },
    {
        category : "development",
        thumb: "mikeLaw.jpg",
        full: "mikeLaw-full.jpg",
        heading: "Web Design & Development",
        blurb: "Local attorney website design, photography, development, PPC",
        link: "<a href='http://sandiegodivorceattorney.net' target='_blank'>SanDiegoDivorceAttorney.net</a>"
    },
    {
        category : "design",
        thumb: "union2.jpg",
        full: "poster6.jpg",
        heading: "Graphic Design / Marketing",
        blurb: "UNAC Nurse's Union</b><br> Poster for social media contract negotiation campaign.",
        link: ""
    },
    {
        category : "design",
        thumb: "portfolio-ui-1.jpg",
        full: "portfolio-ui-1.jpg",
        heading: "UX / UI App design",
        blurb: "UI design for iWebGate's application",
        link: ""
    },
    {
        category : "development",
        thumb: "rynoPower.jpg",
        full: "rynoPower.jpg",
        heading: "Web Development / eCommerce",
        blurb: "Action sport suppliment company. Deployed WooCommerce, SSL and Payment processing",
        link: "<a href='http://rynopower.com' target='_blank'>RynoPower.com</a>"
    },
    {
        category : "design",
        thumb: "portfolio-print-1.jpg",
        full: "portfolio-print-1.jpg",
        heading: "Business Card Design",
        blurb: "Business cards for Brakeman Pro, a ruby security analyzer.",
        link: ""
    },
    {
        category : "development",
        thumb: "react-thumb.jpg",
        full: "react-full.jpg",
        heading: "Full MERN Stack Application",
        blurb: "An application linking handy-persons with people needing some work done. MongoDB, Express.js, React.Js, Node",
        link: "<a href='http://fastfix.herokuapp.com/signup' target='_blank'>FastFix911 (Deploymwent site loads slowly)</a>"
    }
];

var devProjects = [
    {
        category : "development",
        thumb: "react-thumb.jpg",
        full: "react-full.jpg",
        heading: "Full MERN Stack Application",
        blurb: "An application linking handy-persons with people needing some work done. MongoDB, Express.js, React.Js, Node",
        link: "<a href='http://fastfix.herokuapp.com/signup' target='_blank'>FastFix911 (Deploymwent site loads slowly)</a>"
    },
    {
        category : "development",
        thumb: "rynoPower.jpg",
        full: "rynoPower.jpg",
        heading: "Web Development / eCommerce",
        blurb: "Action sport suppliment company. Deployed WooCommerce, SSL and Payment processing",
        link: "<a href='http://rynopower.com' target='_blank'>RynoPower.com</a>"
    },
    {
        category : "development",
        thumb: "mikeLaw.jpg",
        full: "mikeLaw-full.jpg",
        heading: "Web Design & Development",
        blurb: "Local attorney website design, photography, development, PPC",
        link: "<a href='http://sandiegodivorceattorney.net' target='_blank'>SanDiegoDivorceAttorney.net</a>"
    }
]
var designProjects = [
    {
        category : "design",
        thumb: "portfolio-print-1.jpg",
        full: "portfolio-print-1.jpg",
        heading: "Business Card Design",
        blurb: "Business cards for Brakeman Pro, a ruby security analyzer.",
        link: ""
    },
    {
        category : "design",
        thumb: "portfolio-ui-1.jpg",
        full: "portfolio-ui-1.jpg",
        heading: "UX / UI App design",
        blurb: "UI design for iWebGate's application",
        link: ""
    },
    {
        category : "design",
        thumb: "union2.jpg",
        full: "poster6.jpg",
        heading: "Graphic Design / Marketing",
        blurb: "UNAC Nurse's Union</b><br> Poster for social media contract negotiation campaign.",
        link: ""
    },
    {
        category : "design",
        thumb: "union3.jpg",
        full: "poster4.jpg",
        heading: "Graphic Design / Marketing",
        blurb: "UNAC Nurse's Union</b><br> Poster for social media contract negotiation campaign.",
        link: ""
    }
];
var marketingProjects = [
    {
        category : "marketing",
        thumb: "union2.jpg",
        full: "poster6.jpg",
        heading: "Graphic Design / Marketing",
        blurb: "UNAC Nurse's Union</b><br> Poster for social media contract negotiation campaign.",
        link: ""
    },
    {
        category : "marketing",
        thumb: "union3.jpg",
        full: "poster4.jpg",
        heading: "Graphic Design / Marketing",
        blurb: "UNAC Nurse's Union</b><br> Poster for social media contract negotiation campaign.",
        link: ""
    },
    {
        category : "marketing",
        thumb: "mikeLaw.jpg",
        full: "mikeLaw-full.jpg",
        heading: "Web Design & Development",
        blurb: "Local attorney website design, photography, development, PPC",
        link: "<a href='http://sandiegodivorceattorney.net' target='_blank'>SanDiegoDivorceAttorney.net</a>"
    }
]

function looping() {

    for(i=0; i < projects.length; i++){
        
        $('#gallery').append(
    "<div class='card " + projects[i].category + "'><div class='card-body'><p><a data-fancybox data-animation-duration='700' data-src='#modal" + i + "' href='javascript:;' class='portLink'><img src='img/" + projects[i].thumb + "'></a></p><div style='display: none;' id='modal" + i + "' class='animated-modal'><img src='img/" + projects[i].full + "'><h2>" + projects[i].heading + "</h2><p><b class='portBold'>" + projects[i].blurb + "<br>" + projects[i].link + "</p></div></div></div>"
        )
    }
};

looping();


$( "#development" ).click(function() {
    $( ".design" ).hide( "fade" );
    $( ".marketing" ).hide( "fade" );
    $( ".development:hidden" ).show( "fade" );
});
$( "#design" ).click(function() {
    $( ".development" ).hide( "fade" );
    $( ".design" ).show( "fade" );
    $( ".marketing" ).hide( "fade" );
});
$( "#marketing" ).click(function() {
    $( ".development" ).hide( "fade" );
    $( ".design" ).hide( "fade" );
    $( ".marketing" ).show( "fade" );
});
$( "#everything" ).click(function() {
    $( ".development" ).show( "slow" );
    $( ".design" ).show( "slow" );
    $( ".marketing" ).show( "slow" );
});


$(window).scroll(function () {
    $('#designSkills').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $('.psScore').addClass("stretchRed"),
                $('.aiScore').addClass("stretchGreen"),
                $('.anScore').addClass("stretchYellow"),
                $('.inScore').addClass("stretchBlue");
            $('.scoreBg>span').addClass("scoreText");
        }
    });




});
$('a[href^=#]').on("click", function (e) {
    var t = $(this.hash);
    var t = t.length && t || $('[name=' + this.hash.slice(1) + ']');
    if (t.length) {
        var tOffset = t.offset().top;
        $('html,body').animate({ scrollTop: tOffset - 20 }, 'slow');
        e.preventDefault();
    }
});

