/*____________________________________ USEFOOL FUNCTIONS (really light) ____________________________________*/

function getRandomIdFromArray(arrayName) {
  // Output
  return Math.floor(Math.random() * arrayName.length);
}

function getRandomValueFromArray(arrayName) {
  // Output
  return arrayName[getRandomIdFromArray(arrayName)];
}

/*____________________________________ ASCIIS FUNCTIONS ____________________________________*/

function getAsciiStyle(ascii, options = {}) {
  const color = options.color || ascii.color;
  return `color: ${color}; font-family: monospace;`;
}

function printAsciiCredit(ascii, options = {}) {
  if (options.credits && ascii.author) {
    console.log(`ASCII by ${ascii.author}`);
  }
}

function listAsciiTypes() {
  return [...new Set(asciis.map((ascii) => ascii.type))];
}

function listAsciiNames(criteria = "all") {
  const selectedAsciis =
    criteria === "all"
      ? asciis
      : asciis.filter((ascii) => ascii.type === criteria);

  return selectedAsciis.map((ascii) => ascii.name);
}

function listAsciis(criteria = "all") {
  return asciis
    .map((ascii, id) => ({
      id,
      name: ascii.name,
      category: ascii.type,
    }))
    .filter((ascii) => criteria === "all" || ascii.category === criteria);
}

function printAsciiById(asciiId, options = {}) {
  const ascii = asciis[asciiId];

  if (!ascii) {
    console.warn(`ASCII not found for id: ${asciiId}`);
    return null;
  }

  // Output
  console.log(
    `%c${ascii.art}`,
    getAsciiStyle(ascii, options)
  );
  printAsciiCredit(ascii, options);
}

function printAsciiByName(asciiName, options = {}) {
  // Process
  const selectedAscii = asciis.findIndex((ascii) => ascii.name === asciiName); // Select ascii according the name

  if (selectedAscii === -1) {
    console.warn(`ASCII not found for name: ${asciiName}`);
    return null;
  }

  // Output
  printAsciiById(selectedAscii, options);
}

function printAsciiSearch(query, options = {}) {
  const normalizedQuery = query.toLowerCase();
  const selectedAscii = asciis.find((ascii) =>
    ascii.name.toLowerCase().includes(normalizedQuery)
  );

  if (!selectedAscii) {
    console.warn(`ASCII not found for search: ${query}`);
    return null;
  }

  printAsciiByName(selectedAscii.name, options);
}

function printRandomAscii(criteria = "all", options = {}) {
  // Process
  var selectedAsciis = asciis.filter((ascii) => ascii.type === criteria); // Select the asciis matching the criteria
  selectedAsciis.length < 1 && (selectedAsciis = Object.values(asciis)); // If empty or nothing is matching, select them all
  const randomAscii = getRandomValueFromArray(selectedAsciis);
  // Output
  printAsciiByName(randomAscii.name, options);
}


/*____________________________________ ASCIIS LIBRAIRY ____________________________________*/

