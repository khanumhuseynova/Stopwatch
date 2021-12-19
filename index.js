let second = 00
let minute = 00
let remSec = 0
let lapCount = 0
lapValue = document.querySelector('#lapValue')

function stopWatch(a) {
    let seconds = a
    let minute = Math.floor(seconds / 60)
    let remSec = seconds - (minute * 60)

    let result = `${minute < 10 ? "0"+minute : minute}:${remSec < 10 ? "0"+remSec : remSec}`
    return result

}
let a

document.querySelector('.start').onclick = function() {
    // clearInterval(a)
    a = setInterval(
        function() {
            second++
            console.log(stopWatch(second))
            document.querySelector('.second').innerHTML = stopWatch(second)

        }, 1000
    )

}

document.querySelector('.stop').onclick = function() {
    clearInterval(a)
}


document.querySelector('.reset').onclick = function() {
    document.querySelector('.second').innerHTML = "00:00";
    stop = true;
    minute = 0;
    second = 0;

}


// document.querySelector('.lap').onclick = function() {
//     let seconds = a
//     let minute = Math.floor(seconds / 60)
//     let remSec = seconds - (minute * 60)

//     let times = `${minute < 10 ? "0"+minute : minute}:${remSec < 10 ? "0"+remSec : remSec}`
//     let li = document.createElement('li');
//     li.innerText = this.format(times);
//     this.results.appendChild(li);
// }


document.querySelector('.lap').onclick = function() {



    let minute = Math.floor(second / 60)
    let remSec = second - (minute * 60)


    // // clearInterval(a)
    // // document.querySelector('.lapValue').innerHTML = `${lapCount++}. ${minute < 10 ? "0"+minute : minute}:${remSec < 10 ? "0"+remSec : remSec}`
    // // console.log(`${lapCount}. ${minute < 10 ? "0"+minute : minute}:${remSec < 10 ? "0"+remSec : remSec}`)
    // if (!second) {
    //     return;
    // }

    lapCount++
    // let listElement = document.createElement('li')
    // console.log(`${lapCount}. ${minute < 10 ? "0"+minute : minute}:${remSec < 10 ? "0"+remSec : remSec}`)


    // listElement.innerHTML = `${lapCount}.${minute < 10 ? "0"+minute : minute}:${remSec < 10 ? "0"+remSec : remSec}`

    // lapValue.append(listElement)
    //     // lapValue.innerHTML += lapNow;

    // lapNow = minute + " : " + second + " : " + remSec;
    // // lapNow = hours + " : " + minutes + " : " + seconds + " : " + miliseconds;
    // lap = document.getElementById('lapValue').innerHTML + lapNow;

    // document.getElementById('lapValue').innerHTML = lap;


    // lapNow = `<div class="lap">${lapCount}.${minute < 10 ? "0"+minute : minute}:${remSec < 10 ? "0"+remSec : remSec}</div>`;
    lapNow = `<div class="lapValue">${lapCount}.${minute < 10 ? "0"+minute : minute}:${remSec < 10 ? "0"+remSec : remSec}</div>`;
    lapValue.innerHTML += lapNow;
}

lapBtn.addEventListener('click', lap);