import React from 'react';

export const DesignTokensFooter = () => {
  return (
    <div className="w-full mt-20 pt-10 border-t border-[#D4D7DC]">
      <h3 className="text-[14px] font-bold text-[#393A3D] mb-4 uppercase">Design Tokens Reference</h3>
      <div className="w-full border border-[#8D9096] rounded overflow-hidden">
        <div className="bg-[#393A3D] text-white px-4 py-2 text-sm font-bold">QUICK REFERENCE</div>
        <div className="grid grid-cols-4 divide-x divide-[#8D9096] bg-white border-t border-[#8D9096]">
            <div className="p-4">
                <div className="text-xs text-[#6B6C72] mb-1">Primary</div>
                <div className="font-mono text-sm font-bold text-[#393A3D]">#108000</div>
            </div>
            <div className="p-4">
                <div className="text-xs text-[#6B6C72] mb-1">Text Primary</div>
                <div className="font-mono text-sm font-bold text-[#393A3D]">#393A3D</div>
            </div>
            <div className="p-4">
                <div className="text-xs text-[#6B6C72] mb-1">Border</div>
                <div className="font-mono text-sm font-bold text-[#393A3D]">#8D9096</div>
            </div>
            <div className="p-4">
                <div className="text-xs text-[#6B6C72] mb-1">Radius</div>
                <div className="font-mono text-sm font-bold text-[#393A3D]">4px (inputs)</div>
            </div>
        </div>
         <div className="grid grid-cols-4 divide-x divide-[#8D9096] bg-white border-t border-[#8D9096]">
            <div className="p-4">
                <div className="text-xs text-[#6B6C72] mb-1">Success</div>
                <div className="font-mono text-sm font-bold text-[#393A3D]">#2CA01C</div>
            </div>
            <div className="p-4">
                <div className="text-xs text-[#6B6C72] mb-1">Text Secondary</div>
                <div className="font-mono text-sm font-bold text-[#393A3D]">#6B6C72</div>
            </div>
            <div className="p-4">
                <div className="text-xs text-[#6B6C72] mb-1">Background</div>
                <div className="font-mono text-sm font-bold text-[#393A3D]">#F4F5F8</div>
            </div>
            <div className="p-4">
                <div className="text-xs text-[#6B6C72] mb-1">Radius (Cards/Toggle)</div>
                <div className="font-mono text-sm font-bold text-[#393A3D]">8px / 20px</div>
            </div>
        </div>
      </div>
    </div>
  );
};
