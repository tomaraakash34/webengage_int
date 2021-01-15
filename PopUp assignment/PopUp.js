function expandContract() {
    const el = document.getElementById("expand-contract");
    el.classList.toggle("expanded");
    el.classList.toggle("collapsed");
  }

  function expandPopUp() {
    setTimeout(function () {
      expandContract();
    }, 3000);
  }


function copyCode(id) {
    highlight(id);

    var codeTextId = `code${id.charAt(3)}`;

    var textarea = document.createElement('textarea');
    textarea.id = 'temp_element'
    textarea.style.height = 0
    document.body.appendChild(textarea)
    textarea.value = document.getElementById(codeTextId).innerText
    var selector = document.getElementById('temp_element')
    selector.select()
    document.execCommand('copy')
    document.body.removeChild(textarea);
}

var clickedButton = null;

function highlight(id) {
    if(clickedButton != null)
    {
        clickedButton.innerHTML = "COPY CODE";
        clickedButton.style.backgroundImage = "linear-gradient(to right,rgb(0, 162, 255),blue)"
    }
    clickedButton  = document.getElementById(id);
    clickedButton.style.backgroundImage =  "linear-gradient(to right,gray,black)";
    clickedButton.innerHTML = "CODE COPIED";
}
