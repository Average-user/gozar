# GOzar

GOzar is a (in development) software to practice the game of Go (Baduk),
implemented in Clojurescript. It is hosted in gh-pages so you can try it
here:

[**Demo**](https://average-user.github.io/gozar/)

The name comes from the spanish word "gozar" which means "enjoy".

### How it works?

The user must select a `.sgf` file from its computer and proceed to the board.
At this moment the user will face the choice to either click the button `Show next move`
and leave the work to the computer, or give it a try and guess where was
the stone played in the game. A bar will be shown to indicate how close
(Taxicab distance) from the actual move was. If the move is correct, the stone
will be placed, otherwise you'll need to try again, or give up and click
`Show next move`.

![](https://github.com/Average-user/gozar/blob/master/resources/public/img/demo.png?raw=true)
