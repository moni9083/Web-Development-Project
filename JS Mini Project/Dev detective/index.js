const searchbar = document.querySelector(".searchBar");
const profilecontainer=document.querySelector(".profile-container");
const root = document.documentElement.style;
const url = "https://api.github.com/users/";
const btnsubmit=document.getElementById("search");
const input=document.getElementById("input");
const noresults=document.getElementById("no-results");
const btnmode=document.getElementById("theme-button");
const avatar=document.getElementById("avatar")
const userName=document.getElementById("user-name");
const user=document.getElementById("user");
const date=document.getElementById("date");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const bio=document.getElementById("bio");
const repos=document.getElementById("repos");
const followers=document.getElementById("followers");
const following=document.getElementById("following");
const user_location=document.getElementById("location");
const page=document.getElementById("page");
const twitter=document.getElementById("twitter");
const company=document.getElementById("company");
const modetext=document.getElementById("theme-name")
const modeicon=document.getElementById("theme-img");
let darkMode=false;
btnsubmit.addEventListener("click", function(){
   if(input.value!==""){
    getUserData(url+input.value);
   }
});

input.addEventListener("keydown", function(e){
   if(e.key=="Enter"){
    if(input.value!==""){
        getUserData(url+input.value);
    }
   }
},
 false
);
input.addEventListener("input",function(){
   noresults.style.display="none";
});
btnmode.addEventListener("click",function(){
    if(darkMode==false){
        darkModeProperties();
    }
    else{
        lightModeProperties();
    }
});


async function getUserData(gitUrl){
    try{
        let response=await fetch(gitUrl);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        let data=await response.json();
        console.log(data);
        updateProfile(data);
      }
      catch(err){
         console.log(err);
      }
}
function updateProfile(data){
   if(data.message!=="Not Found"){
    noresults.style.display="none";
   

   avatar.src = `${data.avatar_url}`;
    userName.innerText = data.name === null ? data.login : data.name;
    user.innerText = `@${data.login}`;
    user.href = `${data.html_url}`;
    datesegments= data.created_at.split("T").shift().split("-");
    date.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
    bio.innerText = data.bio == null ? "This profile has no bio" : `${data.bio}`;
    repos.innerText = `${data.public_repos}`;
    followers.innerText = `${data.followers}`;
    following.innerText = `${data.following}`;
   }
}
