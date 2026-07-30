export function initialize(item , atFirst){
        const init = JSON.parse(localStorage.getItem(item))
        if(init === null){
            localStorage.setItem(item , JSON.stringify(atFirst))
            return atFirst
        }else{
            return init
        }
    }