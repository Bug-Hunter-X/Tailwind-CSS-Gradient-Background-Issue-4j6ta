```javascript
// in your component file
<div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
  <h1>This is a gradient background!</h1>
</div>
```
By moving `shadow-lg` after the gradient classes, the gradient is applied first, and the shadow is layered on top correctly.