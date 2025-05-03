---
layout: ../../layouts/CaseStudyLayout/CaseStudyLayout.astro
title: Responsive Type
shortDesc: An app that generates responsive typography styles and CSS code for the web.
description: An app that generates responsive typography styles and CSS code for the web.
order: 2
active: true
featureImg:
  src: /images/responsive-type/responsive-type-laptop.png
  alt: "A laptop showing the home page of RaceRocks3D"
links:
  - label: Live Site
    url: "https://responsivetype.ca"
    icon: responsive-type
  - label: GitHub
    url: "https://github.com/LeagrrApp/leagrr"
    icon: github
roles: ["developer", "designer"]
technologies: ["react", "next-js"]
sections:
  - type: split-content
    title: What is Responsive Type?
    content: Responsive Type is an app that generates responsive type hierarchies for websites, simplifying the process of creating consistent type sizing across the entire website. Users can customize their hierarchy by choosing between fluid viewport/container size based font sizing or to set font sizes based on media query breakpoints and can set different scales to best suit their needs. The app also generates CSS code the users can copy to easily add the styles into their projects either by copying the entire CSS code block, or by copying a specific size from the preview.
    img:
      src: /images/responsive-type/responsive-type-about.png
      alt: Key features of the Responsive Type app
  - type: info-cards
    title: Key Features
    classes: key-features
    cards:
      - heading: Configure Settings
        img:
          src: /images/responsive-type/features-settings.png
          alt: Responsive Type settings options
        content: Change the type scale at different screen sizes either through fluid viewport or container sizings or with specific media breakpoints.
      - heading: Preview Type Scales
        img:
          src: /images/responsive-type/features-preview.png
          alt: Responsive Type type scaling preview
        content: Preview how your type scales will look, add more steps in your hierarchy, and copy CSS code for individual hierarchy steps.
      - heading: Copy Output Code
        img:
          src: /images/responsive-type/features-code.png
          alt: Responsive Type code output and copy functionality
        content: Review and copy generated CSS code that is ready to use in your project.
  - type: technologies-cards
    title: Tech Stack
    cards:
      - id: "next-js"
        content: Responsive Type is built in Next.js and leverages the client-side features to create a fast, seamless interactive experience.
      - id: "css-modules"
        content: Responsive Type uses CSS Modules for its based styling and also uses the CSS code it generates in the previews to ensure consistency for users.
---
