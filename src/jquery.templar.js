(function($) {

  //////////////////////////
  // data focused methods //
  //////////////////////////

  $.Templar = function(template, tokens) {
    if(typeof template === 'undefined') {
      throw new Error('Template is not defined. The Templar will find you.')
    }

    this.template = template
    this.tokens   = tokens || {}
  }

  $.Templar.prototype.evaluate = function() {
    var result = this.template

    for(var tokenName in this.tokens) {
      var regExp = new RegExp("%{" + tokenName + "}", "g")
        , value  = this.tokens[tokenName]

      if(typeof value === 'function') {
        value = value()
      }

      result = result.replace(regExp, this.tokens[tokenName])
    }

    return result
  }

  //////////////////////////
  // view focused methods //
  //////////////////////////

  $.fn.templar = function() {
    $(this).text('templar')
  }

})(jQuery)
