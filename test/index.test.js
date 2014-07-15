
describe('Varname', function () {

  var varVal = require('../');


  it('should validate', function () {

    [
      'foo',
      'foo.bar',
      'foo1.bar3',
      'foo_bar',
      'foo_bar1._buz'
    ].forEach(function (validName) {
      varVal.isValid(validName).should.be.true;
    });

  });

  it('should not validate', function () {

    [
      undefined, null, false, true,
      -1, 0, 1,
      {}, [], /./, function () {},

      // reserved keywords
      'while',

      // invalid JS names
      '2',
      '2foo',
      '2_foo.bar'
    ].forEach(function (invalidName) {
      varVal.isValid(invalidName).should.be.false;
    });

  });

});
