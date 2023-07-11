import { PricePipe } from './price-pipe.pipe';

describe('PricePipe', () => {
  let pipe: PricePipe;

  beforeEach(() => {
    pipe = new PricePipe();
  });

  it('transforms the string value to the correct decimal format', () => {
    const transformedValue = pipe.transform('2000');
    expect(transformedValue).toBe('20.00');
  });
});
