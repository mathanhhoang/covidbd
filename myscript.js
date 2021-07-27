fetch('https://api-kent.netlify.app/.netlify/functions/api')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        var code = "31";
        document.getElementById("country").innerHTML = data.detail[code].name;
        document.getElementById("active").innerHTML = data.detail[code].cases - data.detail[code].recovered;
        document.getElementById("cases").innerHTML = data.detail[code].cases;
        document.getElementById("death").innerHTML = data.detail[code].deaths;
        document.getElementById("recovered").innerHTML = data.detail[code].recovered;
        document.getElementById("tests").innerHTML = data.total.totalCases;
    });
fetch('https://api-kent.netlify.app/.netlify/functions/api/vaccines')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        var code = "34"
        document.getElementById("critical").innerHTML = data.dataVacType[code].astraz +
            data.dataVacType[code].pfizer +
            data.dataVacType[code].moderna;
    })