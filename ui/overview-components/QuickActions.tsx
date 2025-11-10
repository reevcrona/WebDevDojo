import { Link2, Share2, Flag } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="p-4 rounded-lg bg-[#20293a]">
      <h4 className="font-semibold mb-3 text-[#e5e7eb]">Quick Actions</h4>

      <ul className="flex gap-4">
        <li className="flex gap-3 text-[#9da6b9] hover:underline hover:text-[#4a90e2] cursor-pointer">
          <Link2 /> Copy Link
        </li>
        <li className="flex gap-3 text-[#9da6b9] hover:underline hover:text-[#4a90e2] cursor-pointer">
          <Share2 />
          Share
        </li>
        <li className="flex gap-3 text-[#9da6b9] hover:underline hover:text-[#4a90e2] cursor-pointer">
          <Flag /> Report
        </li>
      </ul>
    </div>
  );
}
