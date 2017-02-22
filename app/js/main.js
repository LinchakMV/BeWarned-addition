$(function() {
    $("textarea[class='text-count']").keyup(function count(){
        number = $("textarea[class='text-count']").val().length;
        $("#count").html("("+ number +"/1000)");
    });
});

