import { Client } from "ts-postgres/dist/src/client";

export async function dataQuery(query: string) {
    let dataResponse = [];

    const client = new Client({"host": 'localhost', "port": 5433, "database": "Matt"});
    await client.connect();

    const result = client.query(query);

    for await (const row of result) {
        let rowResponse = row.get('test');
        if (rowResponse) {
            dataResponse.push(rowResponse.toString());
        }
    }

    return dataResponse;
}