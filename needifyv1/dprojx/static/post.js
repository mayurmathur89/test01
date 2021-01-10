$( document ).ready(function() {
        scroll();
		success();
    });
	// Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#needify']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
var success = function() {
// Assuming this JSON.
var data = {items:[{title:"ONE",content:"Something-1111"},
                   {title:"TWO",content:"Something-2"},
                   {title:"THREE",content:"Something-3"}
                  ]
           };
  data.items.forEach(function(item,index) {
    $('.latestinfo').append(
      '<div class="col-lg-4">'+
        '<div class="panel panel-default text-center"">'+
          '<div class="panel-heading" role="tab" id="heading_'+index+'">'+
            '<h4 class="panel-title">'+
              '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_'+index+'" aria-expanded="true" aria-controls="collapse_'+index+'">'+
                  item.title+
              '</a>'+
            '</h4>'+
          '</div>'+
          '<div id="collapse_'+index+'" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading_'+index+'">'+
            '<div class="panel-body">'+
              item.content+
            '</div>'+
          '</div>'+
         '</div>'+
       '</div>'
      );
  });
}

