const { Pool } = require("pg");
const db = require('../configs/db.json');

export async function dataQuery(query: string) {
    let dataResponse: string[] = [];

    const pool = new Pool({
        connectionString: db.url + "?sslmode=require",
    })

    const result = await pool.query(query);

    for await (const row of result.rows) {
        dataResponse.push(row.test);
    }

    return dataResponse;
}