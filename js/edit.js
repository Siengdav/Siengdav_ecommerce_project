function onAddQuestion() {
    // TODO : when clicking on ADD button, display the dialog
    show(dom_questions_dialog);
    questionToEdit = null;
    clearForm();
}

function clearForm(){
  
    document.getElementById("title").value = "";
    document.getElementById("choiceA").value = "";
    document.getElementById("choiceB").value = "";
    document.getElementById("choiceC").value = "";
    document.getElementById("choiceD").value = "";
    document.getElementById("correct_Ans").value="";
  
  }