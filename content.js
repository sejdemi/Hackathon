alert('THIS IS WORKING')


const Highlight = (collection, n) => {
  
    if (n === collection.length-1) return
    let child = collection[n]

    let childArray = child.innerText.split(" ");
    console.log(childArray)
    let deepChildArray = JSON.parse(JSON.stringify(childArray))
    
    let temp
    let i = 1
    let j = 0

    
    let timerID = setInterval(() => {
        if (i >= childArray.length) return
        childArray[i] = `<mark><strong>${childArray[i]}</strong></mark>`; 
        child.innerHTML = childArray.join(" ");
    
        i+=1
        
        temp = deepChildArray[j];
        childArray[j] = temp;
        child.innerHTML = childArray.join(" ");
        j += 1
        
        if (i === childArray.length -1) {
            clearInterval(timerID)

            temp = deepChildArray[j];
            childArray[j] = temp;
            child.innerHTML = childArray.join(" ");
            Highlight(collection, n+1)
        }

    }, 50)
}

Highlight(document.getElementsByTagName('p'), 0)