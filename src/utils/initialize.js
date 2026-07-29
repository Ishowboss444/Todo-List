export function initialize(item , atFirst){
        const theme = JSON.parse(localStorage.getItem(item))
        if(theme === null){
            localStorage.setItem(item , JSON.stringify(atFirst))
            return atFirst
        }else{
            return theme
        }
    }