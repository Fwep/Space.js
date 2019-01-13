# Space.js
## Background and Overview
 ${SpaceProject} is an interactive experience that allows users to travel across the solar system and view planets. Users can click on a button that allows them to select a particular planet or celestial object, and the application will perform a flyby and traverse to that planet, displaying its relevant information in a side modal.
## Functionality and MVP Features
In Space.js, users will be able to
 - Fly around the solar system and view other planets
 - Go directly to a planet and be able to have a Lazy Susan view of the planet along with a modal box of its various statistics
 - Start, pause, reset and restart the simulation
 - Mute and unmute the music
 
 ## Wireframes
 -------------------
 
## Architecture and Technologies
- Vanilla JavaScript for app logic
- HTML5 Canvas for starfield background
- Web Audio API for sound generation, processing, and control
- Three.js for rendering of planet shapes and celestial objects
- Webpack to compile and bundle assets

## Implementation Timeline
Day 1
---------------
[X ] Setup development environment on Windows Machine (my vintage Macbook dev machine's graphics card does not support WebGL): Linux, Node, Git, VSCode, Terminal, NPM, aliases

Day 2
---------------
[ ] Setup file tree skeleton and get webpack to run
<br>[ ] Render start page
<br>[ ] Generate starfield using three.js or Canvas
<br>[ ] Get planets and stars to show, be able to render "show" pages of each planet

Day 3
------
[ ] Implement flying/traversal
<br>[ ] Add music 
