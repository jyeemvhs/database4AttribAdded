  	
  		function readClicked(){


          $.ajax({
            url: "/read",
            type: "GET",
            data: {identifier:$("#identifier").val()},
            success: function(data){
              if (!data)
                alert("bad read");
              else if (data.retVal) {
                $("#name").val(data.retVal.name);

                if (data.retVal.volleyball)
                  $("#volleyball").prop("checked",true);
                else
                  $("#volleyball").prop("checked",false);

                if (data.retVal.basketball)
                  $("#basketball").prop("checked",true);
                else
                  $("#basketball").prop("checked",false);

                let radios = $('input:radio[name=grade]');

                $("#grade").val(data.retVal.grade);

                alert("good read");
              } else
                alert("bad read");
            } ,     
            dataType: "json"
          });     
  		  return false;
  		}
      
      function createClicked(){

let gradeVal = $("#grade").val();


          $.ajax({
            url: "/create",
            type: "POST",
            data: {identifier:$("#identifier").val(),name:$("#name").val(),
            grade:gradeVal,volleyball:$("#volleyball").prop("checked"),
            basketball:$("#basketball").prop("checked")
            },
            success: function(data){
              if (!data)
                alert("bad create");
              else if (data.retVal)
                alert("good create");
              else
                alert("bad create");
              } ,      
            dataType: "json"
          });  
        return false;
      }
      
      function updateClicked(){
let gradeVal = $("#grade").val();
      
          $.ajax({
            url: "/update",
            type: "PUT",            

            data: {identifier:$("#identifier").val(),name:$("#name").val(),
            grade:gradeVal,volleyball:$("#volleyball").prop("checked"),
            basketball:$("#basketball").prop("checked")
            },
            success: function(data){
              if (!data)
                alert("bad update");
              else if (data.retVal)
                alert("good update");
              else
                alert("bad update");
            } ,     
            dataType: "json"
          });     
        return false;
      }
      function deleteClicked(){
          $.ajax({
            url: "/delete/" + Number($("#identifier").val()),
            type: "DELETE",
            success: function(data) { 
              if (!data)
                alert("bad delete");
              else if (data.retVal)
                alert("good delete");
              else
                alert("bad delete");
            } ,   
            dataType: "json"
          });  
          return false;             
      }      
   		


$(document).ready(function(){ 
  $("#createButton").click(createClicked);
  $("#readButton").click(readClicked);
  $("#updateButton").click(updateClicked);
  $("#deleteButton").click(deleteClicked);

  $("form").submit(function(event)
  {
        if ($("#identifier").val() == "") {
          alert("NO ID");
          return false;
        }
        if ($("#name").val() == "") {
          alert("NO NAME");
          return false;
        }

  
    return false;
  })
});     
  
  
  
