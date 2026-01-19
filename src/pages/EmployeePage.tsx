import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const EmployeePage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const leadId = params.get("leadId");
  const leadName = params.get("leadName");
  const initialStatus = params.get("status") || "New";

  const [status, setStatus] = useState(initialStatus);

  const employees = [
    { id: 1, name: "Arjun", role: "Sales Executive" },
    { id: 2, name: "Meera", role: "Travel Consultant" },
    { id: 3, name: "Vishnu", role: "Support" },
  ];

  const assignLead = (employeeId: number) => {
    console.log({
      leadId,
      employeeId,
      status,
    });

    // API CALL HERE
    // POST /api/leads/assign

    alert("Lead assigned successfully");
    navigate("/leads");
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">
          Assign Lead
        </h1>
        <p className="text-slate-500">
          Lead: <b>{leadName}</b> (ID: {leadId})
        </p>
      </div>

      {/* STATUS DROPDOWN */}
      <div className="mb-8 max-w-sm">
        <label className="text-xs font-black uppercase text-slate-400">
          Lead Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-2 w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium"
        >
          <option>New</option>
          <option>Qualified</option>
          <option>Contacted</option>
          <option>Converted</option>
          <option>Lost</option>
        </select>
      </div>

      {/* EMPLOYEE TABLE */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-5 text-left text-xs font-black text-slate-400">
                Employee
              </th>
              <th className="p-5 text-left text-xs font-black text-slate-400">
                Role
              </th>
              <th className="p-5"></th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-5 font-bold">{emp.name}</td>
                <td className="p-5 text-slate-500">{emp.role}</td>
                <td className="p-5 text-right">
                  <button
                    onClick={() => assignLead(emp.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700"
                  >
                    <CheckCircle size={16} />
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeePage;
