import fetchBase from './fetchBase';

it('lib/remotes/fetchBase', async () => {
  const dummy = { test: 'success' };

  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) => {
      resolve({
        json: () => dummy,
      });
    });
  });

  const resp = await fetchBase('/');
  const data = await resp.json();
  expect(data).toBe(dummy);
});
