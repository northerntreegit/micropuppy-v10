function 卧倒 () {
	
}
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    order = serial.readString()
})
function 可爱 () {
	
}
function 后退 () {
	
}
function 前进 () {
	
}
function 坐下 () {
	
}
function 趴下 () {
	
}
function 站起来 () {
	
}
let order = ""
serial.redirect(
SerialPin.P16,
SerialPin.P8,
BaudRate.BaudRate9600
)
basic.forever(function () {
    if (order.includes("1")) {
        basic.showIcon(IconNames.Heart)
    } else if (order.includes("2")) {
        站起来()
        basic.showNumber(2)
    } else if (order.includes("3")) {
        坐下()
        basic.showNumber(3)
    } else if (order.includes("4")) {
        可爱()
        basic.showNumber(4)
    } else if (order.includes("5")) {
        前进()
        basic.showNumber(5)
    } else if (order.includes("6")) {
        后退()
        basic.showNumber(6)
    } else if (order.includes("7")) {
        趴下()
        basic.showNumber(7)
    } else if (order.includes("8")) {
        卧倒()
        basic.showNumber(8)
    }
})
