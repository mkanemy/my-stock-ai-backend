import { Request, Response } from "express";
import { Client } from 'ts-postgres';

const pgp = require('pg-promise')(/* options */)
// const db = pgp('postgresql://localhost:5433/Matt')

export async function rootGetController(req: Request, res: Response) {
    const client = new Client({"host": 'localhost', "port": 5433, "database": "Matt"});
    await client.connect();

    let response = "No Result";

    try {
        // Querying the client returns a query result promise
        // which is also an asynchronous result iterator.
        const result = client.query(
            "SELECT * FROM msaitestdb LIMIT 1"
        );

        for await (const row of result) {
            let rowResponse = row.get('test');
            if (rowResponse) {
                response = rowResponse.toString();
            }
        }

    } finally {
        return response;
        // await client.end();
    }

    return response;
}