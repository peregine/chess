for (var i = 1; i <= 8; i++) {
  var row = document.createElement("div");
  row.setAttribute("class", "row");

  for (var j = 1; j <= 8; j++) {
    var cell = document.createElement("div");
    
    var $class="";

    $class=(i === j) ? "cell cell-main" : "cell";
    $class=(i-j === 2) ? "cell cell-main" : $class;
    $class=(i-j === 4) ? "cell cell-main" : $class;
    $class=(i-j === 6) ? "cell cell-main" : $class;
    $class=(j-i === 2) ? "cell cell-main" : $class;
    $class=(j-i === 4) ? "cell cell-main" : $class;
    $class=(j-i === 6) ? "cell cell-main" : $class;
    cell.setAttribute("class",$class);
    
    
    row.appendChild(cell);
  }
  document.getElementById("container").appendChild(row);
}
