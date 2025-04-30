<p align="center"><img src="BANNER.svg" width="1000"></p>

# InteraApps Flag Icons
In this Repository you can find minimalistic flatdesign icons for your awesome projects. These are always in an 1x1 format and 150x150 SVG.

# States
The `states` folder contains sovereign & non-sovereign states (Currently not everyone) by their ISO-3166-2 Code (`/states/DE.svg`)

# Former
The `former-states` folder contains some flags of former states like the USSR or Yugoslavia.
> Use specific flags like the NS State flag only for educational purposes.

## Sovietunions SSR Flags
The `former-states/SSR` folder contains the flags of the soviet republics in the format su-`Todays ISO3166-2 code`. For example `former-states/SU-UA.svg` (For the Ukranian SSR)

## Regions
The `regions` folder contains some flags of provinces and cities.


# NPM
```bash
npm i ia-flag-icons
```

## Vite
### Dynamic
```js
import flagIcons from 'ia-flag-icons/vite'

const SVGURL = await flagIcons('de') // ..../states/DE.svg
```
### Import
```js
import deSVG from 'ia-flag-icons/states/DE.svg'

html`
    <img src=${deSVG} />
`
```

## CSS
```js
import 'ia-flag-icons/css/lib.css'

html`
    <div class="iafi iafi-de" style="width: 40px; height: 40px; border-radius: 20px;"></div>
`
```


# Hosted CDN
InteraApps:
Example: https://flags.intera.dev/states/DE.svg


# Credits
For some symboles we used Wikipedia Commons and changed them a bit
- Kosovo country outline: https://commons.wikimedia.org/wiki/File:Flag_of_Kosovo.svg
- Hammer and sickle: https://commons.wikimedia.org/wiki/File:Hammer_and_sickle.svg
- Albanian Eagle: https://commons.wikimedia.org/wiki/File:Flag_of_Albania.svg
- Afghanistan center coat: https://commons.wikimedia.org/wiki/File:Flag_of_Afghanistan.svg
- Antarctica: https://commons.wikimedia.org/wiki/File:Proposed_flag_of_Antarctica_(Graham_Bartram).svg
- United Nations: https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Nations.svg
- Egypt Eagle: https://commons.wikimedia.org/wiki/File:Flag_of_Egypt.svg

# LICENSE
CC0 1.0 Universal

# Legal advice
Some symboles are prohibited by different local law in different countries. Use controversial symboles only for educational purposes or check your local law.
