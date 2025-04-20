
import { useState } from "react";
import { OrderSidebar } from "@/components/OrderSidebar";
import { TopBar } from "@/components/TopBar";
import { OrderReceipt } from "@/components/OrderReceipt";

const orderItems = [
  { seat: 4, code: "102", qty: 2, name: "CORONA" },
  { seat: 5, code: "102", qty: 1, name: "CORONA", completed: true },
];

export default function Index() {
  const [selectedOrder, setSelectedOrder] = useState("54");

  return (
    <div className="flex min-h-screen w-full">
      <OrderSidebar
        selectedOrder={selectedOrder}
        onSelectOrder={setSelectedOrder}
      />
      
      <div className="flex-1">
        <TopBar />
        
        <div className="grid grid-cols-3 gap-6 p-6">
          <div className="space-y-6">
            <h2 className="text-xl font-medium mb-4">Bar</h2>
            <OrderReceipt
              orderId="1"
              timeElapsed="2:45 Min"
              items={orderItems}
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-medium mb-4">Kitchen</h2>
            <OrderReceipt
              orderId="1"
              timeElapsed="2:45 Min"
              items={orderItems}
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-medium mb-4">Teppan</h2>
            <OrderReceipt
              orderId="1"
              timeElapsed="2:45 Min"
              items={orderItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
