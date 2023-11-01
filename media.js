window.onscroll = function () { scrollFunction() };
let up = document.getElementById('up');

function scrollFunction() {
  if (document.body.scrollTop > 538 || document.documentElement.scrollTop > 538) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("up").style.visibility = "visible";
    document.getElementById("uper").style.visibility = "visible";
    document.getElementById("navbar").style.backgroundColor = "#fff"
    document.getElementById("navbar").style.position = "sticky"
    document.getElementById("navbar").style.boxShadow = "0px 0px 4px 2px #989ea3"
  } else {
    document.getElementById("navbar").style.top = "-67px";
    document.getElementById("up").style.visibility = "hidden";
    document.getElementById("uper").style.visibility = "hidden";
    document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px #989ea3"
    document.getElementById("navbar").style.backgroundColor = "#ebf8fc"
  }
}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// tab function 

(function () {
  $(function () {
    var toggle;
    return toggle = new Toggle('.toggle');
  });

  this.Toggle = (function () {
    Toggle.prototype.el = null;

    Toggle.prototype.tabs = null;

    Toggle.prototype.panels = null;

    function Toggle(toggleClass) {
      this.el = $(toggleClass);
      this.tabs = this.el.find(".tab");
      this.panels = this.el.find(".panel");
      this.bind();
    }

    Toggle.prototype.show = function (index) {
      var activePanel, activeTab;
      this.tabs.removeClass('active');
      activeTab = this.tabs.get(index);
      $(activeTab).addClass('active');
      this.panels.hide();
      activePanel = this.panels.get(index);
      return $(activePanel).show();
    };

    Toggle.prototype.bind = function () {
      var _this = this;
      return this.tabs.unbind('click').bind('click', function (e) {
        return _this.show($(e.currentTarget).index());
      });
    };

    return Toggle;

  })();

}).call(this);

// image viewer

$(".panels img").click(function () {
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function () {
  $('#image-viewer').hide();
});


$('Explore_More_').click(function () {
  $('Explore_Categories');
});


$("#Explore_More").click(function () {
  $('Explore_Categories');
});




window.onscrollend = function () { scrollFunction_explore() };

function scrollFunction_explore() {
  if (document.body.scrollTop > 2980 || document.documentElement.scrollTop > 2980) {
    document.getElementById("toggles_12").style.top = "61px";
    document.getElementById("toggles_12").style.paddingTop = "30px";
    document.getElementById("toggles_12").style.zIndex = "1";
    document.getElementById("toggles_12").style.backgroundColor = "#ebf8fc";
    document.getElementById("toggles_12").style.position = "sticky";
    document.getElementById("toggles_12").style.position = "sticky";
  } else {
    document.getElementById("toggles_12").style.top = "0px";
    document.getElementById("toggles_12").style.position = "static";
  }
}



$(".menu_andriod>i").click(function () {
  $(".menu_andriod_inner ").css('left', '0%');
});


$(".menu_andriod_inner_uper>span").click(function () {
  $(".menu_andriod_inner ").css('left', '-90%');
});


$(".menu_andriod_inner_uper>ul>li").click(function () {
  $(".menu_andriod_inner").css('left', '-90%');
});

 