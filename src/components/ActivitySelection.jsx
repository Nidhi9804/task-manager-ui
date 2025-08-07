import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ActivitySection() {
  return (
    <div className="mt-6 bg-gray-100 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Activity</h4>
      <div className="mb-3 text-sm text-gray-700">
        <p>Commented by user1 on Aug 6, 2025</p>
        <p>“Working on issue resolution…”</p>
      </div>
      <Input placeholder="Leave a comment..." className="mb-2" />
      <Button>Post</Button>
    </div>
  );
}
