import ProfileForm from "@/components/ProfileForm";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const Page = async () => {

  const { user } = await getServerSession();
  const response = await fetch(process.env.DATABASE_URL + "/auth/photographer/" + user?.email)
  const registeredUserData = await response.json()


  return <ProfileForm  user={user} registeredUserData={registeredUserData?.user}/>

}

export default Page