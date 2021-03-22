const $input = $("#searchTerm");
const $giphContainer = $("#giphy-container");

function appendGiphy(response){
    if(response.data.length){
        let randNum = Math.floor(Math.random() * response.data.length);
        const $col = $("<div>", {class: "col-md-4"});
        const $img = $("<img>", {class: "w-100", src: response.data[randNum].images.origianl.url});
        $col.append($img);
        $giphContainer.append($col);
    }
    
    
    $img.src = response.data.data[randNum].images.original.url;
    console.log($img.src);
    img.src = response.data.data[randNum].images.original.url;
    console.log(img.src);
    $col.append($img);
    console.log($col);
    $row.append($col);
    input.value = "";
}

const form = document.querySelector("#search-form");
form.addEventListener('submit', async function(evt){

    evt.preventDefault();
    let searchTerm = $input.val();
    $input.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    
    appendGiphy(response.data);
});

// const $gifArea = $("#giphy-container");
// const $searchInput = $("#searchTerm");

// /* use ajax result to add a gif */

// function addGif(res) {
//   let numResults = res.data.length;
//   if (numResults) {
//     let randomIdx = Math.floor(Math.random() * numResults);
//     let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
//     let $newGif = $("<img>", {
//       src: res.data[randomIdx].images.original.url,
//       class: "w-100"
//     });
//     $newCol.append($newGif);
//     $gifArea.append($newCol);
//   }
// }

// /* handle form submission: clear search box & make ajax call */

// $("form").on("submit", async function(evt) {
//   evt.preventDefault();

//   let searchTerm = $searchInput.val();
//   $searchInput.val("");

//   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
//     params: {
//       q: searchTerm,
//       api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
//     }
//   });
//   addGif(response.data);
// });

// /* remove gif */

// $("#remove").on("click", function() {
//   $gifArea.empty();
// });