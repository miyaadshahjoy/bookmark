const header = document.querySelector('.header');
const body = document.querySelector('body');
const toggleBtn = document.querySelector('.header__toggleBtn');

toggleBtn.addEventListener('click', function () {
    if (header.classList.contains('toggle')) {//close hamburger menu
        header.classList.remove('toggle');
        body.classList.remove('noscroll');
        
    }
    else {
        //open hamburger menu
        header.classList.add('toggle');
        body.classList.add('noscroll');
    }
});

function openTab(evt, tabName)
{
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++)
    {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++)
    {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();




  const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


console.log('connected');