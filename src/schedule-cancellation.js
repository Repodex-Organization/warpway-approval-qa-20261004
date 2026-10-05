/**
 * Pure cancellation transition for an already authenticated account snapshot.
 * The caller serializes and persists transitions atomically; this helper performs no I/O.
 * Input: one active subscription and non-negative integer account credits, in cents.
 */
export function scheduleCancellation(account) {
  if (account.cancelAtPeriodEnd) throw new Error('Cancellation is already scheduled');
  return {...account, cancelAtPeriodEnd: true};
}
