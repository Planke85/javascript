let link = $(".nav-link").eq(0);
let home = $(".navbar-brand").eq(0);

let postCard = $("#blogPostCard");
let blogPosts = [];

function BlogPost(title,body){
    this.title = title;
    this.body = body;
}

function getPosts(){
    const urlData = "https://jsonplaceholder.typicode.com/posts";

    $.ajax({
        url: urlData,
        success: function(data){
            for(let post of data){
               let newPost = new BlogPost(post.title,post.body);
               blogPosts.push(newPost);
           }
           renderBlogPosts();
        },
        error: function(){
            console.error('Error occured!');
        }
    })
}

function renderBlogPosts(){
    postCard.innerHTML = '';

    for(let blogPost of blogPosts){
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



link.click(function(){
    getPosts();
});
home.click(function(){
    postCard.innerHTML = "";
})

console.log(blogPosts)




