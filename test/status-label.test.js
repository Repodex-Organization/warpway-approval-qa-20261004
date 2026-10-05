import assert from 'node:assert/strict';
import {test} from 'node:test';
import {statusLabel} from '../src/status-label.js';
test('formats a status label',()=>assert.equal(statusLabel(' READY '),'ready'));
