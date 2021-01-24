export const compare = (arr, isCorrect, time, interval) =>  {
    const elems = document.getElementsByClassName('element');

    if (isCorrect) {
        setTimeout(() => {
            elems[arr[0]].style.backgroundColor = '#f2f0e3';
            elems[arr[1]].style.backgroundColor = '#f2f0e3';
        }, time * interval);
        setTimeout(() => {
            elems[arr[0]].style.backgroundColor = 'green';
            elems[arr[1]].style.backgroundColor = 'green';
        }, (time + 1) * interval);
        setTimeout(() => {
            elems[arr[0]].style.backgroundColor = '#87a9ab';
            elems[arr[1]].style.backgroundColor = '#87a9ab';
        }, (time + 2) * interval);
    }
    else {
        setTimeout(() => {
            elems[arr[0]].style.backgroundColor = '#f2f0e3';
            elems[arr[1]].style.backgroundColor = '#f2f0e3';
        }, time * interval);
        setTimeout(() => {
            elems[arr[0]].style.backgroundColor = 'red';
            elems[arr[1]].style.backgroundColor = 'red';
        }, (time + 1) * interval);
        setTimeout(() => {
            elems[arr[0]].style.backgroundColor = '#87a9ab';
            elems[arr[1]].style.backgroundColor = '#87a9ab';
        }, (time + 2) * interval);
    }
}

export const swap = (arr, time, interval) => {
    const elems = document.getElementsByClassName('element');

    setTimeout(() => {
        let temp = elems[arr[0]].style.height;
        elems[arr[0]].style.height = elems[arr[1]].style.height;
        elems[arr[1]].style.height = temp;

        let tempNum = elems[arr[0]].innerHTML;
        elems[arr[0]].innerHTML = elems[arr[1]].innerHTML;
        elems[arr[1]].innerHTML = tempNum;

      }, time * interval);
}

export const coloredSwap = (arr, time, interval, color) => {
    const elems = document.getElementsByClassName('element');

    setTimeout(() => {
            elems[arr[0]].style.backgroundColor = color;
            elems[arr[1]].style.backgroundColor = color;
    }, time * interval);

    setTimeout(() => {
        let temp = elems[arr[0]].style.height;
        elems[arr[0]].style.height = elems[arr[1]].style.height;
        elems[arr[1]].style.height = temp;

        let tempNum = elems[arr[0]].innerHTML;
        elems[arr[0]].innerHTML = elems[arr[1]].innerHTML;
        elems[arr[1]].innerHTML = tempNum;

    }, (time + 1) * interval);
    setTimeout(() => {
        elems[arr[0]].style.backgroundColor = '#87a9ab';
        elems[arr[1]].style.backgroundColor = '#87a9ab';
    }, (time + 2) * interval);
}

export const setComparisons = (number, time, interval) => {
    setTimeout(() => {
        document.getElementById('comparisons').innerHTML = number;
    }, time * interval);
}

export const finalize = (index, time, interval) => {
    const elems = document.getElementsByClassName('element');
    setTimeout(() => {
        elems[index].style.backgroundColor = '#c60f7b';
    }, time * interval);
}

export const finish = (time, interval) => {
    const elems = document.getElementsByClassName('element');
    setTimeout(() => {
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.backgroundColor = 'green';
        }
    }, time * interval);
    setTimeout(() => {
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.backgroundColor = '#87a9ab';
        }
    }, time * interval + 500);
}

export const modifyValue = (index, value, time, interval) => {
    const elems = document.getElementsByClassName('element');
    const children = document.getElementsByClassName('numberText');
    setTimeout(() => {
        elems[index].style.backgroundColor = '#f9c80e';
        elems[index].style.height = value.toString() + 'px';
        if (!isNaN(parseInt(children[index].innerHTML))) {
            children[index].innerHTML = value;
        }
    }, time * interval);
    setTimeout(() => {
        elems[index].style.backgroundColor = '#87a9ab';
    }, (time + 1) * interval);
}

// OLD VERSION
// export const animate = (animationArr) => {
//   const elems = document.getElementsByClassName('element');

//   for (let i = 0; i < animationArr.length; i++) {
//     if (animationArr[i][2].localeCompare('compare') === 0) {
//       setTimeout(() => {
//         elems[animationArr[i][0]].style.backgroundColor = '#f2f0e3';
//         elems[animationArr[i][1]].style.backgroundColor = '#f2f0e3';
//       }, i * interval);
//       setTimeout(() => {
//         elems[animationArr[i][0]].style.backgroundColor = '#e55934';
//         elems[animationArr[i][1]].style.backgroundColor = '#e55934';
//       }, (i + 1) * interval);
//     }
//     else {
//       setTimeout(() => {
//         let temp = elems[animationArr[i][0]].style.height;
//         elems[animationArr[i][0]].style.height = elems[animationArr[i][1]].style.height;
//         elems[animationArr[i][1]].style.height = temp;

//         let tempNum = elems[animationArr[i][0]].innerHTML;
//         elems[animationArr[i][0]].innerHTML = elems[animationArr[i][1]].innerHTML;
//         elems[animationArr[i][1]].innerHTML = tempNum;

//       }, i * interval);
//     }
//   }
//   return (animationArr.length + 1) * interval;
// }