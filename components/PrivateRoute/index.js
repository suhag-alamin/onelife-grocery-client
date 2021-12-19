import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = (components) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  console.log(components);
  // Server-render loading state
  useEffect(() => {
    if (!user.email) {
      router.push("/login");
    }
  }, [user.email, isLoading, router]);

  // Once the user request finishes, show the user
  return (
    <div>
      <h1>Your Profile</h1>
    </div>
  );
};

export default PrivateRoute;
