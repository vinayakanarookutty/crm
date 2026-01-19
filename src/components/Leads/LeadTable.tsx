import { MoreHorizontal, Mail, Phone, UserPlus, X } from "lucide-react";
import { useState } from "react";

const employees = ["John", "Sarah", "David"];

const LeadTable = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Alice Thompson",
      destination: "Maldives Luxury",
      source: "Facebook Ads",
      status: "Qualified",
      score: 85,
      assignedTo: "",
    },
    {
      id: 2,
      name: "Mark Peterson",
      destination: "Swiss Alps Tour",
      source: "Website Form",
      status: "New",
      score: 40,
      assignedTo: "",
    },
  ]);

  const updateLead = (id: number, key: string, value: string) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, [key]: value } : l))
    );
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Client Details
              </th>
              <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Lead Source
              </th>
              <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Status
              </th>
              <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Assigned To
              </th>
              <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Intent Score
              </th>
              <th className="p-5"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="hover:bg-slate-50/80 transition-all group"
              >
                {/* CLIENT */}
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xs">
                      {lead.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {lead.name}
                      </p>
                      <p className="text-xs text-slate-400 font-medium">
                        {lead.destination}
                      </p>
                    </div>
                  </div>
                </td>

                {/* SOURCE */}
                <td className="p-5">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-black uppercase border border-slate-200">
                    {lead.source}
                  </span>
                </td>

                {/* STATUS DROPDOWN */}
                <td className="p-5">
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      updateLead(lead.id, "status", e.target.value)
                    }
                    className="text-[10px] font-bold bg-transparent outline-none cursor-pointer"
                  >
                    <option>New</option>
                    <option>Contacted</option>
                    <option>Qualified</option>
                    <option>Proposal Sent</option>
                    <option>Won</option>
                    <option>Lost</option>
                    <option>Fridge</option>
                  </select>
                </td>

                {/* ASSIGNED */}
                <td className="p-5 text-xs font-bold text-slate-500">
                  {lead.assignedTo || "—"}
                </td>

                {/* SCORE */}
                <td className="p-5">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full max-w-[60px] overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${lead.score}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      {lead.score}
                    </span>
                  </div>
                </td>

                {/* ACTIONS */}
                <td className="p-5 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-blue-600">
                      <Mail size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-blue-600">
                      <Phone size={16} />
                    </button>
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="p-2 text-slate-400 hover:text-indigo-600"
                    >
                      <UserPlus size={16} />
                    </button>
                    <button className="p-2 text-slate-400">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ASSIGN MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[320px] p-5 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-black">Assign Lead</h3>
              <button onClick={() => setSelectedLead(null)}>
                <X size={16} />
              </button>
            </div>

            <select
              className="w-full border rounded-lg p-2 text-sm"
              onChange={(e) =>
                updateLead(selectedLead.id, "assignedTo", e.target.value)
              }
              defaultValue=""
            >
              <option value="" disabled>
                Select Employee
              </option>
              {employees.map((emp) => (
                <option key={emp}>{emp}</option>
              ))}
            </select>

            <button
              onClick={() => setSelectedLead(null)}
              className="mt-4 w-full bg-indigo-600 text-white text-sm font-bold py-2 rounded-lg"
            >
              Assign
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadTable;
