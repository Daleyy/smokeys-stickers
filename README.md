<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Smokey's Sticker App 😺</h3>
  <p align="center">
    An easy way to make stickers for Telegram!
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project 🧐
This project started as a playground to test my abilities at building a RESTful api from scratch and to learn some things along the way.

Initially it was going to be a simple REST api to to learn how to POST an image and save it, then store it's path in a MongoDB.

After I did that, I got an idea to try integrating a third party API [https://remove.bg/](https://www.remove.bg/) and a third party module [Sharp](https://sharp.pixelplumbing.com/) to make creating a sticker for Telegram easy as I was creating a sticker pack of our cat Smokey (picture below)!

*Why?* Telegram requires a square image and often the stickers look better with  removed background.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started 🏃‍♂️
Setting up your project locally. To get a local copy up and running follow these steps:

### Prerequisites
Install the latest version of npm.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Get a free API Key at [https://remove.bg/](https://www.remove.bg/)
* (Optional) Have a MongoDB database

### Installation 💻
1. Clone the repo (or download the .zip)
   ```sh
   git clone https://github.com/Daleyy/smokeys-stickers.git
   ```
2. Inside the project folder, install npm packages
   ```sh
   npm install
   ```
3. Create .env file
   ```
   touch .env
   ```
4. Add two environment variables to .env
   ```
   REMOVEBG_API_KEY=[Replace with remove.bg api key]
   MONGO_URI=[Replace with MongoDB URI]
   ```
5. Start the server
   ```
   node app.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage 👍
* After starting the server, navigate to [http://localhost:4000/](http://localhost:4000/).
* Under 'Remove background and resize image' Click 'Choose file' and select a png or jpeg file to upload. (Only these two file types are accepted currently)
* If you have entered a MONGO_URI env you can upload an image and it will be saved to ./uploads/ and the path will be saved in to the database.
* There are two test images in ./test_files/

Example result of background removal and resizing:

<img src="https://i.imgur.com/wb8xads.jpg" height="250" alt="original image"/>  
<img src="https://i.imgur.com/0YuqQcJ.png" height="250" alt="result image"/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap 🛣
I used a Kanban board on Trello to create bitsize goals and to store some ideas for the project.

https://trello.com/b/nTgMn9ld/smokey-sticker-management-app


<!-- API DOCUMENTATION -->
## API Documentation 📄

https://documenter.getpostman.com/view/20869369/2s847BVGr1

## Sticker Pack 😸

Get the sticker pack here: https://t.me/addstickers/SmokeysStickers

<p align="right">(<a href="#readme-top">back to top</a>)</p>