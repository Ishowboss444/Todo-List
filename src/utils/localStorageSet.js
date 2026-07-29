export function localSet(name , param){
    const value = JSON.stringify(param)
    localStorage.setItem(name , value)
}