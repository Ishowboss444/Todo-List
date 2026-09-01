export function localSet(name , arg){
    if(typeof name === 'string'){
        localStorage.setItem(name ,JSON.stringify(arg))
        return
    }else{
        localStorage.setItem(name , JSON.stringify(arg))
        alert(`your storage with name ${name} is going wrong `)
    }
}

export function localGet(key){
    if(typeof key === 'string'){
        let output = localStorage.getItem(key)
        output = output.split('').join('')
    }else{
        return JSON.parse(localStorage.getItem(key))
    }
}
export function initialize(key , atFirst){
    let init = localStorage.getItem(key)
    if(init === null){
        localStorage.setItem(key ,JSON.stringify(atFirst))
        console.log(`this is the initialization of this ${key} key and first value is ${atFirst}`);
        return atFirst
    }
    return JSON.parse(init)
    console.log(`${key} is the key of this storage and value is ${atFirst}`);
    
}
