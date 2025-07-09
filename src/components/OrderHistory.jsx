import React, { useState } from "react";
import { historicoComprasMock } from "../historyData";
import Pagination from "./Pagination";

export default function OrderHistory({ perPage = 5 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const list = historicoComprasMock;
  const total = list.length;
  const start = (currentPage - 1) * perPage;
  const currentList = list.slice(start, start + perPage);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Histórico de Compras</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            {["Pedido", "Data", "Total (R$)", "Status"].map((h) => (
              <th key={h} className="px-4 py-2">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentList.map((h) => (
            <tr key={h.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{h.id}</td>
              <td className="border px-4 py-2">{h.data}</td>
              <td className="border px-4 py-2">{h.total.toFixed(2)}</td>
              <td className="border px-4 py-2">{h.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalItems={total}
        itemsPerPage={perPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
