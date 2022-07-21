import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('debe de retornar el telefono con el formato correcto', () => {
    const phoneNumber = '3333333333';
    const pipe = new PhoneNumberPipe();
    const result = pipe.transform(phoneNumber);
    expect(result).toEqual('(333) 333 3333');
  });

  it('debe de retornar null', () => {
    const phoneNumber = '33333333334';
    const pipe = new PhoneNumberPipe();
    const result = pipe.transform(phoneNumber);
    expect(result).not.toEqual('(333) 333 3333');
  });
});
