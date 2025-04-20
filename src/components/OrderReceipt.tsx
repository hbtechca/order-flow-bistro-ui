
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
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Order Receipt #{orderId}</h3>
        <span className="text-sm text-gray-600">{timeElapsed}</span>
      </div>
      
      <table className="w-full">
        <thead className="text-left text-sm text-gray-600">
          <tr>
            <th className="pb-2">Seat</th>
            <th className="pb-2">Code</th>
            <th className="pb-2">Qty</th>
            <th className="pb-2">Items</th>
            <th className="pb-2"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} className={item.completed ? "bg-green-50" : ""}>
              <td className="py-2">{item.seat}</td>
              <td>{item.code}</td>
              <td>{item.qty}</td>
              <td>{item.name}</td>
              <td className="text-right">
                {item.completed ? (
                  <Check className="w-5 h-5 text-green-600 ml-auto" />
                ) : (
                  <input type="checkbox" className="rounded" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
