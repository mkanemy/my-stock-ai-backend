import { Request, Response } from "express";

export function rootGetController(req: Request, res: Response) {
    return 'We made it :D';
}