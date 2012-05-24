jquery.templar
==============

A super simple and dynamic templating engine.

## data centric mode

If you have a template inside a string variable, you might be interested in using
the direct method call to evaluate your template. This is how to do it:

    new $.Template('my %{funky} template').evaluate({
      funky: 'awesome'
    })

    // ==> 'my awesome template'

## view centric mode

If you have your template inside your html and want to evaluate it, do it like this:

```html
  <div id="template">
    <h1>%{headline}</h1>
    <p>foo %{token} baz</p>
  </div>
```

```js
  $('#template').templar({ headline: 'omg!', token: 'bar' })
```

Will result in:

```html
  <div id="template">
    <h1>omg!</h1>
    <p>foo bar baz</p>
  </div>
```
