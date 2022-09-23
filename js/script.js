let nav=$('.nav');
let navlist=$('.nav>li');

navlist.on('mouseover focus', function(){
    $(this).find('ul').stop().slideDown();
});
navlist.on('mouseout blur', function(){
    $(this).find('ul').stop().slideUp();
});