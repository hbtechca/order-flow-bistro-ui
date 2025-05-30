
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
        
        <div className="grid grid-cols-3 gap-4 p-6 bg-[#F1F0FB] h-[calc(100vh-4rem)] overflow-y-auto">
          {["Bar", "Kitchen", "Teppan"].map((station, index) => (
            <div key={station} className="space-y-4">
              <div className="flex items-center justify-between bg-white/60 rounded-lg p-3 shadow-sm sticky top-0 z-10">
                <h2 className="text-lg font-medium text-gray-800 flex-grow text-center">{station}</h2>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2 py-1 rounded absolute right-3">
                  {index === 0 ? "2 Orders" : index === 1 ? "1 Order" : "3 Orders"}
                </span>
              </div>
              <div className="space-y-3">
                {station === "Bar" && (
                  <>
                    <OrderReceipt
                      orderId="1"
                      timeElapsed="2:45 Min"
                      items={orderItems}
                    />
                    <OrderReceipt
                      orderId="2"
                      timeElapsed="1:30 Min"
                      items={orderItems}
                    />
                  </>
                )}
                {station === "Kitchen" && (
                  <OrderReceipt
                    orderId="3"
                    timeElapsed="5:20 Min"
                    items={orderItems}
                  />
                )}
                {station === "Teppan" && (
                  <>
                    <OrderReceipt
                      orderId="4"
                      timeElapsed="0:45 Min"
                      items={orderItems}
                    />
                    <OrderReceipt
                      orderId="5"
                      timeElapsed="3:15 Min"
                      items={orderItems}
                    />
                    <OrderReceipt
                      orderId="6"
                      timeElapsed="6:30 Min"
                      items={orderItems}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

