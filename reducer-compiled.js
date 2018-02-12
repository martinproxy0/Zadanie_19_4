'use strict';

var _redux = require('redux');

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _redux.combineReducers)({
    comments: _comments2.default,
    users: _users2.default
});
