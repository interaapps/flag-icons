import fs from 'fs';

import {iso31661} from 'iso-3166'

console.log('Those flags are currently not supported:')
for (const {name, alpha2} of iso31661) {
    if (!fs.existsSync(`./states/${alpha2}.svg`))
    console.log(`${name} (${alpha2})`);
}
