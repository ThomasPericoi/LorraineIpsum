!function(){function e(e){return e[function(e){return Math.floor(Math.random()*e.length)}(e)]}function r(e){return asciis[e]||null}function n(e){return asciis.find(r=>r.name===e)||null}function a(e,r={}){r.credits}function i(e,r={}){const i=n(e);i&&a(0,r)}globalThis.AsciiPrinter={version:"1.1.0",get catalog(){return asciis},getById:r,getByName:n,listTypes:function(){return[...new Set(asciis.map(e=>e.type))]},listNames:function(e="all"){return("all"===e?asciis:asciis.filter(r=>r.type===e)).map(e=>e.name)},list:function(e="all"){return asciis.map((e,r)=>({id:r,name:e.name,category:e.type})).filter(r=>"all"===e||r.category===e)},printById:function(e,n={}){const i=r(e);i&&a(0,n)},printByName:i,printBySearch:function(e,r={}){const n=e.toLowerCase(),a=asciis.find(e=>e.name.toLowerCase().includes(n));a&&i(a.name,r)},printRandom:function(r="all",n={}){var a=asciis.filter(e=>e.type===r);a.length<1&&(a=Object.values(asciis)),i(e(a).name,n)},printRandomFrom:function(r,a={}){if(!Array.isArray(r)||r.length<1)return;const o=r.map(e=>n(e)).filter(Boolean);if(o.length<1)return;i(e(o).name,a)}}}();var asciis=[{type:"animal",name:"anteater",art:String.raw`
       _.---._    /\\
    ./'       "--'\//
  ./              o \
 /./\  )______   \__ \
./  / /\ \   | \ \  \ \
   / /  \ \  | |\ \  \7
    "     "    "  "
    `,color:"LightSlateGray",height:7,author:"Veronica Karlsson"},{type:"animal",name:"armadillo",art:String.raw`
             _.-----__
          ,:::://///,:::-.
         /:''/////// \\:::;/|/
        /'   ||||||     :://''\
      .' ,   ||||||     ./(  e \
-===~__-'\__X_'''''\_____/~'-.__'0
           ~~        ~~
    `,color:"RosyBrown",height:7,author:"Seal do Mar"},{type:"animal",name:"bat",art:String.raw`
  /\                 /\
 / \'._   (\_/)   _.'/ \
/_.''._'--('.')--'_.''._\
| \_ / ';=/ " \=;' \ _/ |
 \/ '\__|'\___/'|__/'  \/
         \(/|\)/
          " ' "
    `,color:"DimGray",height:7,author:"Joan G. Stark"},{type:"animal",name:"bear",art:String.raw`
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
    `,color:"Brown",height:10,author:"Joan G. Stark"},{type:"animal",name:"bees",art:String.raw`
  ^^      .-=-=-=-.  ^^      ^^
       ('-=-=-=-=-=-')  ^^
^^   ('-=-=-=-=-=-=-=-')
    ( '-=-=-=-(@)-=-=-' )      ^^
    ('-=-=-=-=-=-=-=-=-')  ^^
    ('-=-=-=-=-=-=-=-=-')  ^^
     ('-=-=-=-=-=-=-=-')
       ('-=-=-=-=-=-')  ^^
         '-=-=-=-=-'
    `,color:"Goldenrod",height:9,author:"Joan G. Stark"},{type:"animal",name:"beaver",art:String.raw`
            ___
         .="   "=._.---.
       ."         c ' Y' p
      /   ,       '.  w_/
      |   '-.   /     /
 ,..._|      )_-\ \_=.\
'-....-''------)))'=-'"''"
    `,color:"DarkGoldenrod",height:7,author:"Joan G. Stark"},{type:"animal",name:"bug",art:String.raw`
  .   .
   \ /
 '/ ! \'
 | o:o |
~| o:o |~
/ \_:_/ \
    `,color:"DarkGoldenrod",height:6,author:""},{type:"animal",name:"cat",art:String.raw`
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
    `,color:"DarkSlateGrey",height:12,author:""},{type:"animal",name:"caterpillar",art:String.raw`
\_/-.--.--.--.--.--.
(")__)__)__)__)__)__)
 ^ "" "" "" "" "" ""
    `,color:"Green",height:3,author:"Joan G. Stark"},{type:"animal",name:"crab",art:String.raw`
   __       __
  / <'     '> \
 (  / @   @ \  )
  \(_ _\_/_ _)/
(\ '-/     \-' /)
 "===\     /==="
  .==')___('==.
 ' .='     '=. '
    `,color:"Red",height:8,author:""},{type:"animal",name:"crocodile",art:String.raw`
            .-._   _ _ _ _ _ _ _ _
 .-''-.__.-'00  '-' ' ' ' ' ' ' ' '-.
'.___ '    .   .--_'-' '-' '-' _'-' '._
 V: V 'vv-'   '_   '.       .'  _..' '.'.
   '=.____.=_.--'   :_.__.__:_   '.   : :
           (((____.-'        '-.  /   : :
                             (((-'\ .' /
                           _____..'  .'
                          '-._____.-'
    `,color:"OliveDrab",height:9,author:"Shanaka Dias"},{type:"animal",name:"deer",art:String.raw`
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
    `,color:"Tan",height:15,author:""},{type:"animal",name:"dog",art:String.raw`
            /)-_-(\
             (o o)
     .-----__/\o/
    /  __      /
\__/\ /  \_\ |/
     \\     ||
     //     ||
     |\     |\
    `,color:"Tan",height:8,author:""},{type:"animal",name:"duck",art:String.raw`
      ,~~.
     (  9 )-_,
(\___ )=='-'
 \ .   ) )
  \ '-' /
   '~j-'
     "=:
    `,color:"DarkGray",height:7,author:""},{type:"animal",name:"elephant",art:String.raw`
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
    `,color:"Silver",height:11,author:"Hamilton Furtado"},{type:"animal",name:"flamingo",art:String.raw`
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
    `,color:"Pink",height:13,author:""},{type:"animal",name:"fox",art:String.raw`
 /\   /\
//\\_//\\     __/\
\_     _/    /   /
 / . . \    /^^^]
 \_\ /_/    [   ]
  / ° \_    [   /
  \     \_  /  /
   [ [ /  \/ _/
  _[ [ \  /_/
    `,color:"DarkOrange",height:9,author:""},{type:"animal",name:"frog",art:String.raw`
       _   _
      (o)-(o)
   .-(   "   )-.
  /  /;'-=-';\  \
__\ _\ \___/ /_ /__
  /|  /|\ /|\  |\
    `,color:"SpringGreen",height:6,author:""},{type:"animal",name:"goldfish",art:String.raw`
      /'·.¸
     /¸...¸':·
 ¸.·'  ¸   '·.¸.·°)
: © ):´;      ¸  {
 °·.¸¸'·  ¸.·´\'·¸)
      \\´´\¸.·´
    `,color:"Gold",height:6,author:""},{type:"animal",name:"hippo",art:String.raw`
     c~~p ,---------.
,---'oo  )           \
( O O                  )/
'=^='                 /
      \    ,     .   /
      \\  |-----'|  /
      ||__|    |_|__|
    `,color:"DarkGray",height:7,author:""},{type:"animal",name:"hedgehog",art:String.raw`
  .|||||||||.
 |||||||||||||
|||||||||||' .\
'||||||||||_,__o
    ''  ''
    `,color:"Tan",height:5,author:""},{type:"animal",name:"lion",art:String.raw`
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
    `,color:"Peru",height:13,author:"Joan G. Stark"},{type:"animal",name:"marbles",art:String.raw`
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
    `,color:"Brown",height:10,author:""},{type:"animal",name:"marmot",art:String.raw`
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
    `,color:"DarkGoldenrod",height:12,author:"Hayley Jane Wakenshaw"},{type:"animal",name:"monkey",art:String.raw`
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
    `,color:"Brown",height:12,author:"Joan G. Stark"},{type:"animal",name:"mouse",art:String.raw`
(q\_/p)
 /. .\.-""""-.      __
=\_t_/=    /  '\   (
  )\ ))__ _\    |___)
 nn-nn'  'nn---'
    `,color:"Gray",height:5,author:""},{type:"animal",name:"parrot",art:String.raw`
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
    `,color:"DodgerBlue",height:16,author:""},{type:"animal",name:"pig",art:String.raw`
       9
  ,--.-'-,--.
  \  /-~-\  /
 / )' a a '( \
( (  ,---.  ) )
 \ '(_o_o_)' /
  \   '-'   /
   | |---| |
   [_]   [_]
    `,color:"Pink",height:9,author:""},{type:"animal",name:"pinguin",art:String.raw`
   __
-=(o '.
   '.-.\
   /|  \\
   '|  ||
    _\_):,_
    `,color:"Black",height:6,author:""},{type:"animal",name:"snail",art:String.raw`
    .----.   @   @
   / .-"-.'.  \v/
   | | '\ \ \_/ )
 ,-\ '-.' /.'  /
'---'----'----'
    `,color:"SeaGreen",height:5,author:"Hayley Jane Wakenshaw"},{type:"animal",name:"teckel",art:String.raw`
                        __
 ,                    ," e'--o
((                   (  | __,'
\\~----------------' \_;/
(                      /
 /) ._______________. )
(( (              (( (
'' '               ''-'
    `,color:"Chocolate",height:8,author:"Hayley Jane Wakenshaw"},{type:"animal",name:"turtle",art:String.raw`
                __
     .,-;-;-,. /'_\
   _/_/_/_|_\_\) /
'-<_><_><_><_>=/\
  '/_/    /_/  \_\
   ""     ""    ""
    `,color:"LimeGreen",height:6,author:""},{type:"animal",name:"wasp",art:String.raw`
    _  _
   | )/ )
\\ |//,' __
(")(_)-"()))=-
   (\\
    `,color:"Yellow",height:5,author:"Stef00"},{type:"animal",name:"whale",art:String.raw`
       .
      ":"
    ___:____     |"\/"|
  ,'        '.    \  /
  |  O        \___/  |
~^~^~^~^~^~^~^~^~^~^~^~^~
    `,color:"RoyalBlue",height:6,author:"Riitta Rasimus"},{type:"character",name:"alien",art:String.raw`
 o            o
  \          /
   \        /
    :-'""'-:
 .-'  ____  '-.
( (  (_()_)  ) )
 '-.   ^^   .-'
    '._==_.'
     __)(___
    `,color:"Green",height:9,author:"Joan G. Stark"},{type:"character",name:"bender",art:String.raw`
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
    `,color:"Silver",height:16,author:"Silver Saks"},{type:"character",name:"bigBird",art:String.raw`
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
    `,color:"Yellow",height:16,author:""},{type:"character",name:"cheshireCat",art:String.raw`
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
    `,color:"Violet",height:6,author:"Randy Ransom"},{type:"character",name:"cookieMonster",art:String.raw`
    (o)(o)
  w"      "w
 W  -====-  W
  "w      w"
 w"""""""""w
W            W
    `,color:"Blue",height:6,author:"Randy Ransom"},{type:"character",name:"devil",art:String.raw`
  ,  ,  , , ,
 <(__)> | | |
 | \/ | \_|_/
 \^  ^/   |
 /\--/\  /|
/  \/  \/ |
    `,color:"Red",height:6,author:"Joan G. Stark"},{type:"character",name:"einstein",art:String.raw`
      -''--.
      _'>   '\.-'/
  _.'     _     '._
.'   _.='   '=._   '.
>_   / /_\ /_\ \   _<
  / (  \o/\\o/  ) \
  >._\ .-,_)-. /_.<
      /__/ \__\
        '---'
    `,color:"Silver",height:9,author:"Joan G. Stark"},{type:"character",name:"flintstones",art:String.raw`
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
    `,color:"DarkOrange",height:11,author:""},{type:"character",name:"garfield",art:String.raw`
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
    `,color:"Orange",height:12,author:"Joan G. Stark"},{type:"character",name:"homer",art:String.raw`
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
    `,color:"Gold",height:14,author:""},{type:"character",name:"kermit",art:String.raw`
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
    `,color:"SpringGreen",height:13,author:"Joan G. Stark"},{type:"character",name:"knight",art:String.raw`
    !
   .-.
 __|=|__
(_/'-'\_)
//\___/\\
<>/   \<>
 \|_._|/
  <_I_>
   |||
  /_|_\
    `,color:"Silver",height:10,author:"Joan G. Stark"},{type:"character",name:"maryPoppins",art:String.raw`
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
    `,color:"Black",height:17,author:""},{type:"character",name:"monaLisa",art:String.raw`
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
    `,color:"Sienna",height:17,author:""},{type:"character",name:"pinkPanther",art:String.raw`
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
    `,color:"Pink",height:12,author:""},{type:"character",name:"r2d2",art:String.raw`
    .---.
  .'_:___".
  |__ --==|
  [  ]  :[|
  |__| I=[|
  / / ____|
 |-/.____.'
/___\ /___\
    `,color:"Blue",height:8,author:"snd"},{type:"character",name:"robot",art:String.raw`
       .-T-.
      /     \
    }=) o o (={
      \_===_/
(_)  _.-"""-._
 |\/'/+' _ '+\'\
  \__\ +[_]+ /=|
      )====={\=\
      |  .  | ( )
      |_/ \_|
     <__| |__>
      |=| |=|
      |_| |_|
     (___Y___)
    `,color:"Blue",height:14,author:"Joan G. Stark"},{type:"character",name:"santaClaus",art:String.raw`
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
    `,color:"Red",height:10,author:'B.D.S. "Don" McConnell'},{type:"character",name:"sherlockHolmes",art:String.raw`
   ,_
 ,'  '\,_
 |_,-'_)
 /##c '\  (
' |'  -{.  )
  /\__-' \[]
 /'-_'\
 '     \
    `,color:"MediumSeaGreen",height:8,author:"Harry Mason"},{type:"character",name:"snoopy",art:String.raw`
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
    `,color:"Black",height:15,author:"Win Kang"},{type:"character",name:"sonic",art:String.raw`
          .,
.      _,'f----.._
|\ ,-'"/  |     ,'
|,_  ,--.      /
/,-. ,''.     (_
f  o|  o|__     "'-.
,-._.,--'_ '.   _.,-'
'"' ___.,'' j,-'
  '-.__.,--'
    `,color:"Blue",height:9,author:""},{type:"character",name:"spaceInvader",art:String.raw`
         __
       _|  |_
     _|      |_
    |  _    _  |
    | |_|  |_| |
 _  |  _    _  |  _
|_|_|_| |__| |_|_|_|
  |_|_        _|_|
    |_|      |_|
    `,color:"Chartreuse",height:8,author:""},{type:"character",name:"squidward",art:String.raw`
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
    `,color:"Gray",height:15,author:"LGB"},{type:"character",name:"tweetieBird",art:String.raw`
    .-"-.
   /  - -\
   \  @ @/
    (_ <_)
    _)(
,_('_))\
 "-\)__/
  __|||__
 ((__|__))
    `,color:"Orange",height:9,author:""},{type:"character",name:"yosemiteSam",art:String.raw`
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
    `,color:"Red",height:13,author:""},{type:"thing",name:"alarm",art:String.raw`
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
    `,color:"Chocolate",height:10,author:"Joan G. Stark"},{type:"thing",name:"anchor",art:String.raw`
     _
    (_)
  <--|-->
 _   |   _
'\__/ \__/'
  '-. .-'
     '
    `,color:"SlateGray",height:10,author:"Joan G. Stark"},{type:"thing",name:"axe",art:String.raw`
  ,  /\  .
 //'-||-'\\
(| -=||=- |)
 \\,-||-.//
  '  ||  '
     ||
     ||
     ||
     ||
     ()
    `,color:"SlateGray",height:10,author:"Harry Mason"},{type:"thing",name:"boat",art:String.raw`
       _    _
    __|_|__|_|__
  _|____________|__
 |o o o o o o o o /
~'~'~'~'~'~'~'~'~'~'~
    `,color:"Aqua",height:5,author:"Hayley Jane Wakenshaw"},{type:"thing",name:"bomb",art:String.raw`
             .
            \'/
          -=>*<=-
         .-"/.\
        /    '
       |
    _.|_|._
  .'       '.
 /           \
|         #   |
|             |
 \           /
  '.       .'
    ''---''
    `,color:"DimGray",height:14,author:"Joan G. Stark"},{type:"thing",name:"book",art:String.raw`
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
    `,color:"SaddleBrown",height:10,author:"Joan G. Stark"},{type:"thing",name:"cake",art:String.raw`
       , , , , , ,
       |_|_|_|_|_|
      |~=,=,=,=,=~|
      |~~~~~~~~~~~|
    |~=,=,=,=,=,=,=~|
    |~~~~~~~~~~~~~~~|
  |~=,=,=,=,=,=,=,=,=~|
  |~~~~~~~~~~~~~~~~~~~|
(^^^^^^^^^^^^^^^^^^^^^^^)
 ''-------------------''
    `,color:"Pink",height:10,author:"Laura Brown"},{type:"thing",name:"camera",art:String.raw`
      ____
 _[]_/____\__n_
|_____.--.__()_|
|LI  //# \\    |
|    \\__//    |
|     '--'     |
'--------------'
    `,color:"Gray",height:7,author:"Joan G. Stark"},{type:"thing",name:"coffee",art:String.raw`
      )  (
     (   ) )
      ) ( (
    _______)_
 .-'---------|
( C|/\/\/\/\/|
 '-./\/\/\/\/|
   '_________'
    '-------'
    `,color:"Brown",height:9,author:"H.P. Barmario"},{type:"thing",name:"crown",art:String.raw`
       o
    o^/|\^o
 o_^|\/*\/|^_o
o\*''.\|/.''*/o
 \\\\\\|//////
  {><><@><><}
  '"""""""""'
    `,color:"Gold",height:10,author:"Joan G. Stark"},{type:"thing",name:"electricGuitar",art:String.raw`
     _
    / 7
   /_(
   |_|
   |_|
   |_|
   |_| /\
 /\|=|/ /
 \ |_| /
  ) _  \
 / |_|  \
/  -=-o /
\  /~\_/
 \/
    `,color:"Red",height:14,author:"Rowan Crawford"},{type:"thing",name:"floppyDisk",art:String.raw`
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
    `,color:"DarkSlateGray",height:10,author:"Robert Craggs"},{type:"thing",name:"flower",art:String.raw`
  _  _
 (_\/_)
(_>()<_)
 (_/\_)
   ||
 |\||/|
__\||/__
    `,color:"Pink",height:7,author:"Joan G. Stark"},{type:"thing",name:"folder",art:String.raw`
 _____
/     \_____
|            |
|   _________|__
|  /           /
| /           /
|/___________/
    `,color:"Orange",height:7,author:"Joan G. Stark"},{type:"thing",name:"frontDoor",art:String.raw`
   ________
  / ______ \
  || _  _ ||
  ||| || |||
  |||_||_|||
  || _  _o||
  ||| || |||
  |||_||_|||
  ||______||
 /__________\
 |__________|
/____________\
    `,color:"Brown",height:12,author:"Hayley Jane Wakenshaw"},{type:"thing",name:"gift",art:String.raw`
    _  _
 __(_\/_)__
|____||____|
|    ||    |
|____||____|
    `,color:"Red",height:5,author:"Laura Brown"},{type:"thing",name:"gun",art:String.raw`
    _  ___________=__
    \\@([____]______()
   _/\|-[____]
 /     /(( )
/____|'----'
\____/
    `,color:"Silver",height:6,author:""},{type:"thing",name:"heart",art:String.raw`
,d88b.d88b,
88888888888
'Y8888888Y'
  'Y888Y'
    'Y'
    `,color:"Red",height:5,author:"Bungle"},{type:"thing",name:"hotAirBalloon",art:String.raw`
    _..==--.._
  .'_|:::|' _|:.
 /_|:::|  _|:::|\
;|:::|  _|:::|  _;
|::|  _|:::|  _|:|
||  _|:::|  _|:::|
 \_|:::|  _|:::|/
  '::|  _|:::|.'
    \ _|:::| /
     \|::|__/
      ;____;
       \YT/
        ||
       |""|
       '=='
    `,color:"Red",height:15,author:"Joan G. Stark"},{type:"thing",name:"impossibleTriangle",art:String.raw`
                    .   .xXXXX+.   .
               .   ..   xXXXX+.-   ..   .
         .   ..  ... ..xXXXX+. --.. ...  ..   .
     .   ..  ... .....xXXXX+.  -.-..... ...  ..   .
   .   ..  ... ......xXXXX+.  . .--...... ...  ..   .
  .   ..  ... ......xXXXX+.    -.- -...... ...  ..   .
 .   ..  ... ......xXXXX+.   .-+-.-.-...... ...  ..   .
 .   ..  ... .....xXXXX+. . --xx+.-.--..... ...  ..   .
.   ..  ... .....xXXXX+. - .-xxxx+- .-- .... ...  ..   .
 .   ..  ... ...xXXXX+.  -.-xxxxxx+ .---... ...  ..   .
 .   ..  ... ..xXXXX+. .---..xxxxxx+-..--.. ...  ..   .
  .   ..  ... xXXXX+. . --....xxxxxx+  -.- ...  ..   .
   .   ..  ..xXXXX+. . .-......xxxxxx+-. --..  ..   .
     .   .. xXXXXXXXXXXXXXXXXXXXxxxxxx+. .-- ..   .
         . xXXXXXXXXXXXXXXXXXXXXXxxxxxx+.  -- .
           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx+.--
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx+-
    `,color:"Gold",height:17,author:"Ojosh!ro"},{type:"thing",name:"impossibleTrident",art:String.raw`
   _______
 /|       |
| |       |
| |  __   |
| | |_ /| |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
|_| |_| |_|
(_) (_) (_)
    `,color:"Gold",height:15,author:"P.J. LaBrocca"},{type:"thing",name:"key",art:String.raw`
  .---.
 /    |\________________
|  () | ________   _   _)
 \    |/        | | | |
   ---'         "-" |_|
    `,color:"Gold",height:5,author:"Hayley Jane Wakenshaw"},{type:"thing",name:"lightBulb",art:String.raw`
 .-""-.
/  __  \
|  \/  |
 \ || /
  ||||
  {==}
  {==}
    `,color:"Goldenrod",height:7,author:"Joan G. Stark"},{type:"thing",name:"mailbox",art:String.raw`
        __
       [_ |
    _____||_____
 .''     ||   .:;\
/        ||  // '|
|        \/  ||  |
|            ||  |
|            ||_.'\
'-----...----'\    \
      | |      \    |
      | |       '.__/
      | |
    `,color:"Red",height:12,author:"Joan G. Stark"},{type:"thing",name:"plane",art:String.raw`
            __/\__
           '==/\=='
 ____________/__\____________
/____________________________\
  __||__||__/.--.\__||__||__
 /__|___|___( >< )___|___|__\
           _/.--.\_
          (/------\)
    `,color:"Red",height:8,author:"Joan G. Stark"},{type:"thing",name:"rocket",art:String.raw`
   A
  / \
  |=|
  | |
  | |
 _|=|_
/ | | \
| \,/ |
|/" "\|
    `,color:"OrangeRed",height:9,author:"Joan G. Stark"},{type:"thing",name:"stopSign",art:String.raw`
    .-------,
  .'         '.
.'  _ ___ _ __ '.
|  (_' | / \|_) |
|  ,_) | \_/|   |
'.             .'
  '.         .'
    '-------'
    `,color:"Red",height:8,author:"Joan G. Stark"},{type:"thing",name:"sword",art:String.raw`
( \
 \ \/)
  >.<
 (/\\\
    \\\
     \\\
      \_|
    `,color:"Gold",height:7,author:"Veronica Karlsson"},{type:"thing",name:"teapot",art:String.raw`
                       (
            _           ) )
         _,(_)._        ((
    ___,(_______).        )
  ,'__.   /       \    /\_
 /,' /  |""|       \  /  /
| | |   |__|       |,'  /
 \'.|                  /
  '. :           :    /
    ''.            :.,'
      '-.________,-'

    `,color:"Sienna",height:11,author:"Stephane Abello"},{type:"thing",name:"television",art:String.raw`
            o
        o   |
         \  |
          \.|-.
          (\|  )
.==================.
| .--------------. |
| |--.__.--.__.--| |
| |--.__.--.__.--| |
| |--.__.--.__.--| |
| |--.__.--.__.--| |
| '--------------'o|
| LI LI """""""   o|
'=================='
    `,color:"SlateGray",height:14,author:"Joan G. Stark"},{type:"thing",name:"thumbsUp",art:String.raw`
      _
     /(|
   __\  \  _____
 (____)  '|
(____)|   |
 (____).__|
  (___)__.|_____
    `,color:"Goldenrod",height:7,author:"Sebastian Stöcker"},{type:"thing",name:"tombstone",art:String.raw`
      ,-=-.
     /  +  \
     | ~~~ |
     |R.I.P|
\vV,,|_____|,,Vv/
    `,color:"Gray",height:5,author:"Hayley Jane Wakenshaw"},{type:"message",name:"bravo",art:String.raw`
 ____  ____    __  _  _  _____
(  _ \(  _ \  /__\( \/ )(  _  )
 ) _ < )   / /(__)\\  /  )(_)(
(____/(_)\_)(__)(__)\/  (_____)
    `,color:"MediumPurple",height:4,author:""},{type:"message",name:"bye",art:String.raw`
 ____  _  _  ____
(  _ \( \/ )( ___)
 ) _ < \  /  )__)
(____/ (__) (____)
    `,color:"MediumPurple",height:4,author:""},{type:"message",name:"dev",art:String.raw`
 ____  ____  _  _
(  _ \( ___)( \/ )
 )(_) ))__)  \  /
(____/(____)  \/
    `,color:"MediumPurple",height:4,author:""},{type:"message",name:"error",art:String.raw`
 ____  ____  ____  _____  ____
( ___)(  _ \(  _ \(  _  )(  _ \
 )__)  )   / )   / )(_)(  )   /
(____)(_)\_)(_)\_)(_____)(_)\_)
    `,color:"Red",height:4,author:""},{type:"message",name:"hello",art:String.raw`
 _   _  ____  __    __    _____
( )_( )( ___)(  )  (  )  (  _  )
 ) _ (  )__)  )(__  )(__  )(_)(
(_) (_)(____)(____)(____)(_____)
    `,color:"DeepSkyBlue",height:4,author:""},{type:"message",name:"helloWorld",art:String.raw`
 _   _  ____  __    __    _____    _    _  _____  ____  __    ____
( )_( )( ___)(  )  (  )  (  _  )  ( \/\/ )(  _  )(  _ \(  )  (  _ \
 ) _ (  )__)  )(__  )(__  )(_)(    )    (  )(_)(  )   / )(__  )(_) )
(_) (_)(____)(____)(____)(_____)  (__/\__)(_____)(_)\_)(____)(____/
    `,color:"DeepSkyBlue",height:4,author:""},{type:"message",name:"info",art:String.raw`
 ____  _  _  ____  _____
(_  _)( \( )( ___)(  _  )
 _)(_  )  (  )__)  )(_)(
(____)(_)\_)(__)  (_____)
    `,color:"DeepSkyBlue",height:4,author:""},{type:"message",name:"loading",art:String.raw`
 __    _____    __    ____  ____  _  _  ___
(  )  (  _  )  /__\  (  _ \(_  _)( \( )/ __)
 )(__  )(_)(  /(__)\  )(_) )_)(_  )  (( (_-.
(____)(_____)(__)(__)(____/(____)(_)\_)\___/
    `,color:"DeepSkyBlue",height:4,author:""},{type:"message",name:"production",art:String.raw`
 ____  ____  _____  ____
(  _ \(  _ \(  _  )(  _ \
 )___/ )   / )(_)(  )(_) )
(__)  (_)\_)(_____)(____/
    `,color:"LimeGreen",height:4,author:""},{type:"message",name:"stage",art:String.raw`
 ___  ____   __    ___  ____
/ __)(_  _) /__\  / __)( ___)
\__ \  )(  /(__)\( (_-. )__)
(___/ (__)(__)(__)\___/(____)
    `,color:"DarkOrange",height:4,author:""},{type:"message",name:"warning",art:String.raw`
 _    _    __    ____  _  _  ____  _  _  ___
( \/\/ )  /__\  (  _ \( \( )(_  _)( \( )/ __)
 )    (  /(__)\  )   / )  (  _)(_  )  (( (_-.
(__/\__)(__)(__)(_)\_)(_)\_)(____)(_)\_)\___/
    `,color:"DarkOrange",height:4,author:""},{type:"message",name:"welcome",art:String.raw`
 _    _  ____  __    ___  _____  __  __  ____
( \/\/ )( ___)(  )  / __)(  _  )(  \/  )( ___)
 )    (  )__)  )(__( (__  )(_)(  )    (  )__)
(__/\__)(____)(____)\___)(_____)(_/\/\_)(____)
    `,color:"DeepSkyBlue",height:4,author:""}],villesLorraine=["Abainville","Abaucourt","Abaucourt-Hautecourt","Abbéville-lès-Conflans","Les Ableuvenettes","Aboncourt","Aboncourt","Aboncourt-sur-Seille","Abreschviller","Achain","Achen","Adaincourt","Adelange","Affléville","Affracourt","Agincourt","Ahéville","Aincreville","Aingeray","Aingeville","Ainvelle","Ajoncourt","Alaincourt-la-Côte","Albestroff","Algrange","Allain","Allamont","Allamps","Allarmont","Allondrelle-la-Malmaison","Alsting","Altrippe","Altviller","Alzing","Amance","Amanty","Amanvillers","Ambacourt","Ambly-sur-Meuse","Amel-sur-l'Étang","Amelécourt","Amenoncourt","Ameuvelle","Amnéville","Ancemont","Ancerville","Ancerville","Ancerviller","Ancy-sur-Moselle","Andernay","Anderny","Andilly","Angevillers","Anglemont","Angomont","Anould","Anoux","Ansauville","Anthelupt","Antilly","Anzeling","Aouze","Apach","Apremont-la-Forêt","Arches","Archettes","Argancy","Armaucourt","Arnaville","Aroffe","Arracourt","Arraincourt","Arrancy-sur-Crusne","Arraye-et-Han","Arrentès-de-Corcieux","Arriance","Arry","Ars-Laquenexy","Ars-sur-Moselle","Art-sur-Meurthe","Arzviller","Aspach","Assenoncourt","Athienville","Attignéville","Attigny","Attilloncourt","Atton","Aube","Auboué","Aubréville","Audun-le-Roman","Audun-le-Tiche","Augny","Aulnois","Aulnois-en-Perthois","Aulnois-sur-Seille","Aumetz","Aumontzey","Autigny-la-Tour","Autrécourt-sur-Aire","Autrepierre","Autreville","Autréville-Saint-Lambert","Autreville-sur-Moselle","Autrey","Autrey","Auzainvilliers","Avillers","Avillers","Avillers-Sainte-Croix","Avioth","Avocourt","Avrainville","Avrainville","Avranville","Avricourt","Avricourt","Avril","Ay-sur-Moselle","Aydoilles","Azannes-et-Soumazannes","Azelot","Azerailles","Azoudange","Baâlon","Baccarat","Bacourt","Badménil-aux-Bois","Badonviller","Badonvilliers-Gérauvilliers","Baerenthal","La Baffe","Bagneux","Bains-les-Bains","Bainville-aux-Miroirs","Bainville-aux-Saules","Bainville-sur-Madon","Balléville","Bambiderstroff","Ban-de-Laveline","Ban-de-Sapt","Le Ban-Saint-Martin","Ban-sur-Meurthe-Clefcy","Bannay","Bannoncourt","Bantheville","Bar-le-Duc","Barbas","Barbey-Seroux","Barbonville","Barchain","Barisey-au-Plain","Barisey-la-Côte","Les Baroches","Baronville","Barst","Barville","Baslieux","Basse-Ham","Basse-Rentgen","Basse-sur-le-Rupt","Bassing","Bathelémont","Batilly","Battexey","Battigny","Baudignécourt","Baudonvilliers","Baudrecourt","Baudrémont","Baudricourt","Baulny","Bauzemont","Bayecourt","Bayon","Bayonville-sur-Mad","Bazailles","Bazegney","Bazeilles-sur-Othain","Bazien","Bazincourt-sur-Saulx","Bazoilles-et-Ménil","Bazoilles-sur-Meuse","Bazoncourt","Beauclair","Beaufort-en-Argonne","Beaufremont","Beaulieu-en-Argonne","Beauménil","Beaumont","Beaumont-en-Verdunois","Beausite","Bébing","Béchamps","Béchy","Begnécourt","Behonne","Behren-lès-Forbach","Bellange","Belleau","Bellefontaine","Belleray","Belles-Forêts","Belleville","Belleville-sur-Meuse","Belmont-lès-Darney","Belmont-sur-Buttant","Belmont-sur-Vair","Belrain","Belrupt","Belrupt-en-Verdunois","Belval","Bénaménil","Bénestroff","Beney-en-Woëvre","Béning-lès-Saint-Avold","Benney","Berg-sur-Moselle","Bérig-Vintrange","Berling","Bermering","Bernécourt","Berthelming","Bertrambois","Bertrange","Bertrichamps","Bertrimoutier","Berviller-en-Moselle","Béthelainville","Béthincourt","Bettainvillers","Bettange","Bettborn","Bettegney-Saint-Brice","Bettelainville","Betting","Bettoncourt","Bettviller","Le Beulay","Beurey-sur-Saulx","Beuveille","Beuvezin","Beuvillers","Beux","Bey-sur-Seille","Beyren-lès-Sierck","Bezange-la-Grande","Bezange-la-Petite","Bezaumont","Bezonvaux","Bibiche","Bickenholtz","Bicqueley","Bidestroff","Biding","Biécourt","Biencourt-sur-Orge","Bienville-la-Petite","Biffontaine","Billy-sous-Mangiennes","Bining","Bioncourt","Bionville","Bionville-sur-Nied","Bislée","Bisten-en-Lorraine","Bistroff","Bitche","Blainville-sur-l'Eau","Blâmont","Blanche-Église","Blanzée","Blémerey","Blémerey","Blénod-lès-Pont-à-Mousson","Blénod-lès-Toul","Bleurville","Blevaincourt","Blies-Ébersing","Blies-Guersviller","Bliesbruck","Bocquegney","Boinville-en-Woëvre","Bois-de-Champ","Boismont","Boncourt","Boncourt-sur-Meuse","Bonnet","Bonviller","Bonvillet","Bonzée","Borville","Boucheporn","Le Bouchon-sur-Saulx","Bouconville-sur-Madt","Boucq","Bouillonville","Boulaincourt","Boulange","Boulay-Moselle","Bouligny","Bouquemont","Bourdonnay","Boureuilles","Bourgaltroff","La Bourgonce","Bourscheid","Bousbach","Bousse","Bousseviller","Boust","Boustroff","Bouvron","Bouxières-aux-Bois","Bouxières-aux-Chênes","Bouxières-aux-Dames","Bouxières-sous-Froidmont","Bouxurulles","Bouzanville","Bouzemont","Bouzonville","Bovée-sur-Barboure","Boviolles","Brabant-en-Argonne","Brabant-le-Roi","Brabant-sur-Meuse","Brainville","Bralleville","Brandeville","Brantigny","Braquis","Bras-sur-Meuse","Bratte","Brauvilliers","Brechainville","Bréhain","Bréhain-la-Ville","Bréhéville","Breidenbach","Breistroff-la-Grande","Bréménil","Brémoncourt","La Bresse","Brettnach","Breux","Brieulles-sur-Meuse","Briey","Brillon-en-Barrois","Brin-sur-Seille","Brixey-aux-Chanoines","Brizeaux","Brocourt-en-Argonne","Bronvaux","Brouck","Brouderdorff","Brouennes","Broussey-en-Blois","Broussey-Raulecourt","Brouvelieures","Brouville","Brouviller","Brû","Brulange","Bruley","Bruville","Bruyères","Buchy","Buding","Budling","Buhl-Lorraine","Buissoncourt","Bulgnéville","Bulligny","Bult","Bure","Bures","Burey-en-Vaux","Burey-la-Côte","Buriville","Burlioncourt","Burthecourt-aux-Chênes","Burtoncourt","Bussang","Buxières-sous-les-Côtes","Buzy-Darmont","Cappel","Carling","Cattenom","Ceintrey","Celles-sur-Plaine","Certilleux","Cerville","Cesse","Chaillon","Chailly-lès-Ennery","Chalaines","Chaligny","Chamagne","Chambley-Bussières","Chambrey","Champ-le-Duc","Champdray","Champenoux","Champey-sur-Moselle","Champigneulles","Champneuville","Champougny","Chanteheux","Chanteraine","Chantraine","Chanville","Chaouilley","La Chapelle-aux-Bois","La Chapelle-devant-Bruyères","Chardogne","Charency-Vezin","Charey","Charleville-sous-Bois","Charly-Oradour","Charmes","Charmes-la-Côte","Charmois","Charmois-devant-Bruyères","Charmois-l'Orgueilleux","Charny-sur-Meuse","Charpentry","Chassey-Beaupré","Châtas","Château-Bréhain","Château-Rouge","Château-Salins","Château-Voué","Châtel-Saint-Germain","Châtel-sur-Moselle","Châtenois","Châtillon-sous-les-Côtes","Châtillon-sur-Saône","Chattancourt","Chaudeney-sur-Moselle","Chauffecourt","Chaumont-devant-Damvillers","Chaumont-sur-Aire","Chaumousey","Chauvency-le-Château","Chauvency-Saint-Hubert","Chauvoncourt","Chavelot","Chavigny","Chazelles-sur-Albe","Chef-Haut","Chémery-les-Deux","Cheminot","Chenevières","Chenicourt","Chenières","Cheniménil","Chenois","Cheppy","Chérisey","Chermisey","Chesny","Chicourt","Chieulles","Choloy-Ménillot","Chonville-Malaumont","Cierges-sous-Montfaucon","Circourt","Circourt-sur-Mouzon","Cirey-sur-Vezouze","Le Claon","Claudon","Clayeures","Clémery","Clérey-la-Côte","Clérey-sur-Brenon","Le Clerjus","Clermont-en-Argonne","Cléry-le-Grand","Cléry-le-Petit","Cleurie","Clézentaine","Clouange","Cocheren","Coin-lès-Cuvry","Coin-sur-Seille","Coinches","Coincourt","Coincy","Colligny","Colmen","Colmey","Colombey-les-Belles","Colroy-la-Grande","Combles-en-Barrois","Combres-sous-les-Côtes","Combrimont","Commercy","Condé-Northen","Conflans-en-Jarnisy","Cons-la-Grandville","Consenvoye","Conthil","Contrexéville","Contrisson","Contz-les-Bains","Corcieux","Cornimont","Corny-sur-Moselle","Cosnes-et-Romain","Coume","Courbesseaux","Courcelles","Courcelles-Chaussy","Courcelles-en-Barrois","Courcelles-sous-Châtenois","Courcelles-sur-Aire","Courcelles-sur-Nied","Courouvre","Cousances-les-Forges","Cousances-lès-Triconville","Coussey","Couvertpuis","Couvonges","Coyviller","Craincourt","Crainvilliers","Crantenoy","Créhange","Crépey","Creutzwald","Crévéchamps","Crévic","Crézilles","Crion","Croismare","La Croix-aux-Mines","Crusnes","Cuisy","Cumières-le-Mort-Homme","Cunel","Custines","Cutry","Cutting","Cuvry","Dabo","Dagonville","Dainville-Bertheléville","Dalem","Dalhain","Dalstein","Damas-aux-Bois","Damas-et-Bettegney","Damblain","Damelevières","Damloup","Dammarie-sur-Saulx","Dampvitoux","Damvillers","Danne-et-Quatre-Vents","Dannelbourg","Dannevoux","Darney","Darney-aux-Chênes","Darnieulles","Deinvillers","Delme","Delouze-Rosières","Delut","Demange-aux-Eaux","Deneuvre","Denipaire","Denting","Derbamont","Desseling","Destord","Destry","Deuxville","Deycimont","Deyvillers","Diane-Capelle","Diarville","Diebling","Dieppe-sous-Douaumont","Diesen","Dieue-sur-Meuse","Dieulouard","Dieuze","Diffembach-lès-Hellimer","Dignonville","Dinozé","Distroff","Docelles","Dogneville","Dolaincourt","Dolcourt","Dolving","Dombasle-devant-Darney","Dombasle-en-Argonne","Dombasle-en-Xaintois","Dombasle-sur-Meurthe","Dombras","Dombrot-le-Sec","Dombrot-sur-Vair","Domèvre-en-Haye","Domèvre-sous-Montfort","Domèvre-sur-Avière","Domèvre-sur-Durbion","Domèvre-sur-Vezouze","Domfaing","Domgermain","Domjevin","Domjulien","Dommarie-Eulmont","Dommartemont","Dommartin-aux-Bois","Dommartin-la-Chaussée","Dommartin-la-Montagne","Dommartin-lès-Remiremont","Dommartin-lès-Toul","Dommartin-lès-Vallois","Dommartin-sous-Amance","Dommartin-sur-Vraine","Dommary-Baroncourt","Domnom-lès-Dieuze","Dompaire","Dompcevrin","Dompierre","Dompierre-aux-Bois","Domprix","Domptail","Domptail-en-l'Air","Domremy-la-Canne","Domrémy-la-Pucelle","Domvallier","Doncières","Doncourt-aux-Templiers","Doncourt-lès-Conflans","Doncourt-lès-Longuyon","Donjeux","Donnelay","Dornot","Douaumont","Doulcon","Dounoux","Drouville","Dugny-sur-Meuse","Dun-sur-Meuse","Duzey","Ébersviller","Éblange","Écouviez","Écrouves","Écurey-en-Verdunois","Éguelshardt","Eincheville","Einvaux","Einville-au-Jard","Eix","Éloyes","Elvange","Elzange","Emberménil","Enchenberg","Ennery","Entrange","Entre-deux-Eaux","Les Éparges","Épiez-sur-Chiers","Épiez-sur-Meuse","Épinal","Épinonville","Éply","Epping","Erbéviller-sur-Amezule","Erching","Érize-la-Brûlée","Érize-la-Petite","Érize-Saint-Dizier","Ernestviller","Erneville-aux-Bois","Errouville","Erstroff","Escherange","Escles","Esley","Esnes-en-Argonne","Essegney","Essey-et-Maizerais","Essey-la-Côte","Essey-lès-Nancy","Estrennes","Étain","Les Étangs","Étival-Clairefontaine","Éton","Étraye","Étreval","Etting","Etzling","Eulmont","Euvezin","Euville","Évaux-et-Ménil","Évrange","Èvres","Failly","Fains-Véel","Falck","Fameck","Farébersviller","Farschviller","Faucompierre","Fauconcourt","Faulquemont","Faulx","Favières","Fays","Fécocourt","Fénétrange","Fenneviller","Ferdrupt","Ferrières","Fèves","Féy","Fey-en-Haye","Fignévelle","Fillières","Filstroff","Fiménil","Fixem","Flainval","Flassigny","Flastroff","Flavigny-sur-Moselle","Fleisheim","Flétrange","Fleury","Fleury-devant-Douaumont","Fléville-devant-Nancy","Fléville-Lixières","Flévy","Flin","Flirey","Flocourt","Florange","Florémont","Foameix-Ornel","Folkling","Folschviller","Fomerey","Fontaines-Saint-Clair","Fontenay","Fontenoy-la-Joûte","Fontenoy-le-Château","Fontenoy-sur-Moselle","Fonteny","Fontoy","Forbach","Forcelles-Saint-Gorgon","Forcelles-sous-Gugney","La Forge","Les Forges","Forges-sur-Meuse","Fossieux","Foucaucourt-sur-Thabas","Fouchécourt","Fouchères-aux-Bois","Foug","Foulcrey","Fouligny","Foville","Fraimbois","Frain","Fraisnes-en-Saintois","Fraize","Francaltroff","Francheville","Franconville","Frapelle","Fraquelfing","Frauenberg","Frebécourt","Freistroff","Fréménil","Frémeréville-sous-les-Côtes","Frémery","Frémestroff","Fremifontaine","Frémonville","Frenelle-la-Grande","Frenelle-la-Petite","Frénois","Fresnes-au-Mont","Fresnes-en-Saulnois","Fresnes-en-Woëvre","Fresnois-la-Montagne","Fresse-sur-Moselle","Fréville","Freybouse","Freyming-Merlebach","Friauville","Fribourg","Frizon","Froidos","Frolois","Fromeréville-les-Vallons","Fromezey","Frouard","Froville","Futeau","Gandrange","Garrebourg","Gavisse","Gélacourt","Gélaucourt","Gellenoncourt","Gelucourt","Gelvécourt-et-Adompt","Gemaingoutte","Gemmelaincourt","Gémonville","Gendreville","Génicourt-sur-Meuse","Gérardmer","Gerbamont","Gerbécourt","Gerbécourt-et-Haplemont","Gerbépal","Gerbéviller","Gercourt-et-Drillancourt","Germiny","Germonville","Géry","Gesnes-en-Argonne","Geville","Gézoncourt","Gibeaumeix","Gignéville","Gigney","Gimécourt","Gincrey","Girancourt","Giraumont","Girauvoisin","Gircourt-lès-Viéville","Girecourt-sur-Durbion","Giriviller","Girmont","Girmont-Val-d'Ajol","Gironcourt-sur-Vraine","Givrauval","Givrycourt","Glatigny","Glonville","Godoncourt","Goetzenbruck","Gogney","Goin","Golbey","Gomelange","Gondrecourt-Aix","Gondrecourt-le-Château","Gondreville","Gondrexange","Gondrexon","Gorcy","Gorhey","Gorze","Gosselming","Gouraincourt","Goussaincourt","Goviller","Grand","Grand-Failly","La Grande-Fosse","Grandrupt","Grandrupt-de-Bains","Grandvillers","Granges-sur-Vologne","Gravelotte","Grémecey","Gremilly","Gréning","Greux","Grignoncourt","Grimaucourt-en-Woëvre","Grimaucourt-près-Sampigny","Grimonviller","Grindorff-Bizing","Gripport","Griscourt","Gros-Réderching","Grosbliederstroff","Grosrouvres","Grostenquin","Gruey-lès-Surance","Grundviller","Guebenhouse","Guébestroff","Guéblange-lès-Dieuze","Guébling","Guénange","Guenviller","Guermange","Guerpont","Guerstling","Guerting","Guessling-Hémering","Gugnécourt","Gugney","Gugney-aux-Aulx","Guinglange","Guinkirchen","Guinzeling","Guntzviller","Gussainville","Gye","Hablainville","Haboudange","Hadigny-les-Verrières","Hadol","Hagécourt","Hagen","Hagéville","Hagnéville-et-Roncourt","Hagondange","Haigneville","Haillainville","Haironville","Hallering","Halles-sous-les-Côtes","Halloville","Halstroff","Ham-sous-Varsberg","Hambach","Hammeville","Hamonville","Hampont","Han-devant-Pierrepont","Han-lès-Juvigny","Han-sur-Meuse","Han-sur-Nied","Hangviller","Hannocourt","Hannonville-sous-les-Côtes","Hannonville-Suzémont","Hanviller","Haraucourt","Haraucourt-sur-Seille","Harbouey","Harchéchamp","Hardancourt","Haréville","Hargarten-aux-Mines","Harmonville","Harol","Haroué","Harprich","Harreberg","Harsault","Hartzviller","Harville","Haselbourg","Haspelschiedt","Hatrize","Hattigny","Hauconcourt","Haucourt-Moulaine","Haudainville","Haudiomont","Haudonville","Haumont-près-Samogneux","Haussonville","Haut-Clocher","Haute-Kontz","Haute-Vigneulles","Hautmougey","Les Hauts-de-Chée","Havange","Hayange","La Haye","Hayes","Hazembourg","Heillecourt","Heining-lès-Bouzonville","Heippes","Hellering-lès-Fénétrange","Hellimer","Helstroff","Hémilly","Héming","Hénaménil","Hennecourt","Hennemont","Hennezel","Henridorff","Henriville","Hérange","Herbeuville","Herbéviller","Hergugney","Hériménil","Hermelange","Herméville-en-Woëvre","Herny","Herpelmont","Herserange","Hertzing","Hesse","Hestroff","Hettange-Grande","Heudicourt-sous-les-Côtes","Hévilliers","Hilbesheim","Hilsprich","Hinckange","Hoéville","Holacourt","Holling","Holving","Hombourg-Budange","Hombourg-Haut","Homécourt","Hommarting","Hommert","Honskirch","L'Hôpital","Horville-en-Ornois","Hoste","Hottviller","Houdelaincourt","Houdelmont","Houdemont","Houdreville","Houécourt","Houéville","Housseras","Housséville","La Houssière","Hudiviller","Hultehouse","Hundling","Hunting","Hurbache","Hussigny-Godbrange","Hymont","Ibigny","Igney","Igney","Illange","Imling","Inglange","Inor","Insming","Insviller","Ippécourt","Ippling","Iré-le-Sec","Isches","Les Islettes","Jaillon","Jainvillotte","Jallaucourt","Jametz","Jarménil","Jarny","Jarville-la-Malgrange","Jaulny","Jeandelaincourt","Jeandelize","Jeanménil","Jésonville","Jeuxey","Jevoncourt","Jezainville","Jœuf","Jolivet","Jonville-en-Woëvre","Joppécourt","Jorxey","Jouaville","Joudreville","Jouy-aux-Arches","Jouy-en-Argonne","Jubainville","Julvécourt","Jury","Jussarupt","Jussy","Juvaincourt","Juvelize","Juvigny-en-Perthois","Juvigny-sur-Loison","Juville","Juvrecourt","Kalhausen","Kanfen","Kappelkinger","Kédange-sur-Canner","Kemplich","Kerbach","Kerling-lès-Sierck","Kerprich-aux-Bois","Kirsch-lès-Sierck","Kirschnaumen","Kirviller","Klang","Knutange","Kœnigsmacker","Kœur-la-Grande","Kœur-la-Petite","Kuntzig","Labeuville","Labry","Lachalade","Lachambre","Lachapelle","Lachaussée","Lacroix-sur-Meuse","Lafrimbolle","Lagarde","Lagney","Lahaymeix","Lahayville","Laheycourt","Laimont","Laître-sous-Amance","Laix","Lalœuf","Lamarche","Lamath","Lambach","Lamorville","Lamouilly","Landange","Landaville","Landécourt","Landrecourt-Lempire","Landremont","Landres","Landroff","Laneuvelotte","Laneuveville-aux-Bois","Laneuveville-derrière-Foug","Laneuveville-devant-Bayon","Laneuveville-devant-Nancy","Laneuveville-en-Saulnois","Laneuveville-lès-Lorquin","Laneuville-au-Rupt","Laneuville-sur-Meuse","Lanfroicourt","Langatte","Langley","Languimberg","Lanhères","Laning","Lantéfontaine","Laquenexy","Laronxe","Latour-en-Woëvre","Laudrefang","Laumesfeld","Launstroff","Laval-sur-Vologne","Lavallée","Laveline-devant-Bruyères","Laveline-du-Houx","Lavincourt","Lavoye","Laxou","Lay-Saint-Christophe","Lay-Saint-Remy","Lebeuville","Légéville-et-Bonfays","Leintrey","Lelling","Lemainville","Lemberg","Leménil-Mitry","Lemmecourt","Lemmes","Lemoncourt","Lemud","Lengelsheim","Léning","Lenoncourt","Lépanges-sur-Vologne","Lérouville","Lerrain","Lesménils","Lesse","Lesseux","Lessy","Létricourt","Levoncourt","Lexy","Ley","Leyr","Leyviller","Lezey","Lhor","Lidrezing","Liederschiedt","Liéhon","Liézey","Liffol-le-Grand","Lignéville","Lignières-sur-Aire","Ligny-en-Barrois","Limey-Remenauville","Lindre-Basse","Lindre-Haute","Liny-devant-Dun","Liocourt","Lion-devant-Dun","Lironcourt","Lironville","Lisle-en-Barrois","Lisle-en-Rigault","Lissey","Liverdun","Lixheim","Lixing-lès-Rouhling","Lixing-lès-Saint-Avold","Loisey-Culey","Loison","Loisy","Lommerange","Longchamp","Longchamp-sous-Châtenois","Longchamps-sur-Aire","Longeaux","Longeville-en-Barrois","Longeville-lès-Metz","Longeville-lès-Saint-Avold","Longlaville","Longuyon","Longwy","Lorey","Loromontzey","Lorquin","Lorry-lès-Metz","Lorry-Mardigny","Lostroff","Loudrefing","Loupershouse","Loupmont","Louppy-le-Château","Louppy-sur-Loison","Loutzviller","Louvemont-Côte-du-Poivre","Louvigny","Lubécourt","Lubey","Lubine","Lucey","Lucy","Ludres","Lunéville","Lupcourt","Luppy","Lusse","Luttange","Lutzelbourg","Luvigny","Luzy-Saint-Martin","Macheren","Maconcourt","Madecourt","Madegney","Madonne-et-Lamerey","Magnières","Le Magny","Maidières","Mailly-sur-Seille","Mainvillers","Mairy-Mainville","Maixe","Maizeray","Maizeroy","Maizery","Maizey","Maizières","Maizières-lès-Metz","Maizières-lès-Vic","Malaincourt","Malancourt","Malaucourt-sur-Seille","Malavillers","Malleloy","Malling","Malroy","Malzéville","Mamey","Mance","Mancieulles","Manderen","Mandray","Mandres-aux-Quatre-Tours","Mandres-en-Barrois","Mandres-sur-Vair","Mangiennes","Mangonville","Manheulles","Manhoué","Manom","Manoncourt-en-Vermois","Manoncourt-en-Woëvre","Manonville","Manonviller","Many","Marainville-sur-Madon","Marainviller","Marange-Silvange","Marange-Zondrange","Marbache","Marchéville-en-Woëvre","Marey","Marieulles","Marimont-lès-Bénestroff","Marly","Maron","Maroncourt","Marre","Mars-la-Tour","Marsal","Marsilly","Marson-sur-Barboure","Marthemont","Marthille","Martigny-les-Bains","Martigny-les-Gerbonvaux","Martincourt","Martincourt-sur-Meuse","Martinvelle","Marville","Mattaincourt","Mattexey","Maucourt-sur-Orne","Maulan","Mauvages","La Maxe","Maxéville","Maxey-sur-Meuse","Maxey-sur-Vaise","Maxstadt","Mazeley","Mazerulles","Mazirot","Mécleuves","Mécrin","Médonville","Mégange","Méhoncourt","Meisenthal","Méligny-le-Grand","Méligny-le-Petit","Méménil","Ménarmont","Menaucourt","Le Ménil","Ménil-aux-Bois","Ménil-de-Senones","Ménil-en-Xaintois","Ménil-la-Horgne","Ménil-la-Tour","Ménil-sur-Belvitte","Ménil-sur-Saulx","Menskirch","Mercy-le-Bas","Mercy-le-Haut","Méréville","Merles-sur-Loison","Merschweiller","Merten","Merviller","Messein","Métairies-Saint-Quirin","Metting","Metz","Metzeresche","Metzervisse","Metzing","Mexy","Mey","Midrevaux","Mignéville","Millery","Milly-sur-Bradon","Minorville","Mirecourt","Mittelbronn","Mittersheim","Mogeville","Mognéville","Moineville","Moirey-Flabas-Crépion","Moivrons","Molring","Momerstroff","Moncel-lès-Lunéville","Moncel-sur-Seille","Moncel-sur-Vair","Moncheux","Moncourt","Mondelange","Mondorff","Monneren","Le Mont","Mont-Bonvillers","Mont-devant-Sassey","Mont-l'Étroit","Mont-le-Vignoble","Mont-lès-Lamarche","Mont-lès-Neufchâteau","Mont-Saint-Martin","Mont-sur-Meurthe","Montauville","Montblainville","Montbras","Montbronn","Montdidier","Montenach","Montenoy","Montfaucon-d'Argonne","Les Monthairons","Monthureux-le-Sec","Monthureux-sur-Saône","Montiers-sur-Saulx","Montigny","Montigny-devant-Sassey","Montigny-lès-Metz","Montigny-lès-Vaucouleurs","Montigny-sur-Chiers","Montmédy","Montmotier","Montois-la-Montagne","Montoy-Flanville","Montplonne","Montreux","Montsec","Montzéville","Moranville","Morelmaison","Morfontaine","Morgemoulin","Morhange","Moriville","Moriviller","Morizécourt","Morley","Morsbach","Mortagne","Morville","Morville-lès-Vic","Morville-sur-Nied","Morville-sur-Seille","Mouacourt","Mouaville","Mouilly","Moulainville","Moulins-lès-Metz","Moulins-Saint-Hubert","Moulotte","Moussey","Moussey","Mousson","Mouterhouse","Moutiers","Moutrot","Mouzay","Moyemont","Moyen","Moyenmoutier","Moyenvic","Moyeuvre-Grande","Moyeuvre-Petite","Mulcey","Munster","Murvaux","Murville","Muzeray","Naives-en-Blois","Naives-Rosières","Naix-aux-Forges","Nançois-le-Grand","Nançois-sur-Ornain","Nancy","Nant-le-Grand","Nant-le-Petit","Nantillois","Nantois","Narbéfontaine","Nayemont-les-Fosses","Nébing","Nelling","Nepvant","Nettancourt","Neufchâteau","Neufchef","Neufgrange","Neufmaisons","Neufmoulins","Le Neufour","Neufvillage","Neunkirchen-lès-Bouzonville","Neuves-Maisons","La Neuveville-devant-Lépanges","La Neuveville-sous-Châtenois","La Neuveville-sous-Montfort","Neuville-en-Verdunois","Neuville-lès-Vaucouleurs","Neuville-sur-Ornain","Neuviller-lès-Badonviller","Neuviller-sur-Moselle","Neuvillers-sur-Fave","Neuvilly-en-Argonne","Nicey-sur-Aire","Niderhoff","Niderviller","Niederstinzel","Niedervisse","Nilvange","Nitting","Nixéville-Blercourt","Noisseville","Nomeny","Nomexy","Nompatelize","Nonhigny","Nonsard-Lamarche","Nonville","Nonzeville","Norroy","Norroy-le-Sec","Norroy-le-Veneur","Norroy-lès-Pont-à-Mousson","Nossoncourt","Nouillonpont","Nouilly","Nousseviller-lès-Bitche","Nousseviller-Saint-Nabor","Novéant-sur-Moselle","Noviant-aux-Prés","Noyers-Auzécourt","Nubécourt","Oberdorff","Obergailbach","Oberstinzel","Obervisse","Obreck","Ochey","Oëlleville","Œting","Offroicourt","Ogéviller","Ognéville","Ogy","Olizy-sur-Chiers","Ollainville","Olley","Omelmont","Ommeray","Oncourt","Onville","Oriocourt","Ormersviller","Ormes-et-Ville","Ornes","Orny","Oron","Ortoncourt","Osches","Othe","Ottange","Ottonville","Oudrenne","Ourches-sur-Meuse","Ozerailles","Padoux","Pagney-derrière-Barine","Pagny-la-Blanche-Côte","Pagny-lès-Goin","Pagny-sur-Meuse","Pagny-sur-Moselle","Pair-et-Grandrupt","Pallegney","Pange","Pannes","Pareid","Parey-Saint-Césaire","Parey-sous-Montfort","Parfondrupt","Pargny-sous-Mureau","Les Paroches","Parroy","Parux","Peltre","Petit-Failly","Petit-Réderching","Petit-Tenquin","La Petite-Fosse","La Petite-Raon","Petite-Rosselle","Petitmont","Pettoncourt","Pettonville","Peuvillers","Pévange","Pexonne","Phalsbourg","Philippsbourg","Phlin","Piblange","Piennes","Pierre-la-Treiche","Pierre-Percée","Pierrefitte","Pierrefitte-sur-Aire","Pierrepont","Pierrepont-sur-l'Arentèle","Pierreville","Pierrevillers","Pillon","Pintheville","Plaine-de-Walsch","Plainfaing","Plappeville","Plesnois","Pleuvezain","Plombières-les-Bains","Pommérieux","Pompey","Pompierre","Pont-à-Mousson","Pont-lès-Bonfays","Pont-Saint-Vincent","Pont-sur-Madon","Pont-sur-Meuse","Pontoy","Pontpierre","Porcelette","Port-sur-Seille","Portieux","Postroff","Pouilly","Pouilly-sur-Meuse","Les Poulières","Pournoy-la-Chétive","Pournoy-la-Grasse","Poussay","Pouxeux","Praye","Prény","Pretz-en-Argonne","Preutin-Higny","Prévocourt","Prey","Provenchères-lès-Darney","Provenchères-sur-Fave","Le Puid","Pulligny","Pulney","Pulnoy","Punerot","Puttelange-aux-Lacs","Puttelange-lès-Thionville","Puttigny","Puxe","Puxieux","Puzieux","Puzieux","Quevilloncourt","Quincy-Landzécourt","Racécourt","Racrange","Rahling","Rainville","Raival","Rambervillers","Rambluzin-et-Benoite-Vaux","Rambucourt","Ramecourt","Ramonchamp","Rancourt","Rancourt-sur-Ornain","Ranguevaux","Ranzières","Raon-aux-Bois","Raon-l'Étape","Raon-lès-Leau","Raon-sur-Plaine","Rapey","Rarécourt","Raucourt","Raves","Raville","Raville-sur-Sânon","Rebeuville","Réchicourt-la-Petite","Réchicourt-le-Château","Récicourt","Réclonville","Récourt-le-Creux","Rédange","Réding","Reffroy","Regnévelle","Regnéville-sur-Meuse","Regney","Rehaincourt","Rehainviller","Rehaupal","Reherrey","Réhon","Reillon","Relanges","Rembercourt-Sommaisne","Rembercourt-sur-Mad","Rémelfang","Rémelfing","Rémeling","Remennecourt","Remenoville","Réméréville","Rémering","Rémering-lès-Puttelange","Remicourt","Rémilly","Remiremont","Remoiville","Remomeix","Remoncourt","Remoncourt","Removille","Renauvoid","Réning","Repaix","Repel","Resson","Retonfey","Rettel","Revigny-sur-Ornain","Réville-aux-Bois","Reyersviller","Rezonville","Rhodes","Riaville","Ribeaucourt","Richardménil","Riche","Richecourt","Richeling","Richemont","Richeval","Rigny-la-Salle","Rigny-Saint-Martin","Rimling","Ritzing","Robécourt","Robert-Espagne","Rochesson","Rochonvillers","Rocourt","Rodalbe","Rodemack","Rogéville","Rohrbach-lès-Bitche","Les Roises","Rolbing","Rollainville","Romagne-sous-les-Côtes","Romagne-sous-Montfaucon","Romain","Romain-aux-Bois","Rombas","Romelfing","Romont","Roncourt","Ronvaux","Roppeviller","Rorbach-lès-Dieuze","Rosbruck","Rosières-aux-Salines","Rosières-en-Haye","Rosselange","Les Rouges-Eaux","Rouhling","Le Roulier","Roupeldange","Roussy-le-Village","Rouves","Rouvres-en-Woëvre","Rouvres-en-Xaintois","Rouvres-la-Chétive","Rouvrois-sur-Meuse","Rouvrois-sur-Othain","Roville-aux-Chênes","Roville-devant-Bayon","Royaumeix","Rozelieures","Rozérieulles","Rozerotte","Rozières-sur-Mouzon","Rugney","Rumont","Ruppes","Rupt-aux-Nonains","Rupt-devant-Saint-Mihiel","Rupt-en-Woëvre","Rupt-sur-Moselle","Rupt-sur-Othain","Rurange-lès-Thionville","Russange","Rustroff","Saffais","Sailly-Achâtel","Saint-Ail","Saint-Amand-sur-Ornain","Saint-Amé","Saint-André-en-Barrois","Saint-Aubin-sur-Aire","Saint-Avold","Saint-Baslemont","Saint-Baussant","Saint-Benoît-la-Chipotte","Saint-Boingt","Saint-Clément","Saint-Dié-des-Vosges","Saint-Epvre","Saint-Étienne-lès-Remiremont","Saint-Firmin","Saint-François-Lacroix","Saint-Genest","Saint-Georges","Saint-Germain","Saint-Germain-sur-Meuse","Saint-Gorgon","Saint-Hilaire-en-Woëvre","Saint-Hubert","Saint-Jean-d'Ormont","Saint-Jean-de-Bassel","Saint-Jean-Kourtzerode","Saint-Jean-lès-Buzy","Saint-Jean-lès-Longuyon","Saint-Jean-Rohrbach","Saint-Joire","Saint-Julien","Saint-Julien-lès-Gorze","Saint-Julien-lès-Metz","Saint-Julien-sous-les-Côtes","Saint-Jure","Saint-Laurent-sur-Othain","Saint-Léonard","Saint-Louis","Saint-Louis-lès-Bitche","Saint-Marcel","Saint-Mard","Saint-Martin","Saint-Maurice-aux-Forges","Saint-Maurice-sous-les-Côtes","Saint-Maurice-sur-Mortagne","Saint-Maurice-sur-Moselle","Saint-Max","Saint-Médard","Saint-Menge","Saint-Michel-sur-Meurthe","Saint-Mihiel","Saint-Nabord","Saint-Nicolas-de-Port","Saint-Ouen-lès-Parey","Saint-Pancré","Saint-Paul","Saint-Pierremont","Saint-Pierrevillers","Saint-Prancher","Saint-Privat-la-Montagne","Saint-Quirin","Saint-Remimont","Saint-Remimont","Saint-Remy","Saint-Rémy-aux-Bois","Saint-Remy-la-Calonne","Saint-Sauveur","Saint-Stail","Saint-Supplet","Saint-Vallier","Sainte-Barbe","Sainte-Barbe","Sainte-Geneviève","Sainte-Hélène","Sainte-Marguerite","Sainte-Marie-aux-Chênes","Sainte-Pôle","Sainte-Ruffine","Saizerais","La Salle","Salmagne","Salonnes","Samogneux","Sampigny","Sanchey","Sancy","Sandaucourt","Sanry-lès-Vigy","Sanry-sur-Nied","Sans-Vallois","Sanzey","Sapois","Sarralbe","Sarraltroff","Sarrebourg","Sarreguemines","Sarreinsming","Sartes","Sassey-sur-Meuse","Saudrupt","Le Saulcy","Saulcy-sur-Meurthe","Saulmory-et-Villefranche","Saulnes","Saulny","Saulvaux","Saulx-lès-Champlon","Saulxerotte","Saulxures-lès-Bulgnéville","Saulxures-lès-Nancy","Saulxures-lès-Vannes","Saulxures-sur-Moselotte","Sauvigny","Sauville","Sauvoy","Savigny","Savonnières-devant-Bar","Savonnières-en-Perthois","Saxon-Sion","Schalbach","Schmittviller","Schneckenbusch","Schœneck","Schorbach","Schwerdorff","Schweyen","Scy-Chazelles","Secourt","Seichamps","Seicheprey","Seigneulles","Seingbouse","Selaincourt","Semécourt","Senaide","Senon","Senoncourt-les-Maujouy","Senones","Senonges","Septsarges","Sepvigny","Seranville","Seraumont","Sercœur","Serécourt","Serémange-Erzange","Serocourt","Serres","Serrouville","Servigny-lès-Raville","Servigny-lès-Sainte-Barbe","Seuil-d'Argonne","Seuzey","Sexey-aux-Forges","Sexey-les-Bois","Sierck-les-Bains","Siersthal","Sillegny","Silly-en-Saulnois","Silly-sur-Nied","Silmont","Sionne","Sionviller","Sivry","Sivry-la-Perche","Sivry-sur-Meuse","Socourt","Solgne","Sommedieue","Sommeilles","Sommelonne","Sommerviller","Soncourt","Sorbey","Sorbey","Sorcy-Saint-Martin","Sornéville","Sotzeling","Soucht","Les Souhesmes-Rampont","Souilly","Soulosse-sous-Saint-Élophe","Spicheren","Spincourt","Sponville","Stainville","Stenay","Stiring-Wendel","Stuckange","Sturzelbronn","Suisse","Suriauville","Le Syndicat","Taillancourt","Taintrux","Talange","Tanconville","Tannois","Tantonville","Tarquimpol","Tellancourt","Tendon","Tenteling","Terville","Téterchen","Teting-sur-Nied","Thaon-les-Vosges","Théding","Thélod","They-sous-Montfort","They-sous-Vaudemont","Thézey-Saint-Martin","Thiaucourt-Regniéville","Thiaville-sur-Meurthe","Thicourt","Thiébauménil","Thiéfosse","Thierville-sur-Meuse","Thil","Thillombois","Thillot","Le Thillot","Thimonville","Thionville","Thiraucourt","Le Tholy","Thonne-la-Long","Thonne-le-Thil","Thonne-les-Près","Thonnelle","Les Thons","Thonville","Thorey-Lyautey","Thuilley-aux-Groseilles","Thuillières","Thumeréville","Tiercelet","Tignécourt","Tilleux","Tilly-sur-Meuse","Tincry","Tollaincourt","Tomblaine","Tonnoy","Torcheville","Totainville","Toul","Tragny","Tramont-Émy","Tramont-Lassus","Tramont-Saint-André","Trampot","Tranqueville-Graux","Tremblecourt","Trémery","Trémont-sur-Saulx","Trémonzey","Trésauvaux","Tressange","Tréveray","Trieux","Tritteling-Redlach","Les Trois-Domaines","Troisfontaines","Tromborn","Trondes","Tronville","Tronville-en-Barrois","Troussey","Troyon","Tucquegnieux","Turquestein-Blancrupt","Ubexy","Uckange","Ugny","Ugny-sur-Meuse","Uriménil","Uruffe","Urville","Uxegney","Uzemain","Vacherauville","La Vacheresse-et-la-Rouillie","Vacqueville","Vadelaincourt","Vadonville","Vagney","Vahl-Ebersing","Vahl-lès-Bénestroff","Vahl-lès-Faulquemont","Le Val-d'Ajol","Val-d'Ornain","Val-de-Bride","Le Val-de-Guéblange","Val-et-Châtillon","Valbois","Valfroicourt","Valhey","Vallerange","Valleroy","Valleroy-aux-Saules","Valleroy-le-Sec","Vallois","Les Vallois","Valmestroff","Valmont","Valmunster","Le Valtin","Vandelainville","Vandeléville","Vandières","Vandœuvre-lès-Nancy","Vannecourt","Vannes-le-Châtel","Vantoux","Vany","Varangéville","Varennes-en-Argonne","Varize","Varmonzey","Varnéville","Varsberg","Vasperviller","Vassincourt","Vathiménil","Vatimont","Vaubecourt","Vaubexy","Vaucouleurs","Vaucourt","Vaudémont","Vaudeville","Vaudéville","Vaudeville-le-Haut","Vaudigny","Vaudoncourt","Vaudoncourt","Vaudreching","Vauquois","Vaux","Vaux-devant-Damloup","Vaux-lès-Palameix","Vavincourt","Vaxainville","Vaxoncourt","Vaxy","Veckersviller","Veckring","Vecoux","Vého","Velaine-en-Haye","Velaine-sous-Amance","Velaines","Velle-sur-Moselle","Velosnes","Velotte-et-Tatignécourt","Velving","Veney","Vennezey","Ventron","Verdenal","Verdun","Vergaville","Le Vermont","Verneuil-Grand","Verneuil-Petit","Vernéville","Verny","Vervezelle","Véry","Vescheim","Vexaincourt","Vézelise","Vibersviller","Vic-sur-Seille","Vicherey","Vienville","Vieux-Lixheim","Vieux-Moulin","Viéville-en-Haye","Vigneul-sous-Montmédy","Vigneulles","Vigneulles-lès-Hattonchâtel","Vignot","Vigny","Vigy","Vilcey-sur-Trey","Villacourt","Ville-au-Montois","Ville-au-Val","Ville-devant-Belrain","Ville-devant-Chaumont","Ville-en-Vermois","Ville-en-Woëvre","Ville-Houdlémont","Ville-sur-Cousances","Ville-sur-Illon","Ville-sur-Saulx","Ville-sur-Yron","Villecey-sur-Mad","Villécloye","Viller","Villeroy-sur-Méholle","Villers","Villers-aux-Vents","Villers-devant-Dun","Villers-en-Haye","Villers-la-Chèvre","Villers-la-Montagne","Villers-le-Rond","Villers-le-Sec","Villers-lès-Mangiennes","Villers-lès-Moivrons","Villers-lès-Nancy","Villers-sous-Pareid","Villers-sous-Prény","Villers-Stoncourt","Villers-sur-Meuse","Villers-sur-Nied","Villerupt","Villette","Villey-le-Sec","Villey-Saint-Étienne","Villing","Villoncourt","Villotte","Villotte-devant-Louppy","Villotte-sur-Aire","Villouxel","Vilosnes-Haraumont","Vilsberg","Viménil","Vincey","Viocourt","Vioménil","Vionville","Virecourt","Virming","Viterne","Vitrey","Vitrimont","Vitry-sur-Orne","Vittarville","Vittel","Vittersbourg","Vittoncourt","Vittonville","Viviers","Viviers-le-Gras","Viviers-lès-Offroicourt","Viviers-sur-Chiers","Vœlfling-lès-Bouzonville","Void-Vacon","Voimhaut","Voinémont","La Voivre","Les Voivres","Volmerange-lès-Boulay","Volmerange-les-Mines","Volmunster","Volstroff","Vomécourt","Vomécourt-sur-Madon","Vouthon-Bas","Vouthon-Haut","Vouxey","Voyer","Vrécourt","Vroncourt","Vroville","Vry","Vulmont","Waldhouse","Waldweistroff","Waldwisse","Walschbronn","Walscheid","Waltembourg","Waly","Warcq","Watronville","Waville","Wavrille","Wiesviller","Willeroncourt","Willerwald","Wintersbourg","Wisembach","Wiseppe","Wittring","Woël","Wœlfling-lès-Sarreguemines","Woimbey","Woippy","Woustviller","Wuisse","Xaffévillers","Xammes","Xamontarupt","Xanrey","Xaronval","Xermaménil","Xertigny","Xeuilley","Xirocourt","Xivray-et-Marvoisin","Xivry-Circourt","Xocourt","Xonrupt-Longemer","Xonville","Xouaxange","Xousse","Xures","Yutz","Zarbeling","Zetting","Zilling","Zimming","Zincourt","Zommange","Zoufftgen"];!function(e){function r(e){return e[function(e){return Math.floor(Math.random()*e.length)}(e)]}function n(e,r=100){return e=Number(e),r=Number(r),!(!Number.isFinite(e)||!Number.isFinite(r)||r<=0)&&(e=Math.max(0,Math.min(e,r)),Math.random()*r<e)}function a(e,r){return String(e).split(r).length-1}function i(e,r,n){return function(e){return Number.isInteger(e)&&e>0}(e)?e:function(e,r){if(e=Math.ceil(Number(e)),r=Math.floor(Number(r)),!Number.isFinite(e)||!Number.isFinite(r))return NaN;if(e>r){var n=e;e=r,r=n}return Math.floor(Math.random()*(r-e+1))+e}(r,n)}function o(){return villesLorraine.slice()}function l(){return r(villesLorraine)}function t(e="random",r=!0){var o=r?"<b>Lorraine Ipsum</b> ":"",t=i(e,10,50);r&&(t=Math.max(1,t-2));for(var _=0;_<t;){var u=l();o+=u+(_>=t-1?".":n(10)?", ":" "),_+=1+a(u," ")}return`<p>${o}</p>`}e.LorraineIpsum={version:"1.0.0",get cities(){return o()},getCityById:function(e){return villesLorraine[e]||null},getRandomCity:l,listCities:o,generateParagraph:t,generateParagraphs:function(e="random"){for(var r=i(e,1,5),n="",a=0;a<r;a++)n+=t("random",0===a);return n}}}(globalThis);var intro=document.getElementById("intro"),content=document.getElementById("content"),btnStart=document.getElementById("btn-start"),generatedContent=document.getElementById("generated-content"),inputParagraphes=document.getElementById("input-paragraphes"),btnGenerate=document.getElementById("btn-generate"),btnCopy=document.getElementById("btn-copy"),copyStatus=document.getElementById("copy-status"),copyButtonLabel=btnCopy.innerText,focusableSelector=["a[href]","button","input","select","textarea",'[tabindex]:not([tabindex="-1"])'].join(",");async function copyToClipboard(e){var r=String(e);return!(!navigator.clipboard||!window.isSecureContext)&&(await navigator.clipboard.writeText(r),!0)}function changeTitleOnBlur(e){var r=document.title;window.addEventListener("focus",function(){document.title=r}),window.addEventListener("blur",function(){document.title=e})}function isMobile(){return navigator.userAgentData&&"boolean"==typeof navigator.userAgentData.mobile?navigator.userAgentData.mobile:!(!window.matchMedia||!window.matchMedia("(pointer: coarse)").matches)||/android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent||"")}function setSectionAvailability(e,r){var n=e.querySelectorAll(focusableSelector);e.inert=!r,e.setAttribute("aria-hidden",String(!r)),n.forEach(function(e){if(r)return"previousTabindex"in e.dataset?(e.setAttribute("tabindex",e.dataset.previousTabindex),void delete e.dataset.previousTabindex):void e.removeAttribute("tabindex");e.hasAttribute("tabindex")&&(e.dataset.previousTabindex=e.getAttribute("tabindex")),e.setAttribute("tabindex","-1")})}function startGenerator(){setSectionAvailability(content,!0),document.body.classList.add("started"),btnGenerate.focus({preventScroll:!0}),setSectionAvailability(intro,!1),setTimeout(()=>{intro.style.display="none"},800)}function changeContent(){document.body.classList.add("transition"),setTimeout(()=>{renderGeneratedContent(LorraineIpsum.generateParagraphs(getParagraphCount())),document.body.classList.remove("transition")},600)}function renderGeneratedContent(e){generatedContent.innerHTML=e}function copyGeneratedContent(){var e=generatedContent.innerText;return"function"==typeof copyToClipboard?copyToClipboard(e).then(function(r){return r||copyGeneratedContentFallback(e)}).catch(function(){return copyGeneratedContentFallback(e)}):Promise.resolve(copyGeneratedContentFallback(e))}function copyGeneratedContentFallback(e){var r=document.createElement("textarea");r.value=e,r.setAttribute("readonly",""),r.style.position="fixed",r.style.top="-9999px",document.body.appendChild(r),r.select();var n=document.execCommand("copy");return document.body.removeChild(r),n}function setCopyFeedback(){btnCopy.innerText="Copié !",btnCopy.setAttribute("aria-label","Texte copié"),copyStatus.innerText="Le texte généré a été copié.",setTimeout(function(){btnCopy.innerText=copyButtonLabel,btnCopy.setAttribute("aria-label","Copier le texte généré"),copyStatus.innerText=""},1400)}function getParagraphCount(){var e=parseInt(inputParagraphes.value,10);return Number.isFinite(e)?Math.min(Math.max(e,1),99):"random"}function limitParagraphInput(){inputParagraphes.value=inputParagraphes.value.slice(0,2)}function bindEvents(){btnStart.addEventListener("click",startGenerator),btnGenerate.addEventListener("click",changeContent),inputParagraphes.addEventListener("keydown",function(e){"Enter"===e.key&&changeContent()}),inputParagraphes.addEventListener("input",limitParagraphInput),btnCopy.addEventListener("click",function(){copyGeneratedContent().then(function(e){e&&setCopyFeedback()})})}function init(){setSectionAvailability(intro,!0),setSectionAvailability(content,!1),bindEvents(),AsciiPrinter.printRandom(),isMobile()||changeTitleOnBlur("A la royotte !")}document.addEventListener("DOMContentLoaded",init);