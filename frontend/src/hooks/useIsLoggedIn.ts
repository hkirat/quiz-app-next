import { useState, useEffect } from "react";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const response = fetch("/api/auth", { method: "GET" });
    response
      .then((res) => {
        if (res.ok) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching auth status:", error);
      });
  }, [isLoggedIn]);

  return isLoggedIn;
};
