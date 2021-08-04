// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domain_name("http://github.com/carbonfive/raygun") == "github" 
// domain_name("http://www.zombie-bites.com") == "zombie-bites"
// domain_name("https://www.cnet.com") == "cnet"



function domain_name(domain){

    // make copy of input string
    let domainName = domain;
    // regexp for http and https
    const reHttpOnly = new RegExp('http[s]?://')

    // regexp for .com
    const reCom = new RegExp('.com')

    console.log(domainName.match(reHttpOnly))
    // compare regexp with domain_name

    // Naive solution
    // for (let i = 0; i < domain.length; i++) {
    //     // get up to index string concatenated

    //     // compare regexp with domain_name

    //     // if it matches, chop off regexp with ''
    // }
}

console.log(domain_name("http://google.com"), "google")
console.log(domain_name("http://youtube.com"), "youtube")
console.log(domain_name("https://en.wikipedia.org"), "en.wikipedia")