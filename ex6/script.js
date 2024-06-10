// Vitória Karoline de Carvalho Bernardo

function addComment() {
    
    var commentText = document.getElementById("comment").value;
    
    
    var commentNode = document.createElement("p");
    var commentContent = document.createTextNode(commentText);
    commentNode.appendChild(commentContent);
    
    
    document.getElementById("commentList").appendChild(commentNode);
    
   
    document.getElementById("comment").value = "";
  }
  