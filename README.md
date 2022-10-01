<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Discrete uniform][discrete-uniform-distribution] distribution [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_pmf" align="center" raw="P(X=x;a,b)=\begin{cases} \frac{1}{b - a + 1} & \text{for } x \in \{ a, \ldots, b \} \\ 0 & \text{otherwise} \end{cases}" alt="Probability mass function (PMF) for a discrete uniform distribution."> -->

<div class="equation" align="center" data-raw-text="P(X=x;a,b)=\begin{cases} \frac{1}{b - a + 1} &amp; \text{for } x \in \{ a, \ldots, b \} \\ 0 &amp; \text{otherwise} \end{cases}" data-equation="eq:discrete_uniform_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/pmf/docs/img/equation_discrete_uniform_pmf.svg" alt="Probability mass function (PMF) for a discrete uniform distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support of the distribution. The parameters must satisfy `a <= b`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-discrete-uniform-pmf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var pmf = require( '@stdlib/stats-base-dists-discrete-uniform-pmf' );
```

#### pmf( x, a, b )

Evaluates the [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = pmf( 2.0, 0, 4 );
// returns ~0.2

y = pmf( 5.0, 0, 4 );
// returns 0.0

y = pmf( 3, -4, 4 );
// returns ~0.111
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, -2, 2 );
// returns NaN

y = pmf( 1.0, NaN, 4 );
// returns NaN

y = pmf( 2.0, 0, NaN );
// returns NaN
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 1, 5.5 );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 3, 2 );
// returns NaN
```

#### pmf.factory( a, b )

Returns a `function` for evaluating the [PMF][pmf] for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myPDF = pmf.factory( 6, 7 );
var y = myPDF( 7.0 );
// returns 0.5

y = myPDF( 5.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randint = require( '@stdlib/random-base-discrete-uniform' );
var pmf = require( '@stdlib/stats-base-dists-discrete-uniform-pmf' );

var randa = randint.factory( 0, 10 );
var randb = randint.factory();
var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    a = randa();
    x = randb( a, a+randa() );
    b = randb( a, a+randa() );
    y = pmf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, P(X=x;a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-discrete-uniform-pmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-discrete-uniform-pmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-pmf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-pmf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-discrete-uniform-pmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-discrete-uniform-pmf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-discrete-uniform-pmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-discrete-uniform-pmf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-pmf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-pmf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-pmf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-pmf/blob/main/branches.md

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

</section>

<!-- /.links -->
