
import { Check } from "lucide-react";

interface OrderReceiptProps {
  orderId: string;
  timeElapsed: string;
  items: {
    seat: number;
    code: string;
    qty: number;
    name: string;
    completed?: boolean;
  }[];
}

export function OrderReceipt({ orderId, timeElapsed, items }: OrderReceiptProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4 border-b pb-3">
        <h3 className="font-medium text-gray-800">Order Receipt #{orderId}</h3>
        <span className="text-sm bg-purple-50 text-purple-700 px-2 py-1 rounded">
          {timeElapsed}
        </span>
      </div>
      
      <table className="w-full">
        <thead className="text-left text-sm text-gray-500">
          <tr>
            <th className="pb-2 font-medium">Seat</th>
            <th className="pb-2 font-medium">Code</th>
            <th className="pb-2 font-medium">Qty</th>
            <th className="pb-2 font-medium">Items</th>
            <th className="pb-2"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} className={item.completed ? "bg-green-50" : ""}>
              <td className="py-2 text-sm">{item.seat}</td>
              <td className="text-sm">{item.code}</td>
              <td className="text-sm">{item.qty}</td>
              <td className="text-sm">{item.name}</td>
              <td className="text-right">
                {item.completed ? (
                  <Check className="w-5 h-5 text-green-600 ml-auto" />
                ) : (
                  <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
