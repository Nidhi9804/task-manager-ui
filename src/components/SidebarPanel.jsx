import { useState } from "react";
import PriorityDropdoown from "./PriorityDroopdown";
import StatusDropdown from "./StatusDropdown";
import LabelSelector from "./LabelSelector";
import ProjectSelector from "./ProjectSelector";
import { GitFork, Link, TabletSmartphone } from "lucide-react";
import profile from "@/assets/profile.jpg";

export default function SidebarPanel() {
  const [selectedLabels, setSelectedLabels] = useState([
    { label: "Feature", emoji: "🟣", bgColor: "#e0d4f7", textColor: "#5f259f" },
  ]);

  return (
    <div
      className="p-3 w-100 w-md-auto"
      style={{
        backgroundColor: "#f1f1f1",
        fontSize: "13px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <span className="text-muted fw-semibold">Properties</span>
        <div className="d-flex gap-3 text-muted flex-wrap">
          <Link strokeWidth={1.5} size={18} />
          <TabletSmartphone strokeWidth={1.5} size={18} />
          <GitFork strokeWidth={1.5} size={18} />
        </div>
      </div>

      {/* Status */}
      <div className="mb-2">
        <StatusDropdown />
      </div>

      {/* Priority */}
      <div className="mb-2">
        <PriorityDropdoown />
      </div>

      {/* Assignee */}
      <div className="mb-3 mt-1 d-flex align-items-center flex-wrap gap-2">
        <img
          src={profile}
          alt="Profile"
          className="rounded-circle"
          style={{ width: "22px", height: "22px", objectFit: "cover" }}
        />
        <span>Nidhi</span>
      </div>

      {/* Labels */}
      <div className="mb-3">
        <div className="text-secondary mb-1">Labels</div>
        <div className="d-flex gap-2 flex-wrap align-items-center">
          {selectedLabels.map((labelObj) => (
            <span
              key={labelObj.label}
              style={{
                backgroundColor: "#e0e0e0",
                color: "#000",
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
      <div className="mb-2">
        <div className="text-secondary mb-1">Project</div>
        <ProjectSelector />
      </div>
    </div>
  );
}
