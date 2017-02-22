function call() {
    var msg   = $('form').serialize();
    console.log(msg);
    $.ajax({
      type: "POST",
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',        
      url: 'http://504080.com/api/v1/support',
      data: msg,
      success: function(data) {console.log(data)},
      error:  function(xhr, str){
	      console.log(xhr.status, xhr.statusText );            
          }
    }); 
}