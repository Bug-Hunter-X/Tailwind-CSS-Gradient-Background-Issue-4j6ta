```javascript
// in your component file
<div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  <h1>This is a gradient background!</h1>
</div>
```

This code may not produce the expected gradient due to the order in which Tailwind processes the classes.  If the `shadow-lg` class is processed before the gradient, it can interfere with the gradient effect.