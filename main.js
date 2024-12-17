$(document).ready(function(){

    // header menu
    $('.main-menu ul li').on('click', function(){
        $('.main-menu ul li').removeClass('active');
        $(this).addClass('active')
    });

    // faq Toggle
    $('.faq-btn1').click(function(){
        console.log('.faq-item1');
        $('.faq-item1').slideToggle('slow');
    });
    $('.faq-btn2').click(function(){
        $('.faq-item2').slideToggle('slow');
    });
    $('.faq-btn3').click(function(){
        $('.faq-item3').slideToggle('slow');
    });


    // contact form
    // select option
    $('.country').on('change',function(){
        console.log('wrok');
        let selvalue = $(this).val();
        if(selvalue == 'bd'){
            $('.bd').show();
            $('.ind').hide();
            $('.pk').hide();
        }else if(selvalue == 'pk'){
            $('.pk').show();
            $('.ind').hide();
            $('.bd').hide();
        } else if(selvalue == 'ind'){
            $('.ind').show();
            $('.bd').hide();
            $('.pk').hide();
        } else{
            $('.bd').hide();
            $('.pk').hide();
            $('.ind').hide();
        }
    });

    // pass hide show
    $('.showHide').on('click',function(){
        if(this.checked){
            console.log('.checked');
            let passtype = $('.passFiled').attr('type');
            if(passtype == 'password'){
                $('.passFiled').attr('type', 'text');
            }
        }else{
            $('.passFiled').attr('type', 'password');
        }
        
    });



    // cart pro remove
    $('.delete').on('click',function(){
        console.log('delete');
        $(this).parent().remove();
    })



    // footer 
    $('.footer-wrap').find('.copywrite').html('© copywrite <a href="#">Ibrahim Coder</a> 2024');
    $('.footer-wrap').append('<p>This is append</p>');
    $('.footer-wrap').prepend('<p>This is Prepend</p>');











})(jQuery);