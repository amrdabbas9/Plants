export let add = (data, dat = 1, price) => {
    return{
        type:'add',
        payload:{id : data, num: dat, price:price}
    }
}
export let del = (data) => {
    return{
        type:'del',
        payload:data
    }
}
export let dec = (data) => {
    return{
        type:'dec',
        payload:data
    }
}
export let inc = (data) => {
    return{
        type:'inc',
        payload:data
    }
}