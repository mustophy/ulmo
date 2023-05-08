import { atom } from "recoil";

const user = {
    name: 'Mustapha Ozovehe',
    phone: '+2349039309645',
    email: 'ozovehe09@gmail.com',
    dob: '24th May, '
}


const userAtom = atom({
    key: 'userAtom',
    default: user
})

export default userAtom