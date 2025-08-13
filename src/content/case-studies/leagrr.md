---
title: Leagrr
shortDesc: A league management application that allows users to create and manage sports leagues and teams.
description: A league management application that allows users to create and manage sports leagues and teams.
order: 2
active: true
featureImg:
  src: /images/leagrr/leagrr-laptop.png
  alt: A laptop showing the division overview page of the Leagrr app
links:
  - label: Live Site
    url: "https://leagrr.app"
    icon: leagrr
  - label: GitHub
    url: "https://github.com/LeagrrApp/leagrr"
    icon: github
roles: ["developer", "designer", "project-manager"]
technologies: ["next-js", "postgresql", "css-modules"]
sections:
  - type: split-content
    title: What is Leagrr?
    img:
      src: /images/leagrr/leagrr-about.png
      alt: Three screens of the Leagrr app.
    content: Leagrr is a sports league management web application that aims to make organizing and participating in sports leagues and teams easier and more user friendly. The target audience is recreational sports leagues, but it provides features that can work for all levels of sports. The app is currently in alpha and focuses on ice hockey. Users can create and manage sports leagues, add new seasons and divisions, create and join teams, and track games and stats.
  - type: info-cards
    title: Key Features
    classes: key-features--leagrr
    cards:
      - heading: Create & Manage Leagues
        img:
          src: /images/leagrr/feature-league.jpg
          alt: Leagrr league page
        content: Create your league, add multiple seasons with multiple divisions. Invite teams, schedule games, and track stats.
      - heading: Create, Manage & Join Teams
        img:
          src: /images/leagrr/feature-team.jpg
          alt: Leagrr team page
        content: Create your team, join different leagues, manage your team membership and set different rosters for each league.
      - heading: In-depth Stat Tracking Game Feed
        img:
          src: /images/leagrr/feature-game-feed.jpg
          alt: Leagrr game feed
        content: Follow the action with the game feed, track stats like shots, goals, penalties and more including stat time and location.
  - type: videos
    title: Demos
    videos:
      - id: "1082252666"
        title: Create, Edit, Add Stats for Games
        description: See how Leagrr manages games within a league and utilizes an in-depth game feed to track stats and automatically update game scores and league standings.
        placeholder: /images/leagrr/demo-title-games.jpg
      - id: "1082250496"
        title: Add Teams to Divisions & Set Rosters
        description: See how to add teams to a division within Leagrr and how to update team rosters within specific divisions.
        placeholder: /images/leagrr/demo-title-divisions.jpg
  - type: info-cards
    title: UX Research & UI Design
    cards:
      - heading: Competitive Analysis
        content: There are a number of other apps that look to solve the same problems. I have used a number of them in my daily life and spent a large amount of time auditing them to figure what was working and what wasn't.
      - heading: User Feedback
        content: I heard from league managers and participants to hear what they felt was working and what wasn't. I built Leagrr's strategy around improving key pain points without sacrificing preferred features.
      - heading: Human Centred Design
        content: Leagrr strives to be approachable and usable by any user with as little training and guidance as possible. It presents key information and actions upfront, allowing users to accomplish they goals with ease.
  - type: call-out
    title: What's different about Leagrr?
    content: A common occurrence in rec sports is that people will play together on the same team across multiple seasons and often multiple leagues at the same time. Most league management apps have teams made specifically as part of an individual league. This means when a team is playing in multiple leagues, multiple disconnected versions of the team are created. In Leagrr, a team is its own separate entity and can be invited to join as many leagues as they want and can set its roster for each league individually from the main pool of team members. Meaning the team acts as a hub that keeps all of its members from across all leagues, as well as all of the team and player stats history, in one place.
  - type: technologies-cards
    title: Tech Stack
    cards:
      - id: "next-js"
        content: Leagrr is built in Next.js and leverages both server-side and client-side rendering to create a seamless interactive experience.
      - id: "postgresql"
        content: Leagrr leverages PostgreSQL's powerful object-relational database system to efficiently use interconnected data.
      - id: "css-modules"
        content: Leagrr's responsive styling is create with CSS Modules using the latest modern CSS features.
---

- What is Leagrr

Leagrr is a sports league management web application that allows league managers to create and manage sports leagues and players to create and join teams to track their games and stats. I was inspired to create Leagrr after using a number of other apps for my own teams and found some of the features lacking and the user experience often confusing. Leagrr's target audience is recreational sports leagues and specifically players who play on the same team through multiple seasons. A common occurrence in rec sports is that people will play together on a team across multiple seasons and often multiple leagues at the same time. Most league management apps have teams made specifically as part of an individual league, meaning to play in multiple leagues, multiple disconnected versions of the team is created. In Leagrr, a team is its own separate entity and can be invited to join as many leagues as they want and can set its roster for each league individually from the main pool of team members. Meaning the team acts as a hub that keeps all of its members from across all leagues, as well as all of their stats history, in one place.

- Tech Stack

- Key Features

  - Create & Manage Leagues
    Create your league, add multiple seasons with multiple divisions. Invite teams, schedule games, and track stats.
  - Create, Manage & Join Teams
    Create your team, join different leagues, manage your team membership and set different rosters for each league.
  - In-depth Game Feed
    Follow the action with the game feed, track stats like shots, goals, penalties and more including stat time and location.

- Features
  - Manage team members
  - Join division
  - Add game
  - Game feed
- Demo video
