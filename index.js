/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const directories = path.split('/');
    const stack = [];
    
    for(let directory of directories){
        if(directory === '..'){
            if(stack.length !== 0){
                stack.pop();
            }
        } else if (directory !== '' && directory != '.'){
            stack.push(directory);
        }
    }
    const simplified_path = '/' + stack.join('/');
    return simplified_path;
};
