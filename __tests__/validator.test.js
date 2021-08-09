const validator = require('../src/middlware/validator');
describe('validator middleware', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'validator').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('properly validator some output', () => {
    validator(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('moves to the next', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});