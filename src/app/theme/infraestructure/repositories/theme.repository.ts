import { Injectable } from '@angular/core';

import { ThemeRepository } from '../../domain/repositories/theme.repository';
import { Theme } from '../../domain/entities/theme.entity';
import { changeTheme } from '../../application/use-cases/change-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeRepositoryImplementation implements ThemeRepository {

  create(): void {
    throw new Error('Method not implemented.');
  }
  findOne<T>(): T {
    throw new Error('Method not implemented.');
  }

  changeTheme(theme: Required<Theme>): void {
    throw new Error();
  }
}
