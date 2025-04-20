
import { Check, ChevronDown, Hourglass, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrderSidebarProps {
  selectedOrder?: string;
  onSelectOrder: (orderId: string) => void;
}

const orders = [
  { id: "52", tables: "4,5,6", status: "pending", time: "15 min" },
  { id: "53", tables: "4,5,6", status: "completed" },
  { id: "54", tables: "4,5,6", status: "pending", time: "15 min" },
  { id: "56", tables: "Time Escaped", status: "pending", time: "15 min" },
  { id: "57", tables: "Time Escaped", status: "pending", time: "15 min" },
];

export function OrderSidebar({ selectedOrder, onSelectOrder }: OrderSidebarProps) {
  return (
    <div className="w-1/4 min-w-[250px] bg-gray-100 h-screen overflow-y-auto p-4 border-r">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium">Sabin Sth</h3>
          <p className="text-sm text-gray-600">Server</p>
        </div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-2">
        {orders.map((order) => (
          <button
            key={order.id}
            className={cn(
              "w-full text-left p-3 rounded-lg transition-colors",
              selectedOrder === order.id
                ? "bg-purple-100"
                : "hover:bg-gray-200"
            )}
            onClick={() => onSelectOrder(order.id)}
          >
            <div className="flex justify-between items-start mb-1">
              <span className="font-medium">Order #{order.id}</span>
              {order.status === "pending" ? (
                <Hourglass className="w-4 h-4 text-yellow-600" />
              ) : (
                <Check className="w-4 h-4 text-green-600" />
              )}
            </div>
            <div className="text-sm text-gray-600">
              <div>Table 1: {order.tables}</div>
              {order.time && <div>{order.time}</div>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
