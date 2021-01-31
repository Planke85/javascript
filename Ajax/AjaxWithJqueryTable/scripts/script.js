let link = $(".nav-link");
let home = $(".navbar-brand");
let blogBody = $("#blogBody");

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
    let blogData = '';
    let counter = 1;

    $.each(blogPosts, function(key,value){
        blogData += '<tr>';
        blogData += `<td>${counter}</td>`;
        blogData += `<td>${value.title}</td>`;
        blogData += `<td>${value.body}</td>`;
        blogData += `</tr>`;
        counter++;
    });
    blogBody.append(blogData);
    }


link.click(function(){
    getPosts();
    blogBody.show();
});
home.click(function(){
    blogBody.hide();
})





