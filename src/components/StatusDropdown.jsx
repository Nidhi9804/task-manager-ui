import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Circle,
  CircleCheck,
  Clock,
  CircleDashed,
  CircleX
} from "lucide-react";
import { useState } from "react";

const statuses = [
  { label: "Backlog", icon: <CircleDashed size={18} strokeWidth={1.5} /> },
  { label: "To Do", icon: <Circle size={18} strokeWidth={1.5} fill="#fff" /> },
  { label: "In Progress", icon: <Clock size={18} strokeWidth={1.5} color="orange" /> },
  { label: "Done", icon: <CircleCheck size={18} strokeWidth={1.8} color="#fff" fill="blue" /> },
  { label: "Cancelled", icon: <CircleX size={18} strokeWidth={1.5} color="#fff" fill="#d3d3d3" /> },
  { label: "Duplicate", icon: <CircleX size={18} strokeWidth={1.5} color="#fff" fill="#d3d3d3" /> },
];

export default function StatusDropdown() {
  const [selected, setSelected] = useState(statuses[1]);
  const [search, setSearch] = useState("");

  const filteredStatuses = statuses.filter((status) =>
    status.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="d-inline-flex align-items-center py-1 "
          style={{ cursor: "pointer" }}
        >
          <span className="me-2 d-flex align-items-center justify-content-center" style={{ width: "20px", height: "20px" }}>
            {selected.icon}
          </span>
          <span>{selected.label}</span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white border rounded shadow-sm mt-1" >
        {/* Search Input */}
        <div className='search'>
          <input
            type="text"
            placeholder="Change status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control form-control-sm border-0 px-1 py-1 bg-light rounded"
          />
        </div>

        {/* Filtered Status Items */}
        <div >
          {filteredStatuses.length > 0 ? (
            filteredStatuses.map((status, index) => (
              <DropdownMenuItem
                key={status.label}
                onClick={() => {
                  setSelected(status);
                  setSearch("");
                }}
                className="d-flex justify-content-between align-items-center hover-bg-dark py-1 rounded " style={{ width: "200px" }}
              >
                <div className="d-flex align-items-center">
                  <span className="me-2 d-flex align-items-center justify-content-center" style={{ width: "20px", height: "20px" }}>
                    {status.icon}
                  </span>
                  {status.label}
                </div>
                <small className="text-muted">{index}</small>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="px-2 text-muted">No match found</div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
