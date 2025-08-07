import { useState } from "react";
import PriorityDropdoown from "./PriorityDroopdown";
import StatusDropdown from "./StatusDropdown";
import LabelSelector from "./LabelSelector";
import ProjectSelector from "./ProjectSelector";
import { GitFork, Link, TabletSmartphone, UserCircle } from "lucide-react";
import profile from "@/assets/profile.jpg"
export default function SidebarPanel() {
  const [selectedLabels, setSelectedLabels] = useState([
    { label: "Feature", emoji: "🟣", bgColor: "#e0d4f7", textColor: "#5f259f" },
  ]);

  return (
    <div
      className="p-3"
      style={{
        width: "auto",
        backgroundColor: "#f1f1f1",
        fontSize: "13px",
        fontFamily: "system-ui, sans-serif",
        
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted  fw-semibold medium">Properties</span>
        <div className="d-flex gap-3 text-muted">
        <Link strokeWidth={1.5} size={18}/>          
        <TabletSmartphone strokeWidth={1.5} size={18}  />       
        <GitFork strokeWidth={1.5} size={18}/>
        </div>
      </div>

      {/* Status */}
      <div className="mb-1">
        <StatusDropdown />
      </div>

      {/* Priority */}
      <div className="mb-1">
        <PriorityDropdoown />
      </div>

      {/* Assignee */}
      <div className="mb-2 mt-1 d-flex align-items-center">
  <img
    src={profile}
    alt="Profile"
    className="me-2 rounded-circle"
    style={{ width: "22px", height: "22px", objectFit: "cover" }}
  />
  Nidhi
</div>

      {/* Labels */}
      <div className="mb-2">
        <div className="text-secondary medium mb-1">Labels</div>
        <div className="d-flex gap-2 flex-wrap align-items-center">
          {selectedLabels.map((labelObj) => (
         <span
         key={labelObj.label}
         style={{
           backgroundColor: "#e0e0e0", // consistent light grey
           color: "#000", // black text
           padding: "4px 8px",
           borderRadius: "12px",
           fontSize: "12px",
           display: "inline-flex",
           alignItems: "center",
           gap: "4px",
         }}
       >
         <span>{labelObj.emoji}</span> {labelObj.label}
       </span>
          ))}
          <LabelSelector
            selectedLabels={selectedLabels}
            setSelectedLabels={setSelectedLabels}
          />
        </div>
      </div>

      {/* Project */}
      <div>
        <div className=" text-secondary medium mb-1">Project</div>
        <ProjectSelector />
      </div>
    </div>
  );
}
