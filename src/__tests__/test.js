import ErrorRepository from '../js/map';

test('unknown error', () => {
  const example = new ErrorRepository();
  expect(example.translate(400)).toBe('Unknown Error');
});

test('description error', () => {
  const example = new ErrorRepository();
  expect(example.translate(404)).toBe('not found');
});
