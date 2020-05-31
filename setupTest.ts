import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

// import moment from 'moment'

declare global {
    namespace jest {
      interface Matchers<R> {
        toBeWithinRange(a: number, b: number): R;
      }
    }
  }



expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
  });