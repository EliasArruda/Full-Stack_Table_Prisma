import { NextApiRequest , NextApiResponse } from "next";
import * as fs from 'fs'

export default async function handle(req:NextApiRequest,res:NextApiResponse)
{
    const {method} = req;
    const {requestContent, nome , content} = req.body;
    
const createMethod = 
`
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
const values = await prisma.${nome}.create
({
data:
{
${content}
}
            })
            return res.json(values);
        }
    }

}`

    switch(method)
    {
        case 'GET':
        {
            res.end();
            break;
        }
        case 'POST':
        {
            if(await requestContent)
            {
                setImmediate(async()=>
                {
                    if(!__dirname + './src/pages/api/createContentModel.ts')
                    {
                        await fs.appendFileSync('./src/pages/api/createContentModel.ts','')
                        await fs.writeFileSync('./src/pages/api/createContentModel.ts',createMethod)
                    }
                    
                    else
                    {
                     // Create Method
                     await fs.unlinkSync('./src/pages/api/createContentModel.ts')
                     await fs.appendFileSync('./src/pages/api/createContentModel.ts','')
                     await fs.writeFileSync('./src/pages/api/createContentModel.ts',createMethod)
                    }
                })
                break;
            }
        }
    }
}