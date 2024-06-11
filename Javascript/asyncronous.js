console.log("1")  // syncr actiion
console.log("2")

// 3 will be printed after 1 sec.
setTimeout(()=> {  // asyncrn func
    console.log("3")
}, 1000)

// program will keep on running, not waiting for timeout.
console.log("4")

