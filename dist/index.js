/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution probability mass function (PMF).
*
* @module @stdlib/stats-base-dists-discrete-uniform-pmf
*
* @example
* var pmf = require( '@stdlib/stats-base-dists-discrete-uniform-pmf' );
*
* var y = pmf( 3.0, 2, 6 );
* // returns ~0.2
*
* var myPMF = pmf.factory( 6, 7 );
* y = myPMF( 7.0 );
* // returns 0.5
*
* y = myPMF( 5.0 );
* // returns 0.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
