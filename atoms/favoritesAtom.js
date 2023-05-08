import { atom } from "recoil";

const product = {
    price: 489.00,
    description: 'Square bedside table with legs, a rattan shelf',
    images: [
        'kitchen'
    ]
}

const favoritesAtom = atom({
    key: 'favorites',
    default: [
        {
            quantity: 2,
            ...product,
        }
    ]
})

export const removeFromFavorites = (favorites = [], product, setFavorites) => {
    return setFavorites(favorites.filter(favorite => favorite.id !== product.id))
}
export const addToFavorites = (favorites, product, setFavorites) => {
    return setFavorites([...favorites, product])
}

export default favoritesAtom