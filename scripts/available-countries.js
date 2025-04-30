import fs from 'fs';
export function getCountryPaths() {
    // get all svgs from states folder
    const files = fs.readdirSync('./states');
    const countries = [];
    for (const file of files.filter(file => file.endsWith('.svg'))) {
        const src = file.split('.')[0];
        const code = file.split('.')[0].toUpperCase().replace('-', '_');
        countries.push({src, code});
    }
    return countries;
}