function addBlog(event) {
    event.preventDefault()
    

    let name = document.getElementById("name").value
    let desc = document.getElementById("desc").value
    let logoNextjs = document.getElementById('nextJs').checked;
    let logoNodejs = document.getElementById('nodeJs').checked;
    let logoReactjs = document.getElementById('reactJs').checked;
    let logoTypeScript = document.getElementById('typeScript').checked;
    if (logoNextjs == true) {
        logoNextjs = 'img/nextJs.svg';
    } else {
        logoNextjs = '';
    }
    
    if (logoNodejs == true) {
        logoNodejs = 'img/nodeJs.svg';
    } else {
        logoNodejs = '';
    }
    
    if (logoReactjs == true) {
        logoReactjs = 'img/reactJs.svg';
    } else {
        logoReactjs = '';
    }
    
    if (logoTypeScript == true) {
        logoTypeScript = 'img/typeScript.svg';
    } else {
        logoTypeScript = '';
    }


    let blog = {
        name: name,
        desc: desc,
        image: image,
        logoNextjs: logoNextjs,
        logoNodejs: logoNodejs,
        logoReactjs: logoReactjs,
        logoTypeScript: logoTypeScript,
    }
}