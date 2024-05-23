$(document).ready(function(){
  $("#goster-gizle").click(function(){
    $("p").toggle();
  });
});
//kaydırarak ekleme ve silme
$(document).ready(function(){
  var counter = 2;
  $("#ekle").click(function(){
    $("#liste").append("<li>Üye " + counter + "</li>");
    counter++;
  });
  $("#sil").click(function(){
    $("#liste li:last").remove();
    counter--;
  });
});
//yıldız verme
$(document).ready(function(){
  $(".rating span").click(function(){
    $(this).addClass("checked");
    $(this).prevAll("span").addClass("checked");
    $(this).nextAll("span").removeClass("checked");
  });
});
//üye olmak
$(document).ready(function(){
  $("#uyeol-btn").click(function(){
    var ad = $("#ad").val();
    var soyad = $("#soyad").val();
    var email = $("#email").val();
    var sifre = $("#sifre").val();
    
    // Örnek olarak, burada yapılacak işlemi belirtebilirsiniz
    // Örneğin, bu bilgileri bir sunucuya göndererek üyeyi kaydedebilirsiniz
    
    alert("Üye kaydınız başarıyla oluşturuldu.");
  });
});
//kaydırmak
$(document).ready(function(){
  $("#flip").click(function(){
                   $("#panel").slideDown("slow");
                   });
  });
  $(document).ready(function(){
    $("#ff").click(function(){
                        $("#panel").slideUp("slow");
                     });
   });                  
   //sürekli değişen yazı
   $(document).ready(function(){
    var yazilar = ["Hoş geldiniz!", "Merhaba!", "Nasılsınız?","Gününüz Nasıl Geçiyor?","Keyifli günler dileriz!"];
    var index = 0;
    
    function degistirYazi() {
      $("#suresiz-yazi").fadeOut(500, function() {
        $(this).text(yazilar[index]);
      }).fadeIn(500);
      
      index++;
      if (index == yazilar.length) {
        index = 0;
      }
    }
    
    setInterval(degistirYazi, 10000); // 10 saniyede bir yazı değişecek
  });
  //yorum yapma
  $(document).ready(function(){
    $("#yorum-yap-btn").click(function(){
      var yorum = $("#yorum").val();
      
      // Yorum işlemleri burada gerçekleştirilebilir, örneğin bir API'ye gönderilebilir.
      
      alert("Yorumunuz gönderildi: " + yorum);
    });
  });
  //kayan resim
  $(document).ready(function(){
    var x = 0;
    $("#sol").click(function(){
          x=x-20;
      $("#resim").css("left",x+"px");
    });
    $("#sag").click(function(){
      x=x+20;
      $("#resim").css("left",x+"px");
    });
  });
  //zamanlayıcı
  $(document).ready(function(){
    // Hedef tarih - bu örnekte 1 Haziran 2024, 12:00:00
    var targetDate = new Date("June 14, 2024 12:00:00").getTime();

    var timer = setInterval(function() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // HTML'e güncellenen değerleri yazdırma
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        // Eğer zamanlayıcı 0'a ulaşmışsa, zamanlayıcıyı durdur
        if (distance < 0) {
            clearInterval(timer);
            $("#timer").text("EXPIRED");
        }
    }, 1000);
});
//kadın-erkek
$(document).ready(function () {  
              
  $("#male").prop("checked", true);              

});   



//arkaplan rengi
$(document).ready(function(){
  $(".box").mouseenter(function(){
    $(this).css("background-color", "red");
  });
  $(".box").mouseleave(function(){
    $(this).css("background-color", "black");
  });
});
//girişte hoşgeldiniz yazısı
$(document).ready(function(){
  $(".alert").fadeIn(2000); // Uyarı kutusunu görünür hale getirme

  $("#closeBtn").click(function(){
    $(".alert").fadeOut(1000); // Uyarı kutusunu kaybolma efekti ile gizleme
  });
});
//contact üyelik denemesi
$(document).ready(function(){
  $('#signupForm').submit(function(event){
      event.preventDefault(); // Formun varsayılan submit işlemini engelle
      var formData = $(this).serialize(); // Form verilerini al

      // Üyelik işlemini AJAX ile gerçekleştir
      $.ajax({
          type: 'POST',
          url: 'signup.php', // Üyelik işlemini işleyecek PHP dosyasının yolunu belirtin
          data: formData,
          success: function(response){
              $('#successMessage').show(); // Başarı mesajını göster
              $('#signupForm').trigger('reset'); // Formu sıfırla
          },
          error: function(xhr, status, error){
              console.error(xhr.responseText); // Hata mesajını konsola yazdır
              alert('Üyelik işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
          }
      });
  });
});





//javascript
const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});




        document.getElementById('myButton').addEventListener('click', function() {
            document.getElementById('message').innerText = 'Button was clicked!';
        });
    
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
function karakterSayisiniGoster() {
  var metin = document.getElementById("search-box").value;
  document.getElementById("karakterSayisi").innerHTML = "Karakter sayısı: " + metin.length;}

  

let currentIndex = 0;
const images = document.querySelectorAll('#slider img');

document.getElementById('next').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
});

