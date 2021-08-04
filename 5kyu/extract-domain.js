// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domain_name("http://github.com/carbonfive/raygun") == "github" 
// domain_name("http://www.zombie-bites.com") == "zombie-bites"
// domain_name("https://www.cnet.com") == "cnet"



function domain_name(domain){
    // regexp for http://
    // regexp for https://
    // regexp for .com

    // compare regexp with domain_name
    // if it matches, chop off regexp with ''

}


console.log(domain_name("http://google.com"), "google")
console.log(domain_name("http://youtube.com"), "youtube")
console.log(domain_name("https://en.wikipedia.org"), "en.wikipedia")