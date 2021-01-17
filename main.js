
 $(document).ready(function (){

$("#show").click(function() {

    var text = $("#show").text();

    console.log( text );
    if(text==='See All Categories'){
        $(this).text("Hide Categories");
             
    }else{
        $(this).text("See All Categories");
         
}

});
    
});


$(document).ready(function(){
    $('.header').height('400px');
  })

 


