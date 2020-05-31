
module.exports = {

    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    globals:{
        "ts-jest":{
            diagnostics:false
        }
    },
    setupFilesAfterEnv:['<rootDir>/setupTest.ts']
}