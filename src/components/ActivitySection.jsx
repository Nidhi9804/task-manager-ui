import {
  Check,
  CircleArrowUp,
  Ellipsis,
  Paperclip,
  Reply,
  SmilePlus,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg"; 

export default function ActivitySection() {
  const activityLog = [
    {
      icon: (
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-circle"
          style={{ width: "22px", height: "22px", objectFit: "cover" }}
        />
      ),
      message: "Nidhi assigned the issue",
      time: "Just now",
    },
    {
      icon: (
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-circle"
          style={{ width: "22px", height: "22px", objectFit: "cover" }}
        />
      ),
      message: "Added label Feature",
      time: "49 min ago",
    },
    {
      icon: (
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-circle"
          style={{ width: "22px", height: "22px", objectFit: "cover" }}
        />
      ),
      message: "Marked as in progress",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="mt-1">
      {/* Activity Log */}
      <div className="rounded mb-2">
        {activityLog.map((entry, index) => (
          <div key={index} className="d-flex align-items-center mb-2">
            <div className="d-flex align-items-center">
              <div className="me-2">{entry.icon}</div>
              <div className="text-dark">{entry.message}</div>
            </div>
            <small className="text-muted ms-2">{entry.time}</small>
          </div>
        ))}
      </div>

      {/* Activity Box */}
      <div className="rounded mb-4 position-relative">
        <textarea
          className="form-control"
          style={{
            height: "100px",
            resize: "none",
            borderRadius: "6px",
            paddingTop: "40px",
            paddingRight: "70px",
          }}
        ></textarea>

        {/* Top Right Icons */}
        <div
          className="position-absolute"
          style={{
            top: "12px",
            right: "16px",
            display: "flex",
            gap: "12px",
            fontSize: "18px",
            color: "#555",
            cursor: "pointer",
          }}
        >
          <Reply strokeWidth={2.25} size={20} />
          <Check strokeWidth={2.25} size={20} />
          <SmilePlus strokeWidth={2.25} size={20} />
          <Ellipsis strokeWidth={1.5} size={20} />
        </div>
      </div>

      {/* Comment Box */}
      <div className="position-relative">
        <textarea
          placeholder="Leave a comment..."
          className="form-control"
          style={{
            height: "100px",
            resize: "none",
            borderRadius: "6px",
            paddingRight: "70px",
          }}
        ></textarea>

        {/* Bottom Right Icons */}
        <div
          className="position-absolute"
          style={{
            bottom: "12px",
            right: "16px",
            display: "flex",
            gap: "12px",
            fontSize: "18px",
            color: "#555",
            cursor: "pointer",
          }}
        >
          <Paperclip strokeWidth={1.5} size={18} className="mt-1" />
          <CircleArrowUp strokeWidth={0.7} size={22} />
        </div>
      </div>
    </div>
  );
}
