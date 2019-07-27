var testIncludes = require('./testIncludes.js');


module.exports = {

foo: function() {

    console.log("foo!");
}

,doo: function() {

    console.log("doo");

}

,boo: function() {

    testIncludes.boo();
}
};