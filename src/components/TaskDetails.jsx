import { useState } from "react";
import ActivitySection from "./ActivitySection";
import SidebarPanel from "./SidebarPanel";
import SubIssueForm from "./SubIssueForm";
import { ChevronUp, ChevronDown, SmilePlus, Paperclip, Plus, CircleUserRound, Star, CloudUpload } from "lucide-react";
import profile from "@/assets/profile.jpg"

export default function TaskDetails() {
  const [showSubIssueForm, setShowSubIssueForm] = useState(false);

  return (
    <div className="d-flex vh-1000" style={{ backgroundColor: "#f1f1f1" }}>
      {/* Main Content */}
      <div className="flex-grow-1 p-1 border-end d-flex flex-column">
        {/* Sleek Project Header */}
        <div
          style={{
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.06)", 
            padding: "5px",
            marginBottom: "1rem",
            zIndex: 1,
          }}
        >
          <div className="d-flex justify-content-between align-items-center small text-muted px-1">
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
                className="border  d-flex justify-content-center align-items-center"
                style={{
                  width: "28px",
                  height: "28px",
                  cursor: "pointer",
                }}
                title="Move up"
              >
                <ChevronUp size={16} />
              </span>

              <span
                className="border rounded d-flex justify-content-center align-items-center"
                style={{
                  width: "28px",
                  height: "28px",
                  cursor: "pointer",
                }}
                title="Move down"
              >
                <ChevronDown size={16} />
              </span>
            </div>

          </div>
        </div>
        <div className="p-3 ms-3">
          {/* Main Heading */}
          <h1 className="h5  mb-4">Connect your tools (3)</h1>
          {/* Placeholder content */}
          <div
            className="mb-4 rounded"
            style={{
              height: "370px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #000", 
            }}
          ></div>
          {/* Textarea Section */}
          <div className="mb-1  pb-1">


            {/* icon and Attachment Row */}
            <div className="d-flex justify-content-between align-items-center mt-1">
              <SmilePlus strokeWidth={0.75} className='ms-3' />
              <Paperclip strokeWidth={0.75} className='me-5' />
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
          <div
            className=" d-flex justify-content-between align-items-center mb-1 pb-2 ms-1"
            style={{ borderColor: "#d3d3d3" }}
          >
            <span className=" text-secondary small fw-semibold	">Activity</span>
            <span className="text-muted small  " style={{ cursor: "pointer" }}>
              Unsubscribe
              <span className="text-muted small me-5 ms-2" style={{ cursor: "pointer" }}>
                <img
                  src={profile}
                  alt="Profile"
                  className="me-2 rounded-circle"
                  style={{ width: "22px", height: "22px", objectFit: "cover" }}
                />   </span>

            </span>
          </div>
          
          {/* Example Activity Log */}
          <div className="  mb-4 small text-secondary">
            <ActivitySection />

          </div>
        </div>

      </div>

      {/* Sidebar */}
      <div style={{ width: "350px" }} className="flex-shrink-0 position-relative">
        <SidebarPanel />
      </div>
    </div>
  );
}
