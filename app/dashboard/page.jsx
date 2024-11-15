import DashboardContent from "@/components/DashboardContent";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

export default async function Page() {

  const { user } = await getServerSession();
  const response = await fetch(process.env.DATABASE_URL + "/auth/photographer/" + user?.email)
  const registeredUserData = await response.json()

  if(!registeredUserData?.user){
    return notFound();
  }
  
  return (
    <DashboardContent user={registeredUserData?.user} />
  )
}
