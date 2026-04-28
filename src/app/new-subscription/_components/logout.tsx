"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function LogoutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        credentials: "include",
        onSuccess: () => {
          router.push("/authentication");
        },
      },
    });
  };

  return (
    <div>
      <Button
        variant="ghost"
        onClick={handleSignOut}
        className="text-gray-600 hover:text-gray-900"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Sair
      </Button>
    </div>
  );
}
