var task = {
    title: 'My Title',
    description: 'My Description'
}

task.toString = function () {
    return this.title + ' ' + this.description
}

console.log(task.toString())