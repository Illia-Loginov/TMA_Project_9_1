export const select = (objects, keys) => {
    return objects.map(obj => {
        let newObj = {}
        
        for(let key of keys) {
            newObj[key] = obj[key];
        }

        return newObj;
    })
}