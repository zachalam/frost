![Frost Logo](https://raw.githubusercontent.com/zachalam/frost/master/src/images/frost.png)

FROST is an open source, cold storage wallet for IOTA. It can run offline, be compiled from source, and requires minimal dependencies. [Check out the launch article on Medium](https://medium.com/@alamzach/introducing-frost-a-secure-offline-cold-storage-wallet-for-iota-552abca7acce).

**STAY SAFE: ALWAYS DISCONNECT FROM THE INTERNET BEFORE GENERATING COLD WALLETS!**

<a href="https://zachalam.github.io/frost/"><img src="https://media.giphy.com/media/l0NgSuCl5bdQr7KPS/giphy.gif" title="Frost Demo"/></a>

## Give Frost A Try!
Short on time? Not storing a lot? Run the cold storage wallet directly in your browser. Be sure to disconnect from the Internet when generating your encrypted wallet.
[http://frostwallet.info/](http://frostwallet.info/asd)

## Run Latest Build
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
If you're super paranoid (completely justified). You can fully examine AND build frost from source. Here's a quick guide that'll get you up and running locally.

You will need to have the latest version of Node/NPM installed.

1. Clone the repo from GitHub.
```
git clone https://github.com/zachalam/frost.git
```

2. Enter `frost` directory and build from source.
```
cd frost
npm run build
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

## Keep Coins Secure
* ALWAYS disconnect from the Internet when generating/accessing a key.
* DO NOT share your encrypted wallet OR seed with anyone.
* DO NOT SEND FUNDS FROM YOUR ADDRESS MORE THAN ONCE!!!

<img src="https://media.giphy.com/media/5jUsOq78hkBY5rKfnp/giphy.gif" title="Go Offline Badge">

## Contributing
Pull requests are more than welcome.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
