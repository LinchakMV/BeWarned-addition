$.get({
    url: 'http://504080.com/api/v1/directories/enquiry-types',            
    beforeSend: function() { $('.option').show();  },
    error: function() { console.log('показати помилку') },
    complete: function() { $('.option').hide(); },
    success: function(response) { $.each(response.data, function(index, value) {
        $(function (){
            var a = value.name;
                $(".enquiry-type").append('<option>' + a + '</option>');                
        })
    })}
});


    