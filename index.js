// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",data)
var bag=JSON.parse(localStorage.getItem("schedule"))||[];;

function data(event){
event.preventDefault();



var name={
  match:masaiForm.matchNum.value,
  teamA:masaiForm.teamA.value,
  teamB:masaiForm.teamB.value,
  data:masaiForm.date.value,
  place:masaiForm.venue.value,
  
  
};

bag.push(name);
// console.log(name);

localStorage.setItem("schedule",JSON.stringify(bag));
window.location.href="matches.html"
}