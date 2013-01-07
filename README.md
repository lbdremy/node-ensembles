# ensembles - 

Return an array of ensembles based on the given `ensemble` and `gap`.

## Usage

```js
var ensembles = require('ensembles');

var ensemble = [Date.now() - 3600, Date.now()];
var gap = 30;
var timeEnsembles = ensembles(ensemble, gap);

console.log(timeEnsembles); // array of 120 ensembles
```

## Test

```sh
npm test
```

## Licence

Copyright(C) 2012 Rémy Loubradou

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
				Version 2, December 2004 

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

Everyone is permitted to copy and distribute verbatim or modified 
copies of this license document, and changing it is allowed as long 
as the name is changed. 

        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

0. You just DO WHAT THE FUCK YOU WANT TO. 