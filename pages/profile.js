import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  // Server-render loading state
  useEffect(() => {
    if (!user.email || isLoading === true) {
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

export default Profile;

// import React from "react";
// import useAuth from "../hooks/useAuth";

// const Profile = () => {
//   return (
//     <div>
//       <h3>hello</h3>
//     </div>
//   );
// };

// export default Profile;

// export const getServerSideProps = async function ({ req, res }) {

//     const {user} = useAuth()
//   if (!user.email) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { user },
//   };
// };
