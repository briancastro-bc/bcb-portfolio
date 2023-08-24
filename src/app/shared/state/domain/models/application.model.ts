import { ThemeType } from "@shared/core/types/theme.type";
import { LanguageType } from "@shared/core/types/language.type";

export interface ApplicationState {
  theme: ThemeType;
  language: LanguageType;
}
