import { useState } from "react";
import ActivitySection from "./ActivitySection";
import SidebarPanel from "./SidebarPanel";
import SubIssueForm from "./SubIssueForm";
import {
  ChevronUp,
  ChevronDown,
  SmilePlus,
  Paperclip,
  Plus,
  Star,
  CloudUpload,
} from "lucide-react";
import profile from "@/assets/profile.jpg";

export default function TaskDetails() {
  const [showSubIssueForm, setShowSubIssueForm] = useState(false);

  return (
    <div className="d-flex flex-column flex-md-row min-vh-100" style={{ backgroundColor: "#f1f1f1" }}>
      {/* Main Content */}
      <div className="flex-grow-1 p-2 border-end d-flex flex-column">
        {/* Sleek Project Header */}
        <div
          style={{
            boxShadow:
              "0 1px 3px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.06)",
            padding: "8px",
            marginBottom: "1rem",
            zIndex: 1,
            backgroundColor: "white",
          }}
        >
          <div className="d-flex justify-content-between align-items-center small text-muted flex-wrap gap-2">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <CloudUpload strokeWidth={1.5} size={18} color="white" fill="orange" />
              <span className="fw-semibold text-dark">Student Test</span>
              <span className="text-muted">›</span>
              <span className="text-muted">STU</span>
              <span className="text-muted">...</span>
              <Star size={15} />
            </div>

            <div className="d-flex align-items-center gap-2">
              <span className="text-muted">4/4</span>
              <span
                className="border d-flex justify-content-center align-items-center rounded"
                style={{ width: "28px", height: "28px", cursor: "pointer" }}
                title="Move up"
              >
                <ChevronUp size={16} />
              </span>
              <span
                className="border d-flex justify-content-center align-items-center rounded"
                style={{ width: "28px", height: "28px", cursor: "pointer" }}
                title="Move down"
              >
                <ChevronDown size={16} />
              </span>
            </div>
          </div>
        </div>

        <div className="p-2 p-md-3">
          {/* Main Heading */}
          <h1 className="h5 mb-3">Connect your tools (3)</h1>

          {/* Placeholder content */}
          <div
            className="mb-4 rounded"
            style={{
              minHeight: "250px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #000",
            }}
          ></div>

          {/* Textarea Section */}
          <div className="mb-1 pb-1">
            <div className="d-flex justify-content-between align-items-center mt-1">
              <SmilePlus strokeWidth={0.75} className="ms-2" />
              <Paperclip strokeWidth={0.75} className="me-3" />
            </div>
          </div>

          {/* Add Sub Issues Button */}
          <div className="mb-2 ms-2">
            {!showSubIssueForm ? (
              <button
                onClick={() => setShowSubIssueForm(true)}
                className="text-muted small p-0 bg-transparent border-0"
                style={{ cursor: "pointer" }}
              >
                <Plus size={16} /> Add sub-issues
              </button>
            ) : (
              <SubIssueForm onCancel={() => setShowSubIssueForm(false)} />
            )}
          </div>

          {/* Activity Bar */}
          <div
            style={{
              borderTop: "1px solid rgb(161 156 156 / 68%)",
              margin: "12px 0",
            }}
          ></div>
          <div className="d-flex justify-content-between align-items-center mb-2 pb-2 ms-1 flex-wrap gap-2">
            <span className="text-secondary small fw-semibold">Activity</span>
            <span className="text-muted small d-flex align-items-center gap-2">
              Unsubscribe
              <img
                src={profile}
                alt="Profile"
                className="rounded-circle"
                style={{ width: "22px", height: "22px", objectFit: "cover" }}
              />
            </span>
          </div>

          {/* Example Activity Log */}
          <div className="mb-4 small text-secondary">
            <ActivitySection />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex-shrink-0 w-100 w-md-25" style={{ maxWidth: "350px" }}>
        <SidebarPanel />
        

      </div>
    </div>
  );
}
