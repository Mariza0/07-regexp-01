import Validator from '../app';

test.each([
  [
    'Drug-466_sdE', true,
  ],
  [
    '2Drug', false,
  ],
  [
    'fGFg45-_435dff567', false,
  ],
  [
    'ddfRR-6789-yy', false,
  ],
  [
    'df45-dg-454_55', false,
  ],
  [
    '', false,
  ],
])('check userName', (userName, expectation) => {
  const validator = new Validator(userName);
  expect(validator.validateUsername()).toEqual(expectation);
});
