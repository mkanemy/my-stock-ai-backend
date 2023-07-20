import { Client } from "ts-postgres/dist/src/client";
const db = require('../configs/db.json');

export async function dataQuery(query: string) {
    let dataResponse = [];

    const client = new Client({"host": db.host, "port": db.port, "database": db.database});
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