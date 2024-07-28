node server.js        -- run a file
 
npm init     /  npm init -y        -- initialize a node project

npm install package_name  -- install a package (stored in node_modules)

npm i / npm install --> install all dependencies

npm install --global nodemon  >> nodemon server.js

nvm -> package ot work with multiple node versions

add "type": "module", in package.json to use ecma script



CommonJS and ECMAScript are two different module systems used in JavaScript programming. Here are the brief differences between them:

    CommonJS:

    Used mainly in Node.js.
    Modules are loaded synchronously.
    Uses require() to import modules.
    Uses module.exports to export modules.
    ECMAScript (ES6 Modules):

    Standardized module system introduced in ECMAScript 2015 (ES6).
    Can be used in both browser and Node.js environments.
    Modules are loaded asynchronously.
    Uses import and export keywords to handle modules.
    Provides a more modern and flexible syntax for handling modules compared to CommonJS.



using script:module in html we can import these modules in browser js as well


// For CommonJS 
everything we write in nodejs is wrapped in a higher level function which we don't see.
function(exports, require, module, __filename, __dirname){
    // our nodejs code
}
// For ECMA- To get the directory name and file name, you can use import.meta.url
import { fileURLToPath } from 'url';
import { dirname } from 'path';



Why express over Node? 
Express is preferred over plain Node.js for several reasons:

1. **Simplified Routing:** Express provides a straightforward and flexible way to define routes and handle HTTP requests, making it easier to build APIs and web applications.

2. **Middleware Support:** Express has robust middleware capabilities, allowing you to add functionality like authentication, logging, and error handling in a modular and reusable way.

3. **Rapid Development:** Express offers many built-in features and a vast ecosystem of third-party middleware, which can speed up the development process significantly.

4. **Streamlined Server Management:** Express abstracts many low-level details of HTTP server management, enabling developers to focus more on application logic rather than server configuration.

5. **Community and Ecosystem:** Express has a large and active community, providing a wealth of plugins, libraries, and support, making it easier to find solutions and resources for various development needs.






