import React from 'react';
import { 
  HelpCircle, X, Calendar, ChevronDown, ChevronRight, Info,
  Check, Plus, Star, StickyNote, Landmark, CreditCard,
  Zap, Clock, AlertTriangle, XCircle, CheckCircle, ArrowRight,
  Edit2, Trash2, Download, Upload, Search, Filter
} from 'lucide-react';

const IconItem = ({ Icon, label }: { Icon: React.ElementType; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-[48px] h-[48px] border border-[#ECEEF1] rounded flex items-center justify-center">
      <Icon size={24} color="#6B6C72" />
    </div>
    <span className="text-[10px] text-[#BABEC5]">{label}</span>
  </div>
);

export const Icons = () => {
  return (
    <div className="w-full">
      <h2 className="text-[24px] font-bold text-[#393A3D] mb-8">10. Icons</h2>
      
      <div className="grid grid-cols-6 gap-y-[32px] gap-x-[24px]">
        {/* Row 1 */}
        <IconItem Icon={HelpCircle} label="help" />
        <IconItem Icon={X} label="close" />
        <IconItem Icon={Calendar} label="calendar" />
        <IconItem Icon={ChevronDown} label="chevron-down" />
        <IconItem Icon={ChevronRight} label="chevron-right" />
        <IconItem Icon={Info} label="info-circle" />

        {/* Row 2 */}
        <IconItem Icon={Check} label="checkmark" />
        <IconItem Icon={Plus} label="plus" />
        <IconItem Icon={Star} label="star" />
        <IconItem Icon={StickyNote} label="note" />
        <IconItem Icon={Landmark} label="bank" />
        <IconItem Icon={CreditCard} label="credit-card" />

        {/* Row 3 */}
        <IconItem Icon={Zap} label="lightning-bolt" />
        <IconItem Icon={Clock} label="clock" />
        <IconItem Icon={AlertTriangle} label="alert-triangle" />
        <IconItem Icon={XCircle} label="x-circle" />
        <IconItem Icon={CheckCircle} label="check-circle" />
        <IconItem Icon={ArrowRight} label="arrow-right" />

        {/* Row 4 */}
        <IconItem Icon={Edit2} label="edit" />
        <IconItem Icon={Trash2} label="trash" />
        <IconItem Icon={Download} label="download" />
        <IconItem Icon={Upload} label="upload" />
        <IconItem Icon={Search} label="search" />
        <IconItem Icon={Filter} label="filter" />
      </div>
    </div>
  );
};
