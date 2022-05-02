// write js code here corresponding to favourites.html

var my_data=JSON.parse(localStorage.getItem("Favourites"));
displayData(my_data);

function displayData(data){
    data.forEach(function (elem){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem. match;

        var td2=document.createElement("td");
        td2.innerText=elem. teamA;

        var td3=document.createElement("td");
        td3.innerText=elem. teamB;

        var td4=document.createElement("td");
        td4.innerText=elem.data;

        var td5=document.createElement("td");
        td5.innerText=elem. place;

        var td6=document.createElement("td");
        td6.innerText="Delete";
        td6.style.color="blue";
        td6.style.cursor="pointer";
        td6.addEventListener("click", function(elem){
           
         fav(elem);
           window.location.href="favourites.html";
        })


    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
        

    })

   
   

}