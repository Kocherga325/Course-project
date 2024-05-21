function addToCart() {
    var productName = document.querySelector('.product h3 a').innerText;
    var productImage = document.querySelector('.product-details img').src;
    var productPrice = document.querySelector('.product-details .price').innerText;

    var xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlString += '<product>\n';
    xmlString += '  <name>' + productName + '</name>\n';
    xmlString += '  <image>' + productImage + '</image>\n';
    xmlString += '  <price>' + productPrice + '</price>\n';
    xmlString += '</product>';

    var blob = new Blob([xmlString], {type: "text/xml;charset=utf-8"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "footer.xml";
    a.click();
}
