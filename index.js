const JZZ = require("jzz");

try {
    JZZ().or("Failed here")
} catch (err) {
    console.error("Failed")
}