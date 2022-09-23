let nav=$('.nav');
let navlist=$('.nav>li');

navlist.on('mouseover focus', function(){
    $(this).find('ul').stop().slideDown();
});
navlist.on('mouseout blur', function(){
    $(this).find('ul').stop().slideUp();
});

let menu=$('.tab>li');
let menulist=$('.tab-lists>div');

const tab=$('.tab li');
    const tabContent=$('.tabcontents>div');

menu.click(function(){
    let tg=$(this);
    let i=tg.index();
    menu.removeClass('active');
    tg.addClass('active');

    $('.tab-lists>.active').removeClass('active');
    menulist.removeClass('active');
    menulist.eq(i).addClass('active');
    
    return false
});
