const works = [
    { author: "Micheal Jackson", lifetime: "1022-1055", tips: "Human", photos: ["human1.jpg", "human2.jpg", "human3.jpg"] },
    { author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"] },
    { author: "John Herry UY", lifetime: "1894-1928", tips: "Abstract", photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"] },
    { author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"] }
];

function createImg(src) {
    var img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("class", "photo");
    return img;
}

function workToHTML(work) {
    var item = document.createElement("div");
    item.setAttribute("class", "item");

    var genre = document.createElement("h4");
    genre.innerText = "Genre:" + work.tips;

    var author = document.createElement("div");
    author.setAttribute("class", "inner-box");
    var authorName = document.createElement("h3");
    authorName.innerText = work.author;
    authorName.setAttribute("style", "display:inline-block;margin-right:0.5em;");
    var lifetime = document.createTextNode("lifetime:" + work.lifetime);
    author.appendChild(authorName);
    author.appendChild(lifetime);

    var photos = document.createElement("div");
    photos.setAttribute("class", "inner-box");
    var title = document.createElement("h3");
    title.innerText = "popular photos";
    photos.appendChild(title);
    for (let i in work.photos) {
        photos.appendChild(createImg(work.photos[i]));
    }

    var button = document.createElement("button");
    button.innerText = "Visit";

    item.appendChild(genre);
    item.appendChild(author);
    item.appendChild(photos);
    item.appendChild(button);

    return item;
}

var body = document.getElementsByTagName("body")[0];
for (let i in works) {
    body.appendChild(workToHTML(works[i]));
}
