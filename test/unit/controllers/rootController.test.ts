const mocks = require('node-mocks-http');
const root = require('../../../src/controllers/rootController');
const dataQuery = require('../../../src/data/dataQuery');

describe('Test Root Controller', function () {

    test('root controller exists', async () => {
        // Given
        const mock = jest.spyOn(dataQuery, 'dataQuery');
        mock.mockReturnValue(['success!']);

        var req = mocks.createRequest();
        var res = mocks.createResponse();

        // When / Then
        let response = root.rootGetController(req, res).then((data: any) =>
            expect(data).toBe('success!')
        );

    });

});