var asciis = [
  {
    type: "animal",
    name: "anteater",
    art: String.raw` 
       _.---._    /\\
    ./'       "--'\//
  ./              o \
 /./\  )______   \__ \
./  / /\ \   | \ \  \ \
   / /  \ \  | |\ \  \7
    "     "    "  "
    `,
    color: "LightSlateGray",
    height: 7,
    author: "Veronica Karlsson",
  },
  {
    type: "animal",
    name: "armadillo",
    art: String.raw` 
             _.-----__    
          ,:::://///,:::-. 
         /:''/////// \\:::;/|/
        /'   ||||||     :://''\
      .' ,   ||||||     ./(  e \
-===~__-'\__X_'''''\_____/~'-.__'0
           ~~        ~~       
    `,
    color: "RosyBrown",
    height: 7,
    author: "Seal do Mar",
  },
  {
    type: "animal",
    name: "bat",
    art: String.raw` 
  /\                 /\
 / \'._   (\_/)   _.'/ \
/_.''._'--('.')--'_.''._\
| \_ / ';=/ " \=;' \ _/ |
 \/ '\__|'\___/'|__/'  \/
         \(/|\)/
          " ' "
    `,
    color: "DimGray",
    height: 7,
    author: "Joan G. Stark",
  },
  {
    type: "animal",
    name: "bear",
    art: String.raw` 
 .--.              .--.
: (\ ". _......_ ." /) :
 '.    '        '    .'
  /'   _        _   '\
 /     0}      {0     \
|       /      \       |
|     /'        '\     |
 \   | .  .==.  . |   /
  '._ \.' \__/ './ _.'
  /  '''._-''-_.'''  \
    `,
    color: "Brown",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    type: "animal",
    name: "bees",
    art: String.raw` 
  ^^      .-=-=-=-.  ^^      ^^
       ('-=-=-=-=-=-')  ^^         ^^
^^   ('-=-=-=-=-=-=-=-')
    ( '-=-=-=-(@)-=-=-' )      ^^
    ('-=-=-=-=-=-=-=-=-')  ^^ 
    ('-=-=-=-=-=-=-=-=-')  ^^
     ('-=-=-=-=-=-=-=-')          ^^
       ('-=-=-=-=-=-')  ^^
         '-=-=-=-=-'
    `,
    color: "Goldenrod",
    height: 9,
    author: "Joan G. Stark",
  },
  {
    type: "animal",
    name: "beaver",
    art: String.raw` 
            ___
         .="   "=._.---.
       ."         c ' Y' p
      /   ,       '.  w_/
      |   '-.   /     /
_,..._|      )_-\ \_=.\
'-....-''------)))'=-'"''"
    `,
    color: "DarkGoldenrod",
    height: 7,
    author: "Joan G. Stark",
  },
  {
    type: "animal",
    name: "cat",
    art: String.raw` 
 )\   _,
 | "^" (
 (e  a )
=-\Y  -=
   T"^)   _
  /   (  ((
 /     )  ';,
(      ) )  \\
 \ Y  '  /  ))
  || ;  /   //
  )| ( (__,</
c{{i.}}=oo-^
    `,
    color: "DarkSlateGrey",
    height: 12,
    author: "",
  },
  {
    type: "animal",
    name: "caterpillar",
    art: String.raw` 
\_/-.--.--.--.--.--.
(")__)__)__)__)__)__)
 ^ "" "" "" "" "" ""
    `,
    color: "Green",
    height: 3,
    author: "Joan G. Stark",
  },
  {
    type: "animal",
    name: "crab",
    art: String.raw` 
   __       __    
  / <'     '> \
 (  / @   @ \  )
  \(_ _\_/_ _)/
(\ '-/     \-' /)
 "===\     /==="
  .==')___('==.
 ' .='     '=. '
    `,
    color: "Red",
    height: 8,
    author: "",
  },
  {
    type: "animal",
    name: "crocodile",
    art: String.raw` 
            .-._   _ _ _ _ _ _ _ _
 .-''-.__.-'00  '-' ' ' ' ' ' ' ' '-.
'.___ '    .   .--_'-' '-' '-' _'-' '._
 V: V 'vv-'   '_   '.       .'  _..' '.'.
   '=.____.=_.--'   :_.__.__:_   '.   : :
           (((____.-'        '-.  /   : :
                             (((-'\ .' /
                           _____..'  .'
                          '-._____.-'
    `,
    color: "OliveDrab",
    height: 9,
    author: "Shanaka Dias",
  },
  {
    type: "animal",
    name: "deer",
    art: String.raw` 
    (      )
    ))    ((
   //      \\
  | \\____// |
 \~/ ~    ~\/~~/
  (|    _/o  ~~
   /  /     ,|
  (~~~)__.-\ |
   ''~~    | |
    |      | |
    |        |
   /          \
  '\          /'
    '\_    _/'
       ~~~~
    `,
    color: "Tan",
    height: 15,
    author: "",
  },
  {
    type: "animal",
    name: "dog",
    art: String.raw` 
            /)-_-(\
             (o o)
     .-----__/\o/
    /  __      /
\__/\ /  \_\ |/
     \\     ||
     //     ||
     |\     |\
    `,
    color: "Tan",
    height: 8,
    author: "",
  },
  {
    type: "animal",
    name: "duck",
    art: String.raw` 
      ,~~.
     (  9 )-_,
(\___ )=='-'
 \ .   ) )
  \ '-' /
   '~j-'  
     "=:
    `,
    color: "DarkGray",
    height: 7,
    author: "",
  },
  {
    type: "animal",
    name: "elephant",
    art: String.raw` 
   ___      ___
  /   \____/   \
 /    / __ \    \
/    |  ..  |    \
\___/|      |\___/\
   | |_|  |_|      \
   | |/|__|\|       )\
   |   |__|         | \
   | @ |  | @ || @ |/  m
   |   |~~|   ||   |
   'ooo'  'ooo''ooo'
    `,
    color: "Silver",
    height: 11,
    author: "Hamilton Furtado",
  },
  {
    type: "animal",
    name: "flamingo",
    art: String.raw` 
         __
        /('o
  ,-,  //  \\
 (,,,) ||   V
(,,,,)\//
(,,,/w)-'
\,,/w)
 V/uu
/ |
| |
o o
\ |
 \|
    `,
    color: "Pink",
    height: 13,
    author: "",
  },
  {
    type: "animal",
    name: "fox",
    art: String.raw` 
 /\   /\
//\\_//\\     __/\
\_     _/    /   /
 / . . \    /^^^]
 \_\ /_/    [   ]
  / ° \_    [   /
  \     \_  /  /
   [ [ /  \/ _/
  _[ [ \  /_/
    `,
    color: "DarkOrange",
    height: 9,
    author: "",
  },
  {
    type: "animal",
    name: "frog",
    art: String.raw` 
       _   _
      (o)-(o)
   .-(   "   )-.
  /  /;'-=-';\  \
__\ _\ \___/ /_ /__
  /|  /|\ /|\  |\
    `,
    color: "SpringGreen",
    height: 6,
    author: "",
  },
  {
    type: "animal",
    name: "goldfish",
    art: String.raw` 
      /'·.¸
     /¸...¸':·
 ¸.·'  ¸   '·.¸.·°)
: © ):´;      ¸  {
 °·.¸¸'·  ¸.·´\'·¸)
      \\´´\¸.·´
    `,
    color: "Gold",
    height: 6,
    author: "",
  },
  {
    type: "animal",
    name: "hippo",
    art: String.raw` 
     c~~p ,---------.
,---'oo  )           \
( O O                  )/
'=^='                 /
      \    ,     .   /
      \\  |-----'|  /
      ||__|    |_|__|
    `,
    color: "DarkGray",
    height: 7,
    author: "",
  },
  {
    type: "animal",
    name: "hedgehog",
    art: String.raw` 
  .|||||||||.
 |||||||||||||
|||||||||||' .\
'||||||||||_,__o
    ''  '' 
    `,
    color: "Tan",
    height: 5,
    author: "",
  },
  {
    type: "animal",
    name: "lion",
    art: String.raw` 
            o00000000o
           o0/\0000/\0o
          o00\c "" J/00o
o.       0000/ b  d \000
'00.     0000    _  |000
 '00     '0000(=_Y_=)00'
 //       ;0000'\7/000'
((       /  '0000000'
 \\    .'          |
  \\  /       \  | |
   \\/         ) | |
    \         /_ | |__
    (___________)))))))
    `,
    color: "Peru",
    height: 13,
    author: "Joan G. Stark",
  },
  {
    type: "animal",
    name: "marbles",
    art: String.raw` 
         __
        /  \
       / ..|\
      (_\  |_)
      /  \@' 
     /     \
_   /  '   |
\\/  \  | _\
 \   /_ || \\_
  \____)|_) \_)
    `,
    color: "Brown",
    height: 10,
    author: "",
  },
  {
    type: "animal",
    name: "marmot",
    art: String.raw` 
       (>\---/<)
       ,'     '.
      /  q   p  \
     (  >(_Y_)<  )
      >-' '-' '-<-.
     /  _.== ,=.,- \
    /,    )'  '(    )
   / '._.'      '--<
c /    \         |  |
  \      )       ;_/
   '._ _/_  ___.'-\\\
      '--\\\
    `,
    color: "DarkGoldenrod",
    height: 12,
    author: "Hayley Jane Wakenshaw",
  },
  {
    type: "animal",
    name: "monkey",
    art: String.raw`
      .="=.
    _/.-.-.\_     _
   ( ( o o ) )    ))
    |/  "  \|    //
     \'---'/    //
     /'"""'\\  ((
    / /_,_\ \\  \\
    \_\\_'__/ \  ))
     /'  /'~\  |//
    /   /    \  /
,--',--'\/\    /
 '-- "--'  '--'
    `,
    color: "Brown",
    height: 12,
    author: "Joan G. Stark",
  },
  {
    type: "animal",
    name: "mouse",
    art: String.raw` 
(q\_/p)
 /. .\.-""""-.      __
=\_t_/=    /  '\   (
  )\ ))__ _\    |___)
 nn-nn'  'nn---'
    `,
    color: "Gray",
    height: 5,
    author: "",
  },
  {
    type: "animal",
    name: "parrot",
    art: String.raw` 
                          .
                          | \/|
  (\   _                  ) )|/|
      (/            _----. /.'.'
.-._________..      .' @ _\  .'
'.._______.   '.   /    (_| .')
  '._____.  /   '-/      | _.'
   '.______ (         ) ) \
     '..____ '._       )  )
        .' __.--\  , ,  // ((
        '.'     |  \/   (_.'(
                |   \ .'
                 \   (
                  \   '.
                   \ \ '.)
                    '-'-'
    `,
    color: "DodgerBlue",
    height: 16,
    author: "",
  },
  {
    type: "animal",
    name: "pig",
    art: String.raw` 
       9
  ,--.-'-,--.
  \  /-~-\  /
 / )' a a '( \
( (  ,---.  ) )
 \ '(_o_o_)' /
  \   '-'   /
   | |---| |
   [_]   [_]
    `,
    color: "Pink",
    height: 9,
    author: "",
  },
  {
    type: "animal",
    name: "pinguin",
    art: String.raw` 
   __
-=(o '.
   '.-.\
   /|  \\
   '|  ||
    _\_):,_
    `,
    color: "Black",
    height: 6,
    author: "",
  },
  {
    type: "animal",
    name: "snail",
    art: String.raw` 
    .----.   @   @
   / .-"-.'.  \v/
   | | '\ \ \_/ )
 ,-\ '-.' /.'  /
'---'----'----'
    `,
    color: "SeaGreen",
    height: 5,
    author: "Hayley Jane Wakenshaw",
  },
  {
    type: "animal",
    name: "teckel",
    art: String.raw` 
                        __
 ,                    ," e'--o
((                   (  | __,'
\\~----------------' \_;/
(                      /
 /) ._______________. )
(( (              (( (
'' '               ''-'
    `,
    color: "Chocolate",
    height: 8,
    author: "Hayley Jane Wakenshaw",
  },
  {
    type: "animal",
    name: "turtle",
    art: String.raw` 
                __
     .,-;-;-,. /'_\
   _/_/_/_|_\_\) /
'-<_><_><_><_>=/\
  '/_/    /_/  \_\
   ""     ""    ""
    `,
    color: "LimeGreen",
    height: 6,
    author: "",
  },
  {
    type: "animal",
    name: "wasp",
    art: String.raw` 
    _  _
   | )/ )
\\ |//,' __
(")(_)-"()))=-
   (\\
    `,
    color: "Yellow",
    height: 5,
    author: "Stef00",
  },
  {
    type: "animal",
    name: "whale",
    art: String.raw` 
       .
      ":"
    ___:____     |"\/"|
  ,'        '.    \  /
  |  O        \___/  |
~^~^~^~^~^~^~^~^~^~^~^~^~
    `,
    color: "RoyalBlue",
    height: 6,
    author: "Riitta Rasimus",
  },
  {
    type: "character",
    name: "bender",
    art: String.raw` 
     ( )
      H
     _H_
  .-'-.-'-.
 /         \
|           |
|   .-------'._
|  / /  '.' '. \
|  \ \ @   @ / /
|   '---------'
|    _______|
|  .'-+-+-+|
|  '.-+-+-+|
|    """""" |
'-.__   __.-'
     """
    `,
    color: "Silver",
    height: 16,
    author: "Silver Saks",
  },
  {
    type: "character",
    name: "bigBird",
    art: String.raw` 
   . -- .
  (      )
 ( (/oo\) )
  ( \`'/ )
   ( \/ )
  (      )
 (        )
(          )
 (        )
   ' -- '
    =  =
    =  =
    `,
    color: "Yellow",
    height: 16,
    author: "",
  },
  {
    type: "character",
    name: "cheshireCat",
    art: String.raw` 
           .'\   /'.
         .'.-.'-'.-.'.
    ..._:   .-. .-.   :_...
  .'    '-.(o ) (o ).-'    '.
 :  _    _ _'~(_)~'_ _    _  :
:  /:   ' .-=_   _=-. '   ;\  :
:   :|-.._  '     '  _..-|:   :
 :   ':| |':-:-.-:-:'| |:'   :
  '.   ''.| | | | | | |.'   .'
    '.    '-:_| | |_:-'   .'
      '-._    ''''    _.-'
          ''-------''
    `,
    color: "Violet",
    height: 6,
    author: "Randy Ransom",
  },
  {
    type: "character",
    name: "cookieMonster",
    art: String.raw` 
    (o)(o)
  w"      "w
 W  -====-  W
  "w      w"
 w"""""""""w
W            W
    `,
    color: "Blue",
    height: 6,
    author: "Randy Ransom",
  },
  {
    type: "character",
    name: "devil",
    art: String.raw` 
  ,  ,  , , ,
 <(__)> | | |
 | \/ | \_|_/
 \^  ^/   |
 /\--/\  /|
/  \/  \/ |
    `,
    color: "Red",
    height: 6,
    author: "Joan G. Stark",
  },
  {
    type: "character",
    name: "einstein",
    art: String.raw` 
      -''--.
      _'>   '\.-'/
  _.'     _     '._
.'   _.='   '=._   '.
>_   / /_\ /_\ \   _<
  / (  \o/\\o/  ) \
  >._\ .-,_)-. /_.<
      /__/ \__\ 
        '---'
    `,
    color: "Silver",
    height: 9,
    author: "Joan G. Stark",
  },
  {
    type: "character",
    name: "flintstones",
    art: String.raw` 
  \/________________ 
 /     _____________)
/     /     /   \ |
\/\/\/     (O) (O)|
  |           ------, 
  |  _       ______/ 
  | (_      /   \  \
  |        /  ___\_ \
  |        \      / /
__|_________\______/
\______________\./__\
    `,
    color: "DarkOrange",
    height: 11,
    author: "",
  },
  {
    type: "character",
    name: "garfield",
    art: String.raw` 
     .-.,     ,.-.
    /:::\\   //:::\
   |':':' '"' ':':'|
  /'. .-=-. .-=-. .'\
 /=- /     |     \ -=\
;   |      |      |   ;
|=-.|______|______|.-=|
|==  \  0 /_\ 0  /  ==|
|=   /'---( )---'\   =|
 \   \:   .'.   :/   /
  '\= '--'   '--' =/'
    '-=._     _.=-'
         '"""'
    `,
    color: "Orange",
    height: 12,
    author: "Joan G. Stark",
  },
  {
    type: "character",
    name: "homer",
    art: String.raw` 
    ___
   //_\\_
 ."\\    ".
/          \
|           \_
|       ,--.-.)
 \     /  o \o\
 /\/\  \    /_/
  (_.   '--'__)
   |     .-'  \
   |  .-'.     )
   | (  _/--.-'
   |  '.___.'
         (
    `,
    color: "Gold",
    height: 14,
    author: "",
  },
  {
    type: "character",
    name: "kermit",
    art: String.raw` 
       .---.     .---.
      ( -o- )---( -o- )
      ;-...-'   '-...-;
     /                 \
    /                   \
   | /_               _\ |
   \ '.''"--.....--"''.' /
    \  '.   '._.'   .'  /
 _.-''.  '-.,___,.-'  .''-._
'--._  ''-._______.-''  _.--'
     /                 \
    /.-''\   .'.   /''-.\
          '.'   '.'
    `,
    color: "SpringGreen",
    height: 13,
    author: "Joan G. Stark",
  },
  {
    type: "character",
    name: "maryPoppins",
    art: String.raw` 
         _
      .-' '-.
     /       \
    |,-,-,-,-,|
   ___   |
  _)_(_  |
  (/ \)  |
  _\_/_  /)
 / \_/ \//
 |(   )\/
 ||)_( 
 |/   \
 n|   |
/ \   |
|_|___|
   \|/
  _/L\_
    `,
    color: "Black",
    height: 17,
    author: "",
  },
  {
    type: "character",
    name: "monaLisa",
    art: String.raw` 
          ____  
        o8%8888,    
      o88%8888888.  
     8'-    -:8888b   
    8'         8888  
   d8.-=. ,==-.:888b  
   >8 '~' :'~' d8888   
   88         ,88888   
   88b. '-~  ':88888  
   888b ~==~ .:88888 
   88888o--:':::8888      
   '88888| :::' 8888b  
   8888^^'       8888b  
  d888           ,%888b.   
 d88%            %%%8--'-.  
/88:.__ ,       _%-' ---  -  
    '''::===..-'   =  --.
    `,
    color: "Sienna",
    height: 17,
    author: "",
  },
  {
    type: "character",
    name: "pinkPanther",
    art: String.raw` 
 .--.             .--.
( ('\\.---------.//') )
 '-.    __   __    .-'
  /    /__\ /__\    \
 |     \ 0/ \ 0/     |
  \     _/   \_     /
   '-.  /-"""-\  .-'
     /  '.___.'  \
     \     I     /
      ';--'''--;'
        '.___.'
          | |
    `,
    color: "Pink",
    height: 12,
    author: "",
  },
  {
    type: "character",
    name: "r2d2",
    art: String.raw`
    .---.
  .'_:___".
  |__ --==|
  [  ]  :[|
  |__| I=[|
  / / ____|
 |-/.____.'
/___\ /___\  
    `,
    color: "Blue",
    height: 8,
    author: "snd",
  },
  {
    type: "character",
    name: "santaClaus",
    art: String.raw`
   ,--.
  ()   \
   /    \
 _/______\_
(__________)
(/  @  @  \)
('._,()._,')
(  '-''-'  )
 \        /
  \,,,,,,/
    `,
    color: "Red",
    height: 10,
    author: "B.D.S.`\"Don\"McConnell",
  },
  {
    type: "character",
    name: "sherlockHolmes",
    art: String.raw`
   ,_       
 ,'  '\,_   
 |_,-'_)    
 /##c '\  ( 
' |'  -{.  )
  /\__-' \[]
 /'-_'\     
 '     \   
    `,
    color: "MediumSeaGreen",
    height: 8,
    author: "Harry Mason",
  },
  {
    type: "character",
    name: "snoopy",
    art: String.raw`
          ,-~~-.___.
         / ()=(()   \
        (  |         0
          \_,\, ,----'
    ##XXXxxxxxxx
            /  ---'~;
          /    /~|-
        =(   ~~  | 
   /~~~~~~~~~~~~~~~~~~~~~\
  /_______________________\
 /_________________________\
/___________________________\
   |____________________|
   |____________________|
   |____________________|
    `,
    color: "Black",
    height: 15,
    author: "Win Kang",
  },
  {
    type: "character",
    name: "sonic",
    art: String.raw`
          .,
.      _,'f----.._
|\ ,-'"/  |     ,'
|,_  ,--.      /
/,-. ,''.     (_
f  o|  o|__     "'-.
,-._.,--'_ '.   _.,-'
'"' ___.,'' j,-'
  '-.__.,--'
    `,
    color: "Blue",
    height: 9,
    author: "",
  },
  {
    type: "character",
    name: "spaceInvader",
    art: String.raw`
         __
       _|  |_
     _|      |_
    |  _    _  |
    | |_|  |_| |
 _  |  _    _  |  _
|_|_|_| |__| |_|_|_|
  |_|_        _|_|
    |_|      |_|
    `,
    color: "Chartreuse",
    height: 8,
    author: "",
  },
  {
    type: "character",
    name: "squidward",
    art: String.raw` 
     .--'''''''''--.
   '      .---.      '.
 /    .-----------.    \
/        .-----.        \
|       .-.   .-.       |
|      /___\ /___\      |
 \    | .-. | .-. |    /
  '-._| | | | | | |_.-'
      | '-' | '-' |
       \___/ \___/
    _.-'  /   \  '-._
  .' _.--|     |--._ '.
  ' _...-|     |-..._ '
         |     |
         '.___.'
    `,
    color: "Gray",
    height: 15,
    author: "LGB",
  },
  {
    type: "character",
    name: "tweetieBird",
    art: String.raw` 
    .-"-.
   /  - -\
   \  @ @/
    (_ <_)
    _)(
,_('_))\
 "-\)__/
  __|||__
 ((__|__))
    `,
    color: "Orange",
    height: 9,
    author: "",
  },
  {
    type: "character",
    name: "yosemiteSam",
    art: String.raw` 
        ___ 
    .-''   ''-.
  .'           '.
 /               \
|      __ __      |
'      /\_/\      '
 \  ___\O_O/___  /
  \/    ___    \/
  (    (___)    )
   \   /\_/\   /
    \  |._.|  /
     \ |   | /
      \/   \/
    `,
    color: "Red",
    height: 13,
    author: "",
  },
  {
    type: "thing",
    name: "alarm",
    art: String.raw` 
     .-.-.
((  (__I__)  ))
  .'_....._'.
 / / .12 . \ \
| | '  |  ' | |
| | 9  /  3 | |
 \ \ '.6.' / /
  '.'-...-'.'
   /'-- --'\
  '"""""""""'
    `,
    color: "Chocolate",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    type: "thing",
    name: "boat",
    art: String.raw` 
       _    _
    __|_|__|_|__
  _|____________|__
 |o o o o o o o o /
~'~'~'~'~'~'~'~'~'~'~
    `,
    color: "Aqua",
    height: 5,
    author: "Hayley Jane Wakenshaw",
  },
  {
    type: "thing",
    name: "bomb",
    art: String.raw`
                .
               \'/
             -=>*<=-
            .-"/.\
           /    '
          _|
       _.|_|._
     .'       '.
    /           \
   |         #   |
   |             |
    \           /
     '.       .'
       ''---''
    `,
    color: "DimGray",
    height: 14,
    author: "Joan G. Stark",
  },
  {
    type: "thing",
    name: "book",
    art: String.raw`
,         ,
|\\\\ ////|
| \\\V/// |
|  |~~~|  |
|  |===|  |
|  |   |  |
|  |   |  |
 \ |   | /
  \|===|/
   '---'
    `,
    color: "SaddleBrown",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    type: "thing",
    name: "camera",
    art: String.raw` 
 .-------------------.
/--"--.------.------/|
|Kodak|__Ll__| [==] ||
|     | .--. | """" ||
|     |( () )|      ||
|     | '--' |      |/
'-----'------'------'
    `,
    color: "Gray",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    type: "thing",
    name: "crown",
    art: String.raw` 
       o 
    o^/|\^o
 o_^|\/*\/|^_o
o\*''.\|/.''*/o
 \\\\\\|//////
  {><><@><><}
  '"""""""""'
    `,
    color: "Gold",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    type: "thing",
    name: "floppyDisk",
    art: String.raw` 
 _________________
| | ___________ |o|
| | ___________ | |
| | ___________ | |
| | ___________ | |
| |_____________| |
|     _______     |
|    |       |   ||
|    |       |   V|
|____|_______|____|
    `,
    color: "DarkSlateGray",
    height: 10,
    author: "Robert Craggs",
  },
  {
    type: "thing",
    name: "gift",
    art: String.raw` 
    _  _
 __(_\/_)__
|____||____|
|    ||    |
|____||____|
    `,
    color: "Red",
    height: 5,
    author: "Laura Brown",
  },
  {
    type: "thing",
    name: "plane",
    art: String.raw` 
            __/\__
           '==/\=='
 ____________/__\____________
/____________________________\
  __||__||__/.--.\__||__||__
 /__|___|___( >< )___|___|__\
           _/.--.\_
          (/------\)
    `,
    color: "Red",
    height: 8,
    author: "Joan G. Stark",
  },
  {
    type: "thing",
    name: "rocket",
    art: String.raw`
       A
      / \
      |=|
      | |
      | |
     _|=|_
    / | | \
    | \,/ |
    |/" "\|
    `,
    color: "OrangeRed",
    height: 9,
    author: "Joan G. Stark",
  },
  {
    type: "thing",
    name: "television",
    art: String.raw` 
 ______________
|,----------.  |\
||           |=| |
||          || | |
||       . _o| | | __
|'-----------' |/ /~/
~~~~~~~~~~~~~~~  /o/
                 ~~
    `,
    color: "Cornsilk",
    height: 8,
    author: "Ojoshiro",
  },
  {
    type: "thing",
    name: "tombstone",
    art: String.raw` 
      ,-=-.
     /  +  \
     | ~~~ |
     |R.I.P|
\vV,,|_____|,,Vv/
    `,
    color: "Gray",
    height: 5,
    author: "Hayley Jane Wakenshaw",
  },
  {
    type: "banner",
    name: "dev",
    art: String.raw`
  ____  _______     __
 |  _ \| ____\ \   / /
 | | | |  _|  \ \ / / 
 | |_| | |___  \ V /  
 |____/|_____|  \_/   
    `,
    color: "MediumPurple",
    height: 5,
    author: "",
  },
  {
    type: "banner",
    name: "hello",
    art: String.raw`
  _   _      _ _       
 | | | | ___| | | ___  
 | |_| |/ _ \ | |/ _ \ 
 |  _  |  __/ | | (_) |
 |_| |_|\___|_|_|\___/ 
    `,
    color: "DeepSkyBlue",
    height: 5,
    author: "ASCII Printer",
  },
  {
    type: "banner",
    name: "production",
    art: String.raw`
  ____  ____   ___  ____  
 |  _ \|  _ \ / _ \|  _ \ 
 | |_) | |_) | | | | | | |
 |  __/|  _ <| |_| | |_| |
 |_|   |_| \_\\___/|____/ 
    `,
    color: "LimeGreen",
    height: 5,
    author: "",
  },
  {
    type: "banner",
    name: "staging",
    art: String.raw`
  ____ _____  _    ____ _____ 
 / ___|_   _|/ \  / ___| ____|
 \___ \ | | / _ \| |  _|  _|  
  ___) || |/ ___ \ |_| | |___ 
 |____/ |_/_/   \_\____|_____|
    `,
    color: "DarkOrange",
    height: 5,
    author: "",
  },
  {
    type: "banner",
    name: "welcome",
    art: String.raw`
 __        __   _                          
 \ \      / /__| | ___ ___  _ __ ___   ___ 
  \ \ /\ / / _ \ |/ __/ _ \| '_ ' _ \ / _ \
   \ V  V /  __/ | (_| (_) | | | | | |  __/
    \_/\_/ \___|_|\___\___/|_| |_| |_|\___|
    `,
    color: "DeepSkyBlue",
    height: 5,
    author: "",
  },
];
/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Lorraine Ipsum Frontend */

