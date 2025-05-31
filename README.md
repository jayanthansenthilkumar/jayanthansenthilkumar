<div align="center">
  <div style="background: linear-gradient(45deg, #120424, #20033a, #3b0764, #120424); border-radius: 10px; padding: 20px; position: relative; overflow: hidden; margin-bottom: 20px;">
    <style>
      @keyframes stars {
        0% { opacity: 0.1; }
        50% { opacity: 1; }
        100% { opacity: 0.1; }
      }
      
      @keyframes nebula {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.1); }
        100% { transform: rotate(360deg) scale(1); }
      }
      
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      
      @keyframes blink {
        from, to { border-color: transparent }
        50% { border-color: #9D71FF; }
      }
      
      .star {
        position: absolute;
        background: white;
        border-radius: 50%;
        animation: stars 3s infinite ease-in-out;
      }
      
      .nebula {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(157, 113, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
        border-radius: 50%;
        animation: nebula 15s infinite linear;
        pointer-events: none;
      }
      
      .typing-text {
        font-family: 'Courier New', monospace;
        border-right: .15em solid #9D71FF;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: 
          typing 3.5s steps(30, end),
          blink .5s step-end infinite alternate;
        overflow: hidden;
      }
      
      .cosmic-badge {
        background: linear-gradient(45deg, #9D71FF, #738CFF);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-weight: bold;
        position: relative;
        overflow: hidden;
        display: inline-block;
        margin-top: 15px;
      }
      
      .cosmic-badge::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          transparent, 
          rgba(255, 255, 255, 0.3), 
          transparent
        );
        transform: rotate(30deg);
        animation: shine 3s infinite linear;
      }
      
      @keyframes shine {
        from { transform: translateX(-100%) rotate(30deg); }
        to { transform: translateX(100%) rotate(30deg); }
      }
    </style>
    
    <!-- Stars creation with pure CSS -->
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.cosmic-container');
        for (let i = 0; i < 100; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.style.width = `${Math.random() * 3}px`;
          star.style.height = star.style.width;
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 5}s`;
          container.appendChild(star);
        }
        
        for (let i = 0; i < 5; i++) {
          const nebula = document.createElement('div');
          nebula.className = 'nebula';
          nebula.style.width = `${Math.random() * 200 + 100}px`;
          nebula.style.height = nebula.style.width;
          nebula.style.top = `${Math.random() * 80}%`;
          nebula.style.left = `${Math.random() * 80}%`;
          nebula.style.animationDelay = `${Math.random() * 5}s`;
          container.appendChild(nebula);
        }
      });
    </script>
    
    <div class="cosmic-container" style="min-height: 250px; position: relative;">
      <h1 style="font-size: 3em; color: #FFFFFF; text-shadow: 0 0 10px #9D71FF, 0 0 20px #9D71FF; margin: 0; padding-top: 30px; font-family: 'Orbitron', sans-serif;">JAYANTHAN SENTHILKUMAR</h1>
      
      <div style="margin: 20px 0;">
        <div class="typing-text" style="color: #FFFFFF; font-size: 1.5em;">
          Fullstack Developer | AI & ML Engineer
        </div>
      </div>
      
      <div class="cosmic-badge">
        COSMIC VISITOR #<span id="visitor-count">1337</span>
      </div>
    </div>
  </div>
</div>

<div style="text-align: center; margin: 30px 0; color: #9D71FF; overflow: hidden; position: relative;">
  <div style="display: flex; overflow: hidden;">
    <div style="white-space: nowrap; animation: marquee 20s linear infinite;">
      ✧･ﾟ: *✧･ﾟ:* COSMIC EXPLORER *:･ﾟ✧*:･ﾟ✧ ✧･ﾟ: *✧･ﾟ:* COSMIC EXPLORER *:･ﾟ✧*:･ﾟ✧ ✧･ﾟ: *✧･ﾟ:* COSMIC EXPLORER *:･ﾟ✧*:･ﾟ✧
    </div>
    <div style="white-space: nowrap; animation: marquee2 20s linear infinite;">
      ✧･ﾟ: *✧･ﾟ:* COSMIC EXPLORER *:･ﾟ✧*:･ﾟ✧ ✧･ﾟ: *✧･ﾟ:* COSMIC EXPLORER *:･ﾟ✧*:･ﾟ✧ ✧･ﾟ: *✧･ﾟ:* COSMIC EXPLORER *:･ﾟ✧*:･ﾟ✧
    </div>
  </div>
</div>

<style>
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  @keyframes marquee2 {
    0% { transform: translateX(100%); }
    100% { transform: translateX(0); }
  }
</style>

## 💫 About Me

<div align="center" style="background: linear-gradient(to right, #120424, #20033a); padding: 20px; border-radius: 15px; box-shadow: 0 0 15px #9D71FF;">

| 🌌 Full Stack Development | 🌠 AI Engineering |
|:------------------------:|:-----------------:|
| 💻 **PHP & MERN Stack Developer** | 🎓 **B.Tech in AI & ML** |
| 🔧 **Scalable Web Applications** | 🧠 **Deep Learning with TensorFlow** |
| ⚡ **PHP** & **Node.js** Intermediate Level | 📊 **Data Engineering** & Analysis |
| 📱 **Responsive UI** Design | 🔍 **ML Model Development** |
| 🛢️ **MongoDB**, **MySQL**, **Supabase** | 🚀 **AI Solution Architecture** |

</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/gist/Vedant-cll/86aeaf559b4720af094151f60437e860/raw/9c6c4aa1afd23656b4e23f994afa671270d0ce4b/stars.svg" width="100%">
</div>

## 🛠️ Tech Stack

<div align="center" style="background: linear-gradient(to right, #120424, #20033a); padding: 20px; border-radius: 15px; margin: 15px 0; box-shadow: 0 0 15px #9D71FF;">
  <img src="https://skillicons.dev/icons?i=html,css,javascript,php,python,tensorflow,flask,react,mongodb,mysql,docker&theme=dark" />
</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/gist/Vedant-cll/86aeaf559b4720af094151f60437e860/raw/9c6c4aa1afd23656b4e23f994afa671270d0ce4b/galaxy.svg" width="100%">
</div>

## 📊 GitHub Stats

<div align="center">
  <img height="150" src="https://github-readme-stats.vercel.app/api?username=jayanthansenthilkumar&show_icons=true&bg_color=0D1117&title_color=9D71FF&text_color=FFFFFF&icon_color=9D71FF&border_color=9D71FF&ring_color=9D71FF&include_all_commits=true&count_private=true" />
  <img height="150" src="https://github-readme-streak-stats.herokuapp.com?user=jayanthansenthilkumar&background=0D1117&border=9D71FF&stroke=9D71FF&ring=9D71FF&fire=738CFF&currStreakNum=FFFFFF&currStreakLabel=9D71FF&dates=738CFF" />
</div>

<div align="center">
  <img height="150" width="95%" src="https://github-profile-trophy.vercel.app/?username=jayanthansenthilkumar&theme=discord&column=8&margin-w=5&margin-h=5&no-bg=false&no-frame=true&rank=SECRET,SSS,SS,S,AAA,AA,A,B,C" />
</div>

<div align="center">
  <img height="280" width="95%" src="https://github-readme-activity-graph.vercel.app/graph?username=jayanthansenthilkumar&custom_title=Cosmic%20Contribution%20Galaxy&bg_color=0D1117&color=9D71FF&line=738CFF&point=9D71FF&area=true&area_color=9D71FF&hide_border=false&border_color=9D71FF" />
</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/gist/Vedant-cll/86aeaf559b4720af094151f60437e860/raw/9c6c4aa1afd23656b4e23f994afa671270d0ce4b/constellation.svg" width="100%">
</div>

<div align="center">
<table width="100%" style="background: linear-gradient(to right, #120424, #20033a); border-radius: 15px; box-shadow: 0 0 15px #9D71FF; overflow: hidden;">
  <tr>
    <td width="50%" valign="top" style="padding: 20px; border: none;">
      <h2>📚 Currently Exploring</h2>
      <ul style="list-style: none; padding: 0;">
        <li>🔧 <b>DevOps</b> & Cloud Architecture</li>
        <li>🤖 <b>LLMs</b> & Transformers</li>
        <li>🎯 <b>System Design</b> & Scalability</li>
        <li>📊 <b>Data Engineering</b> Pipeline</li>
      </ul>
    </td>
    <td width="50%" align="center" valign="top" style="padding: 20px; border: none;">
      <h2>🌌 Connect Across the Cosmos</h2>
      <div style="margin: 20px 0;">
        <a href="https://www.linkedin.com/in/jayanthan18" target="_blank">
          <img src="https://img.icons8.com/nolan/64/linkedin.png" width="45" height="45" />
        </a>
        &nbsp;&nbsp;
        <a href="mailto:jayanthansenthilkumar18@gmail.com">
          <img src="https://img.icons8.com/nolan/64/gmail.png" width="45" height="45" />
        </a>
        &nbsp;&nbsp;
        <a href="https://ceo.prisoltech.com" target="_blank">
          <img src="https://img.icons8.com/nolan/64/domain.png" width="45" height="45" />
        </a>
        &nbsp;&nbsp;
        <a href="https://instagram.com/jayanthansenthilkumar" target="_blank">
          <img src="https://img.icons8.com/nolan/64/instagram-new.png" width="45" height="45" />
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=14,18,20,24,30&height=100&section=footer"/>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Thanks%20for%20exploring%20my%20cosmic%20profile-Star%20if%20you%20enjoyed%20the%20journey-blueviolet.svg?style=for-the-badge" alt="Thanks for visiting!" />
</p>