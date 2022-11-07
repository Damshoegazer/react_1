
const itemsDB = [
    {
    id: 1,
    title: "GeForce GTX 16 Series GTX 1660",
    price: 131.999,
    stock: 20,
    category: "Placa de video",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_642733-MLA41348105825_042020-F.webp",
    description: "Nvidia Evga SC Gaming GeForce GTX 16 Series GTX 1660 06G-P4-1067-KR",
    },
    {
    id: 2,
    title: "Geforce GTX 1660 SUPER",
    price: 81.699,
    stock: 23,
    category: "Placa de video",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_733209-MLA48658478735_122021-F.webp",
    description: "Nvidia Colorful GeForce GTX 16 Series GTX 1660 SUPER GEFORCE GTX 1660 SUPER NB 6G-V",
    },
    {
    id: 3,
    title: "MSI Optix G24C4 led '23.6'",
    price: 119.999,
    stock: 10,
    category: "Monitor",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_684664-MLA48760421098_012022-F.webp",
    description: "Monitor gamer curvo MSI Optix G24C4 led 23.6' negro 100V/240V",
    },
    {
    id: 4,
    title: "Asus Gaming VG248QG led 24'",
    price: 91.039,
    stock: 8,
    category: "Monitor",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_887397-MLA46544970616_062021-F.webp",
    description: "Monitor gamer Asus Gaming VG248QG led 24' negro 100V/240V",
    },
    {
    id: 5,
    title: "Logitech G Series Lightspeed G502",
    price: 17.499,
    stock: 22,
    category: "Mouse",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_943772-MLA40076329951_122019-F.webp",
    description: "Mouse de juego inalámbrico recargable Logitech G Series Lightspeed G502 negro",
    },
    {
    id: 6,
    title: "Corsair M65 Elite",
    price: 13.914,
    stock: 25,
    category: "Mouse",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_747381-MLA30982312636_062019-O.webp",
    description: "Mouse Gamer Corsair M65 Elite Rgb Negro Optico 18000 Dpi",
    }
]

export default function getItemsFromAPI() {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(itemsDB);
    }, 500);
    });
}

export function getSingleItemFromAPI(idParams) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        let itemRequested = itemsDB.find((item) => item.id === Number(idParams));

        if (itemRequested) {
        resolve(itemRequested);
        } else {
            reject(new Error("El item no existe."));
        }
    }, 500);
    });
}

export function getItemsFromAPIByCategory(categoryid) {
    return new Promise((resolve) => {
    setTimeout(() => {
        let itemsRequested = itemsDB.filter(
        (item) => item.category === categoryid
        );
        resolve(itemsRequested);
    }, 500);
    });
}