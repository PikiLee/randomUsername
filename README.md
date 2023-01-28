# Installation

## NPM
```
npm install @piki.me/random-username
```

## Yarn
```
yarn add @piki.me/random-username
```

## PNPM
```
pnpm install @piki.me/random-username
```

# Usage
```js
import { random } from "@piki.me/random-username";

random() // => "开心的河马"

random("en") => // "Fearless Cat"
```

# API
## random(language = "zh-Hans")
Get a random username.

### language
Supports: `en`, `zh-Hans`
Default: `zh-Hans`
