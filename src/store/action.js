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
export let dec = (data, dat = 1, price) => {
    return{
        type:'dec',
        payload:{id : data, num: dat, price:price}
    }
}
export let inc = (data, dat = 1, price) => {
    return{
        type:'inc',
        payload:{id : data, num: dat, price:price}
    }
}