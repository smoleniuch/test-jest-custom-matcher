// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const fs = require('fs');
// const _transform = require('lodash/transform')
// const _merge = require('lodash/merge')

// let rawConfig = fs.readFileSync('tsconfig.json');
// let config = JSON.parse(rawConfig);

// const pathMappings = pathsToModuleNameMapper(config.compilerOptions.paths)
// // pathsToModuleNameMapper did not read correctly paths from typescript configuration file
// // this fix just prepends paths from tsconfig.json with rootDir
// // this is odd and cumbersome.
// const fixMappings = _transform(pathMappings, (result, valuePath, pathRegex) => _merge(result,{[pathRegex]:`<rootDir>/${valuePath}`}), {})

module.exports = {

    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    // modulePaths:['shared','server'],
    // moduleNameMapper: [fixMappings],
    setupFilesAfterEnv:['<rootDir>/setupTest.ts']
}