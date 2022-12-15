import React, { useState, useEffect, createContext, useContext } from "react";
import { httpClient } from "../utils/http";

export const UserContext = createContext(null);

export default function UserContextCom({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscriber = async () => {
      try {
        /** 
         * I was comment  for this reason
         * 
         * we discovered that MockAPI limits us to 100 records for every resource type.
            That means that after 100 runs of say, the create example app,
            we'll have added 100 recipes and then devs get an error 
            like Max number of elements reached for this resource!.

        **/

        // const user = await httpClient("login", {
        //   method: "POST",
        //   body: {
        //     email: "test@42.solutions",
        //     password: "solutions@42",
        //   },
        // });

        const user = {
          email: "test@42.solution",
          password: "solutions@42",
          usernam: "test@42.solutions",
          id: "2",
        };

        user ? setUser(user) : setUser(null);
      } catch (error) {
        alert("error");
      }
    };
    // Unsubscribe user listener on unmount
    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);
