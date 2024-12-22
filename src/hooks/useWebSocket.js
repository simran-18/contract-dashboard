import { useEffect } from "react";
import { statuses, contracts } from "../database/mockDb";

// Hook to randomly update the status of any object in the contracts array
export const useWebSocket = (updateContract) => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Select a random contract from the contracts array
      const randomContract = contracts[Math.floor(Math.random() * contracts.length)];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

      // Call the updateContract function with the updated contract info
      updateContract({
        id: randomContract.id,
        status: randomStatus,
        clientName: randomContract.clientName,
      });
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [updateContract]);
};
