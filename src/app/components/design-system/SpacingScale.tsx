import React from 'react';

const SpacingBlock = ({ size, value, label }: { size: string; value: number; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-[24px] bg-[#2CA01C]/30 flex items-center justify-center text-[10px] text-[#00892E] font-bold" style={{ width: value * 4 }}>
      
    </div>
    <div className="text-[11px] font-normal text-[#6B6C72]">{label}</div>
    <div className="text-[10px] font-bold text-[#393A3D]">{size}</div>
  </div>
);

export const SpacingScale = () => {
  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#393A3D] mb-8">4. Spacing Scale</h2>
      
      <div className="flex items-end gap-[32px]">
        <SpacingBlock size="XS" value={2} label="2px" />
        <SpacingBlock size="SM" value={4} label="4px" />
        <SpacingBlock size="MD" value={8} label="8px" />
        <SpacingBlock size="LG" value={16} label="16px" />
        <SpacingBlock size="XL" value={24} label="24px" />
        <SpacingBlock size="2XL" value={36} label="36px" />
        <SpacingBlock size="3XL" value={40} label="40px" />
      </div>
    </div>
  );
};
