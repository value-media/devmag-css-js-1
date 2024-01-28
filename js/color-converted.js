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