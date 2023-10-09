import { useEffect, useState } from "react";
import useAuth from "../useAuth/useAuth";

const useAdmin = () => {
  const [isAdmin, setAdmin] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5021/users-role?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("res from axios", data);
        setAdmin(data);
      });
  }, [user]);

  return [isAdmin];
};

export default useAdmin;
