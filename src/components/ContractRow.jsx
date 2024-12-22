import React from "react";

export const ContractRow = ({ contract, onEdit }) => (
  <tr>
    <td className="p-2">{contract.id}</td>
    <td className="p-2">{contract.clientName}</td>
    <td className="p-2">{contract.status}</td>
    <td className="p-2">
      <button
        className="text-blue-500 hover:underline"
        onClick={() => onEdit(contract)}
      >
        Edit
      </button>
    </td>
  </tr>
);
