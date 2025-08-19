import {
  Circle,
  CircleUser,
  CloudUpload,
  Ellipsis,
  FileWarning,
  Paperclip,
  RectangleEllipsis,
  Zap,
} from "lucide-react";
import profile from "@/assets/profile.jpg";

export default function SubIssueForm({ onCancel }) {
  return (
    <div
      className="mt-4 p-2 rounded shadow"
      style={{
        backgroundColor: "#fff",
        border: "1px solid #d3d3d3",
        fontSize: "14px",
      }}
    >
      {/* Title Input */}
      <div className="mb-2 d-flex align-items-center me-2 flex-wrap gap-2">
        <Circle strokeWidth={0.8} size={18} />
        <input
          type="text"
          className="flex-grow-1"
          placeholder="Issue title"
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            minWidth: "200px",
          }}
        />
      </div>

      {/* Description Textarea */}
      <div className="mb-2 ms-4">
        <textarea
          rows="2"
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

      {/* Suggestions */}
      <div className="d-flex align-items-center flex-wrap gap-2 mb-3 ms-4">
        <Zap strokeWidth={0.75} size={18} />
        <span
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
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <img
            src={profile}
            alt="Profile"
            className="rounded-circle"
            style={{ width: "22px", height: "22px", objectFit: "cover" }}
          />
          <span>Nidhi</span>
        </div>
      </div>

      {/* Actions Row */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 ms-4">
        {/* Left icons */}
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-light px-2 py-1" style={{ borderColor: "#d3d3d3" }}>
            <CloudUpload strokeWidth={1.5} size={18} color="white" fill="orange" />
            <span className="ms-1">STU</span>
          </button>
          <button className="btn btn-light px-2 py-1" style={{ borderColor: "#d3d3d3" }}>
            <FileWarning strokeWidth={1.5} size={18} color="white" fill="#eb721b" />
          </button>
          <button className="btn btn-light px-2 py-1" style={{ borderColor: "#d3d3d3" }}>
            <CircleUser strokeWidth={1.0} size={18} />
          </button>
          <button className="btn btn-light px-2 py-1" style={{ borderColor: "#d3d3d3" }}>
            <RectangleEllipsis size={18} strokeWidth={1.0} />
          </button>
          <button className="btn btn-light px-2 py-1" style={{ borderColor: "#d3d3d3" }}>
            <Ellipsis size={18} strokeWidth={1.0} />
          </button>
        </div>

        {/* Right icons + Buttons */}
        <div className="d-flex flex-wrap gap-2 align-items-center">
          <Paperclip strokeWidth={1.2} size={22} className="mt-1" />
          <button className="btn btn-outline-secondary px-3 py-1" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-outline-secondary px-3 py-1">Create</button>
        </div>
      </div>
    </div>
  );
}
