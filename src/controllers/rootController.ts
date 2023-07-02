import { Request, Response } from "express";

export function rootGetController(req: Request, res: Response) {
    res.send('GET request to the homepage');
}