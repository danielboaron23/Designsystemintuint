import React from 'react';
import { ChevronDown, Info, Calendar, Check } from 'lucide-react';

export const TableComponents = () => {
  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#393A3D] mb-8">8. Table Components</h2>

      {/* 8.1 Table Header Row */}
      <div className="mb-8 overflow-hidden rounded-t-md border border-b-0 border-[#D4D7DC]">
        <div className="w-full h-[72px] bg-white border-b border-[#D4D7DC] flex items-center px-[16px]">
          <div className="grid grid-cols-7 w-full gap-4">
             <div className="text-[12px] font-semibold uppercase text-[#393A3D]">VENDOR</div>
             <div className="text-[12px] font-semibold uppercase text-[#393A3D]">PAYMENT METHOD</div>
             <div className="text-[12px] font-semibold uppercase text-[#393A3D]">WITHDRAWAL DATE</div>
             <div className="text-[12px] font-semibold uppercase text-[#393A3D]">PAYMENT SPEED</div>
             <div className="text-[12px] font-semibold uppercase text-[#393A3D]">EST. DELIVERY</div>
             <div className="text-[12px] font-semibold uppercase text-[#393A3D]">PROCESSING FEE</div>
             <div className="text-[12px] font-semibold uppercase text-[#393A3D] text-right">AMOUNT</div>
          </div>
        </div>
        
        <div className="p-2 bg-gray-50 text-xs text-gray-400 text-center border-b border-[#D4D7DC]">8.1 Table Header Row</div>
      </div>

      {/* 8.2 Vendor Parent Row */}
      <div className="mb-8 overflow-hidden rounded-md border border-[#D4D7DC]">
        <div className="w-full h-[60px] bg-[#F4F5F8] flex items-center px-[16px]">
           <div className="grid grid-cols-7 w-full gap-4 items-center">
             <div className="text-[14px] font-medium text-[#393A3D]">Acme Corp</div>
             <div className="text-[14px] font-medium text-[#393A3D]">
                Bank payment ...1234 <span className="text-[#00892E] font-semibold cursor-pointer">[Manage]</span>
             </div>
             <div className="flex items-center">
                <div className="w-[120px] h-[32px] bg-white border border-[#8D9096] rounded px-2 flex items-center justify-between">
                    <span className="text-[14px]">Jan 15, 2025</span>
                    <Calendar size={14} color="#6B6C72" />
                </div>
             </div>
             <div className="flex items-center">
                <div className="w-[120px] h-[32px] bg-white border border-[#8D9096] rounded px-2 flex items-center justify-between">
                    <span className="text-[14px]">Standard</span>
                    <ChevronDown size={14} color="#393A3D" />
                </div>
             </div>
             <div className="text-[14px] font-medium text-[#393A3D]">Jan 18, 2025</div>
             <div className="text-[14px] font-medium text-[#393A3D] flex items-center gap-1">$0.50 <Info size={14} className="text-[#0365AC]"/></div>
             <div className="text-[14px] font-medium text-[#393A3D] text-right">$2,500.00</div>
          </div>
        </div>
        <div className="p-2 bg-white text-xs text-gray-400 text-center">8.2 Vendor Parent Row</div>
      </div>

      {/* 8.3 Child Bill Row (Default) */}
      <div className="mb-8 overflow-hidden rounded-md border border-[#D4D7DC]">
        <div className="w-full h-[60px] bg-white flex items-center px-[16px]">
            <div className="grid grid-cols-7 w-full gap-4 items-center">
                <div></div> {/* Indent */}
                <div className="text-[14px] font-medium text-[#393A3D]">INV-001</div>
                <div></div>
                <div></div>
                <div></div>
                <div className="text-[14px] font-medium text-[#393A3D]">Jan 20, 2025</div>
                <div className="flex items-center justify-end gap-4">
                    <span className="text-[14px] font-medium text-[#393A3D]">$1,250.00</span>
                    <div className="w-[80px] h-[32px] border border-[#8D9096] rounded px-2 flex items-center">
                         <span className="text-[14px]">$1250.00</span>
                    </div>
                    <span className="text-[#6B6C72] cursor-pointer">✕</span>
                </div>
            </div>
        </div>
        <div className="p-2 bg-gray-50 text-xs text-gray-400 text-center border-t border-[#D4D7DC]">8.3 Child Bill Row (Default)</div>
      </div>

       {/* 8.4 Child Bill Row (Real-Time Selected) */}
       <div className="mb-8 overflow-hidden rounded-md border border-[#D4D7DC]">
        <div className="w-full h-[60px] bg-[#ECEEF1] flex items-center px-[16px]">
            <div className="grid grid-cols-7 w-full gap-4 items-center">
                <div></div> 
                <div className="text-[14px] font-medium text-[#393A3D]">INV-001</div>
                <div></div>
                <div></div>
                <div className="text-[14px] font-bold text-[#108000] flex items-center gap-1">
                    Today, Jan 15 <Check size={14} strokeWidth={3} />
                </div>
                <div className="text-[14px] font-medium text-[#393A3D] flex items-center gap-1">$25.00 <Info size={14} className="text-[#0365AC]"/></div>
                <div className="flex items-center justify-end gap-4">
                    <span className="text-[14px] font-medium text-[#393A3D]">$1,250.00</span>
                    <div className="w-[80px] h-[32px] border border-[#8D9096] bg-white rounded px-2 flex items-center">
                         <span className="text-[14px]">$1250.00</span>
                    </div>
                    <span className="text-[#6B6C72] cursor-pointer">✕</span>
                </div>
            </div>
        </div>
        <div className="p-2 bg-white text-xs text-gray-400 text-center border-t border-[#D4D7DC]">8.4 Child Bill Row (Real-Time Selected)</div>
      </div>

    </div>
  );
};
