const kommenttikenttä = document.getElementById("kommenttikenttä")
const kommentit = document.getElementsByClassName("kommentit")[0]
const nappi = document.getElementsByClassName("nappula")[0]

function addComment() {
    const input = kommenttikenttä.value;
    const teksti = document.createTextNode(input);
    const li = document.createElement("li");
    const textdiv = document.createElement("div");
    textdiv.classList.add("valmiskommentti");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    textdiv.appendChild(teksti);
    li.appendChild(textdiv);
    li.appendChild(deleteButton);
    kommentit.appendChild(li);
    deleteButton.onclick = function() {
      deleteComment(deleteButton.parentElement);
    };
    kommenttikenttä.value = "";
  }
  
  function deleteComment(event) {
    event.remove();
  }
  
  nappi.onclick = addComment;

deleteButton.onclick = function() {
    deleteComment(deleteButton.parentElement);
  };

nappi.onclick = addComment