var expression2 = "";
var check = 0;

function display1(val) {
    var x = document.getElementById("expression1").value;
    var n = x.length - 1;
    if (check == 0 && "!)πe²%".includes(x[n]) && "0123456789".includes(val)) {
        multiply();
    }
    if (check == 1 && val == ")") {
        clr();
    } else {
        display2(val);
        display3(val);
    }
}

function display2(val) {
    if (check == 1) {
        if (("0123456789(sin(cos(tan(log(ln(πe√(abs(".includes(val)) || expression2 == "Error" || expression2 == "NaN") {
            clr();
        } else {
            check = 0;
        }
    }
    document.getElementById("expression1").value += val;
    scroll_right();
}

function display3(val) {
    if (check == 1) {
        if (("0123456789(sss(ccc(ttt(lll(jj(Math.PI(Math.E√(aaa(".includes(val)) || expression2 == "Error" || expression2 == "NaN") {
            clr();
        } 
        else {
            check = 0;
        }
    }
    expression2 += val;
    scroll_right();
}

function solve() {
    check = 1;
    var x = document.getElementById("expression1").value;
    
    handleFactorial();
    handleSquareRoot();
    handleTrigonometricFunctions();
    handleLogarithmicFunctions();
    
    if (expression2 != Infinity) {
        try {
            var y = eval(expression2);
        } catch (err) {
            let balanceCheck = checkBalancedParentheses(expression2);
            if (balanceCheck === 0) {
                setError("Error: closing bracket has been used before an opening bracket.");
            } else if (balanceCheck === 1) {
                setError("Error: brackets are not balanced.");
            } else {
                setError();
            }
        }

        var z = y.toFixed(10);
        var w = parseFloat(z);
        expression2 = String(w);
        document.getElementById("expression1").value = expression2;

        storeHistory(x, expression2); 

        if (expression2 != "Error") {
            document.getElementById("history").value += "\n" + x + " = " + expression2;
            gfg_Run();
        }
    }
}

function handleFactorial() {
    var o = expression2.indexOf('!');
    if (o > -1) {
        expression2 = expression2.replace(/(\d+)!/g, (match, p1) => {
            var n = parseInt(p1);
            if (n < 0 || !Number.isInteger(n)) {
                setError("Factorial function is defined for non-negative integers.");
                return "Error";
            }
            return factorial(n);
        });
    }
}

function handleSquareRoot() {
    var p = expression2.indexOf('√');
    if (p > -1) {
        expression2 = expression2.replace(/√(\d+(\.\d+)?)/g, (match, p1) => Math.sqrt(eval(p1)));
    }
}

function handleTrigonometricFunctions() {
    expression2 = expression2.replace(/sin\(([^)]+)\)/g, (match, p1) => Math.sin(degToRad(eval(p1))))
                             .replace(/cos\(([^)]+)\)/g, (match, p1) => Math.cos(degToRad(eval(p1))))
                             .replace(/tan\(([^)]+)\)/g, (match, p1) => {
                                 var n = eval(p1);
                                 if (n % 90 == 0 && n % 180 != 0) {
                                     setError("Infinity");
                                     return "Infinity";
                                 }
                                 return Math.tan(degToRad(n));
                             });
}

function handleLogarithmicFunctions() {
    expression2 = expression2.replace(/log\(([^)]+)\)/g, (match, p1) => Math.log10(eval(p1)))
                             .replace(/ln\(([^)]+)\)/g, (match, p1) => Math.log(eval(p1)));
}

function setError(message = "Error") {
    expression2 = message;
    document.getElementById("expression1").value = message;
    var history = document.getElementById("history");
    history.value += "\n" + document.getElementById("expression1").value + " = " + expression2 + "\n" + message;
    gfg_Run();
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function degToRad(deg) {
    return (deg / 180) * Math.PI;
}

function checkBalancedParentheses(str) {
    let stack = [];
    let map = { '(': ')', '[': ']', '{': '}' };

    for (let i = 0; i < str.length; i++) {
        if ("([{".includes(str[i])) {
            stack.push(str[i]);
        } else if (")]}".includes(str[i])) {
            if (str[i] !== map[stack.pop()]) return 0;
        }
    }
    return stack.length ? 1 : 2;
}

function back() {
    var v = document.getElementById("expression1").value;
    if (check == 1 || expression2 == "Error" || expression2 == "NaN") {
        clr();
    } else {
        expression2 = expression2.slice(0, -1);
        document.getElementById("expression1").value = v.slice(0, -1);
    }
    check = 0;
}

function clr() {
    document.getElementById("expression1").value = "";
    expression2 = "";
    check = 0;
}

function allclr() {
    document.getElementById("history").value = "";
    clr();
}

function gfg_Run() {
    var text = document.getElementById('history');
    text.scrollTop = text.scrollHeight; 
}

function scroll_right() {
    var text = document.getElementById("expression1");
    text.scrollLeft = text.scrollWidth;
}

function runtwofunction() {
    solve();
    gfg_Run();
}

function answer() {
    document.getElementById("expression1").value += temp;
    expression2 += temp;
}

function pi() {
    display2('π');
    display3(Math.PI);
}

function e() {
    display2('e');
    display3(Math.E);
}
