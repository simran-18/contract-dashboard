import React, { useState } from "react";
import { ContractRow } from "./ContractRow";
import { useAppContext } from "../contexts/AppContext";

export const ContractTable = ({ onEdit }) => {
  const { contracts } = useAppContext();
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("id");  // Default sort by id
  const [sortDirection, setSortDirection] = useState("asc");  // Default ascending sort

  // Function to handle sorting
  const handleSort = (field) => {
    // Toggle the sorting direction if the same field is clicked
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Sort contracts based on sortField and sortDirection
  const sortedContracts = [...contracts].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  // Apply search filter after sorting
  const filteredContracts = sortedContracts.filter((contract) =>
    contract?.clientName?.toLowerCase()?.includes(search?.toLowerCase())
  );

  console.log("filteredContracts::", filteredContracts);

  return (
    <div className="p-4 rounded shadow-lg">
      <input
        type="text"
        placeholder="Search based on company name..."
        className="p-2 mb-4 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table-auto w-full text-left border-collapse border-2 border-gray-400 ">
        <thead>
          <tr>
            <th className="p-2 cursor-pointer" onClick={() => handleSort("id")}>
              ID {sortField === "id" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="p-2 cursor-pointer"
              onClick={() => handleSort("clientName")}
            >
              Client Name {sortField === "clientName" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="p-2 cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status {sortField === "status" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContracts?.map((contract) => (
            <ContractRow key={contract?.id} contract={contract} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
