fetch('https://api-kent.netlify.app/.netlify/functions/api/vn')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        for (let i = 0; i < 63; i++) {
            if(data.detail[i].name == "Bình Định")
            {
                var code = i;
            }
        }
        document.getElementById("country").innerHTML = data.detail[code].name;
        document.getElementById("active").innerHTML = data.detail[code].cases - data.detail[code].recovered;
        document.getElementById("cases").innerHTML = data.detail[code].cases;
        document.getElementById("death").innerHTML = data.detail[code].deaths;
        document.getElementById("recovered").innerHTML = data.detail[code].recovered;
        document.getElementById("tests").innerHTML = data.total.totalCases;
    });
fetch('https://api-kent.netlify.app/.netlify/functions/api/vn/vaccines/distribution')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        for (let i = 0; i < 63; i++) {
            if(data.dataVacDose[i].name == "Bình Định")
            {
                var code = i;
            }
        }
        document.getElementById("critical").innerHTML = data.dataVacDose[code].vaccines;
    })
