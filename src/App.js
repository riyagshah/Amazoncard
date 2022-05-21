
import './App.css';
import Maincard from './components/maincard';
function App() {
  let scrq="https://www.transparentpng.com/thumb/arrow/arrow-icons-png-clipart-5.png";
  return (
   
    <div className="App">

        <Maincard arrow={scrq}date={"28/10/2020"} heading={"Amazon Gift"} subheading={"Pay"} devices={"Desktop- Mobile"} logo={"https://3.bp.blogspot.com/-WiRcMnvbSYA/XFmKhavuiAI/AAAAAAAAHqo/w6iRalrC2XoCzCra3HF8NAWijme0nFjPQCK4BGAYYCw/s640/Amazon%2BLogo.png"} color={"orange"}/>
        <br></br>
        <Maincard arrow={scrq}date={"28/10/2020"} heading={"Amazon Gift"} subheading={"Pay"} devices={"Desktop- Mobile"} logo={"https://3.bp.blogspot.com/-WiRcMnvbSYA/XFmKhavuiAI/AAAAAAAAHqo/w6iRalrC2XoCzCra3HF8NAWijme0nFjPQCK4BGAYYCw/s640/Amazon%2BLogo.png"} color={"orange"}/>
        <br></br>
        <Maincard arrow={scrq} date={"17 Sep 2020"} heading={"Apple Gift"} subheading={"Payment"} devices={"MacOS- Mobile"} logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/976px-Apple_logo_black.svg.png?20211218170823"}color={"white"}/>
    </div>
  );
}

export default App;
