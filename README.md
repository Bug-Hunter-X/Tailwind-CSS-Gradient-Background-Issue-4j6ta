# Tailwind CSS Gradient Background Bug

This repository demonstrates a subtle bug in Tailwind CSS where the order of classes can affect the rendering of gradient backgrounds.  Specifically, if a `shadow` class is applied before the gradient class, the shadow can interfere with or completely obscure the gradient.

## Bug Description

The problem occurs when combining gradient and shadow utility classes.  The `shadow` class seems to be applied first, masking the gradient's effect.

## Solution

The solution involves carefully ordering the classes.  By placing the gradient classes before the shadow class, the gradient is rendered correctly and the shadow is properly applied on top.  This is due to the way Tailwind CSS applies styles: later classes can override or interact with earlier classes.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies (if any).
3. Open `bug.js` to observe the incorrect rendering.
4. Open `bugSolution.js` to see the correct implementation.