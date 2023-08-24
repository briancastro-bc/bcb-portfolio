import { ThemeRepository } from "../../domain/repositories/theme.repository";

import { ChangeThemeDTO } from "../dtos/change-theme.dto";

export function changeTheme(
  theme: ChangeThemeDTO,
  themeRepository: ThemeRepository
): void {
  const {
    name,
    type,
    palette,
  } = theme;
  return themeRepository.changeTheme({ name, type, palette });
}
