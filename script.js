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
    const phoneNumber = result.no; // Replace this with the phone number you want to call.
    window.open("tel:" + phoneNumber);
}

function appendText() {
    const textToAppend = document.querySelector('[name="textToAppend"]').value;
    const element = document.getElementById("link");
    url = window.location.href;
    result = parseURLParams(url)
    element.innerHTML = url.replace("/registration","")
    element.innerHTML += "?no="
    element.innerHTML += textToAppend;
    const button = document.getElementById('copy');
    
    button.disabled = false

}
  

function copyText(ths) {
    const textToCopy = document.getElementById("link").textContent;
    navigator.clipboard.writeText(textToCopy);
    alert("Link Copied")
  }
  