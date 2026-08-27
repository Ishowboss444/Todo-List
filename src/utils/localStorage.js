export function localSet(name , param){
    const value = JSON.stringify(param)
    localStorage.setItem(name , value)
}
export function localGet(key){
    return JSON.parse(localStorage.getItem(key))
}
export function initialize(item , atFirst){
        const init = JSON.parse(localStorage.getItem(item))
        if(init === null){
            localStorage.setItem(item , JSON.stringify(atFirst))
            return atFirst
        }else{
            return init
        }
    }