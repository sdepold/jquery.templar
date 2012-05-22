(function($) {

  //////////////////////////
  // data focused methods //
  //////////////////////////

  $.Templar = function() {}
  $.Templar.prototype.getText = function() {
    return 'templar'
  }

  //////////////////////////
  // view focused methods //
  //////////////////////////

  $.fn.templar = function() {
    $(this).text('templar')
  }

  // $.fn.templar = function() {
  //   var text = new $.Templar().getText()
  //   $(this).text(text)
  // }

})(jQuery)
