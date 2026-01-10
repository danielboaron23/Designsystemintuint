import React from 'react';

const TypeSpec = ({ 
  name, 
  text, 
  size, 
  weight, 
  color, 
  specs 
}: { 
  name: string; 
  text: string; 
  size: string; 
  weight: string; 
  color: string; 
  specs: string;
}) => (
  <div className="flex items-center w-full border-b border-[#F4F5F8] py-4 last:border-0">
    <div className="w-[180px] text-[12px] font-normal text-[#6B6C72]">{name}</div>
    <div 
      className="w-[500px]" 
      style={{ 
        fontSize: size, 
        fontWeight: weight === 'Bold' ? 700 : weight === 'Demi' ? 600 : weight === 'Medium' ? 500 : 400, 
        color: color,
        textTransform: name.includes('Label') ? 'uppercase' : 'none'
      }}
    >
      {text}
    </div>
    <div className="ml-auto text-[12px] font-normal text-[#BABEC5] text-right">
      {specs}
    </div>
  </div>
);

export const Typography = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-8 border-b border-[#D4D7DC] pb-4">
        <h2 className="text-[24px] font-bold text-[#393A3D]">3. Typography</h2>
        <span className="text-[14px] font-normal text-[#6B6C72]">Font: Avenir Next</span>
      </div>

      <div className="flex flex-col gap-[8px]">
        <TypeSpec 
          name="Headline 05" 
          text="Schedule bill payment" 
          size="24px" 
          weight="Bold" 
          color="#393A3D"
          specs="24px Bold #393A3D"
        />
        <TypeSpec 
          name="Body 02 Demi" 
          text="Continue" 
          size="16px" 
          weight="Demi" 
          color="#393A3D"
          specs="16px Demi #393A3D"
        />
        <TypeSpec 
          name="Body 02 Medium" 
          text="Bank of America" 
          size="16px" 
          weight="Medium" 
          color="#393A3D"
          specs="16px Medium #393A3D"
        />
        <TypeSpec 
          name="Body 02 Regular" 
          text="Select your bank account" 
          size="16px" 
          weight="Regular" 
          color="#6B6C72"
          specs="16px Regular #6B6C72"
        />
        <TypeSpec 
          name="Body 03 Demi" 
          text="Manage" 
          size="14px" 
          weight="Demi" 
          color="#00892E"
          specs="14px Demi #00892E"
        />
        <TypeSpec 
          name="Body 03 Medium" 
          text="Add note" 
          size="14px" 
          weight="Medium" 
          color="#0365AC"
          specs="14px Medium #0365AC"
        />
        <TypeSpec 
          name="Body 03 Regular" 
          text="$1,250.00" 
          size="14px" 
          weight="Regular" 
          color="#393A3D"
          specs="14px Regular #393A3D"
        />
        <TypeSpec 
          name="Label" 
          text="VENDOR" 
          size="12px" 
          weight="Demi" 
          color="#393A3D"
          specs="12px Demi UPPERCASE #393A3D"
        />
        <TypeSpec 
          name="Caption" 
          text="Processing fee" 
          size="11.65px" 
          weight="Demi" 
          color="#6B6C72"
          specs="11.65px Demi #6B6C72"
        />
      </div>
    </div>
  );
};
