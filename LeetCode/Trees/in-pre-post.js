// Prefix
const prefixTraverse = function(root) {
    if (node === null) {
        return;
    }
    root.value;
    prefixTraverse(root.left);
    prefixTraverse(root.right)
}
// Postfix
const postTraverse = function(root) {
    if (node === null) {
        return;
    }
    prefixTraverse(root.left);
    prefixTraverse(root.right)
    root.value;
}
// In-fix
const inOrderTraverse = function(root) {
    if (node === null) {
        return;
    }
    prefixTraverse(root.left);
    root.value;
    prefixTraverse(root.right)
}