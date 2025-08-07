import {
  Circle,
  CircleUser,
  CircleUserRound,
  CloudUpload,
  Ellipsis,
  FileWarning,
  Paperclip,
  RectangleEllipsis,
  Zap
} from "lucide-react";
import profile from "@/assets/profile.jpg"

export default function SubIssueForm({ onCancel }) {
  return (
    <div
      className="mt-4 p-2 rounded shadow"
      style={{
        backgroundColor: "#fff", border: "1px solid #d3d3d3", fontSize: "14px",
      }}
    >
      {/* Radio-style Label and Title Input */}
      <div className="mb-1 d-flex align-items-center me-3">
        <Circle strokeWidth={0.8} size={18} />
        <input
          type="text"
          className="flex-grow-1 ms-2"
          placeholder="Issue title"
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
          }}
        />
      </div>

      {/* Description Textarea */}
      <div className="mb-2 ms-4">
        <textarea
          rows="1"
          placeholder="Add description..."
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            background: "transparent",
            resize: "none",
          }}
        ></textarea>
      </div>

      {/* Emoji and Suggestions */}
      <div className="d-flex align-items-center mb-3 ms-4">
        <Zap strokeWidth={0.75} size={18} className="me-3" />
        <span
          className="me-3"
          style={{
            cursor: "pointer",
            color: "#6e6c6c",
          }}
        >
          Suggestions
        </span>
        <div
          style={{
            cursor: "pointer",
            border: "1px dotted #999",
            borderRadius: "4px",
            padding: "2px 5px",
            display: "inline-block",
          }}
        >
          <img
            src={profile}
            alt="Profile"
            className="me-2 rounded-circle"
            style={{ width: "22px", height: "22px", objectFit: "cover" }}
          />          <span className="mb-1 ">Nidhi</span>
        </div>
      </div>

      {/* Emoji buttons + action buttons */}
      <div className="d-flex justify-content-between align-items-center ms-4">
        {/* Left - Emoji Buttons */}
        <div className="d-flex gap-2">
          <button className="btn btn-light px-1 py-1" style={{ borderColor: "#d3d3d3" }}>
            <CloudUpload strokeWidth={1.5} size={18} color="white" fill="orange" />
            STU
          </button>
          <button className="btn btn-light px-1 py-1" style={{ borderColor: "#d3d3d3" }}>
            <FileWarning strokeWidth={1.5} size={18} color="white" fill="#eb721b" />
          </button>
          <button className="btn btn-light px-1 py-1" style={{ borderColor: "#d3d3d3" }}>
            <CircleUser strokeWidth={1.0} size={18} />
          </button>
          <button className="btn btn-light px-1 py-1" style={{ borderColor: "#d3d3d3" }}>
            <RectangleEllipsis size={18} strokeWidth={1.0} />
          </button>
          <button className="btn btn-light px-1 py-1" style={{ borderColor: "#d3d3d3" }}>
            <Ellipsis size={18} strokeWidth={1.0} />
          </button>
        </div>

        {/* Right - Attach, Cancel, Create */}
        <div className="d-flex gap-3">
          <Paperclip strokeWidth={1.2} size={22} className="mt-2 ms-1" />
          <button className="btn btn-outline-secondary px-4  " onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-outline-secondary px-4">Create</button>
        </div>
      </div>
    </div>
  );
}
