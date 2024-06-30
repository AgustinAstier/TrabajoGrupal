const bebidas = [
    {
        "id": 1,
        "name": "Fernet Branca 1000 ml",
        "image": "https://i.postimg.cc/F73y5cbG/Fernet-Branca.png",
        "tamaño": "Mediano",
        "descripcion": "Amargo y aromático licor italiano, ideal para mezclar con cola.",
        "type": "Aperitivo",
        "precio": "$13000"
    },
    {
        "id": 2,
        "name": "Fernet Buhero 700 ml",
        "image": "https://i.postimg.cc/PPXwccxf/Fernet-Buhero.png",
        "tamaño": "Chico",
        "descripcion": "Variante local del fernet argentino, menos amargo y con notas herbales.",
        "type": "Aperitivo",
        "precio": "$9000"
    },
    {
        "id": 3,
        "name": "Fernet Nero 53 750 ml",
        "image": "https://i.postimg.cc/mcD1DF9v/Fernet-Nero53.png",
        "tamaño": "Grande",
        "descripcion": "Fernet argentino premium, intenso y con notas de especias.",
        "type": "Aperitivo",
        "precio": "$9400"
    },
    {
        "id": 4,
        "name": "Vodka Smirnoff 700 ml",
        "image": "https://i.postimg.cc/Kks8H9sj/Smirnoff.png",
        "tamaño": "Grande",
        "descripcion": "Vodka clásico, neutro y versátil, ideal para cócteles.",
        "type": "Vodka",
        "precio": "$7400"
    },
    {
        "id": 5,
        "name": "Vodka Absolut 700 ml",
        "image": "https://i.postimg.cc/pXdsy6XY/Absolut.png",
        "tamaño": "Chico",
        "descripcion": "Vodka premium sueco, suave y refinado.",
        "type": "Vodka",
        "precio": "$16000"
    },
    {
        "id": 6,
        "name": "Vodka Grey Goose 750 ml",
        "image": "https://i.postimg.cc/4nTLKJ88/Grey-Goose.png",
        "tamaño": "Grande",
        "descripcion": "Vodka francés premium, conocido por su pureza y sabor suave.",
        "type": "Vodka",
        "precio": "$77000"
    },
    {
        "id": 7,
        "name": "Vodka Sky 750 ml",
        "image": "https://i.postimg.cc/7C96gP3g/Sky.png",
        "tamaño": "Grande",
        "descripcion": "Vodka estadounidense, cristalino y con sabor limpio.",
        "type": "Vodka",
        "precio": "$7300"
    },
    {
        "id": 8,
        "name": "Ron Barcelo Añejo 750 ml",
        "image": "https://i.postimg.cc/JDTsW7t1/Ron-Barcelo-A-ejo.png",
        "tamaño": "Chico",
        "descripcion": "Ron dominicano añejado en barricas de roble, con notas de vainilla y especias.",
        "type": "Ron",
        "precio": "$40000"
    },
    {
        "id": 9,
        "name": "Ron Habbana Añejo 750 ml",
        "image": "https://i.postimg.cc/PCmN5QNV/Ron-Habbana-A-ejo.png",
        "tamaño": "Grande",
        "descripcion": "Ron cubano añejo, suave y con un rico bouquet.",
        "type": "Ron",
        "precio": "$15000"
    },
    {
        "id": 10,
        "name": "Ron Baccardi Añejo 750 ml",
        "image": "https://i.postimg.cc/jwqD9nxg/Ron-Baccardi-A-ejo.png",
        "tamaño": "Grande",
        "descripcion": "Ron puertorriqueño añejo, versátil y con notas de especias y frutas.",
        "type": "Ron",
        "precio": "$20000"
    },
    {
        "id": 11,
        "name": "Ron Capitan Morgan Añejo 750 ml",
        "image": "https://i.postimg.cc/fkrV2b6C/Ron-Capitan-Morgan-A-ejo.png",
        "tamaño": "Grande",
        "descripcion": "Ron añejo de estilo jamaicano, especiado y con suaves notas de vainilla.",
        "type": "Ron",
        "precio": "$17000"
    },
    {
        "id": 12,
        "name": "Ron Baccardi Blanco 750 ml",
        "image": "https://i.postimg.cc/F1RfVSn1/Ron-Baccardi-Blanco.png",
        "tamaño": "Grande",
        "descripcion": "Ron blanco puertorriqueño, suave y perfecto para cócteles refrescantes.",
        "type": "Ron",
        "precio": "$24000"
    },
    {
        "id": 13,
        "name": "Ron Habbana Blanco 750 ml",
        "image": "https://i.postimg.cc/YGSS8cRT/Ron-Habbana-Blanco.png",
        "tamaño": "Grande",
        "descripcion": "Ron blanco cubano, ligero y con un toque de dulzura.",
        "type": "Ron",
        "precio": "$13000"
    },
    {
        "id": 14,
        "name": "Ron Barcelo Blanco 750 ml",
        "image": "https://i.postimg.cc/qNfzr5BC/Ron-Barcelo-Blanco.png",
        "tamaño": "Chico",
        "descripcion": "Ron dominicano blanco, fresco y adecuado para cócteles tropicales.",
        "type": "Ron",
        "precio": "$56000"
    },
    {
        "id": 15,
        "name": "Ron Capitan Morgan Blanco 750 ml",
        "image": "https://i.postimg.cc/f3DytS9z/Ron-Capitan-Morgan-Blanco.png",
        "tamaño": "Grande",
        "descripcion": "Ron blanco jamaicano, suave y con un ligero toque de especias.",
        "type": "Ron",
        "precio": "$36000"
    },
    {
        "id": 16,
        "name": "Tequila Jose Cuervo Añejo 750 ml",
        "image": "https://i.postimg.cc/XBGYSwT8/Tequila-Jose-Cuevo-A-ejo.png",
        "tamaño": "Mediano",
        "descripcion": "Tequila mexicano añejado en barricas, con notas suaves de agave y madera.",
        "type": "Tequila",
        "precio": "$34000"
    },
    {
        "id": 17,
        "name": "Tequila Jose Cuervo Blanco 750 ml",
        "image": "https://i.postimg.cc/WhZ15wmp/Tequila-Jose-Cuervo-Blanco.png",
        "tamaño": "Mediano",
        "descripcion": "Tequila mexicano blanco, fresco y perfecto para margaritas.",
        "type": "Tequila",
        "precio": "$32000"
    },
    {
        "id": 18,
        "name": "Tequila Don Julio 750 ml",
        "image": "https://i.postimg.cc/fkJL9NJ9/Tequila-Don-Julio.png",
        "tamaño": "Chico",
        "descripcion": "Tequila premium mexicano, suave y con un sabor rico en agave.",
        "type": "Tequila",
        "precio": "$95000"
    },
    {
        "id": 19,
        "name": "Tequila Patron 1 L",
        "image": "https://i.postimg.cc/4YTNqHw6/Tequila-Patron.png",
        "tamaño": "Chico",
        "descripcion": "Tequila ultra premium, suave y con un sabor limpio y fresco.",
        "type": "Tequila",
        "precio": "$120000"
    },
    {
        "id": 20,
        "name": "Tequila Sierra 700 ml",
        "image": "https://i.postimg.cc/grQ0yTZB/Tequila-Sierra.png",
        "tamaño": "Chico",
        "descripcion": "Tequila mexicano, joven y con un carácter suave y herbal.",
        "type": "Tequila",
        "precio": "$80000"
    },
    {
        "id": 21,
        "name": "Jhonnie Walker Red Label 750 ml",
        "image": "https://i.postimg.cc/ZvCCYky6/Jhonnie-Walker-Red-Label.png",
        "tamaño": "Grande",
        "descripcion": "Whisky escocés blended, especiado y con notas de frutas.",
        "type": "Whisky",
        "precio": "$30000"
    },
    {
        "id": 22,
        "name": "Jhonnie Walker Black Label 750 ml",
        "image": "https://i.postimg.cc/WDLr94qC/Jhonnie-Walker-Black-Label.png",
        "tamaño": "Grande",
        "descripcion": "Whisky escocés blended, suave y ahumado con notas de vainilla.",
        "type": "Whisky",
        "precio": "$50000"
    },
    {
        "id": 23,
        "name": "Jhonnie Walker Blue Label 750 ml",
        "image": "https://i.postimg.cc/5XvQFMK3/Jhonnie-Walker-Blue-Label.png",
        "tamaño": "Grande",
        "descripcion": "Whisky escocés blended, elegante y complejo con notas de frutas y madera. El mejor del mundo, un elixir: https://www.youtube.com/watch?v=Pg9FFe6S4aM",
        "type": "Whisky",
        "precio": "$400000"
    },
    {
        "id": 24,
        "name": "Ballantines 700 ml",
        "image": "https://i.postimg.cc/McKVQFCr/Ballantines.png",
        "tamaño": "Mediano",
        "descripcion": "Whisky escocés blended, suave y equilibrado con un sabor floral.",
        "type": "Whisky",
        "precio": "$28000"
    },
    {
        "id": 25,
        "name": "Whisky Jack Daniel's 750 ml",
        "image": "https://i.postimg.cc/rzcjVfm3/Jack-Danniel.png",
        "tamaño": "Chico",
        "descripcion": "Whisky americano, con sabor a vainilla, caramelo y madera.",
        "type": "Whisky",
        "precio": "$46000"
    },
    {
        "id": 26,
        "name": "Cynar 750 ml",
        "image": "https://i.postimg.cc/Z09PHXCG/Cynar.png",
        "tamaño": "Grande",
        "descripcion": "Aperitivo italiano a base de alcachofa, amargo y herbal.",
        "type": "Aperitivo",
        "precio": "$6400"
    }
];
