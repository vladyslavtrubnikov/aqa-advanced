function decreaseNum(num) {
    console.log(num)
    if(num > 0){
        decreaseNum(num - 1)
    }
}

decreaseNum(7)