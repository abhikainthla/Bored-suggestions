const btn = document.getElementById("btn");
const container = document.getElementById("container");
btn.addEventListener('click', function() {
    const url = "https://www.boredapi.com/api/activity/";
    fetch(url)
    .then((response) => response.json())
    .then((data) => {  
        container.innerHTML = "";
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        container.append(card);
        // activity
        const activity = document.createElement("span");
        activity.setAttribute("class","act-info");
        activity.innerText = `Activity:\n ${data.activity}`; 
        card.appendChild(activity); 
        // type
        const  type = document.createElement("p");
        type.setAttribute("class","type");
        type.innerText = `Type:\n ${data.type}`; 
        card.appendChild(type);        
    })
})


const ideas = document.querySelectorAll("#idea");

ideas.forEach(idea => {
    idea.addEventListener("click", function(){
        const btnText = idea.innerText.toLowerCase();
        const url = "https://www.boredapi.com/api/activity?type="+btnText;
        fetch(url)
        .then(response => response.json())
        .then(data => {
           const container = document.getElementById("container"); // Assuming there's a container element
           container.innerHTML = "";
           const card = document.createElement("div");
           card.setAttribute("class", "card");
           container.appendChild(card);
           // activity
           const activity = document.createElement("span");
           activity.setAttribute("class","act-info");
           activity.innerText = `Activity:\n ${data.activity}`; 
           card.appendChild(activity); 
           // type
           const  type = document.createElement("p");
           type.setAttribute("class","type");
           type.innerText = `Type:\n ${data.type}`; 
           card.appendChild(type);   
            // link
            if(data.link !==""){
            const link = document.createElement( "a" );
            link.setAttribute( 'href', data.link);
            link.setAttribute('target','_blank');
            link.setAttribute("class","link");
            link.innerText= 'More Info';
            card.appendChild(link);
            return;
            }
        })
    })
});

