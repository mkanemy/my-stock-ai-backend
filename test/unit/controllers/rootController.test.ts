const root = require('../../../src/controllers/rootController');

describe('Test Root Controller', function () {

    test('root controller exists', () => {
        expect(root.rootGetController()).toBe('We made it :D');
    });

});