let colorCode = '#fa90ab';
console.log('#original hex:\t', colorCode);

const hexToRGB = (code) => {
    const hex = code.replace(/^#?/, '0x');
    return `rgb(${hex>>16},${hex >> 8 & 0xff},${hex & 0xff})`;
}

const rgbToHex = (code) => {
    const [r ,g, b] = colorCode
        .split(/[^\d]+/)
        .filter(Boolean)
        .map(n => +n);
    const color = (r << 16 | g << 8 | b).toString(16);
    return `#${color}`;
}

colorCode = hexToRGB(colorCode);
console.log('#rgb converted:\t', colorCode);

colorCode = rgbToHex(colorCode);
console.log('#again hex:\t', colorCode);

/**
  * Hexadecimal color value to RGB
  * @param {String} hex hexadecimal color string
  * @return {String} RGB color string
  */
function hexToRGB2(hex) {
    var hexx = hex. replace('#', '0x')
    var r = hexx >> 16
    var g = hexx >> 8 & 0xff
    var b = hexx & 0xff
    return `rgb(${r}, ${g}, ${b})`
  }

/**
 * RGB color to hexadecimal color
 * @param {String} rgb RGB color string
 * @return {String} Hexadecimal color string
 */
 function RGBToHex2(rgb) {
    var rgbArr = rgb. split(/[^\d]+/)
    var color = rgbArr[1]<<16 | rgbArr[2]<<8 | rgbArr[3]
    return '#'+ color.toString(16)
 }
// ------------------------------------------------ -
hexToRGB('#ffffff') // 'rgb(255,255,255)'
RGBToHex('rgb(255,255,255)') // '#ffffff'