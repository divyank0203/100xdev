import { atom, useAtom} from 'jotai'


const countAtom = atom(0);

export default countAtom

// now we don't need useState(count) in any other component in our app


