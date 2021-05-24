var titles = ["My father and mother", "Myself-Harshitha", "My BROTHER-Karthikeya"];

var images = ["parents.jpg", "harshitha.jpg", "karthi.jpg"];

var i = 0;

function add_item() {
    document.getElementById("title").innerHTML = titles[i];
    document.getElementById("album").src = images[i];
    i++;
    if (i == 3)
        i = 0;
}