window.onscroll = function() {stickyScrollTop()};

function stickyScrollTop() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").className = "navbar navbar-expand-lg navbar-light fixed-top navbg h-80";
    document.querySelector(".navbar-brand img").className="w-70"
    
  } else {
    document.querySelector("nav").className = "navbar navbar-expand-lg navbar-light fixed-top";
    document.querySelector(".navbar-brand img").className=""
  }
}

stickyScrollTop()