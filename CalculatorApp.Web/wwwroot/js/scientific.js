function append(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = '';
    document.getElementById("result").innerText = '';
}

function calculateScientific() {
    const expression = document.getElementById("display").value;

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

renderHistory();
