function calculate() {
    
      const n1 = parseFloat(num1.value);
      const n2 = parseFloat(num2.value);
      const op = operator.value;
      const resultBox = document.getElementById("result");

      if (isNaN(n1) || isNaN(n2)) {
        resultBox.innerText = "❌ Enter both numbers";
        resultBox.className = "mt-5 text-center text-red-400 font-semibold";
        return;
      }
      let result;

      switch (op) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/":
          if (n2 === 0) {
            resultBox.innerText = "❌ Cannot divide by zero";
            resultBox.className = "mt-5 text-center text-red-400 font-semibold";
            return;
          }
          result = n1 / n2;
          break;
        case "**": result = n1 ** n2; break;
        case "%": result = n1 % n2; break;
      }

      resultBox.innerText = "Result: " + result;
      resultBox.className = "mt-5 text-center text-green-400 font-semibold";
    }

    // Keyboard Enter
    document.addEventListener("keydown", function (e) {

      if (e.key === "Enter") calculate();

      if (["+", "-", "*", "/", "%", "^"].includes(e.key)) {
        operator.value = e.key === "^" ? "**" : e.key;
      }

    });