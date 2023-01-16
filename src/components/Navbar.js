import React from 'react'
import { NavbarBarItems } from '../Utils/NavData';
import Button from './Shared/Button';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationSmall from './NavigationSmall';
import NavigatonLarge from './NavigatonLarge';
function Navbar() {
  return (
<div>
    <NavigationSmall/>
    <NavigatonLarge/>
</div>
  )
}

export default Navbar