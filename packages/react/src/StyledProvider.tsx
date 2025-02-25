import { get, onChange, set } from '@dank-style/color-mode';
import * as React from 'react';
import { Platform } from 'react-native';
import { propertyTokenMap } from './propertyTokenMap';
import type { COLORMODES } from './types';
import { platformSpecificSpaceUnits } from './utils';

type Config = any;

export const defaultConfig: { config: Config; colorMode: COLORMODES } = {
  config: {},
  colorMode: 'light',
};

// interface ConfigContextData {
//   config: Config;
//   setConfig: (config: Config) => void;
// }

const defaultContextData: Config = defaultConfig;

const StyledContext = React.createContext<Config>(defaultContextData);

// type IContext = {
//   config: Config;
//   colorMode?: COLORMODES;
// };
export const StyledProvider: React.FC<{
  config: Config;
  colorMode?: COLORMODES;
  children?: React.ReactNode;
  globalStyleInjector?: (config: Config) => string;
}> = ({ config, colorMode, children, globalStyleInjector }) => {
  const currentConfig = React.useMemo(() => {
    //TODO: Add this later
    return platformSpecificSpaceUnits(config, Platform.OS);
    // return config;
  }, [config]);

  globalStyleInjector?.({ ...currentConfig, propertyTokenMap });

  const currentColorMode = React.useMemo(() => {
    return colorMode;
  }, [colorMode]);

  React.useEffect(() => {
    if (currentColorMode) {
      set(currentColorMode === 'dark' ? 'dark' : 'light');
      onChange((currentColor: string) => {
        // only for web
        if (Platform.OS === 'web') {
          if (currentColor === 'dark') {
            document.documentElement.classList.remove(`gs-light`);
          } else {
            document.documentElement.classList.remove(`gs-dark`);
          }
          document.documentElement.classList.add(`gs-${currentColor}`);
        }
      });
    }

    if (Platform.OS === 'web') {
      document.documentElement.classList.add(`gs-${get()}`);
    }
  }, [currentColorMode]);

  let contextValue;
  if (Platform.OS === 'web') {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    contextValue = React.useMemo(() => {
      return { config: currentConfig };
    }, [currentConfig]);
  } else {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    contextValue = React.useMemo(() => {
      return { config: currentConfig, colorMode: currentColorMode };
    }, [currentConfig, currentColorMode]);
  }

  return (
    <StyledContext.Provider value={contextValue}>
      {children}
    </StyledContext.Provider>
  );
};

export const useStyled = () => React.useContext(StyledContext);
