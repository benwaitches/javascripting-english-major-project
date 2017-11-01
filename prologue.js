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
      if (word.url){
        wordString = "<a href='#' data-url='" + word.url + "'>" + wordString + "</a>";
        //added an attribute so the program can look for words with a wiki url
      }
      lineText = lineText + wordString + " ";
    });
    prologueText = prologueText + lineText + "<br/>";
  });
  prologueText = prologueText + "</p></blockquote>";
  $("#prologue").html(prologueText);
  $("#prologue a").click(function(){
    let glossText, clickedWord, modernWord, wikiUrl;
    clickedWord = $( this ).text();
    modernWord = $( this ).data("modern");
    wikiUrl = $( this ).data("url");
    //if thwy click, the function will check for a url
    glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord + ". Would you like to learn more?" + wikiUrl +"</h2>";
    //this didn't actually work, tried adding something like "<a href=wikiUrl> Click here</a>", but this also didn't work. I'm not sure why this is undefined.
    $("#glosses").html(glossText);
  });
});
