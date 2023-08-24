import { BaseRepository } from "@core/domain/base.repository";
import { Theme } from "../entities/theme.entity";

export interface ThemeRepository extends Pick<BaseRepository, 'create' | 'findOne'> {
  changeTheme(theme: Required<Theme>): void;
}
