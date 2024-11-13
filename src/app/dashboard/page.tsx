// src/app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import UserList from "./UserList";
// import PropertyList from "./PropertyList";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  const getProperties = async () => {
    try {
      const response = await fetch("/api/properties", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to create property");

      return response;
      // Reset form or redirect
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const properties = getProperties();
  console.log({ properties });
  if (!session) {
    redirect("/login");
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      username: true,
      role: true,
    },
  });

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">User Management</h2>
          <UserList users={users} currentUserRole={session.user.role} />
        </div>
        {/* <PropertyList /> */}
      </div>
    </main>
  );
}
