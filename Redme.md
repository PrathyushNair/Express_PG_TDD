
Folder structure:

.
└── src
    ├── databaseHelpers
    │   ├── migrations
    │   │   ├── timestampedMigrationFile.js
    │   │   └── timestampedMigrationFile.ts
    │   ├── seeds
    │   │   ├── people.js
    │   │   └── people.ts
    │   ├── connection.js
    │   ├── connection.ts
    │   ├── knexfile.js
    │   └── knexfile.ts
    ├── modules
    │   └── user
    │       ├── controller
    │       │   ├── userOperatiions.controller.js
    │       │   ├── userOperations.controller.ts
    │       │   └── userOperations.test.ts
    │       ├── repository
    │       │   ├── user.repository.js
    │       │   └── user.repository.ts
    │       └── service
    │           ├── user.service.js
    │           └── user.service.ts
    ├── app.js
    ├── app.ts
    ├── server.js
    ├── server.ts
    ├── jest.config.ts
    ├── jest.setup.ts
    ├── package-lock.json
    ├── package.json
    ├── Readme.md
    └── tsconfig.json





Typescript starting;
Run command
npm install express 
npm install --save-dev typescript nodemon @types/node @types/express

In Package.json add
1) "main": "src/server.ts"
2) "scripts": {
 "test": "jest --watchAll --detectOpenHandles --coverage",
    "build": "tsc",
    "start": "tsc -w & nodemon ./src/server"
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




