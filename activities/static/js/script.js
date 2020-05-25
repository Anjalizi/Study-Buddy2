/*-----------------------------
      App buttons and input 
------------------------------*/

var ques1 = "Where does John live?"
var ques2 = "What is his favourite game?"
var ques3 = "Who is John's best friend?"
var arr = [ques1, ques2, ques3]
var answers = ["Delhi", "chess", "Jack"]

$('#listen-comprehension').on('click', function(e) {
  var message = "John is a boy. He is five years old. He lives in Delhi. His favourite game is chess. He love studying on StudyBuddy. John's best friend is Jack"
  readOutLoud(message);
});

$('#start-record-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent = "";
  }
  recognition.start();
});

$('#bol-question').on('click', function(e) {
  // readOutLoud(ques1)
  nextQues()
});

$('#check-answer').on('click', function(e) {

  console.log(noteTextarea.val())
  console.log(answers[queNum])
  if(queNum < arr.length){
    if(noteTextarea.val() == answers[queNum]){
    readOutLoud("Correct!")
  }else{
    var speak="Sorry! The correct answer is "+answers[queNum]
    readOutLoud(speak)
  }
  noteTextarea.val('');
  queNum++;
  }
});


$('#pause-record-btn').on('click', function(e) {
  recognition.stop();
  instructions.text('Voice recognition paused.');
});
