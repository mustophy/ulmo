import { Image } from "react-native"

export const ImageGetter = ({ imageName, style }) => {
    return (
        <Image 
            source={imagePath(imageName)}
            style={style}
        />
    )
}

const imagePath = (name) => {
    if(name === "bathroom") return require('./assets/images/bathroom.png')
    else if(name === "bedroom") return require('./assets/images/bedroom.png')
    else if (name === "kitchen") return require('./assets/images/kitchen.png')
    else if (name === "livingroom") return require('./assets/images/livingroom.png')
    else if (name === "dining") return require('./assets/images/dining.png')
    else if (name === "best") return require('./assets/images/best.png')
    else if (name === "kitchen2") return require('./assets/images/kitchen2.png')
    else if (name === "golden") return require('./assets/images/golden.png')
    else if (name === "summer") return require('./assets/images/summer.png')
    else if (name === "furniture") return require('./assets/images/furniture.png')
    else if (name === "lighting") return require('./assets/images/lighting.png')
    else if (name === "rugs") return require('./assets/images/rugs.png')
    else if (name === "mirrors") return require('./assets/images/mirrors.png')
    else if (name === "blankets") return require('./assets/images/blankets.png')
    else if (name === "cushions") return require('./assets/images/cushions.png')
    else if (name === "curtains") return require('./assets/images/curtains.png')
    else if (name === "baskets") return require('./assets/images/baskets.png')
    else if (name === "vases") return require('./assets/images/vases.png')
    else if (name === "boxes") return require('./assets/images/boxes.png')
    else if (name === "bedside_table") return require('./assets/images/bedside_table.png')
    else if (name === "bedside_table2") return require('./assets/images/bedside_table2.png')
    else if (name === "user1") return require('./assets/images/user1.png')
    else if (name === "order_success") return require('./assets/illustrations/wink.png')
    else if (name === "mastercard") return require('./assets/images/mastercard.png')
    else if (name === "visa") return require('./assets/images/visa.png')
    else if (name === "apple_pay") return require('./assets/images/apple_pay.png')

}