import { ThemeType } from "../types/theme.type";
import { Palette } from "../value-objects/palette";

export interface Theme {
  name: string;
  type: ThemeType;
  palette: Palette;
}
