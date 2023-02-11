import { createContext, useState } from "react";

export const userDetailsContext = createContext();

const UserDetailsProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <userDetailsContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </userDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
