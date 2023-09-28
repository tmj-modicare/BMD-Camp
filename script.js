function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function makePhoneCall() {
    number = document.getElementById("number");
    url = window.location.href;
    result = parseURLParams(url)
    const phoneNumber = atob(result.no); // Replace this with the phone number you want to call.
    window.open("tel:" + phoneNumber);
}

function appendText() {
    const textToAppend = document.querySelector('[name="textToAppend"]').value;
    const element = document.getElementById("link");
    link.innerHTML = "https://calciumcamp.netlify.app/?no="
    element.innerHTML += btoa(textToAppend);
    const button = document.getElementById('copy');
    
    button.disabled = false


    const textToCopy = document.getElementById("link").textContent;
    navigator.clipboard.writeText(textToCopy);


}
  

function copyText(ths) {
    const textToCopy = document.getElementById("link").textContent;
    navigator.clipboard.writeText(textToCopy);
    alert("Link Copied !!")
}
  

function updateTimer() {
    future  = Date.parse("october 08, 2023 11:00:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML = 
      '<div> ' + d + ' <span>days</span></div>' +
        '<div> ' + h + ' <span>hours</span></div>' +
        '<div> ' + m + ' <span>minutes</span></div>' +
        '<div> ' + s + ' <span>seconds</span></div>' ;
  }
  setInterval('updateTimer()', 1000 );
  