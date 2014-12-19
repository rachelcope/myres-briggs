var calcType = function() {
  var mbti = '';
  $('.button1, .button2').each(function(i, obj){
    if ($(obj).hasClass('active')) {
      mbti += $(obj).data('letter');
    }
  });

  var typeLink = 'http://en.wikipedia.org/wiki/' + mbti;
  $('.mbti-letters').html(mbti).attr('href', typeLink);

  if (mbti.length === 4){
    $('.your-type').show();
  } else {
    $('.your-type').hide();
  }
};


$('.button1, .button2').on('click', function() {
  $(this).parent().parent().children('.button-wrapper').children('.button1, .button2').removeClass('active');
  $(this).addClass('active');
  calcType();
});
(function() {


}).call(this);
