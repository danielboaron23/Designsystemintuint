import React from 'react';

const PrimaryColors = [
  { color: '#108000', label: 'Primary Active', hex: '#108000' },
  { color: '#2CA01C', label: 'Primary Default', hex: '#2CA01C' },
  { color: '#00892E', label: 'Action Green', hex: '#00892E' },
  { color: '#0365AC', label: 'Link Blue', hex: '#0365AC' },
  { color: '#024C82', label: 'Link Hover', hex: '#024C82' },
];

const SemanticColors = [
  { color: '#2CA01C', label: 'Success', hex: '#2CA01C' },
  { color: '#D32F2F', label: 'Error', hex: '#D32F2F' },
  { color: '#F9A825', label: 'Warning', hex: '#F9A825' },
  { color: '#0365AC', label: 'Info', hex: '#0365AC' },
  { color: '#6B6C72', label: 'Secondary', hex: '#6B6C72' },
];

const NeutralColors = [
  { color: '#FFFFFF', label: 'Background', hex: '#FFFFFF' },
  { color: '#F4F5F8', label: 'Surface', hex: '#F4F5F8' },
  { color: '#ECEEF1', label: 'Hover', hex: '#ECEEF1' },
  { color: '#D4D7DC', label: 'Border Light', hex: '#D4D7DC' },
  { color: '#BABEC5', label: 'Border/Disabled', hex: '#BABEC5' },
  { color: '#8D9096', label: 'Border Dark', hex: '#8D9096' },
  { color: '#6B6C72', label: 'Text Secondary', hex: '#6B6C72' },
  { color: '#393A3D', label: 'Text Primary', hex: '#393A3D' },
];

const Swatch = ({ color, label, hex }: { color: string; label: string; hex: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div
      className="w-[120px] h-[120px] rounded-[8px] border border-[#D4D7DC]"
      style={{ backgroundColor: color }}
    ></div>
    <div className="text-center">
      <div className="text-[12px] font-semibold uppercase text-[#393A3D]">{label}</div>
      <div className="text-[11px] font-normal text-[#6B6C72]">{hex}</div>
    </div>
  </div>
);

export const ColorPalette = () => {
  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#393A3D] mb-8">2. Color Palette</h2>
      
      {/* 2.1 Primary Colors */}
      <div className="mb-10">
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">2.1 Primary Colors</h3>
        <div className="flex flex-wrap gap-[24px]">
          {PrimaryColors.map((swatch, idx) => (
            <Swatch key={idx} {...swatch} />
          ))}
        </div>
      </div>

      {/* 2.2 Semantic Colors */}
      <div className="mb-10">
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">2.2 Semantic Colors</h3>
        <div className="flex flex-wrap gap-[24px]">
          {SemanticColors.map((swatch, idx) => (
            <Swatch key={idx} {...swatch} />
          ))}
        </div>
      </div>

      {/* 2.3 Neutral Colors */}
      <div>
        <h3 className="text-[18px] font-medium text-[#393A3D] mb-6">2.3 Neutral Colors</h3>
        <div className="flex flex-wrap gap-[24px]">
          {NeutralColors.map((swatch, idx) => (
            <Swatch key={idx} {...swatch} />
          ))}
        </div>
      </div>
    </div>
  );
};
