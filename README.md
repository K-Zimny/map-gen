# map-gen

# Grid Generation Program (Map Generator) - README

## Overview

This project is a **Grid Generation Program** designed to generate maps by utilizing a grid border generation algorithm. The algorithm creates borders between unique cells, such as land and water, to form distinct geographical features. The generated maps can vary in complexity, offering the user the ability to control the type of map produced, whether it's large continents or scattered archipelagos.

## Features

- **Map Size Selection:** The user can choose the desired size of the map, allowing for flexibility in the scale of the generated map.

- **Complexity Setting:** This feature lets the user define the map's complexity:

  - **Lower values** generate large landmass continents, providing a more cohesive and expansive terrain.
  - **Higher values** produce more fragmented, archipelago-style maps with smaller islands and varied terrain.

- **Remove Isolated Option:**
  - When enabled, this feature identifies isolated cells (e.g., a single land cell surrounded by water) and converts them to match their adjacent cells. This option smooths the map, preventing small, disconnected areas and creating a more uniform appearance.

## Usage

1. **Selecting Map Size:**

   - Choose your desired grid size to determine the overall scale of the map.

2. **Adjusting Complexity:**

   - Use the complexity slider or input to control the type of terrain generated. Experiment with different values to achieve the desired map style.

3. **Enabling/Disabling Remove Isolated:**
   - Toggle this option to either allow or prevent isolated cells from appearing on the map.
