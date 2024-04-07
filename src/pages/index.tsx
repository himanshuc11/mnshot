"use client"
import { Button } from "@/components/atoms/Button";
import { api } from "@/utils/api";

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
    <>
      <Button>Send Email</Button>
      <Button onClick={triggerInsertUser}>Create User</Button>
    </>
  );
}