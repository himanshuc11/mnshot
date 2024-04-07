
import type { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process'
 
const command = (emailId: string) => `
curl --request POST \
  --url https://api.brevo.com/v3/smtp/email \
  --header 'accept: application/json' \
  --header 'api-key:${process.env.BREVO_KEY}' \
  --header 'content-type: application/json' \
  --data '{
   "sender":{
      "name":"Himanshu Chhatpar (Moonshot)",
      "email":"${emailId}"
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
  if(req.method !== "POST") {
    res.status(404).json({ message: 'Endpoint not found' })
    return
  }

  const emailId = (req?.body as {emailId: string})?.emailId;
  if(!emailId || typeof emailId !== "string") { 
    res.status(404).json({ message: 'Incorrect Body' });
    return
  }

  exec(command(emailId), function(error: unknown){
    if(error !== null)
    {
      res.status(200).json({ message: 'Email Sent Successfully' })
    }
    });
 
}
