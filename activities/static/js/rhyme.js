var part1 = "twinkle twinkle little star"
var part2 = "how i wonder what you are"
var part3 = "up above the world so high"
var part4 = "like a diamond in the sky"
var arr = [part1, part2, part3, part4]
var answers = arr

// $('#listen-comprehension').on('click', function(e) {
//   var message = "John is a boy. He is five years old. He lives in Delhi. His favourite game is chess. He love studying on StudyBuddy. John's best friend is Jack"
//   readOutLoud(message);
// });

$('#start-record-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent = "";
  }
  recognition.start();
});

$('#listen-rhyme').on('click', function(e) {
  nextQues()
});

$('#check-answer').on('click', function(e) {
  var response = noteTextarea.val().toLowerCase();
  console.log(response)
  console.log(answers[queNum])
  if(queNum < arr.length){
    if(response == answers[queNum]){
    readOutLoud("Correct!")
  }else{
    var speak="Sorry! The correct answer is "+ answers[queNum]
    readOutLoud(speak)
    readOutLoud("Try to speak more fluenty!")
  }
  noteTextarea.val('');
  queNum++;
  }
});
