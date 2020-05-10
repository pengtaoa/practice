const outStack = [],
    inStack = [];

function push(node) {
    // write code here
    inStack.push(node);
}

function pop() {
    // write code here
    // 出栈为空
    if (!outStack.length) {
        while (inStack.length) {
            outStack.push(inStack.pop());
        }
    }
    return outStack.pop();
}