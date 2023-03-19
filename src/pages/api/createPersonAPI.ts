import { NextApiRequest , NextApiResponse } from "next";
import * as fs from 'fs';
import { prisma } from "./lib/prisma";
import NextCors from "nextjs-cors";
import shelljs from 'shelljs'

export default async function handle(req:NextApiRequest,res:NextApiResponse)
{
    const {method} = req;
    const {nome, propriedade , content , contentMethod , requestURL } = req.body;
    const {mongodb , mysql , postgresql , sqlite , sqlserver} = req.body;

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, 
     });

// MongoDB
const schemaMongodb =
`generator client {
    provider = "prisma-client-js"
}
  
datasource db {
    provider = "mongodb"
    url      = env("DATABASE_URL")
}

model ${nome}{
id String @id @default(auto()) @map("_id") @db.ObjectId
${propriedade}
}
`

// MYSQL
const schemaMysql =
`generator client {
    provider = "prisma-client-js"
}
  
  datasource db {
    provider = "mysql"
    url      = env("DATABASE_URL")
}

model ${nome}{
id Int @id @default(autoincrement())
${propriedade}
}
`

// Postgresql
const schemaPostgresql =
`generator client {
    provider = "prisma-client-js"
}
  
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

model ${nome}{
id Int @id @default(autoincrement())
${propriedade}
}
`

// SQLITE
const schemaSqlite =
`generator client {
    provider = "prisma-client-js"
}
  
  datasource db {
    provider = "sqlite"
    url      = env("DATABASE_URL")
}

model ${nome}{
id Int @id @default(autoincrement())
${propriedade}
}
`

// SQL-SERVER
const schemaSqlserver =
`generator client {
    provider = "prisma-client-js"
}
  
  datasource db {
    provider = "sqlserver"
    url      = env("DATABASE_URL")
}

model ${nome}{
id Int @id @default(autoincrement())
${propriedade}
}
`

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

// METHOD
    switch(method)
    {
        case 'GET':
        {
            setTimeout(async() => 
            {
                shelljs.exec('yarn prisma db push --accept-data-loss')
                res.redirect('http://localhost:3000/Components/CreateContent');
                res.end();
            }, 3000);
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
                    setImmediate(async()=>
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
                    })
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

                if(await contentMethod)
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
                }

                if(await requestURL)
                {
                    setImmediate(()=>
                    {
                        if(__dirname + '.env.txt')
                        {
                            fs.renameSync('.env.txt','.env')
                        }
                        else
                        {
                            console.log('Sucess')
                        }
                    })
                }
            break;
        }
    }
}