function sleep(milliseconds) {
    var start = Date.now();
    while ((Date.now() - start) < milliseconds);
}

let video1downloaded = new Promise((resolve,reject) =>{
    sleep(5000);
    console.log("Video1 downloaded.");
})

let video2downloaded = new Promise((resolve,reject) =>{
    sleep(7000);
    console.log("Video2 downloaded.")
})

let video3downloaded = new Promise((resolve,reject) =>{
    sleep(2000);
    console.log("Video3 downloaded.")
})

//wait till all promises are fullfilled
// Promise.all([video1downloaded,
//     video2downloaded,
//     video3downloaded]).then((msg) =>{
//         console.log(msg);
//     })

    console.log("I am done1");
    
//executed as soon as any promise is fullfilled
Promise.race([video1downloaded,
            video2downloaded,
            video3downloaded]).then((msg) =>{
                console.log(msg);
            })

console.log("I am done2");