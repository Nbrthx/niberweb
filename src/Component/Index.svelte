<script>
    import "./style.css"
    import { onMount } from "svelte"
    
    var count = 0
    
    onMount(() => {
        fetch("api/getcount")
        .then(res => res.json())
        .then(data => {
            count = data.count
        })
        fetch("api/addcount")
    })
</script>

  <div class="header">
        <span class="head-text">Niberthix</span>
      </div>
      <div class="content">
        <div class="box-head">
          <img class="cent" id="pp" src="https://thumbs2.imgbox.com/70/67/TmP11ARk_t.png" loading="eager">
          <h1 class="c3f9 cent">Hello World</h1>
          <p class="cent">
            This is IT portofolio of<br>
          Ektada.
          <p>
        </div>
        <hr>
        <div class="box">
          <h2>Hi!</h2>
          My name is Ektada, and Niberthix is my username on the internet. I'm Programmer and Designer from Indonesia. I started learning Programmer and Designer from 12 years old or 2019. I'm an expert on javascript language and node js runtime and svelte framework.
        </div>
        <div class="box">
          <h2>My Experience</h2>
          <div class="card">
            <iframe
src="https://youtube.com/embed/NA4XvV3uTY4">
</iframe>
            <h3>Create a Game</h3>
            <p>I try to make 2D game with godot engine. Full assets of that used on video created by myself.</p>
          </div>
          <div class="card">
            <iframe
src="https://youtube.com/embed/_J7HDoxADis">
</iframe>
            <h3>Speedrun Create a Game</h3>
            <p>I challenge myself to make 2D platformer game with godot engine in 10 minutes. Full assets of that used on video created by myself too.</p>
          </div>
          <div class="card">
            <img class="imgc" src="https://images2.imgbox.com/f5/24/x8V2SROZ_o.jpg" load="lazy">
            <h3>Create Simple Chat App</h3>
            <p>Chat app that created with socket io. I dont have documentation of it(screenshot is old design). But i have the code of it.</p>
            <a href="https://github.com/Nbrthx/dapp-chat"><button class="btn">Github Chatapp</button></a>
          </div>
          <div class="card">
            <img class="imgc" src="https://images2.imgbox.com/c5/24/h5Z2Ghe2_o.png" load="lazy">
            <h3>Create a Minecraft Server and Plugin</h3>
            <p>Minecraft server with theme of MMORPG. I compile plugin myself on Eclipse and then I named it "Raveling". This is where I start learning programming Java</p>
            <a href="https://www.spigotmc.org/resources/raveling-mmorpg-plugin.94929/"><button class="btn">Spigot Raveling</button></a>
          </div>
          <div class="card">
            <img class="imgc" src="https://images2.imgbox.com/6f/e8/IFZJF7Ti_o.png" load="lazy">
            <h3>Create a Little Bot Discord</h3>
            <p>Bot discord that can auto reply a messeges. Available rules agrements with emotes and connect to my minecraft plugin, so i can do a comment from discord. But i dont have code of it.</p>
          </div>
          <div class="card">
            <img class="imgc" src="https://images2.imgbox.com/0b/e0/ZjDPf02M_o.png" load="lazy">
            <h3>Create Database Admin for PostgreSQL</h3>
            <p>I just want to manage my postgre database quickly on web. Because nothing or i can't found web app like that, so i made it myself. But, this UI is still look bad.</p>
            <a href="https://github.com/Nbrthx/pogemin"><button class="btn">Github Pogemin</button></a>
          </div>
        </div>
        <div class="box">
          <h2>I Can Do</h2>
          <div class="box-list">
            <h3>Make web design</h3>
          </div>
          <div class="box-list">
            <h3>Make web system or backend</h3>
          </div>
          <div class="box-list">
            <h3>Make a little game</h3>
          </div>
          <div class="box-list">
            <h3>Manage SQL database</h3>
          </div>
          <div class="box-list">
            <h3>Make simple illustrations or icon</h3>
          </div>
        </div>
        <div class="box">
          <h2>Closing</h2>
          <img class="imgo" src="https://thumbs2.imgbox.com/e8/7b/CCd1rJHs_t.jpg" load="lazy">
          <p>
            I'm so sad because I have to end all project and my inspiration. I should go to boarding school and i can't play with my PC again. I hope I have laptop in my boarding school to continue my project or start new project. but I am limited by my finances.
          </p><br/>
          <p>So, if you want donate me, you can contact <a href="https://wa.me/62895377298126">My Brother</a> or <a href="https://wa.me/6287739786776">My Father</a> to do it. Or if you want to be my friend, dm <a href="https://instagram.com/nbrthx">Me On Instagram</a>.</p><br/>
          <b>Thanks For Visiting</b>
          
        </div>
        <br />
        <i style="opacity: 0.3">Created on Android</i>
        <br />
      </div>
      <div class="end">
        <h2 class="c3f9">Contact</h2>
        Youtube: <a href="https://youtube.com/@nbrthx">Niberthix</a><br>
        Github: <a href="https://github.com/Nbrthx">Nbrthx</a>
        <br>
        visitor: <b>{count}</b>
        <div id="ctext">© No Copyright</div>
      </div>