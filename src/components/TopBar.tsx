
import { ArrowLeft, DollarSign } from "lucide-react";

export function TopBar() {
  return (
    <div className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <ArrowLeft className="w-6 h-6" />
      </button>
      
      <div className="flex gap-3">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
          Reorder
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          Payments
        </button>
      </div>
    </div>
  );
}
