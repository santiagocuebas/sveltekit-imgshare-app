export enum UserRole {
  EDITOR = 'editor',
  MOD = 'mod',
  ADMIN = 'admin',
  SUPER = 'superadmin'
}

export enum Method {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE'
}

export enum Score {
  LIKE = 'likes',
  DISLIKE = 'dislikes'
}

export enum LinksOptions {
  POST = 'post',
  FAVORITE = 'favorite',
  COMMENT = 'comment',
  ABOUT = 'about'
}

export enum InnerText {
  PUBLIC = 'public',
  FAVORITES = 'favorites',
  COMMENTS = 'comments',
  ABOUT = 'about'
}

export enum PublicText {
  PUBLIC = 'public',
  PRIVATE = 'private',
  ALL = 'all'
}

export enum OrderText {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  VIEWED = 'viewed'
}

export enum ValidExt {
  PNG = 'image/png',
  JPEG = 'image/jpeg',
  GIF = 'image/gif'
}

export enum Settings {
  AVATAR = 'avatar',
  DESCRIPTION = 'description',
  PASSWORD = 'password',
  LINKS = 'link',
  DELETE = 'deleteuser'
}

export enum IconsPaths {
  GITHUB = 'M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z',
  NETLIFY = 'M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z',
  CSHLINEONE = 'M0 20.7402H11.7025L17.4074 24.4439H5.85123L0 20.7402Z',
  CSHLINETWO = 'M1.11133 15.1855H12.0668L17.4076 24.4448H6.58907L1.11133 15.1855Z',
  CSHLINETHREE = 'M2.59277 9.62891H12.5523L17.4076 24.4437H7.57254L2.59277 9.62891Z',
  CSHLINEFOUR = 'M4.44434 4.44531H13.1589L17.4073 24.4453H8.80163L4.44434 4.44531Z',
  CSHLINEFIVE = 'M6.2959 0H13.7656L17.407 24.4444H10.0307L6.2959 0Z',
  CSHLINESIX = 'M23.7041 29.2598H12.0016L6.29669 25.5561H17.8529L23.7041 29.2598Z',
  CSHLINESEVEN = 'M22.5928 34.8145H11.6373L6.29648 25.5552H17.115L22.5928 34.8145Z',
  CSHLINEEIGHT = 'M21.1113 40.3711H11.1518L6.29651 25.5563H16.1316L21.1113 40.3711Z',
  CSHLINENINE = 'M19.2598 45.5547H10.5452L6.2968 25.5547H14.9025L19.2598 45.5547Z',
  CSHLINETEN = 'M17.4082 50H9.93855L6.29709 25.5556H13.6734L17.4082 50Z',
  CRDBONE = 'M19.42 9.17a15.39 15.39 0 0 1-3.51.4 15.46 15.46 0 0 1-3.51-.4 15.63 15.63 0 0 1 3.51-3.91 15.71 15.71 0 0 1 3.51 3.91zM30 .57A17.22 17.22 0 0 0 25.59 0a17.4 17.4 0 0 0-9.68 2.93A17.38 17.38 0 0 0 6.23 0a17.22 17.22 0 0 0-4.44.57A16.22 16.22 0 0 0 0 1.13a.07.07 0 0 0 0 .09 17.32 17.32 0 0 0 .83 1.57.07.07 0 0 0 .08 0 16.39 16.39 0 0 1 1.81-.54 15.65 15.65 0 0 1 11.59 1.88 17.52 17.52 0 0 0-3.78 4.48c-.2.32-.37.65-.55 1s-.22.45-.33.69-.31.72-.44 1.08a17.46 17.46 0 0 0 4.29 18.7c.26.25.53.49.81.73s.44.37.67.54.59.44.89.64a.07.07 0 0 0 .08 0c.3-.21.6-.42.89-.64s.45-.35.67-.54.55-.48.81-.73a17.45 17.45 0 0 0 5.38-12.61 17.39 17.39 0 0 0-1.09-6.09c-.14-.37-.29-.73-.45-1.09s-.22-.47-.33-.69-.35-.66-.55-1a17.61 17.61 0 0 0-3.78-4.48 15.65 15.65 0 0 1 11.6-1.84 16.13 16.13 0 0 1 1.81.54.07.07 0 0 0 .08 0q.44-.76.82-1.56a.07.07 0 0 0 0-.09A16.89 16.89 0 0 0 30 .57z',
  CRDBTWO = 'M21.82 17.47a15.51 15.51 0 0 1-4.25 10.69 15.66 15.66 0 0 1-.72-4.68 15.5 15.5 0 0 1 4.25-10.69 15.62 15.62 0 0 1 .72 4.68',
  CRDBTHREE = 'M15 23.48a15.55 15.55 0 0 1-.72 4.68 15.54 15.54 0 0 1-3.53-15.37A15.5 15.5 0 0 1 15 23.48',
  CLOUDINARY = 'M218.621451,161.618939 C215.360833,161.618939 212.325156,159.543784 211.255171,156.275009 C209.923769,152.205759 212.142772,147.826451 216.213984,146.495028 C230.962755,141.66786 240.491296,128.740696 240.491296,113.560042 C240.491296,94.3344571 224.850871,78.6917573 205.625591,78.6917573 C204.290136,78.6917573 202.853357,78.7971363 201.104499,79.0241064 L193.523411,80.0069681 L192.435188,72.4379198 C187.776295,39.9811923 159.502751,15.5048965 126.667585,15.5048965 C99.522794,15.5048965 75.3569387,31.7555519 65.1089949,56.9066786 L63.1797795,61.6386003 L58.0730327,61.7318202 C34.6042889,62.1634687 15.5107301,81.599812 15.5107301,105.056769 C15.5107301,122.180854 25.4526744,137.797209 40.8377623,144.839362 C44.7306435,146.622699 46.4430248,151.222897 44.6597165,155.11584 C42.8764081,159.008783 38.2783095,160.717138 34.3854283,158.939881 C13.4964022,149.378765 0,128.230013 0,105.056769 C0,74.9021669 23.2336713,49.6416082 52.7453988,46.5390077 C66.3431254,18.1069468 94.8416095,1.42108547e-14 126.665558,1.42108547e-14 C164.755405,1.42108547e-14 197.866173,26.7054667 206.452397,63.1949669 C233.848473,63.6387745 256,86.0622067 256,113.562069 C256,135.231636 241.94834,154.38832 221.037023,161.231874 C220.236561,161.493295 219.421913,161.618939 218.621451,161.618939 Z',
  LINEONE = 'M100.01656,164.973281 C100.014536,164.971257 100.014536,164.971257 100.012512,164.971257 C100.010489,164.971257 100.008465,164.969233 100.006441,164.969233 L100.004418,164.969233 L100.002394,164.967209 L100.00037,164.965186 C100.00037,164.965186 99.9983464,164.965186 99.9983464,164.963162 L99.9963227,164.963162 L99.994299,164.961138 C99.9963227,164.959115 99.9922752,164.959115 99.9922752,164.959115 L99.9902515,164.957091 L99.9882278,164.957091 L99.9862041,164.955067 C99.9882278,164.957091 99.9841804,164.953043 99.9841804,164.953043 C99.9841804,164.953043 99.9801329,164.95102 99.9781092,164.95102 L99.9760855,164.948996 L99.9760855,164.948996 L99.9740618,164.946972 L99.9720381,164.944949 C99.9659669,164.942925 99.9679907,164.942925 99.9659669,164.942925 C99.9639432,164.944949 99.9639432,164.940901 99.9619195,164.940901 L99.9598958,164.938877 C99.9598958,164.938877 99.9578721,164.936854 99.9558484,164.936854 L99.9538246,164.93483 C99.9518009,164.932806 99.9477535,164.932806 99.9457298,164.932806 C99.9437061,164.932806 99.9396586,164.930783 99.9376349,164.930783 C99.9356112,164.928759 99.9356112,164.928759 99.9335875,164.928759 L99.9315638,164.928759 C99.9295401,164.926735 99.9275163,164.926735 99.9254926,164.926735 C99.9234689,164.924711 99.9194215,164.924711 99.9194215,164.924711 L99.9173978,164.924711 L99.9133503,164.922688 C99.9113266,164.922688 99.9113266,164.920664 99.9113266,164.920664 L99.9093029,164.920664 C99.7899037,164.878166 99.6624096,164.851858 99.5288444,164.845787 L99.524797,164.845787 L99.5207495,164.845787 L99.5167021,164.845787 C99.5167021,164.845787 99.5167021,164.845787 99.5146784,164.845787 L99.5126547,164.845787 L99.510631,164.845787 L99.5086073,164.843763 L99.5045598,164.843763 L99.5005124,164.843763 L99.4984887,164.843763 L99.496465,164.843763 L99.4944412,164.843763 L99.4903938,164.843763 L99.4883701,164.843763 L99.4903938,164.843763 L99.4883701,164.843763 L99.4863464,164.843763 L99.4843227,164.843763 L99.482299,164.843763 L99.4802752,164.843763 L99.4782515,164.843763 L99.4762278,164.843763 L99.4742041,164.843763 C96.1229314,164.843763 93.380797,162.115794 93.3605598,158.772617 L93.3605598,90.6422134 L98.5554373,90.6422134 L98.5817456,90.6422134 C99.3770658,90.6766166 99.9194215,90.0654545 99.9194215,89.3308458 C99.9194215,88.782419 99.5834847,88.312917 99.1058879,88.1166166 L74.0543148,70.8259921 C73.6050499,70.5163636 73.0121013,70.5163636 72.5628365,70.8259921 L47.314963,88.2522055 C46.8414136,88.5780237 46.6370183,89.1750198 46.8070104,89.7234466 C46.9790262,90.2718735 47.4849551,90.6442372 48.0596903,90.6442372 L53.280876,90.6442372 L53.2849235,158.79083 C53.3112318,163.50204 57.0955796,167.347099 61.9099986,167.468522 C61.9646389,167.474593 62.0172555,167.47864 62.0718958,167.47864 L99.4721804,167.47864 L99.4944412,167.47864 C99.8384729,167.472569 100.150125,167.334957 100.380829,167.114372 C100.380829,167.114372 100.380829,167.114372 100.382852,167.112348 C100.3869,167.1083 100.390947,167.104253 100.392971,167.102229 C100.394995,167.100206 100.397018,167.100206 100.399042,167.096158 L100.401066,167.094134 L100.403089,167.092111 L100.405113,167.090087 L100.407137,167.088063 L100.409161,167.08604 L100.411184,167.084016 C100.415232,167.081992 100.413208,167.081992 100.415232,167.079968 C100.415232,167.079968 100.415232,167.079968 100.417255,167.077945 L100.419279,167.075921 C100.419279,167.075921 100.419279,167.075921 100.421303,167.073897 C100.647959,166.839146 100.789619,166.521423 100.791643,166.169296 L100.791643,166.165249 L100.791643,166.163225 L100.791643,166.161202 L100.791643,166.159178 L100.791643,166.157154 L100.791643,166.15513 L100.791643,166.153107 L100.791643,166.149059 C100.781524,165.630988 100.467848,165.177676 100.01656,164.973281 Z',
  LINETWO = 'M154.124635,164.973281 C154.124635,164.973281 154.122611,164.971257 154.120588,164.971257 C154.118564,164.971257 154.11654,164.969233 154.114516,164.969233 L154.112493,164.969233 L154.110469,164.967209 L154.108445,164.965186 L154.106422,164.965186 L154.104398,164.963162 L154.102374,164.961138 C154.104398,164.959115 154.10035,164.959115 154.098327,164.959115 L154.096303,164.957091 L154.094279,164.957091 C154.092256,164.957091 154.092256,164.955067 154.092256,164.955067 C154.088208,164.957091 154.088208,164.953043 154.088208,164.953043 L154.084161,164.95102 L154.082137,164.948996 L154.080113,164.948996 L154.07809,164.946972 L154.076066,164.944949 C154.074042,164.942925 154.072018,164.942925 154.072018,164.942925 C154.069995,164.944949 154.069995,164.940901 154.065947,164.940901 L154.063924,164.938877 L154.0619,164.936854 C154.0619,164.936854 154.059876,164.936854 154.057852,164.93483 C154.055829,164.932806 154.051781,164.932806 154.049758,164.932806 C154.047734,164.932806 154.043686,164.930783 154.041663,164.930783 C154.039639,164.928759 154.039639,164.928759 154.037615,164.928759 C154.035592,164.928759 154.035592,164.928759 154.033568,164.926735 C154.033568,164.926735 154.031544,164.926735 154.02952,164.924711 C154.023449,164.922688 154.027497,164.922688 154.025473,164.922688 C154.019402,164.922688 154.023449,164.922688 154.021426,164.920664 C154.021426,164.920664 154.019402,164.91864 154.017378,164.91864 L154.015354,164.916617 L154.013331,164.916617 C153.893931,164.874119 153.766437,164.84781 153.632872,164.841739 L153.628825,164.841739 L153.626801,164.841739 L153.622754,164.841739 L153.62073,164.841739 L153.618706,164.841739 L153.616682,164.841739 L153.614659,164.839715 L153.610611,164.839715 L153.606564,164.839715 L153.60454,164.839715 L153.602516,164.839715 L153.600493,164.839715 L153.596445,164.839715 L153.592398,164.839715 L153.590374,164.839715 L153.58835,164.839715 L153.586327,164.839715 L153.584303,164.839715 L153.582279,164.839715 L153.580256,164.839715 L153.578232,164.839715 L153.576208,164.839715 L153.574184,164.839715 C150.224935,164.839715 147.482801,162.111747 147.462564,158.768569 L147.462564,105.899004 L152.681726,105.899004 C152.699939,105.89698 152.714105,105.89698 152.734343,105.899004 C153.458833,105.899004 154.04571,105.312126 154.04571,104.587636 C154.04571,104.039209 153.709773,103.569708 153.232177,103.373407 L128.17858,86.0827826 C127.729315,85.7731542 127.136366,85.7731542 126.687101,86.0827826 L101.449346,103.506972 C100.975797,103.832791 100.771402,104.429787 100.941394,104.978213 C101.11341,105.52664 101.619339,105.899004 102.194074,105.899004 L107.390975,105.899004 L107.395022,158.788806 C107.417283,163.50204 111.207702,167.349123 116.024145,167.468522 C116.076761,167.474593 116.129378,167.476617 116.181995,167.476617 L153.582279,167.476617 L153.60454,167.476617 C153.948572,167.470545 154.260224,167.332933 154.490928,167.112348 C154.490928,167.112348 154.490928,167.112348 154.492951,167.110324 C154.496999,167.106277 154.505094,167.102229 154.50307,167.100206 C154.505094,167.098182 154.507117,167.098182 154.509141,167.094134 L154.511165,167.092111 L154.513188,167.090087 L154.515212,167.088063 C154.515212,167.088063 154.517236,167.088063 154.517236,167.08604 L154.51926,167.084016 C154.521283,167.084016 154.521283,167.081992 154.521283,167.081992 C154.527354,167.079968 154.525331,167.079968 154.525331,167.077945 C154.525331,167.077945 154.525331,167.077945 154.527354,167.075921 C154.527354,167.075921 154.527354,167.075921 154.529378,167.073897 C154.529378,167.073897 154.529378,167.073897 154.531402,167.071874 C154.758058,166.837123 154.899718,166.519399 154.901742,166.167273 L154.901742,166.163225 L154.901742,166.161202 L154.901742,166.159178 L154.901742,166.157154 L154.901742,166.15513 L154.901742,166.153107 L154.901742,166.151083 L154.901742,166.147036 C154.889599,165.630988 154.575924,165.177676 154.124635,164.973281 Z',
  LINETHREE = 'M208.37438,164.973281 L208.370333,164.971257 C208.368309,164.971257 208.366285,164.969233 208.364262,164.969233 L208.362238,164.969233 L208.360214,164.967209 L208.358191,164.965186 C208.356167,164.965186 208.356167,164.965186 208.356167,164.963162 L208.354143,164.963162 L208.352119,164.961138 L208.350096,164.959115 C208.350096,164.959115 208.348072,164.959115 208.348072,164.957091 L208.346048,164.957091 L208.344025,164.955067 C208.342001,164.957091 208.342001,164.953043 208.339977,164.953043 C208.342001,164.95102 208.337953,164.95102 208.33593,164.95102 L208.333906,164.948996 L208.331882,164.948996 L208.329859,164.946972 L208.327835,164.944949 C208.321764,164.942925 208.323787,164.942925 208.323787,164.942925 C208.321764,164.944949 208.321764,164.940901 208.317716,164.940901 L208.315693,164.938877 C208.317716,164.936854 208.313669,164.936854 208.311645,164.936854 C208.311645,164.936854 208.309621,164.936854 208.309621,164.93483 C208.307598,164.932806 208.30355,164.932806 208.301527,164.932806 C208.299503,164.932806 208.295455,164.930783 208.293432,164.930783 L208.289384,164.928759 C208.289384,164.928759 208.287361,164.928759 208.285337,164.926735 L208.281289,164.924711 C208.275218,164.922688 208.275218,164.922688 208.277242,164.922688 C208.271171,164.922688 208.271171,164.922688 208.273195,164.920664 C208.271171,164.920664 208.271171,164.91864 208.271171,164.91864 C208.269147,164.91864 208.267123,164.916617 208.267123,164.916617 L208.2651,164.916617 C208.1457,164.874119 208.018206,164.84781 207.884641,164.841739 L207.882617,164.841739 L207.87857,164.841739 L207.872499,164.841739 L207.870475,164.841739 L207.868451,164.841739 L207.866428,164.841739 C207.864404,164.839715 207.864404,164.839715 207.86238,164.839715 L207.858333,164.839715 L207.854285,164.839715 L207.852262,164.839715 L207.850238,164.839715 L207.848214,164.839715 L207.844167,164.839715 L207.840119,164.839715 C207.840119,164.839715 207.840119,164.839715 207.838096,164.839715 L207.836072,164.839715 L207.834048,164.839715 L207.832025,164.839715 L207.830001,164.839715 L207.827977,164.839715 L207.825953,164.839715 L207.834048,164.839715 L207.832025,164.839715 C204.482776,164.839715 201.740641,162.111747 201.720404,158.768569 L201.720404,121.149723 L206.927424,121.149723 L206.953732,121.149723 C207.692388,121.13151 208.291408,120.572964 208.291408,119.838356 C208.291408,119.289929 207.955471,118.820427 207.477874,118.624126 L182.424278,101.333502 C181.977036,101.023874 181.382064,101.023874 180.932799,101.333502 L155.684926,118.757692 C155.211376,119.08351 155.006981,119.680506 155.176973,120.228933 C155.348989,120.77736 155.854918,121.149723 156.429653,121.149723 L161.636673,121.149723 L161.64072,158.788806 C161.667029,163.50204 165.455424,167.351146 170.269843,167.468522 C170.322459,167.474593 170.375076,167.476617 170.427693,167.476617 L207.827977,167.476617 L207.850238,167.476617 C208.19427,167.470545 208.505922,167.332933 208.736625,167.112348 L208.738649,167.110324 C208.742697,167.106277 208.748768,167.102229 208.748768,167.100206 C208.750791,167.098182 208.752815,167.098182 208.754839,167.094134 L208.756863,167.092111 L208.758886,167.090087 L208.76091,167.088063 L208.762934,167.08604 L208.764957,167.084016 L208.766981,167.081992 C208.773052,167.079968 208.769005,167.079968 208.771029,167.077945 C208.771029,167.077945 208.771029,167.077945 208.773052,167.075921 L208.775076,167.073897 C208.775076,167.073897 208.775076,167.073897 208.7771,167.071874 C209.003756,166.837123 209.145416,166.519399 209.14744,166.167273 L209.14744,166.163225 L209.14744,166.161202 L209.14744,166.159178 L209.14744,166.157154 L209.14744,166.15513 L209.14744,166.153107 L209.14744,166.151083 L209.14744,166.147036 C209.139345,165.630988 208.823645,165.177676 208.37438,164.973281 Z'
}