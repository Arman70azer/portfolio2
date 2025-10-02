// ✅ Imports des images
import net_cat from "../assets/net-cat.png"
import groupie from "../assets/groupie-trackers.png"
import lemin from "../assets/lem-in.png"
import forum from "../assets/forum.png"
import makeYourGame from "../assets/make-your-game.png"
import socialNetwork from "../assets/social-network.png"
import mini from "../assets/mini.png"
import smartRoad from "../assets/smart-road.png"
import fps from "../assets/fps.png"
import shell0 from "../assets/0-shell.png"
import game2048 from "../assets/2048.jpg"
import skyMap from "../assets/sky-map.jpg"
import chess from "../assets/chess.jpg"
import kaquiz from "../assets/kaquiz.jpg"
import stockMarket from "../assets/stock-market.jpg"

// ✅ Projets Golang
const golang = {
    1: {
        title: "groupie-trackers",
        description: "Groupie-tracker is a server that provides access to a database of musical artists. It goes through an API to retrieve the data. The goal of the project was to build a backend that can fetch, parse and serve the information, while handling client requests and displaying them with different visualizations.",
        img: groupie,
        url: "https://github.com/Arman70azer/groupie-trackers-visual",
    },
    2: {
        title: "net-cat",
        description: "This project consists on recreating the NetCat in a Server-Client Architecture. It can run in a server mode on a specified port listening for incoming connections, and it can also be used in client mode, trying to connect to a specified port and transmitting information to the server. It handles multiple clients at once and manages the messages between them with concurrency in Golang.",
        img: net_cat,
        url: "https://github.com/Arman70azer/net-cat"
    },
    3: {
        title: "lem-in",
        description: "This project is meant to make a digital version of an ant farm.\n\nHow does it work?\n- You make an ant farm with tunnels and rooms.\n- You place the ants on one side and look at how they find the exit.\n\nThe program must calculate the most efficient way for the ants to reach the exit, managing graph traversal and optimization of paths.",
        img: lemin,
        url: "https://github.com/Arman70azer/lem-in"
    },
    4: {
        title: "forum",
        description: "This project consists in creating a web forum that allows :\n- Communication between users.\n- Associating categories to posts.\n- Liking and disliking posts and comments.\n- Filtering posts.\n\nIt includes both backend and frontend parts, with user authentication, session handling, and persistent storage of data.",
        img: forum,
        url: "https://github.com/Arman70azer/forum",
    }
}

// ✅ Projets JavaScript
const js = {
    1: {
        title: "make-your-game",
        description: "As time goes on and technology evolves, my brain needs more and more stimuli to stay busy. Boredom comes when I don’t get enough. And right now, that's not enough, so I decide to create my own game. To make the challenge even more interesting, I chose to use JavaScript to make it.\n\nMy choice was Bomberman, a strategic game where you have to plant bombs to eliminate obstacles and adversaries. It uses JavaScript, HTML canvas and custom game logic for animations and collisions.",
        img: makeYourGame,
        url: "https://github.com/Arman70azer/make-your-game"
    },
    2: {
        title: "social-network",
        description: "A modern social network in React allowing users to publish posts, comment and exchange messages in real time via WebSockets. The app includes user authentication, a live feed of posts, comments, likes/dislikes, and private messaging. This project highlights my skills in React, WebSockets and SQLite.",
        img: socialNetwork,
        url: "https://github.com/Arman70azer/social-network1"
    },
    3: {
        title: "mini-framework",
        description: "I built a custom framework that abstracts the DOM, implements a routing system, and handles state management and events. I tested it by creating a todoMVC app, showcasing dynamic content, URL synchronization, and smooth user interactions.\n\nFeatures:\n- DOM Abstraction: Simplified DOM manipulation with virtual DOM and data binding.\n- Routing: Syncs app state with the URL.\n- State Management: Centralized state accessible across the app.",
        img: mini,
        url: "https://github.com/Arman70azer/mini-framework"
    }
}

