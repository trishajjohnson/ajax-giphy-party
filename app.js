// console.log("Let's get this party started!");
const $input = $("#searchTerm");
const $giphContainer = $("#giphy-container");

async function appendGiphy(evt){
    evt.preventDefault();

    const searchTerm = $input.value;
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
   
    let randNum = Math.floor(Math.random() * response.data.data.length);
    
    const $col = $("<div>", {class: "col-md-4"});
    
    const $img = $("<img>", {class: "w-100"});
    $img.src = response.data.data[randNum].images.original.url;
    console.log($img.src);
    // img.src = response.data.data[randNum].images.original.url;
    // console.log(img.src);
    $col.append($img);
    console.log($col);
    $row.append($col);
    input.value = "";
}

const form = document.querySelector("#search-form");
form.addEventListener('submit', appendGiphy);