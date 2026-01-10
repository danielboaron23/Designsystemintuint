import React from 'react';
import { Check } from 'lucide-react';

export const BadgesAndStatus = () => {
  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#393A3D] mb-8">9. Badges & Status</h2>

      {/* 9.1 Payment Speed Options */}
      <div className="mb-12">
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">9.1 Payment Speed Options</h3>
        <div className="flex flex-col gap-4">
            
            <div className="flex items-center w-[400px] justify-between border p-3 rounded bg-white">
                <span className="text-[#393A3D] font-medium">Standard</span>
                <span className="text-[#6B6C72] text-sm">$0.50 fee • 3 business days</span>
            </div>

            <div className="flex items-center w-[400px] justify-between border p-3 rounded bg-white">
                <span className="text-[#393A3D] font-medium">Faster</span>
                <span className="text-[#6B6C72] text-sm">$10.00 fee • 1 business day</span>
            </div>

            <div className="flex items-center w-[400px] justify-between border border-[#2CA01C] bg-[#F0FDF4] p-3 rounded">
                <div className="flex items-center gap-2">
                    <span className="text-[#393A3D] font-medium">Instant</span>
                    <span className="bg-[#2CA01C] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">NEW</span>
                </div>
                <span className="text-[#6B6C72] text-sm">1% fee • Same day (by 5 PM PT)</span>
            </div>

        </div>
      </div>

      {/* 9.2 Status Indicators */}
      <div>
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">9.2 Status Indicators</h3>
        <div className="flex gap-[40px]">
            
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#2CA01C] flex items-center justify-center">
                    <Check size={10} color="white" strokeWidth={4} />
                </div>
                <span className="text-[#108000] font-semibold">Delivered</span>
            </div>

            <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#F9A825]"></div>
                <span className="text-[#F9A825] font-semibold">Processing</span>
            </div>

             <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#0365AC]"></div>
                <span className="text-[#0365AC] font-semibold">Scheduled</span>
            </div>

             <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D32F2F] flex items-center justify-center text-white text-[10px] font-bold">!</div>
                <span className="text-[#D32F2F] font-semibold">Failed</span>
            </div>

        </div>
      </div>
    </div>
  );
};
