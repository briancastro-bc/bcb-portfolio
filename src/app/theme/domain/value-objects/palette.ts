import { Color } from './color';

export class Palette {

  private readonly TOTAL_HEX_COLOR_COMBINATIONS: number = (256 * 256 * 256) - 1;

  constructor(
    readonly primaryColor: Color,
    readonly primaryAltColor: Color,
    readonly secondaryColor: Color,
    readonly secondaryAltColor: Color,
    readonly accentColor: Color,
    readonly accentAltColor: Color,
  ) {}

  generateRandomPalette(): Pick<
    Palette,
    'primaryColor' | 'primaryAltColor' | 'secondaryColor' | 'secondaryAltColor' | 'accentColor' | 'accentAltColor'
  > {
    return {
      primaryColor: { hexCode: this.randomHexColor() },
      primaryAltColor: { hexCode: this.randomHexColor() },
      secondaryColor: { hexCode: this.randomHexColor() },
      secondaryAltColor: { hexCode: this.randomHexColor() },
      accentColor: { hexCode: this.randomHexColor() },
      accentAltColor: { hexCode: this.randomHexColor() },
    };
  }

  private generateRandomColor(type: 'rgb' | 'hex' = 'hex'): Color {
    return type === 'hex'
      ? {
        hexCode: this.randomHexColor(),
      } : {
        red: this.randomRGBColor(),
        green: this.randomRGBColor(),
        blue: this.randomRGBColor(),
      };
  }

  private randomRGBColor(): string {
    return Math.floor(Math.random() * 256).toString();
  }

  private randomHexColor(): string {
    const randomColor: string = Math.floor(
      Math.random() * this.TOTAL_HEX_COLOR_COMBINATIONS
    ).toString(16);
    return `#${randomColor}`;
  }
}
