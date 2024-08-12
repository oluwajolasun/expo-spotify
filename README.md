# Spotify: UI Clone with React Native / Expo

web demo: [Expo Spotify](https://spotify-expo-oluwajolasun.netlify.app)

## Install & Build

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

**Install:**

```bash
yarn
```

**Run Project Locally:**

```bash
yarn dev
```



**Dev with Expo Web**

- Remove node_modules if they exist: `rm -rf nodes_modules`
- Install/Re-install: `yarn`
- Start development: `yarn web` or `expo start --web`
- Build PWA: `yarn web-build` or `expo build:web`

a couple manual changes within `index.html` i found needed to be made so far:

- **to make splash screen work:** "mobile-web-app-capable" => "apple-mobile-web-app-capable"
- **status bar transparent:** apple-mobile-web-app-status-bar-style="default" => "black-translucent"
- **no white background:** add background color within body{background-color: #121212; ...}
- **check output meta:** double image meta tags
- **check output js:** double/triple js packages



## Task Completed

Pretty much all the tasks were completed except from viewing liked songs in library and creating a playlist, which can be implemented with more time understanding the code base and the current states of liked songs.

I have worked with the spotify api, for a personal spotify project which can be viewed on my portfolio, but I need to update the api keys and access token on the backend. As someone who uses
spotify frequently I have a good understanding of how its interface works and also using dev tools to understand some of the positioning.

The application would have the same same layout for desktop and most tablets, but when viewed on a web client even using the dev tools for a mobile view, it with still render the mobile version even on web based on the screen width, this was the best way I approached having a responsive design, navigation was done rendering different screen stacks to a view component based on navigation done on the side bar to those screen. Overall this was a fun assessment and would definitely visit this even after the submission 