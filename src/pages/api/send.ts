
import type { NextApiRequest, NextApiResponse } from 'next'
var exec = require('child_process').exec;
 
const command = `
curl --request POST \
  --url https://api.brevo.com/v3/smtp/email \
  --header 'accept: application/json' \
  --header 'api-key:${process.env.BREVO_KEY}' \
  --header 'content-type: application/json' \
  --data '{
   "sender":{
      "name":"Sender Alex",
      "email":"himanshuchhatpar@gmail.com"
   },
   "to":[
      {
         "email":"himanshuchhatpar@gmail.com",
         "name":"John Doe"
      }
   ],
   "subject":"Hello world",
   "htmlContent":"<html><head></head><body><p>Hello,</p>EMAIL CHECK.</p></body></html>"
}'
`

type ResponseData = {
  message: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const child = exec(command, function(error: any, stdout: string, stderr:string){

    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    
    if(error !== null)
    {
        console.log('exec error: ' + error);
    }
    
    });
  res.status(200).json({ message: 'Hello from Next.js!' })
}