// ✅ Projets Rust
const rust = {
    1: {
        title: "smart-road",
        description: "Smart traffic control system for autonomous vehicles (AVs) without using traditional traffic lights. The system ensures safe passage through intersections by managing vehicle speeds, distances, and directions.\n\nFeatures:\n- Vehicle Physics: Implemented velocity, distance, and safe distance rules for AVs.\n- Smart Intersection: Vehicles follow lanes and routes, adjusting speeds based on real-time traffic and avoiding collisions.\n- Animation: Created realistic vehicle movement and turning animations.\n- Vehicle Creation: Vehicles are generated using keyboard commands, with randomized routes and velocities.\n- Statistics: The simulation tracks key metrics like vehicle throughput, max/min velocity, and close calls.\n\nThis project demonstrates my ability to simulate real-world scenarios and develop intelligent algorithms for managing traffic and ensuring safety in autonomous driving environments.",
        img: smartRoad,
        url: "https://github.com/Arman70azer/smart-road"
    },
    2: {
        title: "multiplayer-fps",
        description: "Maze Wars with a client-server architecture, using UDP for communication. The game features a mini-map, player positions, and a frame rate display, all while maintaining the original game's graphical elements like walls and players.\n\nKey Features:\n- User Interface: Includes a mini-map, game graphics, and frame rate display.\n- Client-Server: Supports multiple clients (up to 10) connecting to a central server.\n- Levels: Three difficulty levels with increasingly complex mazes.\n- Performance: Maintains a frame rate of over 50 fps.\n\nThe project explores game mechanics, GUI design, and network protocols, providing a seamless multiplayer experience.",
        img: fps,
        url: "https://github.com/Arman70azer/multiplayer-fps",
    },
    3: {
        title: "0-shell",
        description: "Simple Unix shell, similar to BusyBox, which supports essential commands such as `echo`, `cd`, `pwd`, `ls`, `cat`, `cp`, `rm`, `mv`, `mkdir`, and `exit`. The shell executes commands by creating new processes and manages errors with custom error messages.\n\nKey Features:\n- Command Execution: Supports basic commands, process creation, and synchronization.\n- Error Handling: Displays relevant error messages when commands fail.\n- Process Control: Handles program interruption via `Ctrl+D`.\n- File System Operations: Manages simple file operations using system calls.\n\nThis project enhanced my understanding of Unix systems, process management, and command-line interfaces.",
        img: shell0,
        url: "https://github.com/Arman70azer/0-shell"
    }
}

// ✅ Projets Flutter
const flutter = {
    1: {
        title: "twenty-forty-eight",
        description: "'2048', where players slide numbered tiles on a 4x4 grid to combine them and create a tile with the number 2048. The game includes smooth animations, dynamic tile movement, and merging mechanics. It tracks the player's score and best score and ends when no legal moves are possible. A restart button allows the player to try again and achieve a higher score.",
        img: game2048,
        url: "https://github.com/Arman70azer/twenty-forty-eight"
    },
    2: {
        title: "sky-map",
        description: "A mobile app that provides an interactive map of the night sky. Using the device's sensors like GPS, accelerometer, and magnetometer, the app displays real-time celestial objects, including planets, the sun, the moon, and constellations, based on the user's location and orientation. Users can tap on objects for more details, with the app updating the map frequently for a smooth experience.",
        img: skyMap,
        url: "https://github.com/Arman70azer/sky-map"
    },
    3: {
        title: "chess",
        description: "A mobile app that allows users to play chess with others in real-time. The app features multiplayer functionality where players can challenge each other, join games, and wait for opponents in a dedicated waiting room. The app validates chess moves, enforces game rules, and sends notifications to players when it's their turn. The game ends when a checkmate, stalemate, or draw occurs, and players are notified of the result.",
        img: chess,
        url: "https://github.com/Arman70azer/chess"
    },
    4: {
        title: "kaquiz",
        description: "App that allows users to connect with their friends and track their last known location. Through email authentication, users can search for friends, send and manage friend requests, and view each other's locations on a map. The app continuously updates the location every 5 seconds when open. The project involves both backend and frontend development to ensure smooth integration and real-time tracking of users' locations.",
        img: kaquiz,
        url: "https://github.com/Arman70azer/kaquiz"
    },
    5: {
        title: "stock-market",
        description: "I developed a mobile app that simulates a real-time stock market where users can sign up, authenticate, and trade stocks using simulated funds. The app fetches real-time stock data, displays users' portfolios, and offers features like viewing historical data, real-time stock prices, and interactive charts. Users can buy, sell, and hold stocks with an initial balance of 1,000,000 fake dollars. The app is built using state management patterns such as BLoC, Provider, or MVC.",
        img: stockMarket,
        url: "https://github.com/Arman70azer/stock-market"
    }
}

export { golang, rust, js, flutter }
