import { useEffect } from "react";
import { statuses } from "../database/mockDb";

export const useWebSocket = (updateContract) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const randomId = `C00${Math.ceil(Math.random() * 2)}`;
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

      updateContract({ id: randomId, status: randomStatus });
    }, 5000);

    return () => clearInterval(interval);
  }, [updateContract]);
};
