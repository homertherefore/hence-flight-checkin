var component = document.querySelector('hence-flight-checkin');

suite('<hence-flight-checkin>', function () {

  test('says hello', function () {
    assert.equal(component.greeting, 'test greeting');
  });

  test('says hello', function () {
    assert.equal(component.sayHello(), 'hence-flight-checkin says, Hello World!');

    var greetings = component.sayHello('greetings Earthlings');
    assert.equal(greetings, 'hence-flight-checkin says, greetings Earthlings');
  });
});