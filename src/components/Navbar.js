import { Mail, Notifications, Pets, Search } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Navbar=()=> {
const [open,setOpen]=useState(false);
    const Icons=styled(Box)(({theme})=>({
     display:"none",
     alignItems:"center",
     gap:"20px",
     [theme.breakpoints.up("sm")]:{
         display:"flex",
     }
    }));
    const UserBox=styled(Box)(({theme})=>({
        display:"flex",
        alignItems:"center",
        gap:"20px",
        [theme.breakpoints.up("sm")]:{
            display:"none",
        }
       }));
  return (
    <AppBar position='sticky'>
    <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
   <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}> Grece dev</Typography>
   <Pets sx={{display:{xs:"block",sm:"none"}}}/>
   <Search sx={{backgroundColor:"white",padding:"0 10px",borderRadius:"10px",width:"40%"}}>
   <InputBase placeholder="search..."/>
   </Search>
   <Icons>
   <Badge badgeContent={4} color="error">
   <Mail/>
  </Badge>
  <Badge badgeContent={4} color="error">
   <Notifications/>
  </Badge>
  <Avatar 
  sx={{width:30,height:30}} 
  src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=400"
  onClick={e=>setOpen(true)}
  />
</Icons>
<UserBox onClick={e=>setOpen(true)}>
<Avatar sx={{width:30,height:30}} src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=400"/>
</UserBox>
    </Toolbar>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>{setOpen(false)}}
       anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar