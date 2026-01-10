import React from 'react';

const Toggle = ({ 
  state, 
  label 
}: { 
  state: 'off' | 'off-hover' | 'on' | 'on-hover';
  label: string;
}) => {
  let trackColor = '#8D9096';
  let thumbPosition = 'left-[2px]';
  let thumbColor = '#FFFFFF';
  
  if (state === 'off') {
    trackColor = '#8D9096';
    thumbPosition = 'left-[2px]';
  } else if (state === 'off-hover') {
    trackColor = '#6B6C72';
    thumbPosition = 'left-[2px]';
  } else if (state === 'on') {
    trackColor = '#2CA01C';
    thumbPosition = 'right-[2px]';
  } else if (state === 'on-hover') {
    trackColor = '#239617';
    thumbPosition = 'right-[2px]';
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className="w-[36px] h-[20px] rounded-[20px] relative transition-colors duration-200 cursor-pointer"
        style={{ backgroundColor: trackColor }}
      >
        <div 
          className={`absolute top-[1px] w-[18px] h-[18px] rounded-full bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.3)] transition-all duration-200 ${thumbPosition}`}
        ></div>
      </div>
      <span className="text-xs text-gray-400 capitalize">{label}</span>
    </div>
  );
};

export const ToggleSwitch = () => {
  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#393A3D] mb-8">7. Toggle Switch</h2>
      
      <div className="flex gap-[40px]">
        <Toggle state="off" label="Off" />
        <Toggle state="off-hover" label="Off Hover" />
        <Toggle state="on" label="On" />
        <Toggle state="on-hover" label="On Hover" />
      </div>
    </div>
  );
};
