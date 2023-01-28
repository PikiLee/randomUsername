# Installation

## NPM
```
npm install @pikilee/random-username
```

## Yarn
```
yarn add @pikilee/random-username
```

## PNPM
```
pnpm install @piki.me/random-username
```

# Usage
```js
import { random } from "@pikilee/random-username";

random() // => "开心的河马"

random("en") => // "Fearless Cat"
```

# API
## random(language = "zh-Hans")
Get a random username.

### language
Supports: `en`, `zh-Hans`
Default: `zh-Hans`
