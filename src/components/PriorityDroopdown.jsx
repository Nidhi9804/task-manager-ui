import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Ellipsis,
  FileWarning,
  SignalHigh,
  SignalMedium,
  SignalLow,
} from "lucide-react";
import { useState } from "react";

const priorities = [
  { label: "No priority", icon: <Ellipsis size={18} strokeWidth={1.5} /> },
  { label: "Urgent", icon: <FileWarning size={20} strokeWidth={1.5} fill="#000" color="#fff" /> },
  { label: "High", icon: <SignalHigh size={18} strokeWidth={1.8} color="#000" /> },
  { label: "Medium", icon: <SignalMedium size={18} strokeWidth={1.8} color="#000" /> },
  { label: "Low", icon: <SignalLow size={18} strokeWidth={1.8} color="#000" fill="#d3d3d3" /> },
];

export default function PriorityDropdown() {
  const [selected, setSelected] = useState(priorities[0]);
  const [search, setSearch] = useState("");

  const filteredPriorities = priorities.filter((p) =>
    p.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <div
          className="d-inline-flex align-items-center py-1 pb-1 "
          style={{ minWidth: "160px", cursor: "pointer" }}
        >
          <span
            className="me-2 mb-1 d-flex align-items-center justify-content-center"
            style={{ width: "20px", height: "20px" }}
          >
            {selected.icon}
          </span>
          <span>{selected.label}</span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-white shadow border rounded mt-1"
        style={{ width: "220px", zIndex: 9999 }}
      >
        {/* Search Field */}
        <div className="search">
          <input
            type="text"
            placeholder="Set priority to..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control form-control-sm border-0 px-1 py-1 bg-light rounded"
          />
        </div>

        {/* Filtered Options */}
        <div className="">
          {filteredPriorities.length > 0 ? (
            filteredPriorities.map((priority, index) => (
              <DropdownMenuItem 
                key={priority.label}
                onClick={() => {
                  setSelected(priority);
                  setSearch("");
                }}
                className="d-flex justify-content-between align-items-center  py-1 rounded hover-bg-dark"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <span
                    className="me-2 d-flex align-items-center justify-content-center"
                    style={{ width: "20px", height: "20px" }}
                  >
                    {priority.icon}
                  </span>
                  {priority.label}
                </div>
                <small className="text-muted">{index}</small>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="px-2 py-1 text-muted">No match found</div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
