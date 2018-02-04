![Frost Logo](https://raw.githubusercontent.com/zachalam/frost/master/src/images/frost.png)

FROST is an open source, cold storage wallet for IOTA. It can run offline, be compiled from source, and requires minimal dependencies.

## Give Frost A Try!

Short on time? Run the cold storage wallet directly in your browser. Be sure to disconnect
from the Internet when generating your encrypted wallet.
[https://zachalam.github.io/frost/](https://zachalam.github.io/frost/)

### Build From Source

If you're super paranoid (completely fair). You can build frost from source. Here's a quick guide to get up and running locally.

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

3. Enter `build` directory and open in browser.
```
cd build
open index.html
```

#### That's all! Here's it all together:
```
git clone https://github.com/zachalam/frost.git
cd frost
npm run build
cd build
open index.html
```

## Important Notes

* Always disconnect from the Internet when generating/accessing a key.
* Do not share your encrypted wallet OR seed with anyone.
* DO NOT SEND FUNDS FROM YOUR ADDRESS MORE THAN ONCE!!!

## Contributing

Pull requests are more than welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
