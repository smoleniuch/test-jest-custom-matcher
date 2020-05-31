
module.exports = {

    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    globals:{
        "ts-jest":{
            diagnostics:true
        }
    },
    setupFilesAfterEnv:['<rootDir>/setupTest.ts']
}