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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# betaln

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Natural logarithm][natural-logarithm] of the [beta function][beta-function].

<section class="intro">

The [beta function][beta-function], also called the Euler integral, is defined as

<!-- <equation class="equation" label="eq:beta_function" align="center" raw="\operatorname{Beta}(x,y) = \int_0^1t^{x-1}(1-t)^{y-1}\,\mathrm{d}t" alt="Equation for the beta function."> -->

```math
\mathop{\mathrm{Beta}}(x,y) = \int_0^1t^{x-1}(1-t)^{y-1}\,\mathrm{d}t
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Beta}(x,y) = \int_0^1t^{x-1}(1-t)^{y-1}\,\mathrm{d}t" data-equation="eq:beta_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/betaln/docs/img/equation_beta_function.svg" alt="Equation for the beta function.">
    <br>
</div> -->

<!-- </equation> -->

The [beta function][beta-function] is related to the [gamma function][gamma-function] via the following equation

<!-- <equation class="equation" label="eq:beta_function2" align="center" raw="\operatorname{Beta}(x,y)=\dfrac{\Gamma(x)\,\Gamma(y)}{\Gamma(x+y)} \!" alt="Beta function expressed in terms of the Gamma function."> -->

```math
\mathop{\mathrm{Beta}}(x,y)=\dfrac{\Gamma(x)\,\Gamma(y)}{\Gamma(x+y)} \!
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Beta}(x,y)=\dfrac{\Gamma(x)\,\Gamma(y)}{\Gamma(x+y)} \!" data-equation="eq:beta_function2">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/betaln/docs/img/equation_beta_function2.svg" alt="Beta function expressed in terms of the Gamma function.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-betaln
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var betaln = require( '@stdlib/math-base-special-betaln' );
```

#### betaln( x, y )

Evaluates the [natural logarithm][natural-logarithm] of the [beta function][beta-function].

```javascript
var val = betaln( 0.0, 0.0 );
// returns Infinity

val = betaln( 1.0, 1.0 );
// returns 0.0

val = betaln( -1.0, 2.0 );
// returns NaN

val = betaln( 5.0, 0.2 );
// returns ~1.218

val = betaln( 4.0, 1.0 );
// returns ~-1.386
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var betaln = require( '@stdlib/math-base-special-betaln' );
var x;
var y;

for ( x = 0; x < 10; x++ ) {
    for ( y = 10; y > 0; y-- ) {
        console.log( 'x: %d, \t y: %d, \t f(x,y): %d', x, y, betaln( x, y ) );
    }
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/betaln.h"
```

#### stdlib_base_betaln( x, y )

Evaluates the [natural logarithm][natural-logarithm] of the [beta function][beta-function].

```c
double v = stdlib_base_betaln( 5.0, 0.2 );
// returns ~1.218
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` input value.

```c
double stdlib_base_betaln( const double x, const double y );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/betaln.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 24.0, 32.0, 48.0, 116.0, 33.0 };
    const double y[] = { 12.0, 6.0, 15.0, 52.0, 22.0 };

    double out;
    int i;
    for ( i = 0; i < 5; i++ ) {
        out = stdlib_base_betaln( x[ i ], y[ i ] );
        printf( "betaln(%lf, %lf) = %lf\n", x[ i ], y[ i ], out );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/beta`][@stdlib/math/base/special/beta]</span><span class="delimiter">: </span><span class="description">beta function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/betainc`][@stdlib/math/base/special/betainc]</span><span class="delimiter">: </span><span class="description">incomplete beta function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/betaincinv`][@stdlib/math/base/special/betaincinv]</span><span class="delimiter">: </span><span class="description">inverse incomplete beta function.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-betaln.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-betaln

[test-image]: https://github.com/stdlib-js/math-base-special-betaln/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-betaln/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-betaln/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-betaln?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-betaln.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-betaln/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-betaln/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-betaln/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-betaln/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-betaln/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-betaln/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-betaln/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-betaln/blob/main/branches.md

[natural-logarithm]: https://en.wikipedia.org/wiki/Natural_logarithm

[beta-function]: https://en.wikipedia.org/wiki/Beta_function

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

<!-- <related-links> -->

[@stdlib/math/base/special/beta]: https://github.com/stdlib-js/math-base-special-beta

[@stdlib/math/base/special/betainc]: https://github.com/stdlib-js/math-base-special-betainc

[@stdlib/math/base/special/betaincinv]: https://github.com/stdlib-js/math-base-special-betaincinv

<!-- </related-links> -->

</section>

<!-- /.links -->