document.querySelectorAll('.thumbnail').forEach(image => {
  image.addEventListener('click', () => {
      const lightbox = document.getElementById('lightbox');
      const lightboxImage = document.getElementById('lightboxImage');
      lightbox.style.display = 'flex';
      lightboxImage.src = image.src.replace('thumb', 'large');
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

 var sonuc;
        function hesapla(){
            var sayi1=document.getElementById("sayi1").value;
            var sayi2=document.getElementById("sayi2").value;
            var islem=document.getElementById("islem").value;
    
            var s1 = Number(sayi1);
            var s2 = Number(sayi2);

            if(islem == 'topla')
                sonuc = s1 + s2;
            else if(islem == 'cikar')
                sonuc = s1 - s2;
            else if(islem == 'carp')
                sonuc = s1 * s2;
            else 
                sonuc = s1 / s2;

            document.getElementById("sonuc").innerHTML = "Sonuc : " + sonuc;
        }

        var hesaplaBtn=document.getElementById("buton");
        hesaplaBtn.onclick=hesapla;

        function hesapla(){
          var reverse = 0;
          var sayi=parseInt(document.getElementById("sayi").value);

          while (sayi != 0)
          {
              reverse = reverse * 10;
              reverse = reverse + sayi % 10;
              sayi = Math.floor(sayi / 10);
          }

          window.alert(reverse);
      }


      function hesapla(){
        var sonuc = 1;
        var taban=document.getElementById("taban").value;
        var yukseklik=document.getElementById("yukseklik").value;

        var s1 = Number(taban);
        var s2 = Number(yukseklik);

        var alan = s1*s2/2;

        document.getElementById("sonuc").innerHTML = "Üçgenin alanı : " + alan;
    }
    var hesaplaBtn=document.getElementById("buton");
    hesaplaBtn.onclick=hesapla;

    function showAbout() {
      var aboutSection = document.getElementById('about');
      if (aboutSection.style.display === 'none') {
          aboutSection.style.display = 'block';
      } else {
          aboutSection.style.display = 'none';
      }
  }
  setInterval(function(){
    window.location.reload(false);
}, 60000);
    

function mesajGoster() {
  alert("Butona tıklandı!");
}
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTask = todoInput.value;

  if (newTask === '') {
      alert('Please enter a task!');
      return;
  }
  todoInput.value = '';
  addTask(newTask);
});

function addTask(task) {
  const listItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  listItem.appendChild(checkBox);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  listItem.appendChild(editButton);

  checkBox.addEventListener('change', function() {
      if (this.checked) {
          taskText.style.textDecoration = 'line-through';
      } else {
          taskText.style.textDecoration = 'none';
      }
  });
 
  deleteButton.addEventListener('click', function() {
      todoList.removeChild(listItem);
  });

  editButton.addEventListener('click', function() {
      const isEditing = listItem.classList.contains('editing');
 
      if (isEditing) {
         
          taskText.textContent = this.previousSibling.value;
          listItem.classList.remove('editing');
          editButton.textContent = 'Edit';
      } else {
         
          const input = document.createElement('input');
          input.type = 'text';
          input.value = taskText.textContent;
          listItem.insertBefore(input, taskText);
          listItem.removeChild(taskText);
          listItem.classList.add('editing');
          editButton.textContent = 'Save';
      }
  });

  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  const tasks = [];
  document.querySelectorAll('#todo-list li').forEach(task => {
      const taskText = task.querySelector('span').textContent;
      const isCompleted = task.classList.contains('completed');
      tasks.push({ text: taskText, completed: isCompleted });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', function() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => {
      addTask(task.text);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  nextButton.classList.add('hide');
});

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const quizAppElement = document.getElementById('quiz-app');
const resultsElement = document.createElement('div');
resultsElement.setAttribute('id', 'results');
resultsElement.classList.add('results', 'hide');
quizAppElement.appendChild(resultsElement);

let shuffledQuestions, currentQuestionIndex;
let score = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
          button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', () => selectAnswer(button));
      answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(selectedButton) {
  Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true;
      setStatusClass(button, button.dataset.correct);
  });

  const correct = selectedButton.dataset.correct;
  if (correct) {
      score++;
  }
  setStatusClass(selectedButton, correct);

  setTimeout(() => {
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
          nextButton.classList.remove('hide');
      } else {
          concludeQuiz();
      }
  }, 1000); // Adjust delay as needed
 
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
      element.classList.add('correct');
  } else {
      element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function concludeQuiz() {
  questionContainerElement.classList.add('hide');
  nextButton.classList.add('hide');

  resultsElement.classList.remove('hide');
  resultsElement.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your score: ${score} out of ${shuffledQuestions.length}</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
  `;
  quizAppElement.appendChild(resultsElement);
}

function restartQuiz() {
  resultsElement.classList.add('hide');
  score = 0;
  currentQuestionIndex = 0;
  startGame();
}

const questions = [
  {
      question: "What is a Variable in JavaScript?",
      answers: [
          { text: "A section of the webpage", correct: false },
          { text: "A container for storing data values", correct: true },
          { text: "A type of JavaScript function", correct: false },
          { text: "An operation in mathematics", correct: false }
      ]
  },
  {
      question: "Which of the following is used to declare a variable in JavaScript?",
      answers: [
          { text: "var", correct: false },
          { text: "let", correct: false },
          { text: "const", correct: false },
          { text: "All of the above", correct: true }
      ]
  },
  {
      question: "What does the `===` operator check?",
      answers: [
          { text: "Only value equality", correct: false },
          { text: "Only type equality", correct: false },
          { text: "Both value and type equality", correct: true },
          { text: "Neither value nor type equality", correct: false }
      ]
  },
  {
      question: "What is an Array in JavaScript?",
      answers: [
          { text: "A function that performs an operation", correct: false },
          { text: "A single variable used to store different elements", correct: true },
          { text: "A series of characters", correct: false },
          { text: "A conditional statement", correct: false }
      ]
  },
  {
      question: "Which method can add one or more elements to the end of an array?",
      answers: [
          { text: "array.unshift()", correct: false },
          { text: "array.push()", correct: true },
          { text: "array.pop()", correct: false },
          { text: "array.slice()", correct: false }
      ]
  },
  {
      question: "How do you create a function in JavaScript?",
      answers: [
          { text: "function myFunction()", correct: true },
          { text: "create myFunction()", correct: false },
          { text: "function: myFunction()", correct: false },
          { text: "function = myFunction()", correct: false }
      ]
  },
  {
      question: "Which statement is used to execute actions based on a condition?",
      answers: [
          { text: "for", correct: false },
          { text: "while", correct: false },
          { text: "if", correct: true },
          { text: "switch", correct: false }
      ]
  },
  {
      question: "What is the purpose of a loop in JavaScript?",
      answers: [
          { text: "To perform a single action once", correct: false },
          { text: "To store multiple values in a single variable", correct: false },
          { text: "To execute a block of code a number of times", correct: true },
          { text: "To speed up code execution", correct: false }
      ]
  },
  {
      question: "Which object is the top-level object in a browser environment?",
      answers: [
          { text: "Document", correct: false },
          { text: "Window", correct: true },
          { text: "Console", correct: false },
          { text: "Navigator", correct: false }
      ]
  },
  {
      question: "What is the correct syntax for referring to an external script called `app.js`?",
      answers: [
          { text: "<script href='app.js'>", correct: false },
          { text: "<script source='app.js'>", correct: false },
          { text: "<script src='app.js'>", correct: true },
          { text: "<script link='app.js'>", correct: false }
      ]
  }
];
function showAbout() {
  var aboutDiv = document.getElementById("about");
  if (aboutDiv.style.display === "none") {
      aboutDiv.style.display = "block";
  } else {
      aboutDiv.style.display = "none";
  }
}
//saat 
function showTime() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  document.getElementById("time").innerHTML = "Şu anki zaman: " + time;
}
setInterval(showTime, 1000); // Her saniye güncelle
//girdi gösterme
function showInput() {
  var userInput = document.getElementById("inputField").value;
  alert("Hoşgeldiniz: " + userInput);
}
//sayfayı yukarı kaydırma
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
//kukii
function setCookie() {
  document.cookie = "username=John Doe; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";
  alert("Çerez oluşturuldu!");
}
function getCookie() {
  var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/, "$1");
  alert("Kullanıcı adı: " + cookieValue);
}
//resm galerisi
function openModal(image) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = image;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
//hesap makinesi
function add() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = "Sonuç: " + (num1 + num2);
}

function subtract() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = "Sonuç: " + (num1 - num2);
}

function multiply() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = "Sonuç: " + (num1 * num2);
}

function divide() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = "Sonuç: " + (num1 / num2);
}

// JavaScript ile resim değiştirme işlemi
var anaResim = document.getElementById("anaResim");
var degisenResim = document.getElementById("degisenResim");

anaResim.onmouseover = function() {
    anaResim.style.display = "none"; // İlk resmi gizle
    degisenResim.style.display = "block"; // İkinci resmi göster
}

degisenResim.onmouseout = function() {
    anaResim.style.display = "block"; // İlk resmi göster
    degisenResim.style.display = "none"; // İkinci resmi gizle
}
//kayan resim
var slides = document.querySelectorAll('.slide');
    var totalSlides = slides.length;
    var currentSlideIndex = 0;

    // İlk slaydı göster
    showSlide(currentSlideIndex);

    // Otomatik olarak slaydı değiştir
    setInterval(function() {
        // Mevcut slaydı gizle
        hideSlide(currentSlideIndex);
        // Bir sonraki slayda geç
        currentSlideIndex++;
        // Eğer son slaydaysa başa dön
        if (currentSlideIndex === totalSlides) {
            currentSlideIndex = 0;
        }
        // Yeni slaydı göster
        showSlide(currentSlideIndex);
    }, 5000); // Her 5 saniyede bir değiştir (5000 milisaniye)

    // Belirli bir slaydı göster
    function showSlide(index) {
        slides[index].classList.remove('hidden');
    }

    // Belirli bir slaydı gizle
    function hideSlide(index) {
        slides[index].classList.add('hidden');
    }
    let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}












