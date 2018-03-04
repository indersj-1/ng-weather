import { DateFormate } from './date-formate.pipe';

describe('DateFormatePipe', () => {
  let pipe: DateFormate;
  beforeEach(() => {
    pipe = new DateFormate();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('providing no value returns empty', () => {
    expect(pipe.transform(0)).toBe('');
  });

  it('providing value should return Sun Mar 04 2018', () => {
    expect(pipe.transform(1520129594)).toBe('Sun Mar 04 2018');
  });

});
