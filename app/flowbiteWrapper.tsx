import React, {ReactNode} from 'react';
import { Flowbite } from 'flowbite-react';
import customTheme from '~/flowbiteTheme';
import {ThemeInit} from "flowbite-react/lib/esm/theme-store/init";

interface FlowbiteWrapperProps {
  children?: ReactNode;
}

const FlowbiteWrapper: React.FC<FlowbiteWrapperProps> = ({ children }) => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <ThemeInit theme={customTheme} />
      {children}
    </Flowbite>
  );
};

export default FlowbiteWrapper;