import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

export const FormInputs = () => {
  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#393A3D] mb-8">6. Form Inputs</h2>

      {/* 6.1 Text Input States */}
      <div className="mb-10">
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">6.1 Text Input States</h3>
        <div className="flex gap-[24px] items-start">
          {/* Default */}
          <div className="flex flex-col gap-2">
            <div className="w-[240px] h-[36px] px-[8px] py-[6px] rounded-[4px] border border-[#8D9096] bg-white flex items-center">
              <span className="text-[16px] font-medium text-[#6B6C72]">Account name</span>
            </div>
            <span className="text-xs text-gray-400">Default</span>
          </div>

          {/* Focused */}
          <div className="flex flex-col gap-2">
            <div className="w-[240px] h-[36px] px-[8px] py-[6px] rounded-[4px] border-[2px] border-[#00892E] bg-white flex items-center">
              <span className="text-[16px] font-medium text-[#393A3D]">Bank of America</span>
            </div>
            <span className="text-xs text-gray-400">Focused</span>
          </div>

          {/* Error */}
          <div className="flex flex-col gap-2">
            <div className="w-[240px] h-[36px] px-[8px] py-[6px] rounded-[4px] border border-[#D32F2F] bg-white flex items-center justify-between">
              <span className="text-[16px] font-medium text-[#393A3D]">Invalid</span>
              <div className="w-4 h-4 rounded-full bg-[#D32F2F] text-white flex items-center justify-center text-[10px] font-bold">!</div>
            </div>
            <span className="text-xs text-gray-400">Error</span>
          </div>

          {/* Disabled */}
          <div className="flex flex-col gap-2">
            <div className="w-[240px] h-[36px] px-[8px] py-[6px] rounded-[4px] border border-[#BABEC5] bg-[#F4F5F8] flex items-center">
              <span className="text-[16px] font-medium text-[#BABEC5]">Disabled</span>
            </div>
            <span className="text-xs text-gray-400">Disabled</span>
          </div>
        </div>
      </div>

      <div className="flex gap-[80px]">
        {/* 6.2 Input with Label */}
        <div>
          <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">6.2 Input with Label</h3>
          <div className="flex flex-col gap-[4px]">
            <label className="text-[14px] font-medium text-[#6B6C72]">Bank account</label>
            <div className="w-[240px] h-[36px] px-[8px] py-[6px] rounded-[4px] border border-[#8D9096] bg-white flex items-center">
              <span className="text-[16px] font-medium text-[#6B6C72]">Select account</span>
            </div>
          </div>
        </div>

        {/* 6.3 Date Input */}
        <div>
          <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">6.3 Date Input</h3>
          <div className="w-[160px] h-[36px] px-[8px] py-[6px] rounded-[4px] border border-[#8D9096] bg-white flex items-center justify-between">
            <span className="text-[16px] font-medium text-[#393A3D]">01/15/2025</span>
            <Calendar size={24} color="#6B6C72" className="mr-2" />
          </div>
        </div>
      </div>

      {/* 6.4 Dropdown/Select */}
      <div className="mt-10">
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">6.4 Dropdown/Select</h3>
        <div className="flex gap-[24px]">
          {/* Closed */}
          <div className="flex flex-col gap-2">
            <div className="w-[240px] h-[36px] px-[8px] py-[6px] rounded-[4px] border border-[#8D9096] bg-white flex items-center justify-between">
              <span className="text-[16px] font-medium text-[#393A3D]">Standard</span>
              <ChevronDown size={24} color="#393A3D" />
            </div>
            <span className="text-xs text-gray-400">Closed</span>
          </div>

           {/* Open/Focused */}
           <div className="flex flex-col gap-2">
            <div className="w-[240px] h-[36px] px-[8px] py-[6px] rounded-[4px] border border-[#00892E] bg-white flex items-center justify-between shadow-[0px_5px_10px_rgba(0,0,0,0.1)]">
              <span className="text-[16px] font-medium text-[#393A3D]">Standard</span>
              <ChevronDown size={24} color="#393A3D" className="rotate-180" />
            </div>
            <span className="text-xs text-gray-400">Open/Focused</span>
          </div>

          {/* With Selection */}
          <div className="flex flex-col gap-2">
             <div className="w-[240px] h-[36px] px-[8px] py-[6px] rounded-[4px] border border-[#8D9096] bg-white flex items-center justify-between">
              <span className="text-[16px] font-medium text-[#393A3D]">Real-Time</span>
              <ChevronDown size={24} color="#393A3D" />
            </div>
            <span className="text-xs text-gray-400">With Selection</span>
          </div>

          {/* Disabled */}
          <div className="flex flex-col gap-2">
             <div className="w-[240px] h-[36px] px-[8px] py-[6px] rounded-[4px] border border-[#BABEC5] bg-[#F4F5F8] flex items-center justify-between">
              <span className="text-[16px] font-medium text-[#BABEC5]">Standard</span>
              <ChevronDown size={24} color="#BABEC5" />
            </div>
            <span className="text-xs text-gray-400">Disabled</span>
          </div>

        </div>
      </div>
    </div>
  );
};
