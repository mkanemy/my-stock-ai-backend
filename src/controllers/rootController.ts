import { Request, Response } from "express";
import { dataQuery } from "../data/dataQuery";

export async function rootGetController(req: Request, res: Response) {
    let response = "No Result";

try {

        const data = await dataQuery("SELECT * FROM msaitestdb LIMIT 1");

        response = data[0];

    } finally {
        return response;
    }
}