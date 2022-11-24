Typescript starting;
Run command
npm install express 
npm install --save-dev typescript nodemon @types/node @types/express

In Package.json add
1) "main": "src/server.ts"
2) "scripts": {
    "build": "tsc",
    "start": "tsc & node .",
    "dev": "tsc -w & nodemon ./src/server",
    }

Run npx tsc --init for ts config file.

Include these in ts.config file
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*"]
    }
  },
  "include": ["src/**/*"]
}


For Testing
install
=> npm i --save-dev @types/jest ts-jest 

add jest config file:
=> 
import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
  "^.+\\.tsx?$" : "ts-jest"
  },
};
export default config;




