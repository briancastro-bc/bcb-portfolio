import { ThemeType } from "../../domain/types/theme.type";
import { Palette } from "../../domain/value-objects/palette";

export interface ChangeThemeDTO {
  name: string;
  type: ThemeType;
  palette: Palette;
}
