fetch('./footer.xml')

.then(response => response.text())
.then(xml => {

    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xml, "text/xml")

    const fio = xmlDoc.getElementsByTagName("FIO")[0].childNodes[0].nodeValue;
    const univers = xmlDoc.getElementsByTagName("univers")[0].childNodes[0].nodeValue;

    const fioP = document.getElementById("fio");
    fioP.innerHTML = `${fio}`;
    const universP = document.getElementById("universitet");
    universP.innerHTML = `${univers}`;
})