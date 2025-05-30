<!-- move style to top of file -->
<style>
  .profile-avatar { border-radius:50%; border:5px solid #36BCF7; animation:pulse 2s infinite; }
  @keyframes pulse {
    0%{box-shadow:0 0 0 0 rgba(54,188,247,0.7);}
    70%{box-shadow:0 0 0 20px rgba(54,188,247,0);}
    100%{box-shadow:0 0 0 0 rgba(54,188,247,0);}
  }
  .social-icons img { margin:0 10px; transition:transform 0.3s; }
  .social-icons img:hover { transform:scale(1.2); }
  .card {
    background: linear-gradient(145deg, #f8f9fa, #e9ecef);
    border-left: 4px solid #36BCF7;
    border-radius: 8px;
    padding: 25px;
    margin: 30px 0;
    box-shadow: 0 6px 12px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(54,188,247,0.15);
  }
  
  .section-title {
    font-size: 1.7rem;
    background: linear-gradient(90deg, #006AFF, #36BCF7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    margin-bottom: 20px;
  }
  
  /* Animated skill bars */
  .skill-bar {
    height: 10px;
    background: #e9ecef;
    border-radius: 5px;
    margin-bottom: 15px;
    position: relative;
    width: 100%;
    max-width: 500px;
    display: inline-block;
  }
  
  .skill-bar .skill-level {
    height: 100%;
    border-radius: 5px;
    background: linear-gradient(90deg, #006AFF, #36BCF7);
    position: relative;
    animation: fillBar 1.5s ease-in-out forwards;
    transform-origin: left;
    transform: scaleX(0);
  }
  
  @keyframes fillBar {
    to { transform: scaleX(1); }
  }
  
  .skill-name {
    position: absolute;
    left: 15px;
    top: -20px;
    font-weight: bold;
    color: #333;
  }
  
  .skill-percent {
    position: absolute;
    right: 15px;
    top: -20px;
    font-weight: bold;
    color: #006AFF;
  }
  
  /* Modern flag badges */
  .language-badge {
    display: inline-flex;
    align-items: center;
    background: #f8f9fa;
    padding: 5px 15px;
    border-radius: 50px;
    margin: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    transition: all 0.2s;
    font-weight: bold;
  }
  
  .language-badge:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 10px rgba(54,188,247,0.2);
  }
  
  .language-badge img {
    margin-right: 10px;
  }
</style>

<div align="center">

  <!-- animated avatar -->
  <img class="profile-avatar" src="https://readme-typing-svg.herokuapp.com?font=Montserrat&weight=600&size=35&pause=500&color=36BCF7FF&center=true&vCenter=true&random=false&width=500&height=70&lines=Hey+There!+%F0%9F%91%8B;I'm+Jayanthan+Senthilkumar;Fullstack+Developer;AI+%26+ML+Engineer" alt="Typing SVG" />

  <!-- gradient WELCOME badge -->
  <p>
    <img src="https://img.shields.io/badge/👋-WELCOME-ff69b4?style=for-the-badge&logo=github" alt="WELCOME"/>
  </p>

  <!-- profile views badge -->
  [![](https://komarev.com/ghpvc/?username=jayanthansenthilkumar&color=36BCF7&style=for-the-badge&label=Profile+Views)](https://github.com/jayanthansenthilkumar)
</div>

<!-- wrap About Me -->
<div class="card">
  <h2 class="section-title">💫 About Me</h2>
  <div align="center">

  | 🌐 Full Stack Development | 🤖 AI Engineering |
  |:------------------------:|:-----------------:|
  | 💻 **PHP & MERN Stack Developer** | 🎓 **B.Tech in AI & ML** |
  | 🔧 **Scalable Web Applications** | 🧠 **Deep Learning with TensorFlow** |
  | ⚡ **PHP** & **Node.js** Intermediate Level | 📊 **Data Engineering** & Analysis |
  | 📱 **Responsive UI** Design | 🔍 **ML Model Development** |
  | 🛢️ **MongoDB**, **MySQL**, **Supabase** | 🚀 **AI Solution Architecture** |

  </div>
</div>

<!-- wrap Tech Stack -->
<div class="card">
  <h2 class="section-title">🛠️ Tech Stack</h2>
  <div class="flex-container">
    <div class="flex-item">
      <img src="https://skillicons.dev/icons?i=html,css,javascript,php,python,tensorflow,flask,react,mongodb,mysql,docker&theme=light" />
    </div>
  </div>
</div>

<!-- wrap GitHub Stats -->
<div class="card">
  <h2 class="section-title">📊 GitHub Stats</h2>
  <div class="flex-container">
    <div class="flex-item">
      <img height="150" src="https://github-readme-stats.vercel.app/api?username=jayanthansenthilkumar&show_icons=true&bg_color=ffffff&title_color=006AFF&text_color=000000&icon_color=36BCF7&border_color=36BCF7&ring_color=36BCF7&include_all_commits=true&count_private=true" />
    </div>
    <div class="flex-item">
      <img height="150" src="https://github-readme-streak-stats.herokuapp.com?user=jayanthansenthilkumar&background=ffffff&border=36BCF7&stroke=36BCF7&ring=36BCF7&fire=FF6B00&currStreakNum=000000&currStreakLabel=006AFF&dates=666666" />
    </div>
  </div>
</div>

<!-- wrap Contribution Graph & Trophy -->
<div class="card">
  <h2 class="section-title">🏆 Achievements & Activity</h2>
  <div class="flex-container">
    <div class="flex-item">
      <img width="95%" src="https://github-profile-trophy.vercel.app/?username=jayanthansenthilkumar&theme=flat&column=8&margin-w=5&margin-h=5&no-bg=true&no-frame=false&rank=SECRET,SSS,SS,S,AAA,AA,A,B,C" />
    </div>
    <div class="flex-item">
      <img width="95%" src="https://github-readme-activity-graph.vercel.app/graph?username=jayanthansenthilkumar&custom_title=Contribution%20Graph&bg_color=ffffff&color=000000&line=36BCF7&point=006AFF&area=true&area_color=36BCF7&hide_border=false&border_color=36BCF7" />
    </div>
  </div>
</div>

<!-- wrap Currently Learning & Connect -->
<div class="card">
  <div class="flex-container">
    <div class="flex-item">
      <h2 class="section-title">📚 Currently Learning</h2>
      <ul style="list-style: none; padding: 0;">
        <li>🔧 <b>DevOps</b> & Cloud Architecture</li>
        <li>🤖 <b>LLMs</b> & Transformers</li>
        <li>🎯 <b>System Design</b> & Scalability</li>
        <li>📊 <b>Data Engineering</b> Pipeline</li>
      </ul>
    </div>
    <div class="flex-item">
      <h2 class="section-title">🤝 Connect With Me</h2>
      <div style="margin: 20px 0;" class="social-icons">
        <a href="https://www.linkedin.com/in/jayanthan18" target="_blank">
          <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" width="45" height="45" />
        </a>
        &nbsp;&nbsp;
        <a href="mailto:jayanthansenthilkumar18@gmail.com">
          <img src="https://img.icons8.com/fluent/48/000000/gmail.png" width="45" height="45" />
        </a>
        &nbsp;&nbsp;
        <a href="https://ceo.prisoltech.com" target="_blank">
          <img src="https://img.icons8.com/fluent/48/000000/domain.png" width="45" height="45" />
        </a>
        &nbsp;&nbsp;
        <a href="https://instagram.com/jayanthansenthilkumar" target="_blank">
          <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" width="45" height="45" />
        </a>
      </div>
    </div>
  </div>
</div>

<!-- wrap Fun Facts -->
<div class="card">
  <h2 class="section-title">✨ Fun Facts</h2>
  <details>
    <summary>Click to expand</summary>
    - 🚀 Wrote over 10k lines of code in 2023  
    - ☕︎ Drank 250+ cups of coffee  
    - 🐶 Own a Golden Retriever named Charlie  
  </details>
</div>

<!-- Skills Section with animated bars -->
<div class="card">
  <h2 class="section-title">🔧 Skills</h2>
  <div align="center">
    <div class="skill-bar">
      <span class="skill-name">HTML</span>
      <span class="skill-percent">95%</span>
      <div class="skill-level" style="width: 95%"></div>
    </div>
    
    <div class="skill-bar">
      <span class="skill-name">CSS</span>
      <span class="skill-percent">90%</span>
      <div class="skill-level" style="width: 90%"></div>
    </div>
    
    <div class="skill-bar">
      <span class="skill-name">JavaScript</span>
      <span class="skill-percent">85%</span>
      <div class="skill-level" style="width: 85%"></div>
    </div>
    
    <div class="skill-bar">
      <span class="skill-name">PHP</span>
      <span class="skill-percent">80%</span>
      <div class="skill-level" style="width: 80%"></div>
    </div>
    
    <div class="skill-bar">
      <span class="skill-name">React</span>
      <span class="skill-percent">75%</span>
      <div class="skill-level" style="width: 75%"></div>
    </div>
    
    <div class="skill-bar">
      <span class="skill-name">Python</span>
      <span class="skill-percent">70%</span>
      <div class="skill-level" style="width: 70%"></div>
    </div>
  </div>
</div>

<!-- Languages with modern badges -->
<div class="card">
  <h2 class="section-title">🗣️ Languages</h2>
  <div align="center">
    <span class="language-badge">
      <img src="https://github.com/madebybowtie/flagpack/raw/main/flags/us.svg" width="20" />
      English (Native)
    </span>
    <span class="language-badge">
      <img src="https://github.com/madebybowtie/flagpack/raw/main/flags/in.svg" width="20" />
      Hindi (Fluent)
    </span>
    <span class="language-badge">
      <img src="https://github.com/madebybowtie/flagpack/raw/main/flags/es.svg" width="20" />
      Spanish (Basic)
    </span>
  </div>

  <div align="center">
    <!-- footer capsule and badge in one centered block -->
    <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" alt="footer capsule" />
    <br/>
    <img src="https://img.shields.io/badge/Thanks%20for%20visiting-Star%20if%20useful-brightgreen.svg" alt="Thanks for visiting!" />
  </div>
</div>