/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isInfinite = require( '@stdlib/math-base-assert-is-infinite' );
var isnan = require( '@stdlib/assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var tryRequire = require( '@stdlib/utils-try-require' );
var abs = require( '@stdlib/math-base-special-abs' );


// VARIABLES //

var betaln = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( betaln instanceof Error )
};


// FIXTURES //

var arg1 = require( './fixtures/r/arg1.json' );
var arg2 = require( './fixtures/r/arg2.json' );
var expected = require( './fixtures/r/expected.json' );
var i;
var v;
for ( i = 0; i < expected.length; i++ ) {
	v = expected[ i ];
	if ( v === 'Inf' ) {
		expected[ i ] = PINF;
	}
	else if ( v === 'NaN' ) {
		expected[ i ] = NaN;
	}
}


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.ok( typeof betaln === 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var val = betaln( NaN, 2.0 );
	t.ok( isnan( val ), 'returns expected value' );
	val = betaln( 2.0, NaN );
	t.ok( isnan( val ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided negative values', opts, function test( t ) {
	var val = betaln( -2.0, 5.0 );
	t.ok( isnan( val ), 'returns expected value' );
	val = betaln( 4.0, -3.0 );
	t.ok( isnan( val ), 'returns expected value' );
	t.end();
});

tape( 'the function returns +Infinity if at least one argument is zero', opts, function test( t ) {
	var val = betaln( 0.0, 2.0 );
	t.strictEqual( val, PINF, 'returns +Infinity' );
	val = betaln( 1.0, 0.0 );
	t.strictEqual( val, PINF, 'returns +Infinity' );
	t.end();
});

tape( 'the function evaluates the natural logarithm of the beta function', opts, function test( t ) {
	var actual;
	var delta;
	var tol;
	var b1;
	var b2;
	var i;
	for ( i = 0; i < arg1.length; i++ ) {
		actual = betaln( arg1[ i ], arg2[ i ] );
		b1 = isInfinite( actual );
		b2 = isInfinite( expected[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b2) ? 'not finite' : 'finite' ) );

		b1 = isnan( actual );
		b2 = isnan( expected[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 ) {
			delta = abs( actual - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.strictEqual( delta <= tol, true, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected[ i ] + '.' );
		}
	}
	t.end();
});
