function simpleCalculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("op").value;

    fetch('/Calculator/SimpleCalculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ num1, num2, operation: op })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText = "Result: " + data;
        addHistory(`${num1} ${op} ${num2} = ${data}`);
    });
}

function scientificCalculate() {
    const expression = document.getElementById("expression").value;

    fetch('/Calculator/ScientificCalculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText = "Result: " + data;
        addHistory(`${expression} = ${data}`);
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
    ul.innerHTML = "";
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

function loadHistory() {
    renderHistory();
}