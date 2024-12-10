function rolldice() {
    let rullaa6 = false;
    let rollList = [];
    while (!rullaa6) {
        let rullaa = Math.floor(Math.random() * 6) + 1;
        console.log(rullaa);
        rollList.push(rullaa)
        if (rullaa === 6) (rullaa6 = true);

        let html =""
        for(let i=0; i<rollList.length; i++){
            html += "<li>" + rollList[i] + "</li>"
        }
        document.getElementById("rollist").innerHTML = html;
    }
}
rolldice() 
