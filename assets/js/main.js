

// detect class inside viewport area
(function($) {
    
    $.fn.visible = function(partial) {
            
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
        
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };
    // IF on mobile viewport size
    if ($(window).width() < 768) {
        $.fn.visibleoff = function(partial) {
            
            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top + 300,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;
            
            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    
        };
    } 
    // end
    
    // ELSE outside mobile viewport size
    else {
        $.fn.visibleoff = function(partial) {
            
            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top + 250,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;
            
            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    
        };
        $.fn.visibleoff02 = function(partial) {
            
            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top + 350,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;
            
            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    
        };
    };
    // end IF/ELSE
        
})(jQuery);
// end detect class inside viewport area

function fadeIn() {
    // Setting the position at which the effect is applied from the bottom of the screen
    var EffectH = 100;
    // Setting how much to move
    var EffectTop = 55;
    // Setting how much to move
    var EffectRight = 55;
    // Effect time (ms)
    var EffectTime = 800;
    var EffectTime2 = 1000;
    // Effect delay time
    var EffectDelay = 400;
    // Place it in a transparent place where it is lowered slightly as preparation.
    $('.anim01').css({
        position: 'relative',
        left: 0,
        top: EffectTop,
        opacity: 0,
        transition: EffectTime + 'ms'
    });
    //second animation with delay
    $('.anim02').css({
        position: 'relative',
        left: 0,
        top: EffectTop,
        opacity: 0,
        transition: EffectTime + 'ms',
        transitionDelay: EffectDelay + 'ms'
    });
    //second animation with delay
    $('.anim0reveal').css({
        position: ' ',
        bottom: 0,
        top: EffectTop,
        opacity: 0,
        transition: EffectTime2 + 'ms',
    });
    // Scroll event
    $(window).on('scroll load', function() {
        var scTop = $(this).scrollTop();
        var scBottom = scTop + $(this).height();
        var effectPos = scBottom - EffectH;
        // Compare the position of each effect target with the scroll position
        // execute the effect if it is in range
        $('.anim01, .anim02, .animReveal').each(function() {
            var thisPos = $(this).offset().top;
            if (thisPos < effectPos) {
                $(this).css({
                    'opacity': 1,
                    top: 0
                });
            }
        });
    });
};



// Get the modal

var jsmodal_container = document.getElementsByClassName("jsmodal--container");

// Get the button that opens the modal

var jsmodal_btn = document.getElementsByClassName("jsmodal--btn");

// Get the <span> element that closes the modal
var jsmodal_close = document.getElementsByClassName("jsmodal--close");

// When the user clicks the button, open the modal
function setDataIndex() {

    for (i = 0; i < jsmodal_btn.length; i++)
    {
        jsmodal_btn[i].setAttribute('data-index', i);
        jsmodal_container[i].setAttribute('data-index', i);
        jsmodal_close[i].setAttribute('data-index', i);
    }
}



for (i = 0; i < jsmodal_btn.length; i++)
{
    jsmodal_btn[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        jsmodal_container[ElementIndex].style.display = "block";
        jsmodal_container[ElementIndex].classList.add("modal--open");
    };

    // When the user clicks on <span> (x), close the modal
    jsmodal_close[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        jsmodal_container[ElementIndex].style.display = "none";
        jsmodal_container[ElementIndex].classList.remove("modal--open");
    };

}

window.onload = function() {

    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === jsmodal_container[event.target.getAttribute('data-index')]) {
        jsmodal_container[event.target.getAttribute('data-index')].style.display = "none";
        jsmodal_container[event.target.getAttribute('data-index')].classList.remove("modal--open");
    }
};



var $images = $('.parallax');
var window_h = $(window).height();

$(window).scroll(function() {
    var windowScrollTop = $(window).scrollTop();
  
    if (windowScrollTop == 0) {
            TweenLite.to($images, 1.2, {
            yPercent: 0,
            ease: Power1.easeOut,
            overwrite: 0
       });
    }
    else{   
        $images.each(function() {
        var elementOffsetTop = $(this).offset().top,
             element_h = $(this).height(),          
             velocity = $(this).data('velocity');

             if (windowScrollTop + window_h > elementOffsetTop && windowScrollTop  < elementOffsetTop + element_h) {
                //if in view:
                    TweenLite.to($(this), 1.2, {
                    yPercent: (windowScrollTop + window_h - elementOffsetTop) / window_h * velocity,
                    ease: Power1.easeOut,
                    overwrite: 0
               });
             }
        });
    }


    var window_width = $(window).width() - $('#scr-right').width();
    var document_height = $(document).height() - $(window).height();

    $(function () {
        $(window).scroll(function () {
            var scroll_position = $(window).scrollTop();
            var object_position_right = window_width * (scroll_position / document_height);
            $('#scr-right').css({
                'right': object_position_right
            });
        });
    });

    // scroll trigger aninmation

});

function copyToClipboard(str) {
    // Create an auxiliary hidden input
    var aux = document.createElement("input");
    aux.setAttribute("value", str);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  
    // Add "copied" state
    const btn = document.querySelector(".footer--innerLink01");
    btn.classList.add("copied");
  
    // Revert after 0.8s
    setTimeout(() => {
      btn.classList.remove("copied");
    }, 800);
  }

window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (section) {
        const el = document.querySelector(`[data-section="${section}"]`);
        if (el) el.scrollIntoView({ behavior: "instant" }); // jump, no smooth scroll
    }
});
const headerOffset = 80; // height of your navbar
const elementPosition = el.getBoundingClientRect().top;
const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

window.scrollTo({
  top: offsetPosition,
  behavior: "instant" // no smooth scroll
});
$(function () {
    scroll();
    swipers();
    fadeIn();
});
