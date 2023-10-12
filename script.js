let input = document.getElementById("input");
let inputSub = document.getElementById("inputSub");
let form = document.querySelector("form");
let card = document.getElementById("card");

// function Api(inputValue) {
//     // console.log(inputValue);
//     fetch("https://api.github.com/users/hax0-r")
//     .then((response) => {
//         return response.json()
//     }).then((data)=> {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     })
// }

const Api = async (info) => {
  let response = await fetch(`https://api.github.com/users/${info}`);
  let data = await response.json();
  //   console.log("response", data);
  return data;
};

inputSub.addEventListener("click", (e) => {
  e.preventDefault();
  let userInput = input.value;
  if (userInput === "") {
    alert("Enter Username");
  } else {
    Api(userInput).then((response)=>{
        card.innerHTML = 
        `<div class="container">
            <div class="card-main ">
                <div class="responsive-div">
                    <div class="input">
                        <form>
                            <input type="text" placeholder="Enter Username" id="input" autocomplete="off">
                            <button id="inputSub"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div class="responsive-div2">
                        <div class="img">
                            <img src=${response.avatar_url} alt="">
                        </div>
                        <div class="info">
                            <div class="heading">
                                <h1>${response.name}</h1>
                                <h5>${response.login} </h5>
                            </div>
                            <div class="follows">
                                <ul>
                                    <li>
                                        <var>${response.public_repos}</var>
                                        <label>Repositories</label>
                                    </li>
                                    <li>
                                        <var>${response.followers}</var>
                                        <label>Followers</label>
                                    </li>
                                    <li>
                                        <var>${response.following}</var>
                                        <label>Following</label>
                                    </li>
                                </ul>
                            </div>
                            <div class="bio">
                                <label>Bio</label>
                                <p>${response.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }).catch((error)=> {
        console.log("error",error);
    });
    form.reset();
  }
});


