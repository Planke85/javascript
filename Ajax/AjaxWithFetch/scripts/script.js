let link = document.getElementsByClassName("nav-link")[0];
let home = document.getElementsByClassName("navbar-brand")[0];

let postCard = document.getElementById("blog-post-card");
let blogPosts = [];

function BlogPost(title,body){
    this.title = title;
    this.body = body;
}

function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(result){
        if(result.ok){
            return result.json()
        }
        else{
            throw new Error(result.status);
        }
    })
    .then(function(posts){
        for(const post of posts){
            let newPost = new BlogPost(post.title, post.body);
            blogPosts.push(newPost);
        }
        renderBlogPosts();
    })
    .catch(function(error){
        console.log(error);
    })
}

function renderBlogPosts(){
    postCard.innerHTML = '';

    for(const blogPost of blogPosts){
        postCard.innerHTML +=
        `<div class="col-sm-6 col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${blogPost.title}</h5>
            <p class="card-text">${blogPost.body}</p>
            <a href="#" class="btn btn-primary">Read more >>></a>
          </div>
        </div>
      </div>`;
    }
}

link.addEventListener("click", getPosts);
home.addEventListener("click", function(){
    postCard.innerHTML = "";
} )