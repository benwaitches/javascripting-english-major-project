$("#prologue").html("<p>The text of the Prologue will go here.</p>");
$("#glosses").html("<p>The glosses will go here.</p>");
$.getJSON("https://the-javascripting-english-major.org/prologue.json", function(data){
  let prologueText;
  prologueText = "<blockquote><p>";
  data.lines.forEach(function(line){
    let lineText;
    lineText = "";
    line.forEach(function(word){
      let wordString;
      wordString = word.text;
      if (word.modern){
        wordString = "<a href='#' data-modern='" + word.modern + "'>" + wordString + "</a>";
      }
      lineText = lineText + wordString + " ";
    });
    prologueText = prologueText + lineText + "<br/>";
  });
  prologueText = prologueText + "</p></blockquote>";
  $("#prologue").html(prologueText);
  $("#prologue a").click(function(){
    let glossText, clickedWord, modernWord;
    clickedWord = $( this ).text();
    modernWord = $( this ).data("modern");
    glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord +"</h2>";
    $("#glosses").html(glossText);
  });
});
