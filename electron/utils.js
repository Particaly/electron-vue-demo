export function isType(type,target){
    const Tag = `[object ${type}]`;
    return Object.prototype.toString.call(target).toLowerCase() === Tag.toLowerCase();
}
