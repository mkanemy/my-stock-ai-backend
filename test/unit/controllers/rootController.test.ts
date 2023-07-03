const root = require('../../../src/controllers/rootController');

test('root controller exists', () => {
    expect(root.rootGetController()).toBe('We made it :D');
});