import React, { useState } from 'react'
import {Grid,Row,Col} from 'rsuite';

//Styles
import '../styles/main.style.less';
import "../styles/app.css"
import "../styles/main.style.css"
//Components
import TitleLogo from './utils/titleLogo'
import AppRouter from './router/appRouter'
import {Icon,IconButton} from 'rsuite'
import Menu from './utils/menu'

//Libraries
import Cookies from 'js-cookie'

function App() {

  const [showMenu,setShowMenu] = useState(false);
  return (
    <>
    <Grid id="appContainer" fluid>
      {
        location.href.indexOf("report")<0?
        <Row>
        <Col xs={24}>
          <TitleLogo />
          {Cookies.get("auth")=="1"?   <IconButton icon={<Icon icon="bars"/>} onClick={()=>setShowMenu(!showMenu)}>Μενού</IconButton>:<></>}
          {Cookies.get("auth")=="1"?  <Menu showMenu={showMenu} setShowMenu={setShowMenu}/> :<></>}
        </Col>
      </Row>
      :
      <></>
      }
      <AppRouter/>
     

    </Grid>

    </>
  );
}

export default App;
