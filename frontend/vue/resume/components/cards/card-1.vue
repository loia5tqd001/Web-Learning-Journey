<template>
  <div class="container">
    <div class="card">
      <img src="https://i.pravatar.cc/300">
      <div class="info">
        <h3 class="name">{{ name }}</h3>
        <div class="divider"></div>
        <span class="title">{{ title }}</span>
        <ul class="socials">        
          <li title="Facebook"><a target="_blank" href="https://www.facebook.com/loia5tqd001"><i class="fab fa-facebook"></i></a></li>
          <li title="Linkedin"><a target="_blank" href="https://www.linkedin.com/in/loia5tqd001"><i class="fab fa-linkedin"></i></a></li>
          <li title="Youtube"><a target="_blank" href="https://www.youtube.com/channel/UCon9VN0fA7ezNQLc-mheUvA"><i class="fab fa-youtube"></i></a></li>
          <li title="Github"><a target="_blank" href="https://www.github.com/loia5tqd001"><i class="fab fa-github"></i></a></li>
          <li title="Stackoverflow"><a target="_blank" href="https://www.stackoverflow.com/users/9787887"><i class="fab fa-stack-overflow"></i></a></li>
        </ul>
      </div>
    </div>
    <div class="about">
      <h1>Hello!</h1><br>
      <p>I'm Nguyen Huynh Loi, currently a junior student at <link-1 href="https://en.uit.edu.vn/">the University of Information Technology</link-1>. I'm learning VueJS and looking for opportunities to do the jobs require (or prefer) that technology. </p>
    </div>
  </div>
</template>

<script>
// import Link1 from '../misc/link-1'

module.exports = {
  components: {
    'link-1': httpVueLoader('../misc/link-1.vue'),
  },
  data() {
    return {
      name: 'Nguyen Huynh Loi',
      title: 'Frontend Developer'
    }
  }
  // computed: {
  //   faIcons() {
  //     return [ 'twitter', 'linkedin', 'facebook', 'google-plus', 'pinterest-p' ]
  //   },
  //   socialIcons() {
  //     this.faIcons.map(social => `fab fa-${social}`)
  //   }
  // }
}
</script>

<style scoped>
  * {
    --hover-color: #f43772;
    --compliment-hover-color: #37cfd7;
    --background-color: #333;
    --width: 25rem;
    --avatar-size: 15rem;
  }
  .container {
    background-color: var(--background-color);
    display: flex;
    color: white;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--width);
    padding: 40px 15px 10px;
    border: 4px solid #fff;
  }
  .card img {
    border: 10px solid #f8f8f8;
    border-radius: 50%;
    width: var(--avatar-size);
    height: var(--avatar-size);
  }
  .info .name {
    margin: 38px 0 18px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .divider {
    width: 100px;
    border-bottom: 3px solid var(--compliment-hover-color);
    display: block;
    margin: 0 auto 20px;
  }
  .divider::after {
    content: '';
    width: 34%;
    display: block;
    position: relative;
    top: 3px;
    border-bottom: 3px solid var(--hover-color);
    margin: auto;
  }
  .title {
    font-size: 14px;
    text-transform: uppercase;
  }
  ul.socials {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    visibility: hidden;
    position: relative;
  }
  ul.socials li i {
    color: white;
    font-size: 16px;
  }

  .card {
    transition: background-color .3s ease;
  }
  .card:hover { 
    background-color: var(--hover-color);
  }

  .card img,
  .card .info .name,
  .card .divider {
    transition: transform .3s ease;
  }
  .card:hover img,
  .card:hover .info .name,
  .card:hover .divider {
    transform: translate(0, -2px);
  }

  .divider {
    transition: border-color .3s ease;
  }
  .card:hover .divider {
    border-color: var(--hover-color);
  }
  .card:hover .divider::after {
    border-color: white;
  }

  .title {
    position: relative;
    transition: top .3s ease;
    visibility: visible;
    top: 0;
  }
  .card:hover .title {
    top: -20px;
    visibility: hidden;
  }
  
  .socials {
    top: -20px;
    transition: top .3s ease;
    margin-right: 5px;
  }
  .card:hover .socials {
    visibility: visible;
    top: -40px;
  }

  .about {
    padding: 2em;
  }
  .about {
    border-left: 5px solid #fff;
  }

</style>
