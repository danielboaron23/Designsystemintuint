import React from 'react';

const ShadowCard = ({ level, shadow, usage }: { level: string; shadow: string; usage: string }) => (
  <div className="flex flex-col gap-2">
    <div 
      className="w-[200px] h-[100px] bg-white rounded-[8px] flex items-center justify-center"
      style={{ boxShadow: shadow }}
    >
      <span className="text-sm text-gray-400">{level}</span>
    </div>
    <div className="text-xs text-gray-500 mt-2">
      <div className="font-semibold">{usage}</div>
      <div className="text-gray-400 font-mono text-[10px] mt-1">{shadow}</div>
    </div>
  </div>
);

export const ShadowsElevation = () => {
  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#393A3D] mb-8">11. Shadows & Elevation</h2>
      
      <div className="flex gap-[40px]">
        <ShadowCard 
          level="Small" 
          shadow="0px 2px 2px rgba(0,0,0,0.3)" 
          usage="Toggle thumb" 
        />
        <ShadowCard 
          level="Medium" 
          shadow="0px 5px 10px rgba(0,0,0,0.1)" 
          usage="Dropdowns" 
        />
        <ShadowCard 
          level="Large (Top)" 
          shadow="0px -4px 8px rgba(0,0,0,0.05)" 
          usage="CTA bar" 
        />
      </div>
    </div>
  );
};
