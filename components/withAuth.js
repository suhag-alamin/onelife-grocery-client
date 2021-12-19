import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import Login from "../pages/login";

const withAuth = (Component) => {
  const Auth = (props) => {
    const { user, isLoading } = useAuth();

    // useEffect(() => {
    if (!user.email || isLoading === true) {
      return (
        <div className="text-center py-2">
          <Spinner animation="border" />
        </div>
      );
    }
    // }, [user?.email, isLoading]);

    // Login data added to props via redux-store (or use react context for example)
    const { isLoggedIn } = props;

    // If user is not logged in, return login component
    if (!user.email) {
      return <Login />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
