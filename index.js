let myLeads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
   renderLeads ()
})

function renderLeads () {
    let listItems = " ";


for (let i = 0; i < myLeads.length; i++) {
       //listItems += "<li><a target='_ blank' href='"+ myLeads + "'>" + myLeads[i] + "</a></li>"
       //Template strings
       listItems += `
       <div style='width: 400px; border-radius: 5px;'>
       <li style='width: 50% height: 30px; background-color: white;'>
       <a target='_ blank' href='${myLeads[i]}' style='text-decoration: none;'> 
       ${myLeads[i]}
          </a>
       </li>
       </div>
       `
    }       

ulEl.innerHTML = listItems
}