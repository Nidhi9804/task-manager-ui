import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Circle, Plus } from "lucide-react";

const SUGGESTED_LABELS = [
  {
    label: "Bug",
    emoji: <Circle color="red" fill="red" size={12} />,
  },
  {
    label: "Feature",
    emoji: <Circle color="purple" fill="purple" size={12} />,
  },
];

const OTHER_LABELS = [
  {
    label: "Improvement",
    emoji: <Circle color="blue" fill="blue" size={12} />,
  },
];

export default function LabelSelector({ selectedLabels, setSelectedLabels }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleLabel = (label) => {
    const exists = selectedLabels.some((l) => l.label === label.label);
    if (exists) {
      setSelectedLabels(selectedLabels.filter((l) => l.label !== label.label));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  const filterLabels = (labels) =>
    labels.filter((l) =>
      l.label.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Plus size={18} style={{ cursor: "pointer" }} />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-white shadow border rounded "
        style={{ minWidth: "220px", zIndex: 9999 }}
      >
        {/* Search Input */}
        <div className="px-2 ">
          <input
            type="text"
            placeholder="Add labels..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control border-0 shadow-none bg-transparent px-0"
          />
        </div>

        <hr className="my-1 border-top border-secondary-subtle" />

        {/* Suggested Labels */}
        {filterLabels(SUGGESTED_LABELS).length > 0 && (
          <>
            <DropdownMenuLabel className="text-muted px-2">Suggestions</DropdownMenuLabel>
            {filterLabels(SUGGESTED_LABELS).map((labelObj) => (
              <DropdownMenuItem
                key={labelObj.label}
                onClick={() => toggleLabel(labelObj)}
                className="d-flex  gap-2 px-2 hover-bg-dark "
              >
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={selectedLabels.some((l) => l.label === labelObj.label)}
                  readOnly
                />
                <div className="d-flex align-items-baseline">
                  <span className="me-2">{labelObj.emoji}</span>
                  <span>{labelObj.label}</span>
                </div>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </>
        )}

        {/* Other Labels */}
        {filterLabels(OTHER_LABELS).length > 0 && (
          <>
            <DropdownMenuLabel className="text-muted mb-1">Labels</DropdownMenuLabel>
            {filterLabels(OTHER_LABELS).map((labelObj) => (
              <DropdownMenuItem
                key={labelObj.label}
                onClick={() => toggleLabel(labelObj)}
                className="d-flex  gap-2 py-1 hover-bg-dark"
              >
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={selectedLabels.some((l) => l.label === labelObj.label)}
                  readOnly
                />
                <div className="d-flex align-items-end">
                  <span className="me-2">{labelObj.emoji}</span>
                  <span>{labelObj.label}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
