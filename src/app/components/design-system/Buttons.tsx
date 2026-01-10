import React from 'react';

const Button = ({ 
  label, 
  variant, 
  state = 'default' 
}: { 
  label: string; 
  variant: 'primary' | 'text' | 'link'; 
  state?: 'default' | 'hover' | 'active' | 'disabled';
}) => {
  let baseStyles = "h-[36px] px-[16px] rounded-[4px] text-[16px] font-semibold transition-colors duration-200 flex items-center justify-center";
  let specificStyles = "";

  if (variant === 'primary') {
    if (state === 'default') specificStyles = "bg-[#108000] text-white";
    if (state === 'hover') specificStyles = "bg-[#0D6B00] text-white";
    if (state === 'active') specificStyles = "bg-[#095200] text-white";
    if (state === 'disabled') specificStyles = "bg-[#BABEC5] text-white cursor-not-allowed";
  } else if (variant === 'text') {
    if (state === 'default') specificStyles = "bg-transparent text-[#108000]";
    if (state === 'hover') specificStyles = "bg-[rgba(16,128,0,0.08)] text-[#108000]";
    if (state === 'active') specificStyles = "bg-[rgba(16,128,0,0.12)] text-[#0D6B00]";
    if (state === 'disabled') specificStyles = "bg-transparent text-[#BABEC5] cursor-not-allowed";
  } else if (variant === 'link') {
    baseStyles = "text-[14px] font-semibold cursor-pointer";
    if (state === 'default') specificStyles = "text-[#00892E] no-underline";
    if (state === 'hover') specificStyles = "text-[#00892E] underline";
    if (state === 'active') specificStyles = "text-[#006B24] underline";
    if (state === 'disabled') specificStyles = "text-[#BABEC5] no-underline cursor-not-allowed";
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button className={`${baseStyles} ${specificStyles}`} disabled={state === 'disabled'}>
        {label}
      </button>
      <span className="text-xs text-gray-400 capitalize">{state}</span>
    </div>
  );
};

export const Buttons = () => {
  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#393A3D] mb-8">5. Buttons</h2>

      {/* 5.1 Primary Button States */}
      <div className="mb-10">
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">5.1 Primary Button States</h3>
        <div className="flex gap-[24px]">
          <Button label="Continue" variant="primary" state="default" />
          <Button label="Continue" variant="primary" state="hover" />
          <Button label="Continue" variant="primary" state="active" />
          <Button label="Continue" variant="primary" state="disabled" />
        </div>
      </div>

      {/* 5.2 Text/Ghost Button States */}
      <div className="mb-10">
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">5.2 Text/Ghost Button States</h3>
        <div className="flex gap-[24px]">
          <Button label="Cancel" variant="text" state="default" />
          <Button label="Cancel" variant="text" state="hover" />
          <Button label="Cancel" variant="text" state="active" />
          <Button label="Cancel" variant="text" state="disabled" />
        </div>
      </div>

      {/* 5.3 Link Button States */}
      <div>
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">5.3 Link Button States</h3>
        <div className="flex gap-[24px] items-end">
          <Button label="Manage" variant="link" state="default" />
          <Button label="Manage" variant="link" state="hover" />
          <Button label="Manage" variant="link" state="active" />
          <Button label="Manage" variant="link" state="disabled" />
        </div>
      </div>
    </div>
  );
};
