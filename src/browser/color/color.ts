export class Color {
  /**
   * Converts a color as an [R, G, B] array of normalized floats to a hexadecimal number.
   * @example
   * rgb2hex([1, 1, 1]); // returns 0xffffff
   * @static
   * @param {(number[] | Float32Array)} rgb - Array of numbers where all values are normalized floats from 0.0 to 1.0.
   * @return {number}  Number in hexadecimal.
   * @memberof Color
   */
  static rgb2hex(rgb: number[] | Float32Array): number {
    return (
      ((rgb[0] * 255) << 16) + ((rgb[1] * 255) << 8) + ((rgb[2] * 255) | 0)
    );
  }
}
