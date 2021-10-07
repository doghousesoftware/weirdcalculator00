let weird = 0
function addTwoNumbers (num: number, num2: number, weird: number) {
    if (weird == 0) {
        return num + num2
    } else {
        return num + num2 + randint(1, 5)
    }
}
// normal calculation
input.onButtonPressed(Button.A, function () {
    weird = 0
    goFunction()
})
function multiplyTwoNumbers (num: number, num2: number, weird: number) {
    if (weird == 0) {
        return num * num2
    } else {
        return num * num2 + randint(1, 5)
    }
}
function goFunction () {
    basic.showNumber(addTwoNumbers(3, 5, weird))
    displayFace(weird)
    basic.showNumber(subtractTwoNumbers(8, 3, weird))
    displayFace(weird)
    basic.showNumber(multiplyTwoNumbers(8, 7, weird))
    displayFace(weird)
    divideTwoNumbers(1, 0, weird)
    displayFace(weird)
}
function displayFace (weirdValue: number) {
    if (weird == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Surprised)
    }
}
// weird calculation
input.onButtonPressed(Button.B, function () {
    weird = 1
    goFunction()
})
function subtractTwoNumbers (num: number, num2: number, weird: number) {
    if (weird == 0) {
        return num - num2
    } else {
        return num - num2 + randint(1, 5)
    }
}
function divideTwoNumbers (num: number, num2: number, weird: number) {
    if (num2 == 0) {
        basic.showIcon(IconNames.Sad)
    } else {
        if (weird == 0) {
            basic.showNumber(num * num2)
        } else {
            basic.showNumber(num * num2 + randint(1, 5))
        }
    }
}
