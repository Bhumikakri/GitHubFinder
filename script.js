let input= document.querySelector("#input");
let Searchbtn = document.querySelector("#Searchbtn");
let profile = document.querySelector("#datashow");
let audio = document.querySelector("audio");

let Showdata = "";

Searchbtn.addEventListener('click', () => {
    showInformation();
    audio.play();
})

 async function showInformation() {
    Showdata = input.value;
    // console.log(profile_data);

    let Fetch_data = await fetch(`https://api.github.com/users/${Showdata}`);
    let result = await Fetch_data.json();
    // console.log(prof_data);

    if(result.message === 'Not Found'){
        profile.innerHTML = `<h3>User not found ☹☹</h3>`
    }
    else{
        const Image = document.createElement('img');
        Image.src = result.avatar_url;


        profile.innerHTML = `
        <div id="Alldata">
           <div class="data">
             <div class = "Name_img">
               <img src = "${Image.src}">
               <div class="name-id">
                  <h1>${(result.name) ? result.name : '--'}</h1>
                  <a href="${result.html_url}" class="username" target="_blank">@${result.login}</a>
                </div>
             </div>
                <p>Joined ${new Date(result.created_at).toLocaleDateString('en-US')}</p>
            </div>
            <div class = "bio_data">
                ${(result.bio) ? result.bio : '--'}
            </div>
            <div class="follow-part">
                <div>
                    Repos <br>
                    <p>${result.public_repos}</p>
                </div>
                <div>
                    Followers <br>
                    <p>${result.followers}</p>
                </div>
                <div>
                    Following <br>
                    <p>${result.following}</p>
                </div>
            </div>

            <div class="list">
                <ul>
                    <li><i class="fa-solid fa-location-crosshairs"></i> ${(result.location) ? result.location : '-'}</li>
                    <li><i class="fa-solid fa-link"></i> ${(result.blog) ? result.blog : '-'}</li>
                </ul>
                <ul>
                    <li><i class="fa-brands fa-twitter"></i> ${(result.twitter_username) ? result.twitter_username : '-'}</li>
                    <li><i class="fa-solid fa-building"></i> ${(result.company) ? result.company : '-'}</li>
                </ul>
            </div>
        </div>
        `
    }

}
