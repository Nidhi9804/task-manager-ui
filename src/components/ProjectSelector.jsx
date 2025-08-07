import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Box, Plus } from "lucide-react";

export default function ProjectSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="d-inline-block" style={{ cursor: "pointer", fontSize: "13px" }}>
          <Box size={16} className="me-1" /> Assign
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-light shadow-sm rounded  "
        style={{ minWidth: "220px", zIndex: 9999 }}
        sideOffset={6}
      >
        <DropdownMenuLabel className="text-muted ">project</DropdownMenuLabel>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            className="d-flex align-items-center rounded fw-small bg-light dropdown-no-arrow hover-bg-dark"
          >
            <Box  className='me-2'size={16} />
            <span>Add to Project</span>
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent
            side="left"
            align="start"
            sideOffset={4}
            className="bg-light shadow-sm border rounded "
          >
              <DropdownMenuItem className="d-flex align-items-center   rounded hover-bg-dark">
              <Plus size={16} />
              Create New Project
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
