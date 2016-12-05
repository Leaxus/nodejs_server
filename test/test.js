var todo_utils = require('../todo_utils');
var assert = require('assert');
var mocha = require('mocha');

describe('#Error : Todo is null', function () {
  it('todo_utils._getAll should throw an error : todo is null', function () {
    todo_utils._init();
    assert.throws(function() {
      todo_utils._getAll((todoList) => { console.log(todoList); })
    }, /todo is null/);
  });
});

describe('#Get', function () {
  it('todo_utils._get(1) should return : A good thing', function () {
    todo_utils._init();
    todo_utils._new();
    todo_utils._add('A thing', (todoList) => {});
    todo_utils._add('A good thing', (todoList) => {});
    todo_utils._add('Another thing', (todoList) => {});
    todo_utils._get(1, (thing) => {
      assert.equal(thing, 'A good thing');
    });
  });
});

describe('#GetAll', function () {
  it('todo_utils._getAll() should return : [A thing, A good thing, Another thing]', function () {
    todo_utils._init();
    todo_utils._new();
    todo_utils._add('A thing', (todoList) => {});
    todo_utils._add('A good thing', (todoList) => {});
    todo_utils._add('Another thing', (todoList) => {});
    todo_utils._getAll((things) => {
      assert.equal(things[0], 'A thing');
      assert.equal(things[1], 'A good thing');
      assert.equal(things[2], 'Another thing');
    });
  });
});

/*describe('#Del', function () {
  it('todo_utils._del() + getAll should return : null', function () {
    todo_utils._init();
    todo_utils._new();
    todo_utils._add('A thing', (todoList) => {});
    todo_utils._del(0, )
  });
});*/
