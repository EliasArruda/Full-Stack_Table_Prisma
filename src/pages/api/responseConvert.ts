import { NextApiRequest , NextApiResponse } from "next";
import * as fs from 'fs';

export default async function handle(req:NextApiRequest ,res:NextApiResponse) 
{
    const {method} = req;
    const {responseButton } = req.body

    switch(method)
    {
        case 'GET':
        {
            res.end();
            break;
        }
        case 'POST':
        {
            if(responseButton)
            {
                if(__dirname + '.env')
                {
                    console.log('Succes')
                }
                res.redirect('http://localhost:3000/Components/updateComponents')
            }
            break;
        }
    }
}