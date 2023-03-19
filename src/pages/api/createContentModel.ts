
import { NextApiRequest , NextApiResponse } from "next";
import * as fs from 'fs';
import { prisma } from "./lib/prisma";
import NextCors from "nextjs-cors";


export default async function handle(req:NextApiRequest,res:NextApiResponse)
{
    
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, 
    });
    
    const {method} = req;
    const { requestValue } = req.body;

    switch(method)
    {
        case 'GET':
        {
            res.end();
            break;
        }

        case 'POST':
        {
const values = await prisma.testing.create
({
data:
{
Name: 'Joao',
idade: '3',
Curso: 'Programação'
}
            })
            return res.json(values);
        }
    }

}