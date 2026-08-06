export function localSet(name , param){
    const value = JSON.stringify(param)
    localStorage.setItem(name , value)
}
export function localGet(key){
    return JSON.parse(localStorage.getItem(key))
}