
import type { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process'

type Props = { emailId: string, otp: string, userName: string }
 
const command = (props: Props) => `
curl --request POST \
  --url https://api.brevo.com/v3/smtp/email \
  --header 'accept: application/json' \
  --header 'api-key:${process.env.BREVO_KEY}' \
  --header 'content-type: application/json' \
  --data '{
   "sender":{
      "name":"Himanshu Chhatpar (Moonshot)",
      "email":"himanshuchhatpar@gmail.com"
   },
   "to":[
      {
         "email":"${props.emailId}",
         "name":"${props.userName}"
      }
   ],
   "subject":"E-Commerce OTP",
   "htmlContent":"<html><head></head><body><p>Hello ${props.userName},</p>Please user ${props.otp} to validate your email id.</p></body></html>"
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

  const requestBody = JSON.parse(req?.body) as Props;
  const emailId = requestBody.emailId;

  if(!emailId || typeof emailId !== "string") { 
    res.status(404).json({ message: 'Incorrect Body' });
    return;
  }

  exec(command(requestBody), function(error: unknown){
    if(error !== null)
    {
      res.status(200).json({ message: 'Email Sent Successfully' })
    }
    });
}
