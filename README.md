# TurboSync Lip Syncing App 

Lip sync application for class CMP308/CMP311 - Abertay University 

[![forthebadge](https://forthebadge.com/images/badges/as-seen-on-tv.svg)](https://forthebadge.com)
  

#

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.


### Prerequisites

To run the project you will need to first have <a href = "https://nodejs.org/en/download/"> NodeJs <a> installed.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/1905944/TurboSync.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE -->

## Usage

### Running demo

To get the demo working you need to open command line at the file directory and follow the instructions below:

1. Start package manager

	```sh
    npm start   
	```
2. Open web browser and navigate to localhost:3000
 

### Adding new lip movements to demo

This is a temporary method and will need to be updated but for the meantime it works 🤷‍♂️

1. insert .wav audio file and transcript in the inbox file
2. Open command line at the rhubarb file and run command
	```sh
	rhubarb.exe -d ../inbox/filename.txt -f json -o ../outbox/filename.json ../inbox/filename.wav
	```
3. Add new img, audio and button objects to `views/index.pug`
4. Take json data from outbox file and insert into `public/javascripts/timings.js`
5. Add needed functions and variables to `public/javascripts/animation.js`


<!-- CONTRIBUTORS -->

## Contributors

| [<img src="https://avatars2.githubusercontent.com/u/71991660?v=4" width="75px;"/><br /><sub><b>Greg Harrison</b></sub>](https://github.com/gregharrisonAbertay)<br />[💻](https://github.com/1905944/TurboSync/commits?author=gregharrisonAbertay "Code") | [<img src="https://avatars3.githubusercontent.com/u/56352461?v=4" width="75px;"/><br /><sub><b>Akash D'cross</b></sub>](https://github.com/AkashDcross)<br />[💻](https://github.com/1905944/TurboSync/commits?author=AkashDcross "Code") | [<img src="https://avatars1.githubusercontent.com/u/25231716?v=4" width="75px;"/><br /><sub><b>Salomon Ghitis</b></sub>](https://github.com/SaloGitHub)<br />[💻](https://github.com/1905944/TurboSync/commits?author=SaloGitHub "Code") | [<img src="https://avatars3.githubusercontent.com/u/72017529?v=4" width="75px;"/><br /><sub><b>Scott Milne</b></sub>](https://github.com/1905944)<br />[💻](https://github.com/1905944/TurboSync/commits?author=1905944 "Code") | [<img src="https://avatars0.githubusercontent.com/u/71823712?v=4" width="75px;"/><br /><sub><b>Lee Aikenhead</b></sub>](https://github.com/2005251)<br />[💻](https://github.com/1905944/TurboSync/commits?author=2005251 "Code") | [<img src="https://avatars0.githubusercontent.com/u/78224980?v=4" width="75px;"/><br /><sub><b>James Ireland</b></sub>](https://github.com/11icecube11-2)<br />[💻](https://github.com/1905944/TurboSync/commits?author=11icecube11-2 "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: |




<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

* [Rhubarb](https://github.com/DanielSWolf/rhubarb-lip-sync)
* [RPuffers API](https://github.com/RPuffer/lip-sync-api)



<hr>

[![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)
