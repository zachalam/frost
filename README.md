![Frost Logo](https://raw.githubusercontent.com/zachalam/frost/master/src/images/frost.png)

FROST is an open source, cold storage wallet for IOTA. It can run offline, be compiled from source, and requires minimal dependencies.

** ALWAYS DISCONNECT FROM THE INTERNET BEFORE GENERATING SEEDS! **

<a href="https://media.giphy.com/media/l0NgSuCl5bdQr7KPS/giphy.gif"><img src="https://media.giphy.com/media/l0NgSuCl5bdQr7KPS/giphy.gif" title="Frost Demo"/></a>

## Give Frost A Try!
---
Short on time? Not storing a lot? Run the cold storage wallet directly in your browser. Be sure to disconnect from the Internet when generating your encrypted wallet.
[https://zachalam.github.io/frost/](https://zachalam.github.io/frost/)

## Run Latest Build
---
The frost repository includes the latest build. You can run it conveniently without having to build it from source.

1. Clone the repo from GitHub.
```
git clone https://github.com/zachalam/frost.git
```

2. Open `frost/build/index.html` in your default browser.
```
open frost/build/index.html
```

## Build From Source
---
If you're super paranoid (completely justified). You can fully examine AND build frost from source. Here's a quick guide that'll get you up and running locally.

You will need to have the latest version of Node/NPM installed.

1. Clone the repo from GitHub.
```
git clone https://github.com/zachalam/frost.git
```

2. Enter `frost` directory and build.
```
cd frost
npm run build
open index.html
```

3. Open `build/index.html` in your default browser.
```
open build/index.html
```

#### That's all! Here's it all together:
```
git clone https://github.com/zachalam/frost.git
cd frost
npm run build
open build/index.html
```

## Important Notes
---
* Always disconnect from the Internet when generating/accessing a key.
* Do not share your encrypted wallet OR seed with anyone.
* DO NOT SEND FUNDS FROM YOUR ADDRESS MORE THAN ONCE!!!

## Contributing
---
Pull requests are more than welcome.

## License
---
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
