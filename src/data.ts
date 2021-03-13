export const getMe = () => ({
  name: "Filip Bontin",
  description:
    "Dedicated software engineer with a passion for programming, sustainability and learning new things. When I'm not in front of the computer, I hang out with friends, enjoy nature or paint with watercolors.",
  github: "https://github.com/fbontin/",
  linkedin: "https://linkedin.com/in/fbontin",
});

export const getExperiences = () => [
  {
    title: "Jayway",
    text:
      "Currently working as a full stack developer at Jayway. Have been working with React, TypeScript and AWS to name a few. I'm also competence lead for part of the Malmö office.",
    startDate: "Apr 2018",
    endDate: "Current",
  },
  {
    title: "Valtech",
    text:
      "Fullstack developer using React, .NET and other at Valtech's Malmö office.",
    startDate: "Feb 2017",
    endDate: "Mar 2018",
  },
  {
    title: "Master thesis",
    text:
      'Developed a prototype for participatory urban planning using Unity and a 75" touch screen.',
    startDate: "May 2017",
    endDate: "Oct 2017",
  },
  {
    title: "Emmaboda Festival",
    text:
      "One part of a two-man team that developed the festival's first iPhone app using Swift.",
    startDate: "Nov 2016",
    endDate: "May 2017",
  },
];

export const getSustainability = () => [
  `Sustainability is a big part of my life, so I've also incorporated it into this website.`,
  `One important part when building sustainable web sites is keeping the size of the page down. This site is built using Svelte, making it quite compact. The image above is also made as small as possible, by using dithering.`,
];
