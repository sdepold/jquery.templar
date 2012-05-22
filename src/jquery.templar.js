(function($) {

  //////////////////////////
  // data focused methods //
  //////////////////////////

  $.Templar = function(template) {
    if(typeof template === 'undefined') {
      throw new Error('Template is not defined. The Templar will find you.')
    }

    this.template = template
  }

  $.Templar.prototype.evaluate = function(tokens) {
    var result = this.template

    tokens = tokens || {}

    for(var tokenName in tokens) {
      var regExp          = new RegExp("%{" + tokenName + "}", "g")
        , valueOrFunction = tokens[tokenName]

      if(typeof valueOrFunction === 'function') {
        valueOrFunction = valueOrFunction()
      }

      result = result.replace(regExp, valueOrFunction)
    }

    return result
  }

  //////////////////////////
  // view focused methods //
  //////////////////////////

  $.fn.templar = function(tokens) {
    var $element = $(this)
      , templar  = new $.Templar($element.text())

    $(this).text(templar.evaluate(tokens))
  }

})(jQuery)
