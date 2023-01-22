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
pnpm install @pikilee/random-username
```

# Usage
```js
import { random } from "@pikilee/random-username";

random().then((username) => {
    console.log(username) // => "开心的河马"
})

random("en").then((username) => {
    console.log(username) // => "Fearless Cat"
}) 
```

# API
## random(language = "zh-Hans")
Get a random username.
