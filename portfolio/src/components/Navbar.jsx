
import styled from 'styled-components';

const Section = styled.div`
    display:flex;
    justify-content:center;

    @media only screen and (max-width: 768px){
      width:100%;
    }
  `;

  const Container = styled.div`
    width:1400px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 0px;

    @media only screen and (max-width: 768px){
      width:100%;
      padding:10px;
    }
    `;
  const Links = styled.div`
    display:flex;
    align-items:center;
    gap:50px;

    
  `;  
  const Logo = styled.img`
    height:50px;
    @media only screen and (max-width: 768px){
      width:100%;
    }
  `; 
  const List = styled.ul`
    display:flex;
    gap:20px;
    list-style:none;

    @media only screen and (max-width: 768px){
      display:none;
    }
  `; 
  const ListItem = styled.li`
    
    cursor:pointer;
  `; 
  const Icons = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
  `; 
  const Icon = styled.img`
    width:20px;
    cursor:pointer;
  `; 
  const Button = styled.button`
    width:100px;
    padding:10px;
    background-color:#da4ea2;
    color:white;
    border:none;
    border-radius:5px;
    cursor:pointer;
  `; 
const Navbar = () => {
  const handleClickScroll = (props) => {
    const element = document.getElementById(props);
    if (element) {
      // 👇 Will scroll smoothly to the top of the selected section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="./img/logo.png" />
                <List>
                    <ListItem onClick={()=>handleClickScroll('home')}>Home</ListItem>                    
                    <ListItem onClick={()=>handleClickScroll('who')}>Studio</ListItem>                    
                    <ListItem onClick={()=>handleClickScroll('works')}>Works</ListItem>
                    <ListItem onClick={()=>handleClickScroll('contact')}>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar;