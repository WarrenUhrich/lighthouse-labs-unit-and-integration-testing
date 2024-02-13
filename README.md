# Lighthouse Labs | Unit & Integration Testing

* [ ] React Testing Tools
* [ ] Adding Features and Tests
* [ ] Coverage Reports

## Types of Testing

* Unit: each function (component) in isolation.
* Feature/Integration: multiple units (functions) working together.
* End-to-End: user stories (how do you users interact with the app / features.)
* Static: linters (make sure the code looks good before running.)
* Manual: running your code and seeing what happens!

## What testing tools have we used before?

console.assert() // only prints failure
const assert = require('assert') 8-12 different assertions
const chai = require('chai').assert 120 different assertions

/test
  => Mocha runs ALL tests and gives you a report!
  => describe() and it()

* Mocha   => (library) => Test Runner
* Chai    => (library) => Assertion Library
* Jest    => (framework) => Test Runner / w/Bonus Features!
