import { NextApiRequest , NextApiResponse } from "next";
import * as fs from 'fs';
import NextCors from 'nextjs-cors';


export default async function handle(req:NextApiRequest,res:NextApiResponse)
{

const schemaMongodb =
`generator client {
    provider = "prisma-client-js"
}
  
  datasource db {
    provider = "mongodb"
    url      = env("DATABASE_URL")
}`

const schemaMysql =
`generator client {
    provider = "prisma-client-js"
}
  
  datasource db {
    provider = "mysql"
    url      = env("DATABASE_URL")
}`

const schemaPostgresql =
`generator client {
    provider = "prisma-client-js"
}
  
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}`

const schemaSqlite =
`generator client {
    provider = "prisma-client-js"
}
  
  datasource db {
    provider = "sqlite"
    url      = env("DATABASE_URL")
}`

const schemaSqlserver =
`generator client {
    provider = "prisma-client-js"
}
  
  datasource db {
    provider = "sqlserver"
    url      = env("DATABASE_URL")
}`

    const {method } = req;
    const {mongodb , mysql , postgresql , sqlite , sqlserver} = req.body;
    const {URL } = req.body;
    const connectSchema = `DATABASE_URL="${URL}"`;

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    switch(method)
    {
        case 'GET':
        {
            res.json('Hello')
            break;
        }

        case 'POST':
        {
    
            if(await mongodb)
            {
                if(!__dirname + './src/pages/api/schema.prisma')
                {
                    fs.appendFileSync('./src/pages/api/schema.prisma','')
                    fs.writeFileSync('./src/pages/api/schema.prisma',schemaMongodb)
                }
                else
                {
                    fs.unlinkSync('./src/pages/api/schema.prisma')
                    fs.appendFileSync('./src/pages/api/schema.prisma','')
                    fs.writeFileSync('./src/pages/api/schema.prisma',schemaMongodb)
                }
                res.json('mongodb')
            }
        
            if(await mysql)
            {
                if(!__dirname + './src/pages/api/schema.prisma')
                {
                    fs.appendFileSync('./src/pages/api/schema.prisma','')
                    fs.writeFileSync('./src/pages/api/schema.prisma',schemaMysql)
                }
                else
                {
                    fs.unlinkSync('./src/pages/api/schema.prisma')
                    fs.appendFileSync('./src/pages/api/schema.prisma','')
                    fs.writeFileSync('./src/pages/api/schema.prisma',schemaMysql)
                }
                
                res.json('mysql')
            }
        
            if(await postgresql)
            {
                if(!__dirname + './src/pages/api/schema.prisma')
                {
                    fs.appendFileSync('./src/pages/api/schema.prisma','')
                    fs.writeFileSync('./src/pages/api/schema.prisma',schemaPostgresql)
                }
                else
                {
                    fs.unlinkSync('./src/pages/api/schema.prisma')
                    fs.appendFileSync('./src/pages/api/schema.prisma','')
                    fs.writeFileSync('./src/pages/api/schema.prisma',schemaPostgresql)
                }
                
                res.json('postgresql')
            }
        
            if(await sqlite)
            {
                if(!__dirname + './src/pages/api/schema.prisma')
                {
                    fs.appendFileSync('./src/pages/api/schema.prisma','')
                    fs.writeFileSync('./src/pages/api/schema.prisma',schemaSqlite)
                }
                else
                {
                    fs.unlinkSync('./src/pages/api/schema.prisma')
                    fs.appendFileSync('./src/pages/api/schema.prisma','')
                    fs.writeFileSync('./src/pages/api/schema.prisma',schemaSqlite)
                }
                
                res.json('sqlite')
            }
        
            if(await sqlserver)
            {
                if(!__dirname + './src/pages/api/schema.prisma')
                {
                    fs.appendFileSync('./src/pages/api/schema.prisma','')
                    fs.writeFileSync('./src/pages/api/schema.prisma',schemaSqlserver)
                }
                else
                {
                    fs.unlinkSync('./src/pages/api/schema.prisma')
                    fs.appendFileSync('./src/pages/api/schema.prisma','')
                    fs.writeFileSync('./src/pages/api/schema.prisma',schemaSqlserver)
                }
                res.json('sqlserver')
            }
            
            if(await URL)
            {

                setImmediate(()=>
                {
                    if(!__dirname + '.env.txt')
                    {
                        fs.appendFileSync('.env.txt','')
                        fs.writeFileSync('.env.txt',connectSchema)
                    }
                    
                    else
                    {
                        fs.unlinkSync('.env.txt')
                        fs.appendFileSync('.env.txt','')
                        fs.writeFileSync('.env.txt',connectSchema)
                    }
                })

                setTimeout(()=>
                {
                    if(__dirname + '.env')
                    {
                        fs.unlinkSync('.env')
                    }
                    else
                    {
                        console.log('SUCESS')
                    }
                    
                },5200)

                res.redirect('http://localhost:3000/Components/ViewSchemas')
            }
            break;
        }
    }
}