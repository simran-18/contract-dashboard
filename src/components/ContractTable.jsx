import React, { useState } from "react";
import { ContractRow } from "./ContractRow";
import { useAppContext } from "../contexts/AppContext";

export const ContractTable = ({ onEdit }) => {
  const { contracts } = useAppContext();
  const [search, setSearch] = useState("");

  const filteredContracts = contracts?.filter((contract) =>
    contract?.clientName?.toLowerCase()?.includes(search?.toLowerCase())
  );
  console.log("filteredContracts::",filteredContracts);
  return (
    <div className="p-4 rounded shadow-lgs">
      <input
        type="text"
        placeholder="Search based on company name..."
        className="p-2 mb-4 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table-auto w-full text-left border-collapse border-2 border-gray-400 ">
        <thead>
          <tr className="">
            <th className="p-2">ID</th>
            <th className="p-2">Client Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContracts?.map((contract) => (
            <ContractRow
              key={contract?.id}
              contract={contract}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
