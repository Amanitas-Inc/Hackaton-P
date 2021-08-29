import 'styled-components'
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      purple: string[];
      pink: string[];
      black: string[];
    }
  }
}