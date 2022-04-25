let blogs =[];

function addBlog(event){
    event.preventDefault();


    let name = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;
    var date1 = document.getElementById('datestart').value;
    var date2 = document.getElementById('dateend').value;
    const dateone = new Date(date1);
    const datetwo = new Date(date2);
    const time = Math.abs(datetwo- dateone);
    const month = Math.ceil(time/(1000 * 60 * 60 * 24 * 30));
    let logonode = document.getElementById('nodeJs').checked;
    let logoreact =document.getElementById('reactJs').checked;
    let logonext = document.getElementById('nextJs').checked;
    let logotype = document.getElementById('typeScript').checked;
    if(logonode == true){
        logonode ='img/nodeJs.svg';
    }else{
        logonode='';
    }
    if(logoreact==true){
        logoreact='img/reactJs.svg';
    }else{
        logoreact='';
    }
    if(logonext==true){
        logonext='img/nextJs.svg';
    }else{
        logonext='';
    }
    if(logotype==true){
        logotype='img/typeScript.svg';
    }else{
        logotype='';
    }
    let image = document.getElementById('image');

    image = URL.createObjectURL(image.files[0]);
    console.log(image);

    let blog ={
        name:name,
        desc:desc,
        image: image,
        month:month,
        logonode:logonode,
        logoreact:logoreact,
        logonext:logonext,
        logotype: logotype,
    };

    blogs.push(blog);

    console.table(blogs);
    renderBlog();
}
function renderBlog() {
    let containerBlog = document.getElementById('contents');
    containerBlog.innerHTML = firstBlogContent('contents');

    for (let i = 0; i < blogs.length; i++) {
        containerBlog.innerHTML += `
        <div class="card-2">
        <div>
            <img class="thumbnail" src="${blogs[i].image}" alt="">
        </div>
        <div>
            <a href="blog-detail.html"><h3 class="title">${blogs[i].name}</h3></a>
            <span>durasi : ${blogs[i].month} bulan</span>
            <div class="deskripsi">
            <p>
            ${blogs[i].desc}
            </p>
        </div>
        <div class="icon-card">
            <img src="${blogs[i].logonode}" width="30px" />
            <img src="${blogs[i].logoreact}" width="30px" />
            <img src="${blogs[i].logonext}" width="30px" />
            <img src="${blogs[i].logotype}" width="30px" />
        </div>
            <div class="button-content">
                    <button id="btn-edit">Edit</button>
                    <button id="btn-delete">Delete</button>
            </div>
            
        </div>
    </div>
    `;
    }
}
    function firstBlogContent() {
        return `<div class="card-2">
        <div>
            <img class="thumbnail" src="img/wp6896885.jpg" alt="">
        </div>
        <div>
            <h3 class="title">Dumbways project</h3>
            <p>durasi : 3 bulan</p>
            <div class="deskripsi">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, deleniti molestias? Placeat, ut! Asperiores, fuga similique dolore, praesentium voluptate cumque corporis quia distinctio accusamus neque enim? Nemo atque dolorem labore?
            </p>
        </div>
        <div class="icon-card">
            <img src="img/nextJs.svg" width="30px" />
            <img src="img/nodeJs.svg" width="30px" />
            <img src="img/reactJs.svg" width="30px" />
            <img src="img/typeScript.svg" width="30px" />
        </div>
        <div class="button-content">
            <button id="btn-edit">Edit</button>
            <button id="btn-delete">Delete</button>
        </div>
    </div>
    `;
}