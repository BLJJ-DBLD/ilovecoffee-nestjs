import { registerAs } from '@nestjs/config';

export default registerAs('coffees', () => {
  return {
    foo: 'bar',
  };
});
