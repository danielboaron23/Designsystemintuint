import React from 'react';
import { Header } from './components/design-system/Header';
import { ColorPalette } from './components/design-system/ColorPalette';
import { Typography } from './components/design-system/Typography';
import { SpacingScale } from './components/design-system/SpacingScale';
import { Buttons } from './components/design-system/Buttons';
import { FormInputs } from './components/design-system/FormInputs';
import { ToggleSwitch } from './components/design-system/ToggleSwitch';
import { TableComponents } from './components/design-system/TableComponents';
import { BadgesAndStatus } from './components/design-system/BadgesAndStatus';
import { Icons } from './components/design-system/Icons';
import { ShadowsElevation } from './components/design-system/ShadowsElevation';
import { RealTimePayments } from './components/design-system/RealTimePayments';
import { DesignTokensFooter } from './components/design-system/DesignTokensFooter';

const App = () => {
  return (
    <div 
      className="min-h-screen bg-white"
      style={{ fontFamily: '"Avenir Next", "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-[80px] py-[80px]">
        
        <section className="mb-[120px]">
          <Header />
        </section>

        <section className="mb-[120px]">
          <ColorPalette />
        </section>

        <section className="mb-[120px]">
          <Typography />
        </section>

        <section className="mb-[120px]">
          <SpacingScale />
        </section>

        <section className="mb-[120px]">
          <Buttons />
        </section>

        <section className="mb-[120px]">
          <FormInputs />
        </section>

        <section className="mb-[120px]">
          <ToggleSwitch />
        </section>

        <section className="mb-[120px]">
          <TableComponents />
        </section>

        <section className="mb-[120px]">
          <BadgesAndStatus />
        </section>

        <section className="mb-[120px]">
          <Icons />
        </section>

        <section className="mb-[120px]">
          <ShadowsElevation />
        </section>

        <section className="mb-[120px]">
          <RealTimePayments />
        </section>

        <section>
          <DesignTokensFooter />
        </section>

      </div>
    </div>
  );
};

export default App;
