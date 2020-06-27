function drawTableBody(arrTHead,arrTBody,linkDetail,urlParam){
    let txtTBody = '';
    if (arrTBody.toString() != ""){
        let urlParameter = []
        for (let i = 0; i<arrTBody.length;i++){
            urlParameter[i] = `req=${btoa(urlParam[i])}`
            txtTBody += `<tr ondblclick="window.location = '${linkDetail}?${urlParameter[i]}'">`;
            for (let j = 0; j<arrTHead.length;j++){
                txtTBody += `<td>${arrTBody[i][arrTHead[j]]}</td>`;
            }
            txtTBody += `</tr>`;
        }
    }
    return txtTBody;
}

function drawTableHead(arrTHead){
    let txtThead = "";
    txtThead += "<tr>";
    for (let j = 0; j<arrTHead.length;j++){
        txtThead += `<th>${[arrTHead[j]]}</th>`;
    }
    txtThead += "</tr>";
    return txtThead;
}