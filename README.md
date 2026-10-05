# Disposable approval instrumentation QA

This repository contains only synthetic sample code for verifying GitHub approval requirements, ready/draft cycles, changed heads and closure. It contains no customer data or application source. It is not a production project.

`node --test` runs the sample's tests. The manually dispatched workflow opens a draft documentation PR authored by GitHub Actions, so the human reviewer can approve it through GitHub's normal UI. No workflow submits an approval or merges a PR.

## Synthetic billing change for the Slack decision test

The sample now proposes self-serve cancellation. Cancellation stops renewal and leaves access through
`currentPeriodEnd`. Account credits come from referrals, outage compensation and promotions; outside
cancellation, they offset later invoices until used or expired. The QA billing product owner decided
in Slack that cancellation preserves unused credits under those existing use-and-expiry terms. The
helper schedules period-end cancellation without changing the remaining credit balance.

Customer-facing credit and cancellation policy is decided by Marcus Graves, the QA billing product
owner available in the connected Slack workspace. Engineering implements that decision. The helper
receives a validated, already authenticated account snapshot; its caller serializes and atomically
persists transitions. Network, authentication, storage and notification adapters are outside this pure
helper's contract. This is synthetic disposable QA; it does not affect real subscriptions or balances.
