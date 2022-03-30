import {useState} from 'react'
import {useColorMode} from '@chakra-ui/react'
// SIDEBAR LOGIC 



export default function SidebarLogic() {
    
    const {colorMode} = useColorMode() 

    const [navSize, setNavSize] = useState('large')

    const toggle = () => navSize === 'large' ? setNavSize(curr => curr = 'small') : setNavSize(curr => curr = 'large')

    const boxShadow = colorMode === 'light' ? '0 4px 12px 0 black': '0 4px 12px 0 rgba(255, 255, 255, 0.03)' 

    const hideDisplay = navSize === 'small' && 'none'

    const sideBarWidth = navSize === 'small' ? '5vw' : '15vw'

    const sideBarRadius = navSize === 'small' ? '15px' : '30px'

    const sideBarAlign = navSize === 'small' && 'center'

    return{toggle, boxShadow, hideDisplay, sideBarWidth, sideBarRadius, sideBarAlign}
}