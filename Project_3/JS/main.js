var url = 'https://newsapi.org/v2/everything?' +
          'q=Neuroscience&' +
          'sortBy=popularity&' +
          'apiKey=c0d5ed58d37a40309edce339ee2170aa';

var req = new Request(url);

fetch(req)
    .then((response) => {
        return response.json()
    }).then((result) => {
        console.log(result)
      document.querySelector("#article1Head").innerHTML = result.articles[0].title;
      document.querySelector("#article2Head").innerHTML = result.articles[1].title;
      document.querySelector("#article3Head").innerHTML = result.articles[2].title;
      document.querySelector("#article1Body").innerHTML = result.articles[0].description;
      document.querySelector("#article2Body").innerHTML = result.articles[1].description;
      document.querySelector("#article3Body").innerHTML = result.articles[2].description;
      document.querySelector("#publisher1").innerHTML = result.articles[0].source.name;
      document.querySelector("#publisher2").innerHTML = result.articles[1].source.name;
      document.querySelector("#publisher3").innerHTML = result.articles[2].source.name;
      document.querySelector("#img1").src = result.articles[0].urlToImage;
      document.querySelector("#img2").src = result.articles[1].urlToImage;
      document.querySelector("#img3").src = result.articles[2].urlToImage;
      document.querySelector("#link1").innerHTML = result.articles[0].url;
      document.querySelector("#link2").innerHTML = result.articles[1].url;
      document.querySelector("#link3").innerHTML = result.articles[2].url;
      document.querySelector("#link1").href = result.articles[0].url;
      document.querySelector("#link2").href = result.articles[1].url;
      document.querySelector("#link3").href = result.articles[2].url;
    })
    fetch('https://randomuser.me/api/?results=4')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let output = "";
      data.results.forEach(function(post){
        output += `
        <div class="card">
          <img class="card-img-top rounded-circle" src="${post.picture.large}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${post.name.title} ${post.name.first} ${post.name.last}</h5>
            <p class="card-text">${post.email}</p>
          </div>
        </div>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })
    $('#myList a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
