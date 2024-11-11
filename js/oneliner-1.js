export const camelCase = (str) => str.replace(/[ -_](.)/g, (_, c) => c ? c.toUpperCase() : '');

export const escape = (str) => 
    str.replace(/[&<>"']/g, 
        (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])
    );

export const flat = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), [])

export const average = (...args) => args.reduce((a, b) => a + b) / args.length;

export const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);

export const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

export const isDarkMode = window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)').matches;

