import { styled } from './styled';

export interface IStyledPlugin {
  styledUtils?: IStyled;
  register(styledUtils: IStyled): void;
  inputMiddleWare(styledObj: any): void;
  componentMiddleWare?(props: any): void;
}

export class IStyled {
  aliases?: any;
  tokens?: any;
  ref?: any;
}

export class AliasPropsResolver implements IStyledPlugin {
  styledUtils: IStyled | undefined;

  register(styledUtils: any) {
    this.styledUtils = styledUtils;
  }

  constructor(styledUtils: IStyled) {
    this.register(styledUtils);
  }

  inputMiddleWare(styledObj: any = {}) {
    return this.updateStyledObject(styledObj);
  }

  updateStyledObject(styledObject: any = {}) {
    for (const prop in styledObject) {
      if (typeof styledObject[prop] === 'object') {
        this.updateStyledObject(styledObject[prop]);
      } else if (this.styledUtils?.aliases?.[prop]) {
        const alias = this.styledUtils?.aliases?.[prop];
        styledObject[alias] = styledObject[prop];
        delete styledObject[prop];
      }
    }

    return styledObject;
  }
}

export const createStyled = (plugins: any) => {
  return (
    Component: any,
    styledObject: any,
    compConfig: any = {},
    extendedConfig: any = {}
  ) => {
    // const styledUtils = {
    //   getThis: function () {},
    // };
    let styledObj: any = styledObject;
    for (const pluginName in plugins) {
      styledObj = plugins[pluginName]?.inputMiddleWare(styledObj);
    }
    let NewComp = styled(Component, styledObj, compConfig, extendedConfig);

    // NewComp =

    // Running reverse loop to handle callstack side effects
    plugins.reverse();
    for (const pluginName in plugins) {
      if (plugins[pluginName]?.componentMiddleWare) {
        NewComp = plugins[pluginName]?.componentMiddleWare({
          NewComp,
          styledObject,
          compConfig,
          extendedConfig,
        });
      }
    }

    return NewComp;
  };
};
