# GOzar

GOzar is a (in development) software to practice the game of Go (Baduk),
implemented in Clojurescript. It is hosted in gh-pages so you can try it
here:

[**Demo**](https://average-user.github.io/gozar/)

The name comes from the spanish word "gozar" which means "enjoy".

### How it works?

The first step is to upload an `.sgf` (Smart Go Format). After that, the user
should try to guess where the stone was played in the loaded game. A bar will be
shown indicating how close (Taxicab distance) to the actual move the guess was,
this bar will turn green when the guess is really close (10% off, or better).
If the guess happens to be the correct move, then the stone will be placed
in the board. The user has also the option to skip a move and try the next one.

![](https://github.com/Average-user/gozar/blob/master/resources/public/img/demo.png?raw=true)
