type IProps = {
    size?: "medium";
    color?: string;
  };
  
  export default function PaymentIcon({
    size = "medium",
    color = "fill-primary-normal",
  }: IProps) {
    let style = "w-8 h-8";
  
    switch (size) {
      case "medium":
        break;
    }
  
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="50px" height="25px" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">
       
       <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M1460 5104 c-36 -24 -1096 -1082 -1131 -1128 -19 -26 -29 -51 -29
       -75 0 -34 43 -79 978 -1013 l977 -978 45 0 45 0 520 520 520 520 86 0 c138 0
       267 44 393 134 63 45 179 160 210 209 l18 27 474 0 c508 0 513 1 540 51 21 42
       21 1316 0 1358 -26 49 -42 51 -391 51 l-324 0 -28 -24 c-24 -21 -29 -33 -33
       -93 l-5 -68 -162 -3 -162 -2 -25 -31 c-16 -18 -26 -43 -26 -61 l0 -31 -57 6
       c-90 10 -158 38 -345 143 -226 127 -534 278 -628 308 -111 36 -247 49 -356 36
       -92 -11 -129 -23 -449 -139 l-190 -69 -175 173 c-96 95 -185 178 -197 184 -31
       16 -65 14 -93 -5z m165 -344 l109 -109 -49 -22 c-26 -12 -77 -26 -112 -32 -75
       -13 -164 -1 -238 32 l-49 22 109 109 c60 61 112 110 115 110 3 0 55 -49 115
       -110z m1228 -26 c81 -26 396 -181 595 -293 230 -129 307 -157 472 -174 l25 -2
       3 -401 2 -402 -46 -61 c-65 -87 -147 -155 -243 -203 -77 -39 -90 -43 -181 -46
       -180 -8 -336 52 -451 172 -33 33 -66 68 -74 76 -8 8 -197 76 -419 152 -222 75
       -422 146 -443 157 -54 27 -110 91 -123 142 -31 115 49 229 168 237 51 3 106
       -12 515 -142 252 -80 471 -146 487 -146 36 0 86 42 93 77 6 31 -12 81 -34 100
       -8 7 -179 64 -379 128 l-365 115 -187 187 -187 187 217 79 c169 62 234 81 292
       86 91 7 194 -2 263 -25z m-1623 -281 c108 -52 172 -67 285 -66 111 0 197 22
       294 74 l75 40 103 -103 103 -102 -58 -21 c-93 -34 -166 -91 -210 -163 -16 -28
       -33 -38 -98 -60 -177 -60 -308 -193 -365 -372 -33 -100 -30 -241 5 -345 45
       -133 120 -229 237 -305 98 -63 175 -85 304 -85 121 0 174 13 279 68 107 57
       237 210 261 310 4 15 11 29 15 32 4 2 78 -19 165 -48 l158 -53 1 -135 c2 -150
       18 -214 81 -320 l33 -57 -112 -111 -113 -112 -49 30 c-65 41 -150 70 -245 84
       -132 19 -292 -14 -403 -84 l-50 -30 -504 504 -505 505 41 84 c54 107 72 181
       72 293 0 111 -18 185 -71 294 l-41 83 108 109 c60 60 111 108 114 107 3 -2 43
       -22 90 -45z m3100 -498 l0 -435 -90 0 -90 0 0 435 0 435 90 0 90 0 0 -435z
       m-3509 13 c12 -73 -1 -167 -32 -238 l-20 -44 -112 112 -112 112 110 110 110
       111 23 -50 c13 -28 28 -79 33 -113z m959 -181 c7 -27 30 -74 50 -105 62 -97
       132 -144 310 -209 73 -26 116 -47 118 -57 2 -9 -11 -43 -29 -77 -141 -263
       -520 -258 -651 9 -31 62 -33 74 -33 167 0 90 3 105 28 155 16 30 43 70 60 89
       40 42 119 94 128 84 3 -5 12 -30 19 -56z m1276 -742 c32 -19 64 -35 71 -35 23
       0 15 -14 -36 -64 -29 -29 -51 -44 -55 -37 -24 39 -57 171 -42 171 2 0 30 -16
       62 -35z m-592 -645 l59 -22 -112 -112 -111 -111 -105 105 c-58 58 -104 109
       -102 115 2 5 32 20 68 33 84 30 215 26 303 -8z"/>
       <path d="M3453 3875 c-31 -13 -63 -59 -63 -90 0 -26 29 -74 51 -86 42 -22 91
       -14 121 20 46 52 33 127 -27 156 -39 18 -41 18 -82 0z"/>
       <path d="M1502 2001 c-151 -42 -308 -146 -417 -279 l-56 -67 -485 -5 -486 -5
       -29 -33 -29 -33 2 -670 3 -671 28 -24 28 -24 338 0 338 0 27 26 c23 23 26 35
       26 90 l0 64 150 0 c193 0 230 16 230 100 l0 32 53 -7 c96 -13 171 -44 332
       -136 206 -117 561 -291 646 -317 162 -50 338 -53 485 -8 43 13 306 105 584
       205 278 100 631 227 785 282 310 111 355 132 431 202 152 138 184 320 88 496
       -74 138 -239 215 -407 191 -34 -5 -233 -57 -441 -115 -209 -58 -381 -105 -382
       -105 -2 0 -17 27 -35 60 -37 69 -126 157 -191 188 -46 23 -282 105 -615 216
       l-202 67 -75 72 c-151 146 -314 214 -536 223 -94 3 -129 1 -188 -15z m338
       -207 c103 -31 171 -73 257 -159 l81 -82 349 -118 c534 -181 511 -172 563 -224
       99 -99 85 -242 -29 -309 -76 -45 -97 -40 -606 122 -480 153 -502 158 -539 118
       -8 -10 -21 -32 -27 -50 -13 -37 2 -75 41 -103 14 -10 234 -85 490 -166 448
       -142 468 -148 551 -148 78 0 91 3 161 37 92 46 148 104 193 201 l33 72 409
       113 c450 124 492 131 565 90 43 -24 81 -81 93 -137 15 -74 -36 -167 -119 -216
       -61 -36 -1678 -613 -1755 -626 -79 -14 -189 -5 -278 22 -78 24 -343 150 -493
       234 -276 154 -319 177 -381 196 -36 11 -101 25 -145 32 l-79 12 -3 398 -2 398
       31 45 c87 127 244 240 369 267 45 10 214 -2 270 -19z m-870 -784 l0 -441 -87
       3 -88 3 -3 425 c-1 234 0 431 3 438 3 8 31 12 90 12 l85 0 0 -440z"/>
       <path d="M1559 1251 c-31 -31 -39 -83 -19 -122 13 -24 61 -49 94 -49 35 0 84
       45 92 85 17 93 -100 153 -167 86z"/>
       </g>
       </svg>
    );
  }
  