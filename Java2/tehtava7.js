<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Roller</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 5px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <h1>Dice Roller</h1>
    <ul id="rollist"></ul>

    <script>
        function rollDice(numSides) {
            let rollList = [];
            let maxNum = parseInt(prompt("Enter the maximum number on the dice:"));

            if (isNaN(maxNum) || maxNum < 1 || maxNum > numSides) {
                alert(`Please enter a valid number between 1 and ${numSides}.`);
                return;
            }

            while (true) {
                let roll = Math.floor(Math.random() * numSides) + 1;
                console.log(`Rolled: ${roll}`);
                rollList.push(roll);

                let html = "";
                for (let i = 0; i < rollList.length; i++) {
                    html += `<li>${rollList[i]}</li>`;
                }
                document.getElementById("rollist").innerHTML = html;

                if (roll === maxNum) {
                    console.log("You rolled the maximum number!");
                    alert("You rolled the maximum number!");
                    break;
                }
            }
        }

        rollDice(12);
    </script>
</body>
</html>
