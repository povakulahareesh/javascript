/**js modules
 * code can divide seperate  files use import export module
 * separate code into files
 * because  oka application ni develop ni cheseytappudu chala code untundhi ha chala code antha okatey fileloo pettukoni chesthey manamu efficient ga work cheyyalemu 
 * multiple team members work cheyyali antey okatey file loo use java modules import and export
 * it depends on import and export statements
 * named export and default export
 * note:only work with "http(s)",not with"file://""
 * import message from "./imp.js"
 * import means =thechukovadam
 * export means=pampichadam
 */

// export default message use chethey without curly braces import chesukovachu
//export default chesina tharvatha we can change function name
// import message from "./imp.js";

import msg from "./imp.js";


// let name ="jafar";
// let age =33

// // string literal means read variable in the form of string

// function message(){
//     return `${name} is  ${age} years old`;

// }


console.log(msg());
// console.log(message());
