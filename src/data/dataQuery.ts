const { Pool } = require("pg");

export async function dataQuery(query: string) {
    let dataResponse: string[] = [];

    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    })

    const result = await pool.query(query);

    for await (const row of result.rows) {
        dataResponse.push(row.test);
    }

    return dataResponse;
}