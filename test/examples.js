const { encode, decode } = require( '..' );
const assert = require( 'assert' );

suite( 'Google Polyline Example', function() {

  test( 'encode', function() {

    let points = [
      [ -120.2, 38.5 ],
      [ -120.95, 40.7 ],
      [ -126.453, 43.252 ]
    ];

    let encoded = encode( points );

    assert.equal( encoded, '_p~iF~ps|U_ulLnnqC_mqNvxq`@' );

  });

  test( 'encode with map function', function() {

    let points = [
      { lon: -120.2, lat: 38.5 },
      { lon: -120.95, lat: 40.7 },
      { lon: -126.453, lat: 43.252 }
    ];

    let encoded = encode( points, function( point ) {
      return [ point.lon, point.lat ];
    });

    assert.equal( encoded, '_p~iF~ps|U_ulLnnqC_mqNvxq`@' );

  });

  test( 'decode', function() {

    let points = decode( '_p~iF~ps|U_ulLnnqC_mqNvxq`@' );
    let decoded = [
      [ -120.2, 38.5 ],
      [ -120.95, 40.7 ],
      [ -126.453, 43.252 ]
    ];

    assert.deepEqual( points, decoded );

  });

  test( 'decode with map function', function() {

    let points = decode( '_p~iF~ps|U_ulLnnqC_mqNvxq`@', function( point ) {
      return { lon: point[0], lat: point[1] };
    });
    let decoded = [
      { lon: -120.2, lat: 38.5 },
      { lon: -120.95, lat: 40.7 },
      { lon: -126.453, lat: 43.252 }
    ];

    assert.deepEqual( points, decoded );

  });

  test( 'almost zero', function () {

    assert.equal(encode([[1, 1], [1.000001, 0.999999]]), '_ibE_ibE??');

    assert.deepEqual(decode('_ibE_ibE??'), [[1, 1], [1, 1]]);
    assert.deepEqual(decode('_ibE_ibE>>'), [[1, 1], [1, 1]]);
  });
});
