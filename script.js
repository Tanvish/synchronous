$(document).ready(function() {
$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open',500);
  $(this).toggleClass('open');
  })

});
$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 20) {
      $('.header').addClass('scroll-nav',500);
    }
    else {
    $('.header').removeClass('scroll-nav');
    }
  });
});
$(document).ready(function(){
 
  $("a").on('click', function(event) {
    
    if (this.hash !== "") {
    
      event.preventDefault();
      
      var hash = this.hash;

            $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
       
        window.location.hash = hash;
      });
    }
  });
});
function check(form){
  if(document.form.username.value=="dwarka" && document.form.password.value== "obsession"){
    window.open(tanvish.github.io)
  }
  else
  {
    alert("The Username and password entered don't match")
  }
}
function check() {
    var x = document.forms["login-form"]["username"].value;
    var y = document.forms["login-form"]["password"].value;
    
    if (x == ""||x==null||y == ""||y==null)   {
        alert("Name must be filled out");
        return false;
    }
    else
    {
      if(x=="1"){ if(y="2") {
          
            window.open(".html")
}

      }
      else{
        alert('Invalid Username/password')
      }
      }
    }
