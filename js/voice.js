// const btn = document.querySelector('button')
//btn.addEventListener('click', startListening)
const tdBtns= document.querySelectorAll('td input[type="checkbox"]')

//going through each checkbox giving it a class name
tdBtns.forEach((e)=>{
  e.classList.add('check')
})

//gettin table row
const trBtns = document.querySelectorAll('tr')


trBtns.forEach((e)=>{
   e.addEventListener('click',startListening)
})

function startListening() {
  var recognition = new webkitSpeechRecognition() || SpeechRecognition();
  recognition.lang = 'en-US';

  recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript.toLowerCase;
    
    if (transcript === 'present') {
      var checkbox = document.querySelector('.check');
      checkbox.checked = true;
    }
  };

  recognition.start();
  
}


