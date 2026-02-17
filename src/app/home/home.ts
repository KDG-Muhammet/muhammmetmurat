import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  skills = [
    { name: 'Java', icon: '/Java.svg', desc: 'Backend language' },
    { name: 'Spring Boot', icon: '/Spring.svg', desc: 'Java backend framework' },
    { name: 'React', icon: '/React.svg', desc: 'Frontend library' },
    { name: 'TypeScript', icon: '/TypeScript.svg', desc: 'Typed JavaScript' },
    { name: 'Tailwind CSS', icon: '/Tailwind CSS.svg', desc: 'CSS framework' },
    { name: '.NET Core', icon: '/NET core.svg', desc: 'Web backend framework' },
    { name: 'HTML5', icon: '/HTML5.svg', desc: 'Structure & semantics' },
    { name: 'CSS3', icon: '/CSS3.svg', desc: 'Styling & design' },
  ];

  projects = [
    {
      name: 'Poker Game',
      image: '/poker-welcome-screen.png',
      description:
        ' During my college year I worked with four other developers to create an online Poker game.' +
        'The project took about six weeks and used <strong>Spring Boot</strong> for the backend,' +
        '<strong>React</strong> for the frontend, and <strong>Keycloak</strong> for security.' +
        '<br /><br />' +
        'This experience helped me strengthen my skills in <strong>Java</strong> and ' +
        '<strong>TypeScript</strong>, and taught me how to collaborate effectively: brainstorming' +
        'features, creating issues, and delivering as a team.',
      github: 'https://github.com/KDG-Muhammet/IP2-Frontend-Game',
      tech: [
        { name: 'React', icon: '/React.svg' },
        { name: 'TypeScript', icon: '/TypeScript.svg' },
        { name: 'Spring Boot', icon: '/Spring.svg' },
        { name: 'Java', icon: '/Java.svg' },
        { name: 'keycloak', icon: '/keycloak.svg' },
      ],
    },
    {
      name: 'Portfolio Website',
      image: '/site.png',
      description:
        'My personal portfolio built with Angular and TypeScript to showcase my projects and skills.',
      github: 'https://github.com/yourusername/portfolio',
      tech: [
        { name: 'Angular', icon: '/Angular.svg' },
        { name: 'TypeScript', icon: '/TypeScript.svg' },
      ],
    },
    {
      name: 'VR Marker App',
      image: '/Card1.png',
      description:
        'Together with my team I developed an interactive <strong>VR application</strong> that lets ' +
        'prospective students experience the <strong>Applied Informatics</strong> program at ' +
        ' <strong>KdG University</strong>. <br /><br />' +
        ' Users explore a series of linked <strong>360° scenes</strong>—from project labs and Cisco' +
        ' networking lessons to campus life in the cafeteria—while freely looking around in a VR' +
        ' headset. Interactive <strong>markers</strong> reveal extra information or allow navigation' +
        ' to other scenes. Audio, scene descriptions, and optional' +
        ' <strong>gamification</strong> elements (like quizzes) enhance the experience. <br /><br />' +
        ' A custom <strong>admin interface</strong> makes the platform fully configurable: staff can' +
        '  upload new 360° assets, define markers, link scenes, add audio, and set loop points without' +
        ' any code changes. <br /><br />' +
        '  This project sharpened my skills in <strong>Unity</strong>,' +
        '  <strong>360° media integration</strong>, and building user-friendly configuration tools,' +
        '   while providing valuable experience in collaborating with a real client and working with' +
        ' cutting-edge VR technology.',
      github: 'https://github.com/KDG-Muhammet/VR-Application-Shift-Happens',
      tech: [
        { name: 'Unity', icon: '/Unity.svg' },
        { name: 'Blender', icon: '/Blender.svg' },
        { name: 'C#', icon: '/CSharp.svg' },
        { name: 'React', icon: '/React.svg' },
        { name: 'TypeScript', icon: '/TypeScript.svg' },
        { name: 'Tailwind CSS', icon: '/Tailwind CSS.svg' },
        { name: 'Babylonjs ', icon: '/Babylonjs.svg' },
        { name: 'supabase ', icon: '/supabase-logo-icon.svg' },
      ],
    },
  ];

  selectedProject: any = null;

  openProject(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
