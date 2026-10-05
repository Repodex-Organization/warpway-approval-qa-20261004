import assert from 'node:assert/strict';
import {test} from 'node:test';
import {scheduleCancellation} from '../src/schedule-cancellation.js';

test('schedules period-end cancellation and retains access through the paid period', () => {
  const original = {cancelAtPeriodEnd: false, currentPeriodEnd: '2026-11-01T00:00:00Z', unusedCreditCents: 1200};
  const next = scheduleCancellation(original);
  assert.equal(next.cancelAtPeriodEnd, true);
  assert.equal(next.currentPeriodEnd, original.currentPeriodEnd);
  assert.equal(next.unusedCreditCents, 0);
  assert.equal(original.unusedCreditCents, 1200);
});
test('rejects a second schedule request', () => {
  assert.throws(() => scheduleCancellation({cancelAtPeriodEnd: true, unusedCreditCents: 0}), /already scheduled/);
});
