import 'styled-components';
import theme from './theme';

export type Themes = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Themes { }
}
