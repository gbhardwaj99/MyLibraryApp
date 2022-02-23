const seneca = require("seneca")()
seneca.quiet();
seneca.use("catalog_plugin");
seneca.listen(9000)