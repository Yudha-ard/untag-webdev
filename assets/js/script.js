$(document).ready(function() {
    
    //Scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#btnTop').fadeIn();
		} else {
			$('#btnTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('#btnTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    // End Scroll to top

    // Scroll to section
    $(document).ready(function(){
    $(".navbar_link").on('click', function(event) {
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
    // End scroll to section

    $('.topPost').owlCarousel({
      loop:true,
      nav:true,
      margin:100,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:3,
              margin:200,
          },
          1200:{
              items:4
          }
      }
  })

});

$(window).on('scroll', function() {
  let scrollTop = $(this).scrollTop();

  if (scrollTop) 
  {
    $('nav').addClass('black');
  }
  else
  {
    $('nav').removeClass('black');
  }
});

$(document).ready(function() {
  $('.fa.fa-search').on('click', function() {

    var a = document.getElementById('search');

    if (a.style.visibility == "hidden")
    {
      a.style.visibility = "visible";
      a.style.opacity = '1';
      a.style.width = '200px';
    }
    else
    {
      a.style.visibility = "hidden";
      a.style.opacity = '0';
      a.style.width = '1px';
    }

  });


  // $('.icon-bar').on('click', function () {
  //     $('nav').addClass('black');
  // });

  $("#popUp").on('click', function() {
    $(".row.pop").css("visibility", "visible");
    $(".row.pop").css("left", "15px");
    $(".row.pop").css("opacity", "1");
  });

  $(".close").on('click', function() {
    $(".row.pop").css("visibility", "hidden");
    $(".row.pop").css("left", "100px");
    $(".row.pop").css("opacity", "0");
  });  
});

