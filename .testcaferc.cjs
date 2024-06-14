let os = require("os");

module.exports = {
    src: "e2e/tests/*.test.ts",
    browsers: ["chrome:headless"],
    baseUrl: "http://localhost:3000/",
    skipJsErrors: true,
    hostname: os.hostname(),
    reporter: [
        {
            name: "spec"
        },
        {
            name: "html",
            output: "./e2e/reports/report.html"
        },
    ],
    quarantineMode: {
        successThreshold: 1,
        attemptLimit: 3
    },
    selectorTimeout: 12000,
    assertionTimeout: 6000,
    pageLoadTimeout: 7000

}