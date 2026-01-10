import React from 'react';
import { Zap, X, Check, AlertTriangle } from 'lucide-react';

export const RealTimePayments = () => {
  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#393A3D] mb-8">12. Real-Time Payment Components</h2>

      {/* 12.1 Promotional Banner */}
      <div className="mb-12">
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">12.1 Promotional Banner</h3>
        <div className="w-full h-[48px] bg-[#F0FDF4] border border-[#2CA01C]/30 rounded-[4px] flex items-center px-4 justify-between">
            <div className="flex items-center gap-3">
                <Zap size={24} className="text-[#2CA01C]" fill="#2CA01C" />
                <span className="text-[#393A3D] text-[14px]">
                    Real-Time payment is available! Pay before <span className="font-bold">5:00 PM PT</span> for same-day delivery
                </span>
            </div>
            <X size={20} className="text-[#6B6C72] cursor-pointer" />
        </div>
      </div>

      {/* 12.2 Confirmation Modal (Compact) */}
      <div className="mb-12">
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">12.2 Confirmation Modal (Compact)</h3>
        <div className="w-[480px] bg-white rounded-lg shadow-lg border border-[#D4D7DC] overflow-hidden">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#F0FDF4] flex items-center justify-center">
                        <Zap size={16} className="text-[#2CA01C]" fill="#2CA01C" />
                    </div>
                    <h4 className="text-[18px] font-bold text-[#393A3D]">Confirm Instant Payment</h4>
                </div>
                
                <div className="mb-4 border rounded border-[#D4D7DC]">
                    <div className="grid grid-cols-2 text-sm p-3 border-b border-[#D4D7DC] bg-[#F4F5F8]">
                        <div className="font-semibold text-[#6B6C72]">Standard</div>
                        <div className="font-semibold text-[#108000]">Instant</div>
                    </div>
                    <div className="grid grid-cols-2 text-sm p-3">
                        <div className="text-[#6B6C72]">3 business days</div>
                        <div className="text-[#393A3D] font-medium">Same day</div>
                    </div>
                </div>

                <div className="bg-[#FFF8E1] border border-[#F9A825]/30 p-3 rounded mb-6 flex gap-3">
                    <AlertTriangle size={16} className="text-[#F9A825] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#393A3D]">
                        Instant payments cannot be cancelled once submitted.
                    </p>
                </div>

                <div className="flex justify-end gap-3">
                    <button className="px-4 py-2 text-[#108000] font-semibold text-sm hover:bg-gray-50 rounded">
                        Keep Standard
                    </button>
                    <button className="px-4 py-2 bg-[#108000] text-white font-semibold text-sm rounded hover:bg-[#0D6B00]">
                        Use Instant Payment
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* 12.3 Processing States */}
      <div>
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">12.3 Processing States</h3>
        <div className="flex gap-8">
            
            {/* Scheduled */}
            <div className="bg-white p-4 rounded border border-[#D4D7DC] w-[200px]">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#0365AC]">Scheduled</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#0365AC]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#D4D7DC]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#D4D7DC]"></div>
                    </div>
                </div>
                <div className="inline-flex items-center gap-1 bg-[#F0FDF4] px-1.5 py-0.5 rounded border border-[#2CA01C]/20">
                    <Zap size={10} className="text-[#2CA01C]" fill="#2CA01C" />
                    <span className="text-[10px] font-bold text-[#2CA01C]">Instant</span>
                </div>
            </div>

            {/* Processing */}
             <div className="bg-white p-4 rounded border border-[#D4D7DC] w-[200px]">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#F9A825]">Processing</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#2CA01C] flex items-center justify-center">
                            <Check size={8} className="text-white" strokeWidth={4}/>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#F9A825] animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-[#D4D7DC]"></div>
                    </div>
                </div>
                <div className="text-xs text-[#6B6C72]">Sending to bank...</div>
            </div>

            {/* Delivered */}
             <div className="bg-white p-4 rounded border border-[#D4D7DC] w-[200px]">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#108000]">Delivered</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#2CA01C] flex items-center justify-center">
                             <Check size={8} className="text-white" strokeWidth={4}/>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#2CA01C] flex items-center justify-center">
                             <Check size={8} className="text-white" strokeWidth={4}/>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#2CA01C] flex items-center justify-center">
                             <Check size={8} className="text-white" strokeWidth={4}/>
                        </div>
                    </div>
                </div>
                <div className="text-xs text-[#6B6C72]">Funds available</div>
            </div>

        </div>
      </div>
    </div>
  );
};
