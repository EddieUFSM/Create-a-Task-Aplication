/**
 * Step One: on terminal send the command "node define-property.js" to run this task
 *      response: My Title My Description
 *  
 * Step Two: uncomment "task.toString = 'hi'"
 *      the app will crash, because the function is not a function anymore 
 * 
 *      response on console: TypeError: task.toString is not a function
 * 
 * 
 * Step tree: make writable: false
 *      response on console: My Title My Description
 * 
 * 
 * Step four: 
 *      Comment this console.log(Object.toString())
 *      uncomment this console.log(Object.keys(task))
 * 
 *      response on console: [ 'title', 'description', 'toString' ]
 * 
 * Step five: 
 *     now to hide toString from anothers you can use enumerable false
 *
 *     response on console: [ 'title', 'description' ]
 * 
 * Step six:
 *      uncomment this:
 *      Object.defineProperty(task, 'toString', {
 *          enumerable: true
 *      })
 *      response on console: [ 'title', 'description', 'toString' ]
 * 
 * Step seven: 
 *      now to prevents toString setable to anothers you can use configurable false
 *      response on console: TypeError: Cannot redefine property: toString
 *      
 */

var task = {
    title: 'My Title',
    description: 'My Description'
}

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description
    },
    writable: true,
    enumerable: true,
    configurable: true
});

/* Object.defineProperty(task, 'toString', {
    enumerable: true
}) */

task.toString = 'hi'

console.log(task.toString())
//console.log(Object.keys(task))