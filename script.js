function countTrash(){
  $("#count").text($("h6").length)
}

function deleteTrash(){
  $(".trash").click(
       function(){
         $(this).parent().remove();
         countTrash()

       }
   );
}

function addMessage(){
  $("#add").click(
    function(){
      div = document.createElement("div");
      div.className = "row";
      imgAvatar = document.createElement("img")
      imgAvatar.src = "inconnu.jpg";
      imgAvatar.className = "avatar";
      div1 = document.createElement("div");
      h6 = document.createElement("h6");
      h6.textContent = document.getElementById("inputName").value;
      para = document.createElement("p");
      para.textContent = document.getElementById("input").value;
      imgTrash = document.createElement("img");
      imgTrash.src = "trash.png";
      imgTrash.className = "trash";

      document.getElementById("contenu").appendChild(div);
      div.appendChild(imgAvatar)
      div.appendChild(h6)
      div.appendChild(div1)
      div1.appendChild(h6)
      div1.appendChild(para)
      div.appendChild(imgTrash)

      countTrash()
      deleteTrash()

      document.getElementById("input").value = ""
      document.getElementById("inputName").value = ""
    })
}

$("#addSearch").click(
  function(){
    $("h6").each(
      function() {
          if($(this).text() !== $("#inputSearch").val()){
            $(this).parent().parent().hide()
          }
      }
  );

})


countTrash()
deleteTrash()
addMessage()
