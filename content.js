alert('THIS IS NOT WORKING')
console.log('worskdsfsd')
console.log('fifff time')
// const intro = document.querySelector('#firstHeading')
// let intro = document.getElementById('firstHeading');
let body = document.body
// body.innerHTML = body.innerHTML.replace(/a/g, '<mark>a</mark>')
// intro.textContent = 'YerrRESERESRRRRR'
// intro.innerHTML= '<mark>i wokr?</mark>'
// intro.setAttribute('style', 'background-color: yellow')

// let words = ["Meet", "Odin!", "On", "several", "of", "our", "recent", "whale", "watching", "and", "wildlife", "tours,", "including", "our", "latest", "all-day", "tour,", "our", "passengers", "and", "crew", "have", "been", "lucky", "enough", "to", "see", "a", "new", "visitor"]

// let innerHTML = document.body.innerHTML
// let regex b

// document.body.innerHTML = document.body.innerHTML.replace(/Highlighting/g, 'HELLOOOOOOOOO')


let child = document.getElementsByTagName('p')[0]
// console.log(child)
let childArray = child.innerText.split(" ");

let shallowChildArray = JSON.parse(JSON.stringify(childArray))

let temp
let i = 1
let j = 0
let pos 



setInterval(() => {
    // i+=1

    if (i >= childArray.length -1) return
    // temp = childArray[i];
    childArray[i] = `<mark>${childArray[i]}</mark>`; 
    child.innerHTML = childArray.join(" ");


    i+=1
    
    temp = shallowChildArray[j];
    childArray[j] = temp;
    child.innerHTML = childArray.join(" ");
    j += 1
// i+=1


// setInterval(() => {
//     temp = shallowChildArray[j];
//     shallowChildArray[j] = `<mark>${shallowChildArray[j]}</mark>`; 
// child.innerHTML = shallowChildArray.join(" "); 
// shallowChildArray[j] = temp;
// child.innerHTML = shallowChildArray.join(" ");
// j++
// // console.log("temp", temp)
// }, (5000));
// childArray[i] = temp;
// child.innerHTML = childArray.join(" ");
// console.log("temp", temp)
}, 1000)

// setInterval(() => {
//     temp = shallowChildArray[i];
//     shallowChildArray[i] = `<mark>${shallowChildArray[i]}</mark>`; 
// child.innerHTML = shallowChildArray.join(" "); 
// shallowChildArray[i] = temp;
// child.innerHTML = shallowChildArray.join(" ");
// // console.log("temp", temp)
// }, 5000)


    






// let child = document.getElementsByTagName('p')[0]
// let childArray = child.innerText.split(" ");
// let temp

// for (let i = 0; i < childArray.length; i++) { 
// temp = childArray[0];s
// childArray[0] = `<mark>${childArray[0]}</mark>`; 
// child.innerHTML = childArray.join(" "); 
// childArray[0] = temp;
// child.innerHTML = childArray.join(" ");
// }




// console.log('HELLLOOOOOOO')

// let inner = document.body.innerHTML
// for (let i=0; i < 10; i++){
// document.body.innerHTML = inner.replace(/Highlighting/g, `LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL`)
// }
// for (let ele of words) {
//     regex = new RegExp("ReGex" + ele + "ReGex")
//     console.log(ele)
    // setTimeout(()=> console.log('wasting time'), 2000)

// }
// console.log(document.body.innerHTML)

// let htmlText = ''

// for (let key in pElements) htmlText += pElements[key].innerText


// for (let ele of innerHTML.split(' ')) {
//     let regex = new RegExp("ReGex" + ele + "ReGex")
//     setTimeout((ele) => document.body.innerHTML = htmlText.replace(regex, `<mark>${ele}</mark>`), 1000)
// }
