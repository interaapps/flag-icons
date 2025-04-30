import fs from 'fs';
import { getCountryPaths } from './available-countries.js';
import states from './states.js';

import {iso31661} from 'iso-3166'

// Write css/lib.css file
const countries = getCountryPaths();
const css = countries.map(({ src, code }) => {
    return `.iafi.iafi-${code.toLocaleLowerCase()} { background-image: url('../states/${src}.svg'); }`;
}).join('\n');
const cssFilePath = './css/lib.css';
fs.writeFileSync(cssFilePath, `
.iafi {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
${css}`);
console.log(`Created ${cssFilePath} with ${countries.length} countries`);
// Write js/lib.js file
const js = countries.map(({ src, code }) => {
    return `export const ${code} = '${code}';`;
}).join('\n');
const jsFilePath = './lib/lib.js';
fs.writeFileSync(jsFilePath, js);
console.log(`Created ${jsFilePath} with ${countries.length} countries`);
// Write index.js file
const indexJs = countries.map(({ src, code }) => {
    return `export { ${code} } from './lib.js';`;
}).join('\n');
const indexJsFilePath = './lib/index.js';
fs.writeFileSync(indexJsFilePath, indexJs);
console.log(`Created ${indexJsFilePath} with ${countries.length} countries`);
// Write index.d.ts file
const indexDts = countries.map(({ src, code }) => {
    return `export declare const ${code}: string;`;
}).join('\n');
const indexDtsFilePath = './lib/index.d.ts';
fs.writeFileSync(indexDtsFilePath, indexDts);
console.log(`Created ${indexDtsFilePath} with ${countries.length} countries`);

// vite dynamic imports
const vite = countries.map(({ src, code }) => {
    return `    "${code.toUpperCase()}": () => import('../states/${src}.svg').then((m) => m.default),`;
}).join('\n');
const viteFilePath = './lib/vite.js';
fs.writeFileSync(viteFilePath, `const COUNTRIES = {
${vite}
    getFlagIcon: (code) => {
        if (!Object.keys(COUNTRIES).includes(code.toUpperCase())) {
            code = 'UNKNOWN'
        }
        return import('../states/' + code.toUpperCase() + '.svg').then((m) => m.default);
    }
}
    
export default COUNTRIES;`);
// types
const viteTypes = countries.map(({ src, code }) => {
    return `export declare const ${code}: () => Promise<string>;`;
}).join('\n');
const viteTypesFilePath = './lib/vite.d.ts';
fs.writeFileSync(viteTypesFilePath, `${viteTypes}
export declare const getFlagIcon: (code: string) => Promise<string>;
`);


// Create font file
const font = countries.map(({ src, code }) => {
    return `@font-face {
    font-family: 'iafi-${src.toLowerCase()}';
    src: url('../states/${src}.svg') format('svg');
}`;
}).join('\n');
const fontFilePath = './css/font.css';
fs.writeFileSync(fontFilePath, font);
console.log(`Created ${fontFilePath} with ${countries.length} countries`);

// Create json file
const jsonFilePath = './lib/flags.json';
fs.writeFileSync(jsonFilePath, JSON.stringify(countries.map((value) => {
    const iso = iso31661.find(state => state.alpha2 === value.code.toUpperCase())
    return {
        name: iso?.name || value.src,
        code: value.code.toUpperCase(),
        src: `states/${value.src}.svg`,
        iso
    }
}), null, 2));