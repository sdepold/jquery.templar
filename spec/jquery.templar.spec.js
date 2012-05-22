buster.spec.expose()

describe('jquery.templar', function() {
  it('returns the passed template if no token map is passed', function() {
    expect(new $.Templar("foo bar").evaluate()).toEqual("foo bar")
  })

  it("returns the passed template if an empty token map is passed", function() {
    expect(new $.Templar("foo bar", {}).evaluate()).toEqual("foo bar")
  })

  it("returns the passed template without tokens even if token map is passed", function() {
    expect(new $.Templar("foo bar", {foo: 'bar'}).evaluate()).toEqual("foo bar")
  })

  it("evaluates %{foo} if foo is defined in the token map", function() {
    expect(new $.Templar("%{foo} bar", { foo: 'bar' }).evaluate()).toEqual("bar bar")
  })

  it("keeps %{foo} if no replacement was defined in the token map", function() {
    expect(new $.Templar("%{foo} bar", {}).evaluate()).toEqual("%{foo} bar")
  })

  it("replaces multiple occurrences of a token", function() {
    expect(new $.Templar("%{foo} %{foo}", { foo: 'baz' }).evaluate()).toEqual('baz baz')
  })

  it("replaces %{foo} by the result of the defined function in the token map", function() {
    expect(
      new $.Templar("%{foo} bar", {
        foo: function() { return 'bar' }
      }).evaluate()
    ).toEqual("bar bar")
  })

  it("throws an error if template is not defined", function() {
    expect(function() {
      new $.Templar().evaluate()
    }).toThrow()
  })
})
