# CodeceptJS example
This is a repository for an example [CodeceptJS](https://codecept.io/) setup from Infinum JS talks.

## How to setup tests locally
1. `npm install` to install all dependencies
2. Run (all) tests using `npm test` (this way all manual tests are excluded)

## Writing tests
Preferably all tests should be.

1. Immutable - they shouldn't change state of the app (modify user account).
2. Short - Try to test as little as possible in any test.
3. Resilient - Minimize chance of your tests breaking because of some CSS/JS/HTML structure changes

## Making tests resilient (how to select elements)
The best way to select elements is to add a data attribute that's clearly used for tests. That way you're sure your tests won't break because somebody changed a class or an ID.

For example in order to select:
```html
<button class="pretty-button" id="important-button">
```
We should add an `data-test="something"` attribute to the element like so:
```html
<button class="pretty-button" id="important-button" data-test="specific-button">Submit</button>
```

This also has the added benefit when refactoring. If you remove an element with a `data-test` attribute you will automatically know that you've probably broken a test (which you should go find and fix!). Consequently if you remove a `data-test` selector from a test you can verify that it's not being used anywhere else. If this is the case, we can should remove that attribute from the template file.

If this isn't possible (if we can't modify the markup), here's the order of selector types from worst to best:
https://docs.cypress.io/guides/references/best-practices.html#How-It-Works

## Manual tests
This should hold all tests that perform something that action's cannot be verified from UI. For example testing something that results in an email being sent (and we have to verify email's contents). These should be run manually and their results manually verified. They should also be excluded from running when running the entire test suite (this is already done when you run tests with `npm test`).

**!!! IMPORTANT** - All manual tests should be tagged with `@manual`, for example:
```js
Scenario('Manual - Cancel existing subscription', async (subscriptionPage) => {
  subscriptionPage.cancelSubscription();
}).tag('@manual');
```

## Resources
- [codecept.io - basics](https://codecept.io/basics)
- [codecept.io - best practices](https://codecept.io/best)
- [E2E testing - best practices](https://docs.cypress.io/guides/references/best-practices.html)
