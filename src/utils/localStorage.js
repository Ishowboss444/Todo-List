export function localSet(name , param){
    const value = JSON.stringify(param)
    if(typeof param === String){
        localStorage.setItem(name ,param)
        console.log('stored');  
    }
    localStorage.setItem(name , param)
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
export function stringInit(item , atFirst){
    const init = localStorage.getItem(item)
    if(init === null){
        localStorage.setItem(item , atFirst)
        return atFirst
    }else{
        return init
    }
}
