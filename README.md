# Disposable approval instrumentation QA

This repository contains only synthetic sample code for verifying GitHub approval requirements, ready/draft cycles, changed heads and closure. It contains no customer data or application source. It is not a production project.

`node --test` runs the sample's tests. The manually dispatched workflow opens a draft documentation PR authored by GitHub Actions, so the human reviewer can approve it through GitHub's normal UI. No workflow submits an approval or merges a PR.
