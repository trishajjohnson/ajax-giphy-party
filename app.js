const $input = $("#searchTerm");
const $giphContainer = $("#row");

function appendGiphy(response){
    if(response.data.length){
        let randNum = Math.floor(Math.random() * response.data.length);
        let $col = $("<div>", {class: "col-md-4"});
        let $img = $("<img>", {class: "w-100 m-1", src: response.data[randNum].images.original.url});
        $col.append($img);
        $giphContainer.append($col);
    } else {
        alert("Please enter search term");
    }
    

}

$("form").on('submit', async function(evt){

    evt.preventDefault();
    let searchTerm = $input.val();
    $input.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    
    appendGiphy(response.data);
});

$("#remove").on("click", function(evt){
    evt.preventDefault();

    $("#row").empty();
})