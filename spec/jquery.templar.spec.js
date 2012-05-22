buster.spec.expose()

describe('jquery.templar', function() {
  before(function() {
    this.element = jQuery('<div>').appendTo(jQuery('body'))
  })

  it('prints "templar"', function() {
    this.element.templar()
    expect(this.element.text()).toEqual('templar')
  })
})
