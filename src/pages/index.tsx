"use client"
import { Inter } from 'next/font/google'
import { Button } from "@/components/atoms/Button";
import { api } from "@/utils/api";
import Header from "@/components/organism/Header";
import { cn } from 'lib/utils';

const inter = Inter({ subsets: ['latin'] })
 

export default function Home() {
  const { mutateAsync: createUser } =  api.post.createUser.useMutation()
  const triggerInsertUser = async () => {
    const data = {
      name: "Chirag",
      emailId: "himanshuchhatpar@gmail.com",
      password: "Hello123"
    }
    const res = await createUser(data);
    console.log('RESPONSE', res)
  }

  return (
    <main className={cn(`w-full h-full bg-red-300`, inter.className)}>
      <Header />
      {/* <Button>Send Email</Button>
      <Button onClick={triggerInsertUser}>Create User</Button> */}
    </main>
  );
}