var intro = document.getElementById("intro");
var btnStart = document.getElementById("btn-start");

var generatedContent = document.getElementById("generated-content");
var inputParagraphes = document.getElementById("input-paragraphes");
var btnGenerate = document.getElementById("btn-generate");
var btnCopy = document.getElementById("btn-copy");

/* Intro */

btnStart.addEventListener("click", () => {
  document.body.classList.add("started");

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);
});

/* Process */

function changeContent() {
  document.body.classList.add("transition");

  setTimeout(() => {
    generatedContent.innerHTML = generateParagraphes(
      parseInt(inputParagraphes.value)
    );
    document.body.classList.remove("transition");
  }, 600);
}

function copyGeneratedContent() {
  var textToCopy = generatedContent.innerText;

  if (typeof copyToClipboard === "function") {
    copyToClipboard(textToCopy).then(function (copied) {
      if (!copied) {
        copyGeneratedContentFallback(textToCopy);
      }
    }).catch(function () {
      copyGeneratedContentFallback(textToCopy);
    });
    return;
  }

  copyGeneratedContentFallback(textToCopy);
}

function copyGeneratedContentFallback(textToCopy) {
  var temporaryTextarea = document.createElement("textarea");

  temporaryTextarea.value = textToCopy;
  temporaryTextarea.setAttribute("readonly", "");
  temporaryTextarea.style.position = "fixed";
  temporaryTextarea.style.top = "-9999px";
  document.body.appendChild(temporaryTextarea);
  temporaryTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(temporaryTextarea);
}

btnGenerate.addEventListener("click", () => {
  changeContent();
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    changeContent();
  }
});

btnCopy.addEventListener("click", () => {
  copyGeneratedContent();
});

/* Init */

document.addEventListener("DOMContentLoaded", function () {
  printRandomAscii();
  if (!isMobile()) {
    changeTitleOnBlur("A la royotte !");
  }
});

/*____________________________________ USEFOOL FUNCTIONS ____________________________________*/

/* Functions about random */

function getRandomIntBetween(min, max) {
  min = Math.ceil(Number(min));
  max = Math.floor(Number(max));

  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return NaN;
  }

  if (min > max) {
    var oldMin = min;
    min = max;
    max = oldMin;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloatBetween(min, max, decimals) {
  min = Number(min);
  max = Number(max);

  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return NaN;
  }

  if (min > max) {
    var oldMin = min;
    min = max;
    max = oldMin;
  }

  var randomNumber = Math.random() * (max - min) + min;

  return decimals === undefined ? randomNumber : roundNumber(randomNumber, decimals);
}

function getRandomIdFromArray(arrayName) {
  if (!arrayName || arrayName.length === 0) {
    return -1;
  }

  return Math.floor(Math.random() * arrayName.length);
}

function getRandomValueFromArray(arrayName) {
  var randomId = getRandomIdFromArray(arrayName);

  return randomId === -1 ? undefined : arrayName[randomId];
}

function shuffleArray(arrayName) {
  if (!Array.isArray(arrayName)) {
    return [];
  }

  var shuffledArray = arrayName.slice();

  for (var i = shuffledArray.length - 1; i > 0; i--) {
    var randomId = getRandomIntBetween(0, i);
    var temporaryValue = shuffledArray[i];
    shuffledArray[i] = shuffledArray[randomId];
    shuffledArray[randomId] = temporaryValue;
  }

  return shuffledArray;
}

function probability(probability, on = 100) {
  probability = Number(probability);
  on = Number(on);

  if (!Number.isFinite(probability) || !Number.isFinite(on) || on <= 0) {
    return false;
  }

  probability = Math.max(0, Math.min(probability, on));

  return Math.random() * on < probability;
}

function getRandomColor() {
  var hexLetters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  var randomColor = "#";

  for (var i = 0; i < 6; i++) {
    randomColor += getRandomValueFromArray(hexLetters);
  }

  return randomColor;
}

/* Functions about arrays */

function uniqueArray(arrayName) {
  if (!Array.isArray(arrayName)) {
    return [];
  }

  return arrayName.filter(function (value, id) {
    return arrayName.indexOf(value) === id;
  });
}

function compactArray(arrayName) {
  if (!Array.isArray(arrayName)) {
    return [];
  }

  return arrayName.filter(Boolean);
}

function chunkArray(arrayName, size) {
  if (!Array.isArray(arrayName)) {
    return [];
  }

  size = Math.max(1, Math.floor(Number(size)) || 1);

  var chunks = [];

  for (var i = 0; i < arrayName.length; i += size) {
    chunks.push(arrayName.slice(i, i + size));
  }

  return chunks;
}

/* Functions about formats */

function isConsonant(x) {
  if (typeof x !== "string") {
    return false;
  }

  return (
    [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "z",
    ].indexOf(x.toLowerCase()) !== -1
  );
}

function isVowel(x) {
  if (typeof x !== "string") {
    return false;
  }

  return ["a", "e", "i", "o", "u", "y"].indexOf(x.toLowerCase()) !== -1;
}

function beautifyNumber(x) {
  return String(x).replace(/\B(?!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
}

function clampNumber(number, min, max) {
  number = Number(number);
  min = Number(min);
  max = Number(max);

  if (!Number.isFinite(number) || !Number.isFinite(min) || !Number.isFinite(max)) {
    return NaN;
  }

  if (min > max) {
    var oldMin = min;
    min = max;
    max = oldMin;
  }

  return Math.min(Math.max(number, min), max);
}

function roundNumber(number, decimals = 0) {
  number = Number(number);
  decimals = Math.max(0, Math.floor(Number(decimals)) || 0);

  if (!Number.isFinite(number)) {
    return NaN;
  }

  var multiplier = Math.pow(10, decimals);

  return Math.round(number * multiplier) / multiplier;
}

function mapNumber(number, inMin, inMax, outMin, outMax) {
  number = Number(number);
  inMin = Number(inMin);
  inMax = Number(inMax);
  outMin = Number(outMin);
  outMax = Number(outMax);

  if (
    !Number.isFinite(number) ||
    !Number.isFinite(inMin) ||
    !Number.isFinite(inMax) ||
    !Number.isFinite(outMin) ||
    !Number.isFinite(outMax) ||
    inMin === inMax
  ) {
    return NaN;
  }

  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function countCharacter(string, character) {
  return String(string).split(character).length - 1;
}

function capitalize(string) {
  string = String(string);

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function slugify(string) {
  return String(string)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function truncate(string, maxLength, suffix = "...") {
  string = String(string);
  maxLength = Math.max(0, Math.floor(Number(maxLength)) || 0);
  suffix = String(suffix);

  if (string.length <= maxLength) {
    return string;
  }

  if (maxLength <= suffix.length) {
    return string.slice(0, maxLength);
  }

  return string.slice(0, maxLength - suffix.length) + suffix;
}

function escapeHtml(string) {
  return String(string).replace(/[&<>"']/g, function (character) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[character];
  });
}

/* Functions about styles */

function isLight(color) {
  var hex = String(color).replace("#", "").trim();

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map(function (letter) {
        return letter + letter;
      })
      .join("");
  }

  if (!/^[0-9a-f]{6}$/i.test(hex)) {
    return false;
  }

  var r = parseInt(hex.substr(0, 2), 16);
  var g = parseInt(hex.substr(2, 2), 16);
  var b = parseInt(hex.substr(4, 2), 16);
  var brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 155;
}

function transformToBlob(element) {
  if (!element || !element.style) {
    return;
  }

  function randomRadius() {
    var percentage1 = getRandomIntBetween(25, 75);
    var percentage1bis = 100 - percentage1;
    var percentage2 = getRandomIntBetween(25, 75);
    var percentage2bis = 100 - percentage2;
    var percentage3 = getRandomIntBetween(25, 75);
    var percentage3bis = 100 - percentage3;
    var percentage4 = getRandomIntBetween(25, 75);
    var percentage4bis = 100 - percentage4;
    return `${percentage1}% ${percentage1bis}% ${percentage2bis}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage4bis}% ${percentage3bis}%`;
  }

  element.style.borderRadius = randomRadius();
}

function setCssVariable(name, value, element = document.documentElement) {
  if (!element || !element.style) {
    return;
  }

  element.style.setProperty(name, value);
}

function getCssVariable(name, element = document.documentElement) {
  if (!element || !window.getComputedStyle) {
    return "";
  }

  return window.getComputedStyle(element).getPropertyValue(name).trim();
}

/* Functions about clipboard */

async function copyToClipboard(value) {
  var text = String(value);

  if (!navigator.clipboard || !window.isSecureContext) {
    return false;
  }

  await navigator.clipboard.writeText(text);
  console.log('"' + text + '" successfully copied to clipboard!');

  return true;
}

/* Functions about Google and searching */

function searchOnGoogle(query) {
  window.open("https://google.com/search?q=" + encodeURIComponent(query), "newTab");
}

function searchOnGoogleImage(query) {
  window.open(
    "https://google.com/search?q=" + encodeURIComponent(query) + "&tbm=isch",
    "newTab"
  );
}

function openUrl(query) {
  window.open(query, "newTab");
}

function getUrlParameter(name, url = window.location.href) {
  try {
    return new URL(url).searchParams.get(name);
  } catch (error) {
    return null;
  }
}

/* Functions about page title */

function changeTitleOnBlur(string) {
  var originalTitle = document.title;

  window.addEventListener("focus", function () {
    document.title = originalTitle;
  });

  window.addEventListener("blur", function () {
    document.title = string;
  });
}

/* Functions about responsive */

function isMobile() {
  if (navigator.userAgentData && typeof navigator.userAgentData.mobile === "boolean") {
    return navigator.userAgentData.mobile;
  }

  if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }

  return /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent || "");
}

/* Functions about time */

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, Math.max(0, Number(ms) || 0));
  });
}

