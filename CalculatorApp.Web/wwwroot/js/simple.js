function append(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const expression = document.getElementById("display").value;

    fetch('/Calculator/EvaluateExpression', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression: expression })
    })
        .then(res => res.json())
        .then(result => {
            document.getElementById("display").value = result;
            addHistory(`${expression} = ${result}`);
        });
}

function addHistory(entry) {
    let history = JSON.parse(sessionStorage.getItem("calcHistory")) || [];
    history.push(entry);
    sessionStorage.setItem("calcHistory", JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const history = JSON.parse(sessionStorage.getItem("calcHistory")) || [];
    const ul = document.getElementById("history");
    ul.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}
renderHistory();
