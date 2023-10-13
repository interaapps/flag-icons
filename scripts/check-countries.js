import {existsSync} from "https://deno.land/std/fs/mod.ts";
import states from "./states.js";

console.log('Those flags are currently not supported:')
for (const {name, code} of states) {
    if (!existsSync(`../states/${code}.svg`))
    console.log(`${name} (${code})`);
}
