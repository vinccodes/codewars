// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domain_name("http://github.com/carbonfive/raygun") == "github" 
// domain_name("http://www.zombie-bites.com") == "zombie-bites"
// domain_name("https://www.cnet.com") == "cnet"



function domainName(url){

    // regexp
    let re = /(http[s]?:\/\/)(\w*\.?\w+)(\.\w+)/;
    const result = url.match(re);
    console.log(result)
    // get domain name from result array via array index
    const name = result[2];
    return name;
}

console.log(domain_name("http://google.com"), "google")
console.log(domain_name("http://youtube.com"), "youtube")
console.log(domain_name("https://en.wikipedia.org"), "en.wikipedia")