function debounce(callback, delay = 250) {
  var timeoutId;

  return function () {
    var context = this;
    var args = arguments;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      callback.apply(context, args);
    }, Math.max(0, Number(delay) || 0));
  };
}

function throttle(callback, delay = 250) {
  var isWaiting = false;
  var lastArgs;
  var lastContext;

  return function () {
    if (isWaiting) {
      lastArgs = arguments;
      lastContext = this;
      return;
    }

    callback.apply(this, arguments);
    isWaiting = true;

    setTimeout(function () {
      isWaiting = false;

      if (lastArgs) {
        callback.apply(lastContext, lastArgs);
        lastArgs = undefined;
        lastContext = undefined;
      }
    }, Math.max(0, Number(delay) || 0));
  };
}
/*____________________________________ LORRAINE IPSUM LIBRARY ____________________________________*/

var villesLorraine = [
  "Abainville",
  "Abaucourt",
  "Abaucourt-Hautecourt",
  "Abbéville-lès-Conflans",
  "Les Ableuvenettes",
  "Aboncourt",
  "Aboncourt",
  "Aboncourt-sur-Seille",
  "Abreschviller",
  "Achain",
  "Achen",
  "Adaincourt",
  "Adelange",
  "Affléville",
  "Affracourt",
  "Agincourt",
  "Ahéville",
  "Aincreville",
  "Aingeray",
  "Aingeville",
  "Ainvelle",
  "Ajoncourt",
  "Alaincourt-la-Côte",
  "Albestroff",
  "Algrange",
  "Allain",
  "Allamont",
  "Allamps",
  "Allarmont",
  "Allondrelle-la-Malmaison",
  "Alsting",
  "Altrippe",
  "Altviller",
  "Alzing",
  "Amance",
  "Amanty",
  "Amanvillers",
  "Ambacourt",
  "Ambly-sur-Meuse",
  "Amel-sur-l'Étang",
  "Amelécourt",
  "Amenoncourt",
  "Ameuvelle",
  "Amnéville",
  "Ancemont",
  "Ancerville",
  "Ancerville",
  "Ancerviller",
  "Ancy-sur-Moselle",
  "Andernay",
  "Anderny",
  "Andilly",
  "Angevillers",
  "Anglemont",
  "Angomont",
  "Anould",
  "Anoux",
  "Ansauville",
  "Anthelupt",
  "Antilly",
  "Anzeling",
  "Aouze",
  "Apach",
  "Apremont-la-Forêt",
  "Arches",
  "Archettes",
  "Argancy",
  "Armaucourt",
  "Arnaville",
  "Aroffe",
  "Arracourt",
  "Arraincourt",
  "Arrancy-sur-Crusne",
  "Arraye-et-Han",
  "Arrentès-de-Corcieux",
  "Arriance",
  "Arry",
  "Ars-Laquenexy",
  "Ars-sur-Moselle",
  "Art-sur-Meurthe",
  "Arzviller",
  "Aspach",
  "Assenoncourt",
  "Athienville",
  "Attignéville",
  "Attigny",
  "Attilloncourt",
  "Atton",
  "Aube",
  "Auboué",
  "Aubréville",
  "Audun-le-Roman",
  "Audun-le-Tiche",
  "Augny",
  "Aulnois",
  "Aulnois-en-Perthois",
  "Aulnois-sur-Seille",
  "Aumetz",
  "Aumontzey",
  "Autigny-la-Tour",
  "Autrécourt-sur-Aire",
  "Autrepierre",
  "Autreville",
  "Autréville-Saint-Lambert",
  "Autreville-sur-Moselle",
  "Autrey",
  "Autrey",
  "Auzainvilliers",
  "Avillers",
  "Avillers",
  "Avillers-Sainte-Croix",
  "Avioth",
  "Avocourt",
  "Avrainville",
  "Avrainville",
  "Avranville",
  "Avricourt",
  "Avricourt",
  "Avril",
  "Ay-sur-Moselle",
  "Aydoilles",
  "Azannes-et-Soumazannes",
  "Azelot",
  "Azerailles",
  "Azoudange",
  "Baâlon",
  "Baccarat",
  "Bacourt",
  "Badménil-aux-Bois",
  "Badonviller",
  "Badonvilliers-Gérauvilliers",
  "Baerenthal",
  "La Baffe",
  "Bagneux",
  "Bains-les-Bains",
  "Bainville-aux-Miroirs",
  "Bainville-aux-Saules",
  "Bainville-sur-Madon",
  "Balléville",
  "Bambiderstroff",
  "Ban-de-Laveline",
  "Ban-de-Sapt",
  "Le Ban-Saint-Martin",
  "Ban-sur-Meurthe-Clefcy",
  "Bannay",
  "Bannoncourt",
  "Bantheville",
  "Bar-le-Duc",
  "Barbas",
  "Barbey-Seroux",
  "Barbonville",
  "Barchain",
  "Barisey-au-Plain",
  "Barisey-la-Côte",
  "Les Baroches",
  "Baronville",
  "Barst",
  "Barville",
  "Baslieux",
  "Basse-Ham",
  "Basse-Rentgen",
  "Basse-sur-le-Rupt",
  "Bassing",
  "Bathelémont",
  "Batilly",
  "Battexey",
  "Battigny",
  "Baudignécourt",
  "Baudonvilliers",
  "Baudrecourt",
  "Baudrémont",
  "Baudricourt",
  "Baulny",
  "Bauzemont",
  "Bayecourt",
  "Bayon",
  "Bayonville-sur-Mad",
  "Bazailles",
  "Bazegney",
  "Bazeilles-sur-Othain",
  "Bazien",
  "Bazincourt-sur-Saulx",
  "Bazoilles-et-Ménil",
  "Bazoilles-sur-Meuse",
  "Bazoncourt",
  "Beauclair",
  "Beaufort-en-Argonne",
  "Beaufremont",
  "Beaulieu-en-Argonne",
  "Beauménil",
  "Beaumont",
  "Beaumont-en-Verdunois",
  "Beausite",
  "Bébing",
  "Béchamps",
  "Béchy",
  "Begnécourt",
  "Behonne",
  "Behren-lès-Forbach",
  "Bellange",
  "Belleau",
  "Bellefontaine",
  "Belleray",
  "Belles-Forêts",
  "Belleville",
  "Belleville-sur-Meuse",
  "Belmont-lès-Darney",
  "Belmont-sur-Buttant",
  "Belmont-sur-Vair",
  "Belrain",
  "Belrupt",
  "Belrupt-en-Verdunois",
  "Belval",
  "Bénaménil",
  "Bénestroff",
  "Beney-en-Woëvre",
  "Béning-lès-Saint-Avold",
  "Benney",
  "Berg-sur-Moselle",
  "Bérig-Vintrange",
  "Berling",
  "Bermering",
  "Bernécourt",
  "Berthelming",
  "Bertrambois",
  "Bertrange",
  "Bertrichamps",
  "Bertrimoutier",
  "Berviller-en-Moselle",
  "Béthelainville",
  "Béthincourt",
  "Bettainvillers",
  "Bettange",
  "Bettborn",
  "Bettegney-Saint-Brice",
  "Bettelainville",
  "Betting",
  "Bettoncourt",
  "Bettviller",
  "Le Beulay",
  "Beurey-sur-Saulx",
  "Beuveille",
  "Beuvezin",
  "Beuvillers",
  "Beux",
  "Bey-sur-Seille",
  "Beyren-lès-Sierck",
  "Bezange-la-Grande",
  "Bezange-la-Petite",
  "Bezaumont",
  "Bezonvaux",
  "Bibiche",
  "Bickenholtz",
  "Bicqueley",
  "Bidestroff",
  "Biding",
  "Biécourt",
  "Biencourt-sur-Orge",
  "Bienville-la-Petite",
  "Biffontaine",
  "Billy-sous-Mangiennes",
  "Bining",
  "Bioncourt",
  "Bionville",
  "Bionville-sur-Nied",
  "Bislée",
  "Bisten-en-Lorraine",
  "Bistroff",
  "Bitche",
  "Blainville-sur-l'Eau",
  "Blâmont",
  "Blanche-Église",
  "Blanzée",
  "Blémerey",
  "Blémerey",
  "Blénod-lès-Pont-à-Mousson",
  "Blénod-lès-Toul",
  "Bleurville",
  "Blevaincourt",
  "Blies-Ébersing",
  "Blies-Guersviller",
  "Bliesbruck",
  "Bocquegney",
  "Boinville-en-Woëvre",
  "Bois-de-Champ",
  "Boismont",
  "Boncourt",
  "Boncourt-sur-Meuse",
  "Bonnet",
  "Bonviller",
  "Bonvillet",
  "Bonzée",
  "Borville",
  "Boucheporn",
  "Le Bouchon-sur-Saulx",
  "Bouconville-sur-Madt",
  "Boucq",
  "Bouillonville",
  "Boulaincourt",
  "Boulange",
  "Boulay-Moselle",
  "Bouligny",
  "Bouquemont",
  "Bourdonnay",
  "Boureuilles",
  "Bourgaltroff",
  "La Bourgonce",
  "Bourscheid",
  "Bousbach",
  "Bousse",
  "Bousseviller",
  "Boust",
  "Boustroff",
  "Bouvron",
  "Bouxières-aux-Bois",
  "Bouxières-aux-Chênes",
  "Bouxières-aux-Dames",
  "Bouxières-sous-Froidmont",
  "Bouxurulles",
  "Bouzanville",
  "Bouzemont",
  "Bouzonville",
  "Bovée-sur-Barboure",
  "Boviolles",
  "Brabant-en-Argonne",
  "Brabant-le-Roi",
  "Brabant-sur-Meuse",
  "Brainville",
  "Bralleville",
  "Brandeville",
  "Brantigny",
  "Braquis",
  "Bras-sur-Meuse",
  "Bratte",
  "Brauvilliers",
  "Brechainville",
  "Bréhain",
  "Bréhain-la-Ville",
  "Bréhéville",
  "Breidenbach",
  "Breistroff-la-Grande",
  "Bréménil",
  "Brémoncourt",
  "La Bresse",
  "Brettnach",
  "Breux",
  "Brieulles-sur-Meuse",
  "Briey",
  "Brillon-en-Barrois",
  "Brin-sur-Seille",
  "Brixey-aux-Chanoines",
  "Brizeaux",
  "Brocourt-en-Argonne",
  "Bronvaux",
  "Brouck",
  "Brouderdorff",
  "Brouennes",
  "Broussey-en-Blois",
  "Broussey-Raulecourt",
  "Brouvelieures",
  "Brouville",
  "Brouviller",
  "Brû",
  "Brulange",
  "Bruley",
  "Bruville",
  "Bruyères",
  "Buchy",
  "Buding",
  "Budling",
  "Buhl-Lorraine",
  "Buissoncourt",
  "Bulgnéville",
  "Bulligny",
  "Bult",
  "Bure",
  "Bures",
  "Burey-en-Vaux",
  "Burey-la-Côte",
  "Buriville",
  "Burlioncourt",
  "Burthecourt-aux-Chênes",
  "Burtoncourt",
  "Bussang",
  "Buxières-sous-les-Côtes",
  "Buzy-Darmont",
  "Cappel",
  "Carling",
  "Cattenom",
  "Ceintrey",
  "Celles-sur-Plaine",
  "Certilleux",
  "Cerville",
  "Cesse",
  "Chaillon",
  "Chailly-lès-Ennery",
  "Chalaines",
  "Chaligny",
  "Chamagne",
  "Chambley-Bussières",
  "Chambrey",
  "Champ-le-Duc",
  "Champdray",
  "Champenoux",
  "Champey-sur-Moselle",
  "Champigneulles",
  "Champneuville",
  "Champougny",
  "Chanteheux",
  "Chanteraine",
  "Chantraine",
  "Chanville",
  "Chaouilley",
  "La Chapelle-aux-Bois",
  "La Chapelle-devant-Bruyères",
  "Chardogne",
  "Charency-Vezin",
  "Charey",
  "Charleville-sous-Bois",
  "Charly-Oradour",
  "Charmes",
  "Charmes-la-Côte",
  "Charmois",
  "Charmois-devant-Bruyères",
  "Charmois-l'Orgueilleux",
  "Charny-sur-Meuse",
  "Charpentry",
  "Chassey-Beaupré",
  "Châtas",
  "Château-Bréhain",
  "Château-Rouge",
  "Château-Salins",
  "Château-Voué",
  "Châtel-Saint-Germain",
  "Châtel-sur-Moselle",
  "Châtenois",
  "Châtillon-sous-les-Côtes",
  "Châtillon-sur-Saône",
  "Chattancourt",
  "Chaudeney-sur-Moselle",
  "Chauffecourt",
  "Chaumont-devant-Damvillers",
  "Chaumont-sur-Aire",
  "Chaumousey",
  "Chauvency-le-Château",
  "Chauvency-Saint-Hubert",
  "Chauvoncourt",
  "Chavelot",
  "Chavigny",
  "Chazelles-sur-Albe",
  "Chef-Haut",
  "Chémery-les-Deux",
  "Cheminot",
  "Chenevières",
  "Chenicourt",
  "Chenières",
  "Cheniménil",
  "Chenois",
  "Cheppy",
  "Chérisey",
  "Chermisey",
  "Chesny",
  "Chicourt",
  "Chieulles",
  "Choloy-Ménillot",
  "Chonville-Malaumont",
  "Cierges-sous-Montfaucon",
  "Circourt",
  "Circourt-sur-Mouzon",
  "Cirey-sur-Vezouze",
  "Le Claon",
  "Claudon",
  "Clayeures",
  "Clémery",
  "Clérey-la-Côte",
  "Clérey-sur-Brenon",
  "Le Clerjus",
  "Clermont-en-Argonne",
  "Cléry-le-Grand",
  "Cléry-le-Petit",
  "Cleurie",
  "Clézentaine",
  "Clouange",
  "Cocheren",
  "Coin-lès-Cuvry",
  "Coin-sur-Seille",
  "Coinches",
  "Coincourt",
  "Coincy",
  "Colligny",
  "Colmen",
  "Colmey",
  "Colombey-les-Belles",
  "Colroy-la-Grande",
  "Combles-en-Barrois",
  "Combres-sous-les-Côtes",
  "Combrimont",
  "Commercy",
  "Condé-Northen",
  "Conflans-en-Jarnisy",
  "Cons-la-Grandville",
  "Consenvoye",
  "Conthil",
  "Contrexéville",
  "Contrisson",
  "Contz-les-Bains",
  "Corcieux",
  "Cornimont",
  "Corny-sur-Moselle",
  "Cosnes-et-Romain",
  "Coume",
  "Courbesseaux",
  "Courcelles",
  "Courcelles-Chaussy",
  "Courcelles-en-Barrois",
  "Courcelles-sous-Châtenois",
  "Courcelles-sur-Aire",
  "Courcelles-sur-Nied",
  "Courouvre",
  "Cousances-les-Forges",
  "Cousances-lès-Triconville",
  "Coussey",
  "Couvertpuis",
  "Couvonges",
  "Coyviller",
  "Craincourt",
  "Crainvilliers",
  "Crantenoy",
  "Créhange",
  "Crépey",
  "Creutzwald",
  "Crévéchamps",
  "Crévic",
  "Crézilles",
  "Crion",
  "Croismare",
  "La Croix-aux-Mines",
  "Crusnes",
  "Cuisy",
  "Cumières-le-Mort-Homme",
  "Cunel",
  "Custines",
  "Cutry",
  "Cutting",
  "Cuvry",
  "Dabo",
  "Dagonville",
  "Dainville-Bertheléville",
  "Dalem",
  "Dalhain",
  "Dalstein",
  "Damas-aux-Bois",
  "Damas-et-Bettegney",
  "Damblain",
  "Damelevières",
  "Damloup",
  "Dammarie-sur-Saulx",
  "Dampvitoux",
  "Damvillers",
  "Danne-et-Quatre-Vents",
  "Dannelbourg",
  "Dannevoux",
  "Darney",
  "Darney-aux-Chênes",
  "Darnieulles",
  "Deinvillers",
  "Delme",
  "Delouze-Rosières",
  "Delut",
  "Demange-aux-Eaux",
  "Deneuvre",
  "Denipaire",
  "Denting",
  "Derbamont",
  "Desseling",
  "Destord",
  "Destry",
  "Deuxville",
  "Deycimont",
  "Deyvillers",
  "Diane-Capelle",
  "Diarville",
  "Diebling",
  "Dieppe-sous-Douaumont",
  "Diesen",
  "Dieue-sur-Meuse",
  "Dieulouard",
  "Dieuze",
  "Diffembach-lès-Hellimer",
  "Dignonville",
  "Dinozé",
  "Distroff",
  "Docelles",
  "Dogneville",
  "Dolaincourt",
  "Dolcourt",
  "Dolving",
  "Dombasle-devant-Darney",
  "Dombasle-en-Argonne",
  "Dombasle-en-Xaintois",
  "Dombasle-sur-Meurthe",
  "Dombras",
  "Dombrot-le-Sec",
  "Dombrot-sur-Vair",
  "Domèvre-en-Haye",
  "Domèvre-sous-Montfort",
  "Domèvre-sur-Avière",
  "Domèvre-sur-Durbion",
  "Domèvre-sur-Vezouze",
  "Domfaing",
  "Domgermain",
  "Domjevin",
  "Domjulien",
  "Dommarie-Eulmont",
  "Dommartemont",
  "Dommartin-aux-Bois",
  "Dommartin-la-Chaussée",
  "Dommartin-la-Montagne",
  "Dommartin-lès-Remiremont",
  "Dommartin-lès-Toul",
  "Dommartin-lès-Vallois",
  "Dommartin-sous-Amance",
  "Dommartin-sur-Vraine",
  "Dommary-Baroncourt",
  "Domnom-lès-Dieuze",
  "Dompaire",
  "Dompcevrin",
  "Dompierre",
  "Dompierre-aux-Bois",
  "Domprix",
  "Domptail",
  "Domptail-en-l'Air",
  "Domremy-la-Canne",
  "Domrémy-la-Pucelle",
  "Domvallier",
  "Doncières",
  "Doncourt-aux-Templiers",
  "Doncourt-lès-Conflans",
  "Doncourt-lès-Longuyon",
  "Donjeux",
  "Donnelay",
  "Dornot",
  "Douaumont",
  "Doulcon",
  "Dounoux",
  "Drouville",
  "Dugny-sur-Meuse",
  "Dun-sur-Meuse",
  "Duzey",
  "Ébersviller",
  "Éblange",
  "Écouviez",
  "Écrouves",
  "Écurey-en-Verdunois",
  "Éguelshardt",
  "Eincheville",
  "Einvaux",
  "Einville-au-Jard",
  "Eix",
  "Éloyes",
  "Elvange",
  "Elzange",
  "Emberménil",
  "Enchenberg",
  "Ennery",
  "Entrange",
  "Entre-deux-Eaux",
  "Les Éparges",
  "Épiez-sur-Chiers",
  "Épiez-sur-Meuse",
  "Épinal",
  "Épinonville",
  "Éply",
  "Epping",
  "Erbéviller-sur-Amezule",
  "Erching",
  "Érize-la-Brûlée",
  "Érize-la-Petite",
  "Érize-Saint-Dizier",
  "Ernestviller",
  "Erneville-aux-Bois",
  "Errouville",
  "Erstroff",
  "Escherange",
  "Escles",
  "Esley",
  "Esnes-en-Argonne",
  "Essegney",
  "Essey-et-Maizerais",
  "Essey-la-Côte",
  "Essey-lès-Nancy",
  "Estrennes",
  "Étain",
  "Les Étangs",
  "Étival-Clairefontaine",
  "Éton",
  "Étraye",
  "Étreval",
  "Etting",
  "Etzling",
  "Eulmont",
  "Euvezin",
  "Euville",
  "Évaux-et-Ménil",
  "Évrange",
  "Èvres",
  "Failly",
  "Fains-Véel",
  "Falck",
  "Fameck",
  "Farébersviller",
  "Farschviller",
  "Faucompierre",
  "Fauconcourt",
  "Faulquemont",
  "Faulx",
  "Favières",
  "Fays",
  "Fécocourt",
  "Fénétrange",
  "Fenneviller",
  "Ferdrupt",
  "Ferrières",
  "Fèves",
  "Féy",
  "Fey-en-Haye",
  "Fignévelle",
  "Fillières",
  "Filstroff",
  "Fiménil",
  "Fixem",
  "Flainval",
  "Flassigny",
  "Flastroff",
  "Flavigny-sur-Moselle",
  "Fleisheim",
  "Flétrange",
  "Fleury",
  "Fleury-devant-Douaumont",
  "Fléville-devant-Nancy",
  "Fléville-Lixières",
  "Flévy",
  "Flin",
  "Flirey",
  "Flocourt",
  "Florange",
  "Florémont",
  "Foameix-Ornel",
  "Folkling",
  "Folschviller",
  "Fomerey",
  "Fontaines-Saint-Clair",
  "Fontenay",
  "Fontenoy-la-Joûte",
  "Fontenoy-le-Château",
  "Fontenoy-sur-Moselle",
  "Fonteny",
  "Fontoy",
  "Forbach",
  "Forcelles-Saint-Gorgon",
  "Forcelles-sous-Gugney",
  "La Forge",
  "Les Forges",
  "Forges-sur-Meuse",
  "Fossieux",
  "Foucaucourt-sur-Thabas",
  "Fouchécourt",
  "Fouchères-aux-Bois",
  "Foug",
  "Foulcrey",
  "Fouligny",
  "Foville",
  "Fraimbois",
  "Frain",
  "Fraisnes-en-Saintois",
  "Fraize",
  "Francaltroff",
  "Francheville",
  "Franconville",
  "Frapelle",
  "Fraquelfing",
  "Frauenberg",
  "Frebécourt",
  "Freistroff",
  "Fréménil",
  "Frémeréville-sous-les-Côtes",
  "Frémery",
  "Frémestroff",
  "Fremifontaine",
  "Frémonville",
  "Frenelle-la-Grande",
  "Frenelle-la-Petite",
  "Frénois",
  "Fresnes-au-Mont",
  "Fresnes-en-Saulnois",
  "Fresnes-en-Woëvre",
  "Fresnois-la-Montagne",
  "Fresse-sur-Moselle",
  "Fréville",
  "Freybouse",
  "Freyming-Merlebach",
  "Friauville",
  "Fribourg",
  "Frizon",
  "Froidos",
  "Frolois",
  "Fromeréville-les-Vallons",
  "Fromezey",
  "Frouard",
  "Froville",
  "Futeau",
  "Gandrange",
  "Garrebourg",
  "Gavisse",
  "Gélacourt",
  "Gélaucourt",
  "Gellenoncourt",
  "Gelucourt",
  "Gelvécourt-et-Adompt",
  "Gemaingoutte",
  "Gemmelaincourt",
  "Gémonville",
  "Gendreville",
  "Génicourt-sur-Meuse",
  "Gérardmer",
  "Gerbamont",
  "Gerbécourt",
  "Gerbécourt-et-Haplemont",
  "Gerbépal",
  "Gerbéviller",
  "Gercourt-et-Drillancourt",
  "Germiny",
  "Germonville",
  "Géry",
  "Gesnes-en-Argonne",
  "Geville",
  "Gézoncourt",
  "Gibeaumeix",
  "Gignéville",
  "Gigney",
  "Gimécourt",
  "Gincrey",
  "Girancourt",
  "Giraumont",
  "Girauvoisin",
  "Gircourt-lès-Viéville",
  "Girecourt-sur-Durbion",
  "Giriviller",
  "Girmont",
  "Girmont-Val-d'Ajol",
  "Gironcourt-sur-Vraine",
  "Givrauval",
  "Givrycourt",
  "Glatigny",
  "Glonville",
  "Godoncourt",
  "Goetzenbruck",
  "Gogney",
  "Goin",
  "Golbey",
  "Gomelange",
  "Gondrecourt-Aix",
  "Gondrecourt-le-Château",
  "Gondreville",
  "Gondrexange",
  "Gondrexon",
  "Gorcy",
  "Gorhey",
  "Gorze",
  "Gosselming",
  "Gouraincourt",
  "Goussaincourt",
  "Goviller",
  "Grand",
  "Grand-Failly",
  "La Grande-Fosse",
  "Grandrupt",
  "Grandrupt-de-Bains",
  "Grandvillers",
  "Granges-sur-Vologne",
  "Gravelotte",
  "Grémecey",
  "Gremilly",
  "Gréning",
  "Greux",
  "Grignoncourt",
  "Grimaucourt-en-Woëvre",
  "Grimaucourt-près-Sampigny",
  "Grimonviller",
  "Grindorff-Bizing",
  "Gripport",
  "Griscourt",
  "Gros-Réderching",
  "Grosbliederstroff",
  "Grosrouvres",
  "Grostenquin",
  "Gruey-lès-Surance",
  "Grundviller",
  "Guebenhouse",
  "Guébestroff",
  "Guéblange-lès-Dieuze",
  "Guébling",
  "Guénange",
  "Guenviller",
  "Guermange",
  "Guerpont",
  "Guerstling",
  "Guerting",
  "Guessling-Hémering",
  "Gugnécourt",
  "Gugney",
  "Gugney-aux-Aulx",
  "Guinglange",
  "Guinkirchen",
  "Guinzeling",
  "Guntzviller",
  "Gussainville",
  "Gye",
  "Hablainville",
  "Haboudange",
  "Hadigny-les-Verrières",
  "Hadol",
  "Hagécourt",
  "Hagen",
  "Hagéville",
  "Hagnéville-et-Roncourt",
  "Hagondange",
  "Haigneville",
  "Haillainville",
  "Haironville",
  "Hallering",
  "Halles-sous-les-Côtes",
  "Halloville",
  "Halstroff",
  "Ham-sous-Varsberg",
  "Hambach",
  "Hammeville",
  "Hamonville",
  "Hampont",
  "Han-devant-Pierrepont",
  "Han-lès-Juvigny",
  "Han-sur-Meuse",
  "Han-sur-Nied",
  "Hangviller",
  "Hannocourt",
  "Hannonville-sous-les-Côtes",
  "Hannonville-Suzémont",
  "Hanviller",
  "Haraucourt",
  "Haraucourt-sur-Seille",
  "Harbouey",
  "Harchéchamp",
  "Hardancourt",
  "Haréville",
  "Hargarten-aux-Mines",
  "Harmonville",
  "Harol",
  "Haroué",
  "Harprich",
  "Harreberg",
  "Harsault",
  "Hartzviller",
  "Harville",
  "Haselbourg",
  "Haspelschiedt",
  "Hatrize",
  "Hattigny",
  "Hauconcourt",
  "Haucourt-Moulaine",
  "Haudainville",
  "Haudiomont",
  "Haudonville",
  "Haumont-près-Samogneux",
  "Haussonville",
  "Haut-Clocher",
  "Haute-Kontz",
  "Haute-Vigneulles",
  "Hautmougey",
  "Les Hauts-de-Chée",
  "Havange",
  "Hayange",
  "La Haye",
  "Hayes",
  "Hazembourg",
  "Heillecourt",
  "Heining-lès-Bouzonville",
  "Heippes",
  "Hellering-lès-Fénétrange",
  "Hellimer",
  "Helstroff",
  "Hémilly",
  "Héming",
  "Hénaménil",
  "Hennecourt",
  "Hennemont",
  "Hennezel",
  "Henridorff",
  "Henriville",
  "Hérange",
  "Herbeuville",
  "Herbéviller",
  "Hergugney",
  "Hériménil",
  "Hermelange",
  "Herméville-en-Woëvre",
  "Herny",
  "Herpelmont",
  "Herserange",
  "Hertzing",
  "Hesse",
  "Hestroff",
  "Hettange-Grande",
  "Heudicourt-sous-les-Côtes",
  "Hévilliers",
  "Hilbesheim",
  "Hilsprich",
  "Hinckange",
  "Hoéville",
  "Holacourt",
  "Holling",
  "Holving",
  "Hombourg-Budange",
  "Hombourg-Haut",
  "Homécourt",
  "Hommarting",
  "Hommert",
  "Honskirch",
  "L'Hôpital",
  "Horville-en-Ornois",
  "Hoste",
  "Hottviller",
  "Houdelaincourt",
  "Houdelmont",
  "Houdemont",
  "Houdreville",
  "Houécourt",
  "Houéville",
  "Housseras",
  "Housséville",
  "La Houssière",
  "Hudiviller",
  "Hultehouse",
  "Hundling",
  "Hunting",
  "Hurbache",
  "Hussigny-Godbrange",
  "Hymont",
  "Ibigny",
  "Igney",
  "Igney",
  "Illange",
  "Imling",
  "Inglange",
  "Inor",
  "Insming",
  "Insviller",
  "Ippécourt",
  "Ippling",
  "Iré-le-Sec",
  "Isches",
  "Les Islettes",
  "Jaillon",
  "Jainvillotte",
  "Jallaucourt",
  "Jametz",
  "Jarménil",
  "Jarny",
  "Jarville-la-Malgrange",
  "Jaulny",
  "Jeandelaincourt",
  "Jeandelize",
  "Jeanménil",
  "Jésonville",
  "Jeuxey",
  "Jevoncourt",
  "Jezainville",
  "Jœuf",
  "Jolivet",
  "Jonville-en-Woëvre",
  "Joppécourt",
  "Jorxey",
  "Jouaville",
  "Joudreville",
  "Jouy-aux-Arches",
  "Jouy-en-Argonne",
  "Jubainville",
  "Julvécourt",
  "Jury",
  "Jussarupt",
  "Jussy",
  "Juvaincourt",
  "Juvelize",
  "Juvigny-en-Perthois",
  "Juvigny-sur-Loison",
  "Juville",
  "Juvrecourt",
  "Kalhausen",
  "Kanfen",
  "Kappelkinger",
  "Kédange-sur-Canner",
  "Kemplich",
  "Kerbach",
  "Kerling-lès-Sierck",
  "Kerprich-aux-Bois",
  "Kirsch-lès-Sierck",
  "Kirschnaumen",
  "Kirviller",
  "Klang",
  "Knutange",
  "Kœnigsmacker",
  "Kœur-la-Grande",
  "Kœur-la-Petite",
  "Kuntzig",
  "Labeuville",
  "Labry",
  "Lachalade",
  "Lachambre",
  "Lachapelle",
  "Lachaussée",
  "Lacroix-sur-Meuse",
  "Lafrimbolle",
  "Lagarde",
  "Lagney",
  "Lahaymeix",
  "Lahayville",
  "Laheycourt",
  "Laimont",
  "Laître-sous-Amance",
  "Laix",
  "Lalœuf",
  "Lamarche",
  "Lamath",
  "Lambach",
  "Lamorville",
  "Lamouilly",
  "Landange",
  "Landaville",
  "Landécourt",
  "Landrecourt-Lempire",
  "Landremont",
  "Landres",
  "Landroff",
  "Laneuvelotte",
  "Laneuveville-aux-Bois",
  "Laneuveville-derrière-Foug",
  "Laneuveville-devant-Bayon",
  "Laneuveville-devant-Nancy",
  "Laneuveville-en-Saulnois",
  "Laneuveville-lès-Lorquin",
  "Laneuville-au-Rupt",
  "Laneuville-sur-Meuse",
  "Lanfroicourt",
  "Langatte",
  "Langley",
  "Languimberg",
  "Lanhères",
  "Laning",
  "Lantéfontaine",
  "Laquenexy",
  "Laronxe",
  "Latour-en-Woëvre",
  "Laudrefang",
  "Laumesfeld",
  "Launstroff",
  "Laval-sur-Vologne",
  "Lavallée",
  "Laveline-devant-Bruyères",
  "Laveline-du-Houx",
  "Lavincourt",
  "Lavoye",
  "Laxou",
  "Lay-Saint-Christophe",
  "Lay-Saint-Remy",
  "Lebeuville",
  "Légéville-et-Bonfays",
  "Leintrey",
  "Lelling",
  "Lemainville",
  "Lemberg",
  "Leménil-Mitry",
  "Lemmecourt",
  "Lemmes",
  "Lemoncourt",
  "Lemud",
  "Lengelsheim",
  "Léning",
  "Lenoncourt",
  "Lépanges-sur-Vologne",
  "Lérouville",
  "Lerrain",
  "Lesménils",
  "Lesse",
  "Lesseux",
  "Lessy",
  "Létricourt",
  "Levoncourt",
  "Lexy",
  "Ley",
  "Leyr",
  "Leyviller",
  "Lezey",
  "Lhor",
  "Lidrezing",
  "Liederschiedt",
  "Liéhon",
  "Liézey",
  "Liffol-le-Grand",
  "Lignéville",
  "Lignières-sur-Aire",
  "Ligny-en-Barrois",
  "Limey-Remenauville",
  "Lindre-Basse",
  "Lindre-Haute",
  "Liny-devant-Dun",
  "Liocourt",
  "Lion-devant-Dun",
  "Lironcourt",
  "Lironville",
  "Lisle-en-Barrois",
  "Lisle-en-Rigault",
  "Lissey",
  "Liverdun",
  "Lixheim",
  "Lixing-lès-Rouhling",
  "Lixing-lès-Saint-Avold",
  "Loisey-Culey",
  "Loison",
  "Loisy",
  "Lommerange",
  "Longchamp",
  "Longchamp-sous-Châtenois",
  "Longchamps-sur-Aire",
  "Longeaux",
  "Longeville-en-Barrois",
  "Longeville-lès-Metz",
  "Longeville-lès-Saint-Avold",
  "Longlaville",
  "Longuyon",
  "Longwy",
  "Lorey",
  "Loromontzey",
  "Lorquin",
  "Lorry-lès-Metz",
  "Lorry-Mardigny",
  "Lostroff",
  "Loudrefing",
  "Loupershouse",
  "Loupmont",
  "Louppy-le-Château",
  "Louppy-sur-Loison",
  "Loutzviller",
  "Louvemont-Côte-du-Poivre",
  "Louvigny",
  "Lubécourt",
  "Lubey",
  "Lubine",
  "Lucey",
  "Lucy",
  "Ludres",
  "Lunéville",
  "Lupcourt",
  "Luppy",
  "Lusse",
  "Luttange",
  "Lutzelbourg",
  "Luvigny",
  "Luzy-Saint-Martin",
  "Macheren",
  "Maconcourt",
  "Madecourt",
  "Madegney",
  "Madonne-et-Lamerey",
  "Magnières",
  "Le Magny",
  "Maidières",
  "Mailly-sur-Seille",
  "Mainvillers",
  "Mairy-Mainville",
  "Maixe",
  "Maizeray",
  "Maizeroy",
  "Maizery",
  "Maizey",
  "Maizières",
  "Maizières-lès-Metz",
  "Maizières-lès-Vic",
  "Malaincourt",
  "Malancourt",
  "Malaucourt-sur-Seille",
  "Malavillers",
  "Malleloy",
  "Malling",
  "Malroy",
  "Malzéville",
  "Mamey",
  "Mance",
  "Mancieulles",
  "Manderen",
  "Mandray",
  "Mandres-aux-Quatre-Tours",
  "Mandres-en-Barrois",
  "Mandres-sur-Vair",
  "Mangiennes",
  "Mangonville",
  "Manheulles",
  "Manhoué",
  "Manom",
  "Manoncourt-en-Vermois",
  "Manoncourt-en-Woëvre",
  "Manonville",
  "Manonviller",
  "Many",
  "Marainville-sur-Madon",
  "Marainviller",
  "Marange-Silvange",
  "Marange-Zondrange",
  "Marbache",
  "Marchéville-en-Woëvre",
  "Marey",
  "Marieulles",
  "Marimont-lès-Bénestroff",
  "Marly",
  "Maron",
  "Maroncourt",
  "Marre",
  "Mars-la-Tour",
  "Marsal",
  "Marsilly",
  "Marson-sur-Barboure",
  "Marthemont",
  "Marthille",
  "Martigny-les-Bains",
  "Martigny-les-Gerbonvaux",
  "Martincourt",
  "Martincourt-sur-Meuse",
  "Martinvelle",
  "Marville",
  "Mattaincourt",
  "Mattexey",
  "Maucourt-sur-Orne",
  "Maulan",
  "Mauvages",
  "La Maxe",
  "Maxéville",
  "Maxey-sur-Meuse",
  "Maxey-sur-Vaise",
  "Maxstadt",
  "Mazeley",
  "Mazerulles",
  "Mazirot",
  "Mécleuves",
  "Mécrin",
  "Médonville",
  "Mégange",
  "Méhoncourt",
  "Meisenthal",
  "Méligny-le-Grand",
  "Méligny-le-Petit",
  "Méménil",
  "Ménarmont",
  "Menaucourt",
  "Le Ménil",
  "Ménil-aux-Bois",
  "Ménil-de-Senones",
  "Ménil-en-Xaintois",
  "Ménil-la-Horgne",
  "Ménil-la-Tour",
  "Ménil-sur-Belvitte",
  "Ménil-sur-Saulx",
  "Menskirch",
  "Mercy-le-Bas",
  "Mercy-le-Haut",
  "Méréville",
  "Merles-sur-Loison",
  "Merschweiller",
  "Merten",
  "Merviller",
  "Messein",
  "Métairies-Saint-Quirin",
  "Metting",
  "Metz",
  "Metzeresche",
  "Metzervisse",
  "Metzing",
  "Mexy",
  "Mey",
  "Midrevaux",
  "Mignéville",
  "Millery",
  "Milly-sur-Bradon",
  "Minorville",
  "Mirecourt",
  "Mittelbronn",
  "Mittersheim",
  "Mogeville",
  "Mognéville",
  "Moineville",
  "Moirey-Flabas-Crépion",
  "Moivrons",
  "Molring",
  "Momerstroff",
  "Moncel-lès-Lunéville",
  "Moncel-sur-Seille",
  "Moncel-sur-Vair",
  "Moncheux",
  "Moncourt",
  "Mondelange",
  "Mondorff",
  "Monneren",
  "Le Mont",
  "Mont-Bonvillers",
  "Mont-devant-Sassey",
  "Mont-l'Étroit",
  "Mont-le-Vignoble",
  "Mont-lès-Lamarche",
  "Mont-lès-Neufchâteau",
  "Mont-Saint-Martin",
  "Mont-sur-Meurthe",
  "Montauville",
  "Montblainville",
  "Montbras",
  "Montbronn",
  "Montdidier",
  "Montenach",
  "Montenoy",
  "Montfaucon-d'Argonne",
  "Les Monthairons",
  "Monthureux-le-Sec",
  "Monthureux-sur-Saône",
  "Montiers-sur-Saulx",
  "Montigny",
  "Montigny-devant-Sassey",
  "Montigny-lès-Metz",
  "Montigny-lès-Vaucouleurs",
  "Montigny-sur-Chiers",
  "Montmédy",
  "Montmotier",
  "Montois-la-Montagne",
  "Montoy-Flanville",
  "Montplonne",
  "Montreux",
  "Montsec",
  "Montzéville",
  "Moranville",
  "Morelmaison",
  "Morfontaine",
  "Morgemoulin",
  "Morhange",
  "Moriville",
  "Moriviller",
  "Morizécourt",
  "Morley",
  "Morsbach",
  "Mortagne",
  "Morville",
  "Morville-lès-Vic",
  "Morville-sur-Nied",
  "Morville-sur-Seille",
  "Mouacourt",
  "Mouaville",
  "Mouilly",
  "Moulainville",
  "Moulins-lès-Metz",
  "Moulins-Saint-Hubert",
  "Moulotte",
  "Moussey",
  "Moussey",
  "Mousson",
  "Mouterhouse",
  "Moutiers",
  "Moutrot",
  "Mouzay",
  "Moyemont",
  "Moyen",
  "Moyenmoutier",
  "Moyenvic",
  "Moyeuvre-Grande",
  "Moyeuvre-Petite",
  "Mulcey",
  "Munster",
  "Murvaux",
  "Murville",
  "Muzeray",
  "Naives-en-Blois",
  "Naives-Rosières",
  "Naix-aux-Forges",
  "Nançois-le-Grand",
  "Nançois-sur-Ornain",
  "Nancy",
  "Nant-le-Grand",
  "Nant-le-Petit",
  "Nantillois",
  "Nantois",
  "Narbéfontaine",
  "Nayemont-les-Fosses",
  "Nébing",
  "Nelling",
  "Nepvant",
  "Nettancourt",
  "Neufchâteau",
  "Neufchef",
  "Neufgrange",
  "Neufmaisons",
  "Neufmoulins",
  "Le Neufour",
  "Neufvillage",
  "Neunkirchen-lès-Bouzonville",
  "Neuves-Maisons",
  "La Neuveville-devant-Lépanges",
  "La Neuveville-sous-Châtenois",
  "La Neuveville-sous-Montfort",
  "Neuville-en-Verdunois",
  "Neuville-lès-Vaucouleurs",
  "Neuville-sur-Ornain",
  "Neuviller-lès-Badonviller",
  "Neuviller-sur-Moselle",
  "Neuvillers-sur-Fave",
  "Neuvilly-en-Argonne",
  "Nicey-sur-Aire",
  "Niderhoff",
  "Niderviller",
  "Niederstinzel",
  "Niedervisse",
  "Nilvange",
  "Nitting",
  "Nixéville-Blercourt",
  "Noisseville",
  "Nomeny",
  "Nomexy",
  "Nompatelize",
  "Nonhigny",
  "Nonsard-Lamarche",
  "Nonville",
  "Nonzeville",
  "Norroy",
  "Norroy-le-Sec",
  "Norroy-le-Veneur",
  "Norroy-lès-Pont-à-Mousson",
  "Nossoncourt",
  "Nouillonpont",
  "Nouilly",
  "Nousseviller-lès-Bitche",
  "Nousseviller-Saint-Nabor",
  "Novéant-sur-Moselle",
  "Noviant-aux-Prés",
  "Noyers-Auzécourt",
  "Nubécourt",
  "Oberdorff",
  "Obergailbach",
  "Oberstinzel",
  "Obervisse",
  "Obreck",
  "Ochey",
  "Oëlleville",
  "Œting",
  "Offroicourt",
  "Ogéviller",
  "Ognéville",
  "Ogy",
  "Olizy-sur-Chiers",
  "Ollainville",
  "Olley",
  "Omelmont",
  "Ommeray",
  "Oncourt",
  "Onville",
  "Oriocourt",
  "Ormersviller",
  "Ormes-et-Ville",
  "Ornes",
  "Orny",
  "Oron",
  "Ortoncourt",
  "Osches",
  "Othe",
  "Ottange",
  "Ottonville",
  "Oudrenne",
  "Ourches-sur-Meuse",
  "Ozerailles",
  "Padoux",
  "Pagney-derrière-Barine",
  "Pagny-la-Blanche-Côte",
  "Pagny-lès-Goin",
  "Pagny-sur-Meuse",
  "Pagny-sur-Moselle",
  "Pair-et-Grandrupt",
  "Pallegney",
  "Pange",
  "Pannes",
  "Pareid",
  "Parey-Saint-Césaire",
  "Parey-sous-Montfort",
  "Parfondrupt",
  "Pargny-sous-Mureau",
  "Les Paroches",
  "Parroy",
  "Parux",
  "Peltre",
  "Petit-Failly",
  "Petit-Réderching",
  "Petit-Tenquin",
  "La Petite-Fosse",
  "La Petite-Raon",
  "Petite-Rosselle",
  "Petitmont",
  "Pettoncourt",
  "Pettonville",
  "Peuvillers",
  "Pévange",
  "Pexonne",
  "Phalsbourg",
  "Philippsbourg",
  "Phlin",
  "Piblange",
  "Piennes",
  "Pierre-la-Treiche",
  "Pierre-Percée",
  "Pierrefitte",
  "Pierrefitte-sur-Aire",
  "Pierrepont",
  "Pierrepont-sur-l'Arentèle",
  "Pierreville",
  "Pierrevillers",
  "Pillon",
  "Pintheville",
  "Plaine-de-Walsch",
  "Plainfaing",
  "Plappeville",
  "Plesnois",
  "Pleuvezain",
  "Plombières-les-Bains",
  "Pommérieux",
  "Pompey",
  "Pompierre",
  "Pont-à-Mousson",
  "Pont-lès-Bonfays",
  "Pont-Saint-Vincent",
  "Pont-sur-Madon",
  "Pont-sur-Meuse",
  "Pontoy",
  "Pontpierre",
  "Porcelette",
  "Port-sur-Seille",
  "Portieux",
  "Postroff",
  "Pouilly",
  "Pouilly-sur-Meuse",
  "Les Poulières",
  "Pournoy-la-Chétive",
  "Pournoy-la-Grasse",
  "Poussay",
  "Pouxeux",
  "Praye",
  "Prény",
  "Pretz-en-Argonne",
  "Preutin-Higny",
  "Prévocourt",
  "Prey",
  "Provenchères-lès-Darney",
  "Provenchères-sur-Fave",
  "Le Puid",
  "Pulligny",
  "Pulney",
  "Pulnoy",
  "Punerot",
  "Puttelange-aux-Lacs",
  "Puttelange-lès-Thionville",
  "Puttigny",
  "Puxe",
  "Puxieux",
  "Puzieux",
  "Puzieux",
  "Quevilloncourt",
  "Quincy-Landzécourt",
  "Racécourt",
  "Racrange",
  "Rahling",
  "Rainville",
  "Raival",
  "Rambervillers",
  "Rambluzin-et-Benoite-Vaux",
  "Rambucourt",
  "Ramecourt",
  "Ramonchamp",
  "Rancourt",
  "Rancourt-sur-Ornain",
  "Ranguevaux",
  "Ranzières",
  "Raon-aux-Bois",
  "Raon-l'Étape",
  "Raon-lès-Leau",
  "Raon-sur-Plaine",
  "Rapey",
  "Rarécourt",
  "Raucourt",
  "Raves",
  "Raville",
  "Raville-sur-Sânon",
  "Rebeuville",
  "Réchicourt-la-Petite",
  "Réchicourt-le-Château",
  "Récicourt",
  "Réclonville",
  "Récourt-le-Creux",
  "Rédange",
  "Réding",
  "Reffroy",
  "Regnévelle",
  "Regnéville-sur-Meuse",
  "Regney",
  "Rehaincourt",
  "Rehainviller",
  "Rehaupal",
  "Reherrey",
  "Réhon",
  "Reillon",
  "Relanges",
  "Rembercourt-Sommaisne",
  "Rembercourt-sur-Mad",
  "Rémelfang",
  "Rémelfing",
  "Rémeling",
  "Remennecourt",
  "Remenoville",
  "Réméréville",
  "Rémering",
  "Rémering-lès-Puttelange",
  "Remicourt",
  "Rémilly",
  "Remiremont",
  "Remoiville",
  "Remomeix",
  "Remoncourt",
  "Remoncourt",
  "Removille",
  "Renauvoid",
  "Réning",
  "Repaix",
  "Repel",
  "Resson",
  "Retonfey",
  "Rettel",
  "Revigny-sur-Ornain",
  "Réville-aux-Bois",
  "Reyersviller",
  "Rezonville",
  "Rhodes",
  "Riaville",
  "Ribeaucourt",
  "Richardménil",
  "Riche",
  "Richecourt",
  "Richeling",
  "Richemont",
  "Richeval",
  "Rigny-la-Salle",
  "Rigny-Saint-Martin",
  "Rimling",
  "Ritzing",
  "Robécourt",
  "Robert-Espagne",
  "Rochesson",
  "Rochonvillers",
  "Rocourt",
  "Rodalbe",
  "Rodemack",
  "Rogéville",
  "Rohrbach-lès-Bitche",
  "Les Roises",
  "Rolbing",
  "Rollainville",
  "Romagne-sous-les-Côtes",
  "Romagne-sous-Montfaucon",
  "Romain",
  "Romain-aux-Bois",
  "Rombas",
  "Romelfing",
  "Romont",
  "Roncourt",
  "Ronvaux",
  "Roppeviller",
  "Rorbach-lès-Dieuze",
  "Rosbruck",
  "Rosières-aux-Salines",
  "Rosières-en-Haye",
  "Rosselange",
  "Les Rouges-Eaux",
  "Rouhling",
  "Le Roulier",
  "Roupeldange",
  "Roussy-le-Village",
  "Rouves",
  "Rouvres-en-Woëvre",
  "Rouvres-en-Xaintois",
  "Rouvres-la-Chétive",
  "Rouvrois-sur-Meuse",
  "Rouvrois-sur-Othain",
  "Roville-aux-Chênes",
  "Roville-devant-Bayon",
  "Royaumeix",
  "Rozelieures",
  "Rozérieulles",
  "Rozerotte",
  "Rozières-sur-Mouzon",
  "Rugney",
  "Rumont",
  "Ruppes",
  "Rupt-aux-Nonains",
  "Rupt-devant-Saint-Mihiel",
  "Rupt-en-Woëvre",
  "Rupt-sur-Moselle",
  "Rupt-sur-Othain",
  "Rurange-lès-Thionville",
  "Russange",
  "Rustroff",
  "Saffais",
  "Sailly-Achâtel",
  "Saint-Ail",
  "Saint-Amand-sur-Ornain",
  "Saint-Amé",
  "Saint-André-en-Barrois",
  "Saint-Aubin-sur-Aire",
  "Saint-Avold",
  "Saint-Baslemont",
  "Saint-Baussant",
  "Saint-Benoît-la-Chipotte",
  "Saint-Boingt",
  "Saint-Clément",
  "Saint-Dié-des-Vosges",
  "Saint-Epvre",
  "Saint-Étienne-lès-Remiremont",
  "Saint-Firmin",
  "Saint-François-Lacroix",
  "Saint-Genest",
  "Saint-Georges",
  "Saint-Germain",
  "Saint-Germain-sur-Meuse",
  "Saint-Gorgon",
  "Saint-Hilaire-en-Woëvre",
  "Saint-Hubert",
  "Saint-Jean-d'Ormont",
  "Saint-Jean-de-Bassel",
  "Saint-Jean-Kourtzerode",
  "Saint-Jean-lès-Buzy",
  "Saint-Jean-lès-Longuyon",
  "Saint-Jean-Rohrbach",
  "Saint-Joire",
  "Saint-Julien",
  "Saint-Julien-lès-Gorze",
  "Saint-Julien-lès-Metz",
  "Saint-Julien-sous-les-Côtes",
  "Saint-Jure",
  "Saint-Laurent-sur-Othain",
  "Saint-Léonard",
  "Saint-Louis",
  "Saint-Louis-lès-Bitche",
  "Saint-Marcel",
  "Saint-Mard",
  "Saint-Martin",
  "Saint-Maurice-aux-Forges",
  "Saint-Maurice-sous-les-Côtes",
  "Saint-Maurice-sur-Mortagne",
  "Saint-Maurice-sur-Moselle",
  "Saint-Max",
  "Saint-Médard",
  "Saint-Menge",
  "Saint-Michel-sur-Meurthe",
  "Saint-Mihiel",
  "Saint-Nabord",
  "Saint-Nicolas-de-Port",
  "Saint-Ouen-lès-Parey",
  "Saint-Pancré",
  "Saint-Paul",
  "Saint-Pierremont",
  "Saint-Pierrevillers",
  "Saint-Prancher",
  "Saint-Privat-la-Montagne",
  "Saint-Quirin",
  "Saint-Remimont",
  "Saint-Remimont",
  "Saint-Remy",
  "Saint-Rémy-aux-Bois",
  "Saint-Remy-la-Calonne",
  "Saint-Sauveur",
  "Saint-Stail",
  "Saint-Supplet",
  "Saint-Vallier",
  "Sainte-Barbe",
  "Sainte-Barbe",
  "Sainte-Geneviève",
  "Sainte-Hélène",
  "Sainte-Marguerite",
  "Sainte-Marie-aux-Chênes",
  "Sainte-Pôle",
  "Sainte-Ruffine",
  "Saizerais",
  "La Salle",
  "Salmagne",
  "Salonnes",
  "Samogneux",
  "Sampigny",
  "Sanchey",
  "Sancy",
  "Sandaucourt",
  "Sanry-lès-Vigy",
  "Sanry-sur-Nied",
  "Sans-Vallois",
  "Sanzey",
  "Sapois",
  "Sarralbe",
  "Sarraltroff",
  "Sarrebourg",
  "Sarreguemines",
  "Sarreinsming",
  "Sartes",
  "Sassey-sur-Meuse",
  "Saudrupt",
  "Le Saulcy",
  "Saulcy-sur-Meurthe",
  "Saulmory-et-Villefranche",
  "Saulnes",
  "Saulny",
  "Saulvaux",
  "Saulx-lès-Champlon",
  "Saulxerotte",
  "Saulxures-lès-Bulgnéville",
  "Saulxures-lès-Nancy",
  "Saulxures-lès-Vannes",
  "Saulxures-sur-Moselotte",
  "Sauvigny",
  "Sauville",
  "Sauvoy",
  "Savigny",
  "Savonnières-devant-Bar",
  "Savonnières-en-Perthois",
  "Saxon-Sion",
  "Schalbach",
  "Schmittviller",
  "Schneckenbusch",
  "Schœneck",
  "Schorbach",
  "Schwerdorff",
  "Schweyen",
  "Scy-Chazelles",
  "Secourt",
  "Seichamps",
  "Seicheprey",
  "Seigneulles",
  "Seingbouse",
  "Selaincourt",
  "Semécourt",
  "Senaide",
  "Senon",
  "Senoncourt-les-Maujouy",
  "Senones",
  "Senonges",
  "Septsarges",
  "Sepvigny",
  "Seranville",
  "Seraumont",
  "Sercœur",
  "Serécourt",
  "Serémange-Erzange",
  "Serocourt",
  "Serres",
  "Serrouville",
  "Servigny-lès-Raville",
  "Servigny-lès-Sainte-Barbe",
  "Seuil-d'Argonne",
  "Seuzey",
  "Sexey-aux-Forges",
  "Sexey-les-Bois",
  "Sierck-les-Bains",
  "Siersthal",
  "Sillegny",
  "Silly-en-Saulnois",
  "Silly-sur-Nied",
  "Silmont",
  "Sionne",
  "Sionviller",
  "Sivry",
  "Sivry-la-Perche",
  "Sivry-sur-Meuse",
  "Socourt",
  "Solgne",
  "Sommedieue",
  "Sommeilles",
  "Sommelonne",
  "Sommerviller",
  "Soncourt",
  "Sorbey",
  "Sorbey",
  "Sorcy-Saint-Martin",
  "Sornéville",
  "Sotzeling",
  "Soucht",
  "Les Souhesmes-Rampont",
  "Souilly",
  "Soulosse-sous-Saint-Élophe",
  "Spicheren",
  "Spincourt",
  "Sponville",
  "Stainville",
  "Stenay",
  "Stiring-Wendel",
  "Stuckange",
  "Sturzelbronn",
  "Suisse",
  "Suriauville",
  "Le Syndicat",
  "Taillancourt",
  "Taintrux",
  "Talange",
  "Tanconville",
  "Tannois",
  "Tantonville",
  "Tarquimpol",
  "Tellancourt",
  "Tendon",
  "Tenteling",
  "Terville",
  "Téterchen",
  "Teting-sur-Nied",
  "Thaon-les-Vosges",
  "Théding",
  "Thélod",
  "They-sous-Montfort",
  "They-sous-Vaudemont",
  "Thézey-Saint-Martin",
  "Thiaucourt-Regniéville",
  "Thiaville-sur-Meurthe",
  "Thicourt",
  "Thiébauménil",
  "Thiéfosse",
  "Thierville-sur-Meuse",
  "Thil",
  "Thillombois",
  "Thillot",
  "Le Thillot",
  "Thimonville",
  "Thionville",
  "Thiraucourt",
  "Le Tholy",
  "Thonne-la-Long",
  "Thonne-le-Thil",
  "Thonne-les-Près",
  "Thonnelle",
  "Les Thons",
  "Thonville",
  "Thorey-Lyautey",
  "Thuilley-aux-Groseilles",
  "Thuillières",
  "Thumeréville",
  "Tiercelet",
  "Tignécourt",
  "Tilleux",
  "Tilly-sur-Meuse",
  "Tincry",
  "Tollaincourt",
  "Tomblaine",
  "Tonnoy",
  "Torcheville",
  "Totainville",
  "Toul",
  "Tragny",
  "Tramont-Émy",
  "Tramont-Lassus",
  "Tramont-Saint-André",
  "Trampot",
  "Tranqueville-Graux",
  "Tremblecourt",
  "Trémery",
  "Trémont-sur-Saulx",
  "Trémonzey",
  "Trésauvaux",
  "Tressange",
  "Tréveray",
  "Trieux",
  "Tritteling-Redlach",
  "Les Trois-Domaines",
  "Troisfontaines",
  "Tromborn",
  "Trondes",
  "Tronville",
  "Tronville-en-Barrois",
  "Troussey",
  "Troyon",
  "Tucquegnieux",
  "Turquestein-Blancrupt",
  "Ubexy",
  "Uckange",
  "Ugny",
  "Ugny-sur-Meuse",
  "Uriménil",
  "Uruffe",
  "Urville",
  "Uxegney",
  "Uzemain",
  "Vacherauville",
  "La Vacheresse-et-la-Rouillie",
  "Vacqueville",
  "Vadelaincourt",
  "Vadonville",
  "Vagney",
  "Vahl-Ebersing",
  "Vahl-lès-Bénestroff",
  "Vahl-lès-Faulquemont",
  "Le Val-d'Ajol",
  "Val-d'Ornain",
  "Val-de-Bride",
  "Le Val-de-Guéblange",
  "Val-et-Châtillon",
  "Valbois",
  "Valfroicourt",
  "Valhey",
  "Vallerange",
  "Valleroy",
  "Valleroy-aux-Saules",
  "Valleroy-le-Sec",
  "Vallois",
  "Les Vallois",
  "Valmestroff",
  "Valmont",
  "Valmunster",
  "Le Valtin",
  "Vandelainville",
  "Vandeléville",
  "Vandières",
  "Vandœuvre-lès-Nancy",
  "Vannecourt",
  "Vannes-le-Châtel",
  "Vantoux",
  "Vany",
  "Varangéville",
  "Varennes-en-Argonne",
  "Varize",
  "Varmonzey",
  "Varnéville",
  "Varsberg",
  "Vasperviller",
  "Vassincourt",
  "Vathiménil",
  "Vatimont",
  "Vaubecourt",
  "Vaubexy",
  "Vaucouleurs",
  "Vaucourt",
  "Vaudémont",
  "Vaudeville",
  "Vaudéville",
  "Vaudeville-le-Haut",
  "Vaudigny",
  "Vaudoncourt",
  "Vaudoncourt",
  "Vaudreching",
  "Vauquois",
  "Vaux",
  "Vaux-devant-Damloup",
  "Vaux-lès-Palameix",
  "Vavincourt",
  "Vaxainville",
  "Vaxoncourt",
  "Vaxy",
  "Veckersviller",
  "Veckring",
  "Vecoux",
  "Vého",
  "Velaine-en-Haye",
  "Velaine-sous-Amance",
  "Velaines",
  "Velle-sur-Moselle",
  "Velosnes",
  "Velotte-et-Tatignécourt",
  "Velving",
  "Veney",
  "Vennezey",
  "Ventron",
  "Verdenal",
  "Verdun",
  "Vergaville",
  "Le Vermont",
  "Verneuil-Grand",
  "Verneuil-Petit",
  "Vernéville",
  "Verny",
  "Vervezelle",
  "Véry",
  "Vescheim",
  "Vexaincourt",
  "Vézelise",
  "Vibersviller",
  "Vic-sur-Seille",
  "Vicherey",
  "Vienville",
  "Vieux-Lixheim",
  "Vieux-Moulin",
  "Viéville-en-Haye",
  "Vigneul-sous-Montmédy",
  "Vigneulles",
  "Vigneulles-lès-Hattonchâtel",
  "Vignot",
  "Vigny",
  "Vigy",
  "Vilcey-sur-Trey",
  "Villacourt",
  "Ville-au-Montois",
  "Ville-au-Val",
  "Ville-devant-Belrain",
  "Ville-devant-Chaumont",
  "Ville-en-Vermois",
  "Ville-en-Woëvre",
  "Ville-Houdlémont",
  "Ville-sur-Cousances",
  "Ville-sur-Illon",
  "Ville-sur-Saulx",
  "Ville-sur-Yron",
  "Villecey-sur-Mad",
  "Villécloye",
  "Viller",
  "Villeroy-sur-Méholle",
  "Villers",
  "Villers-aux-Vents",
  "Villers-devant-Dun",
  "Villers-en-Haye",
  "Villers-la-Chèvre",
  "Villers-la-Montagne",
  "Villers-le-Rond",
  "Villers-le-Sec",
  "Villers-lès-Mangiennes",
  "Villers-lès-Moivrons",
  "Villers-lès-Nancy",
  "Villers-sous-Pareid",
  "Villers-sous-Prény",
  "Villers-Stoncourt",
  "Villers-sur-Meuse",
  "Villers-sur-Nied",
  "Villerupt",
  "Villette",
  "Villey-le-Sec",
  "Villey-Saint-Étienne",
  "Villing",
  "Villoncourt",
  "Villotte",
  "Villotte-devant-Louppy",
  "Villotte-sur-Aire",
  "Villouxel",
  "Vilosnes-Haraumont",
  "Vilsberg",
  "Viménil",
  "Vincey",
  "Viocourt",
  "Vioménil",
  "Vionville",
  "Virecourt",
  "Virming",
  "Viterne",
  "Vitrey",
  "Vitrimont",
  "Vitry-sur-Orne",
  "Vittarville",
  "Vittel",
  "Vittersbourg",
  "Vittoncourt",
  "Vittonville",
  "Viviers",
  "Viviers-le-Gras",
  "Viviers-lès-Offroicourt",
  "Viviers-sur-Chiers",
  "Vœlfling-lès-Bouzonville",
  "Void-Vacon",
  "Voimhaut",
  "Voinémont",
  "La Voivre",
  "Les Voivres",
  "Volmerange-lès-Boulay",
  "Volmerange-les-Mines",
  "Volmunster",
  "Volstroff",
  "Vomécourt",
  "Vomécourt-sur-Madon",
  "Vouthon-Bas",
  "Vouthon-Haut",
  "Vouxey",
  "Voyer",
  "Vrécourt",
  "Vroncourt",
  "Vroville",
  "Vry",
  "Vulmont",
  "Waldhouse",
  "Waldweistroff",
  "Waldwisse",
  "Walschbronn",
  "Walscheid",
  "Waltembourg",
  "Waly",
  "Warcq",
  "Watronville",
  "Waville",
  "Wavrille",
  "Wiesviller",
  "Willeroncourt",
  "Willerwald",
  "Wintersbourg",
  "Wisembach",
  "Wiseppe",
  "Wittring",
  "Woël",
  "Wœlfling-lès-Sarreguemines",
  "Woimbey",
  "Woippy",
  "Woustviller",
  "Wuisse",
  "Xaffévillers",
  "Xammes",
  "Xamontarupt",
  "Xanrey",
  "Xaronval",
  "Xermaménil",
  "Xertigny",
  "Xeuilley",
  "Xirocourt",
  "Xivray-et-Marvoisin",
  "Xivry-Circourt",
  "Xocourt",
  "Xonrupt-Longemer",
  "Xonville",
  "Xouaxange",
  "Xousse",
  "Xures",
  "Yutz",
  "Zarbeling",
  "Zetting",
  "Zilling",
  "Zimming",
  "Zincourt",
  "Zommange",
  "Zoufftgen",
];

