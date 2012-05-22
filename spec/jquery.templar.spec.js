buster.spec.expose()

describe('jquery.templar', function() {
  describe('$.Templar', function() {
    it('returns the passed template if no token map is passed', function() {
      expect(new $.Templar("foo bar").evaluate()).toEqual("foo bar")
    })

    it("returns the passed template if an empty token map is passed", function() {
      expect(new $.Templar("foo bar").evaluate({})).toEqual("foo bar")
    })

    it("returns the passed template without tokens even if token map is passed", function() {
      expect(new $.Templar("foo bar").evaluate({foo: 'bar'})).toEqual("foo bar")
    })

    it("evaluates %{foo} if foo is defined in the token map", function() {
      expect(new $.Templar("%{foo} bar").evaluate({ foo: 'bar' })).toEqual("bar bar")
    })

    it("keeps %{foo} if no replacement was defined in the token map", function() {
      expect(new $.Templar("%{foo} bar").evaluate({})).toEqual("%{foo} bar")
    })

    it("replaces multiple occurrences of a token", function() {
      expect(new $.Templar("%{foo} %{foo}").evaluate({ foo: 'baz' })).toEqual('baz baz')
    })

    it("replaces %{foo} by the result of the defined function in the token map", function() {
      expect(
        new $.Templar("%{foo} bar").evaluate({
          foo: function() { return 'bar' }
        })
      ).toEqual("bar bar")
    })

    it("throws an error if template is not defined", function() {
      expect(function() {
        new $.Templar().evaluate()
      }).toThrow()
    })
  })

  describe('$.fn.templar', function() {
    before(function() {
      this.element = jQuery('<div>').text('%{foo} bar').appendTo(jQuery('body'))
    })

    it("replaces the content of element and evaluates it", function() {
      this.element.templar({ foo: 'baz' })
      expect(this.element.text()).toEqual('baz bar')
    })
  })
})
