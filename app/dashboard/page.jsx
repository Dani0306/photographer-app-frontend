import DashboardContent from "@/components/DashboardContent";
import { getServerSession } from "next-auth";

export default async function Page() {

  const user = await getServerSession();
  
  
  
  return (
    <DashboardContent user={user?.user} />
  )
}