/*____________________________________ LORRAINE IPSUM FUNCTIONS ____________________________________*/

function generateParagraph(size = "random", intro = true) {
  // Var(s)
  var paragraph = "";

  if (Number.isInteger(size)) {
    if (intro) {
      paragraph = "<b>Lorraine Ipsum</b> ";
      var wordCount = size - 2;
    } else {
      var wordCount = size;
    }
  } else {
    intro && (paragraph = "<b>Lorraine Ipsum</b> ");
    var wordCount = getRandomIntBetween(10, 50);
  }

  // Process
  for (let i = 0; i < wordCount; ) {
    var city = getRandomValueFromArray(villesLorraine);

    if (i == wordCount - 1) {
      var wordEnding = ".";
    } else {
      var wordEnding = probability(10) ? ", " : " ";
    }

    paragraph += city + wordEnding;

    i += 1 + countCharacter(city, " ");
  }

  // Output
  return `<p>${paragraph}</p>`;
}

function generateParagraphes(count = "random") {
  // Var(s)
  var paragraphes = "";
  var paragraphCount;

  Number.isInteger(count)
    ? (paragraphCount = count)
    : (paragraphCount = getRandomIntBetween(1, 5));

  // Process
  for (let i = 0; i < paragraphCount; i++) {
    i === 0
      ? (paragraphes += generateParagraph())
      : (paragraphes += generateParagraph("random", false));
  }

  return paragraphes;
}
