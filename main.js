const username = "SalumMax";
const api = `https://api.github.com/users/${username}`;
const repositories = "/repos?page=1";
const repoList = document.querySelector(".repoList");
// const repoToggle = document.querySelector(".repositories");
const button = document.querySelector(".toggle-btn");

// fetch overview page for the profile

fetch(api).then(turnIntoJSObject).then(displayData);

function turnIntoJSObject(res) {
  return res.json();
}

function displayData(profile) {
  const userInfo = document.querySelector(".user-info");
  userInfo.innerHTML = `
        <figure>
            <img alt="user avatar" src=${profile.avatar_url} />
        </figure>
        <div>
            <h2><a href=${profile.blog}><strong>${profile.name}</strong></a></h2>
            <p>${profile.bio}</p>
            <p>
                <strong>Location:</strong> ${profile.location}
            </p>
            <p>
                <strong>@${profile.login} </strong>
                Repos: ${profile.public_repos}
                Gists: ${profile.public_gists}
            </p>
        </div>
    `;
}

// fetch repositories

fetch(api + repositories)
  .then(toJSON)
  .then(displayRepos);

function toJSON(result) {
  return result.json();
}

function displayRepos(data) {
  data.forEach((repo) => {
    let listItem = document.createElement("li");
    listItem.classList.add("repo");
    listItem.innerHTML = `
            <h3>${repo.name}</h3>
            <span>${repo.description}</span> <br/><br/>
            <br />
            <span> Language:${devicons[repo.language]}</span> <br />
            <br />
            <a href=${repo.html_url} target="blank">View Project</a>`;
    repoList.append(listItem);
  });
}

button.addEventListener("click", function myFunc() {
  document.querySelector(".repositories").classList.toggle("hide");
});

const devicons = {
  Assembly: '<i class="devicon-labview-plain colored"></i> Assembly',
  "C#": '<i class="devicon-csharp-plain colored"></i> C#',
  "C++": '<i class="devicon-cplusplus-plain colored"></i> C++',
  C: '<i class="devicon-c-plain colored"></i> C',
  Clojure: '<i class="devicon-clojure-plain colored"></i> C',
  CoffeeScript:
    '<i class="devicon-coffeescript-plain colored"></i> CoffeeScript',
  Crystal: '<i class="devicon-crystal-plain colored"></i> Crystal',
  CSS: '<i class="devicon-css3-plain colored"></i> CSS',
  Dart: '<i class="devicon-dart-plain colored"></i> Dart',
  Dockerfile: '<i class="devicon-docker-plain colored"></i> Docker',
  Elixir: '<i class="devicon-elixir-plain colored"></i> Elixir',
  Elm: '<i class="devicon-elm-plain colored"></i> Elm',
  Erlang: '<i class="devicon-erlang-plain colored"></i> Erlang',
  "F#": '<i class="devicon-fsharp-plain colored"></i> F#',
  Go: '<i class="devicon-go-plain colored"></i> Go',
  Groovy: '<i class="devicon-groovy-plain colored"></i> Groovy',
  HTML: '<i class="devicon-html5-plain colored"></i> HTML',
  Haskell: '<i class="devicon-haskell-plain colored"></i> Haskell',
  Java: '<i class="devicon-java-plain colored" style="color: #ffca2c"></i> Java',
  JavaScript: '<i class="devicon-javascript-plain colored"></i> JavaScript',
  Julia: '<i class="devicon-julia-plain colored"></i> Julia',
  "Jupyter Notebook": '<i class="devicon-jupyter-plain colored"></i> Jupyter',
  Kotlin:
    '<i class="devicon-kotlin-plain colored" style="color: #796bdc"></i> Kotlin',
  Latex: '<i class="devicon-latex-plain colored"></i> Latex',
  Lua: '<i class="devicon-lua-plain-wordmark colored" style="color: #0000d0"></i> Lua',
  Matlab: '<i class="devicon-matlab-plain colored"></i> Matlab',
  Nim: '<i class="devicon-nixos-plain colored" style="color: #FFC200"></i> Nim',
  Nix: '<i class="devicon-nixos-plain colored"></i> Nix',
  ObjectiveC: '<i class="devicon-objectivec-plain colored"></i> ObjectiveC',
  OCaml: '<i class="devicon-ocaml-plain colored"></i> OCaml',
  Perl: '<i class="devicon-perl-plain colored"></i> Perl',
  PHP: '<i class="devicon-php-plain colored"></i> PHP',
  PLSQL: '<i class="devicon-sqlite-plain colored"></i> PLSQL',
  Processing:
    '<i class="devicon-processing-plain colored" style="color: #0096D8"></i> Processing',
  Python:
    '<i class="devicon-python-plain colored" style="color: #3472a6"></i> Python',
  R: '<i class="devicon-r-plain colored"></i> R',
  Ruby: '<i class="devicon-ruby-plain colored"></i> Ruby',
  Rust: '<i class="devicon-rust-plain colored" style="color: #DEA584"></i> Rust',
  Sass: '<i class="devicon-sass-original colored"></i> Sass',
  Scala: '<i class="devicon-scala-plain colored"></i> Scala',
  Shell:
    '<i class="devicon-bash-plain colored" style="color: #89E051"></i> Shell',
  Solidity: '<i class="devicon-solidity-plain colored"></i> Solidity',
  Stylus: '<i class="devicon-stylus-plain colored"></i> Stylus',
  Svelte: '<i class="devicon-svelte-plain colored"></i> Svelte',
  Swift: '<i class="devicon-swift-plain colored"></i> Swift',
  Terraform: '<i class="devicon-terraform-plain colored"></i> Terraform',
  TypeScript: '<i class="devicon-typescript-plain colored"></i> TypeScript',
  "Vim Script": '<i class="devicon-vim-plain colored"></i> Vim Script',
  Vue: '<i class="devicon-vuejs-plain colored"></i> Vue',
  null: '<i class="devicon-markdown-original"></i> Markdown',
};
