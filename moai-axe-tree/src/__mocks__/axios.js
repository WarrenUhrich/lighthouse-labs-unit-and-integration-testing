const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15
  },
  {
    id: 2,
    name: 'Bob',
    points: 10
  },
  {
    id: 3,
    name: 'Carol',
    points: 5
  },
];

const axios = {
  defaults: {},
  get: jest.fn((url) => {
    if (url === '/high-scores') {
      // respond in a certain way
      return Promise.resolve({ data });
    }
  })
};

export default axios;
