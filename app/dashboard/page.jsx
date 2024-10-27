import DashboardContent from "@/components/DashboardContent";

export default async function Page() {

  const response = await fetch("http://localhost:3000/api/getLoggedInUser");
  const user = await response.json()

  return (
    <DashboardContent />
  )
}
