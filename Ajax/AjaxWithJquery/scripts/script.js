let link = $(".nav-link");
let home = $(".navbar-brand");
let postCard = $("#blogPostCard");

function getPosts(){
    let urlData = "https://jsonplaceholder.typicode.com/posts";

    $.ajax({
        url: urlData,
        success: function(blogPosts){
           renderBlogPosts(blogPosts);
        },
        error: function(){
            console.error('Error!');
        }
    })
}

function renderBlogPosts(blogPosts){
    postCard.innerHTML = '';

    for(const blogPost of blogPosts){
        postCard.append(
        `<div class="col-sm-6 col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${blogPost.title}</h5>
            <p class="card-text">${blogPost.body}</p>
            <a href="#" class="btn btn-primary">Read more >>></a>
          </div>
        </div>
      </div>`);
    }
}

link.click(function(){
    getPosts();
    postCard.show();
});
home.click(function(){
    postCard.hide();
})





