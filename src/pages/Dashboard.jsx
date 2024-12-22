import React, { useState } from "react";
import { ContractTable } from "../components/ContractTable";
import { Modal } from "../components/Modal";
import { useWebSocket } from "../hooks/useWebSocket";
import { useAppContext } from "../contexts/AppContext";

export const Dashboard = () => {
  const { updateContract } = useAppContext();
  const [editingContract, setEditingContract] = useState(false);

  useWebSocket(updateContract);

  const handleEdit = (contract) => setEditingContract(contract);
  const handleSave = (updatedContract) => {
    updateContract(updatedContract);
    setEditingContract(false);
  };

  return (
    <div className="p-6">
      <ContractTable onEdit={handleEdit} />
      {editingContract && <Modal
        contract={editingContract}
        onClose={() => setEditingContract(null)}
        onSave={handleSave}
      />}
    </div>
  );
};
