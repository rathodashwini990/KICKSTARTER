
import {Navbar} from './ravi/navbar'
import {Header} from "./ravi/header"
import {Footer} from "./ravi/footer"
import {CartItem} from "./ravi/cartitem";
import Module1 from "./Modules/Module1";
import Module2 from "./Modules/Module2";
import Module3 from "./Modules/Module3";
import Grid1 from "./Grids/Grid1";
import Module4 from "./Modules/Module4";
import Grid2 from "./Grids/Grid2";
import Module5 from "./Modules/Module5";
import Module6 from "./Modules/Module6";
import Module7 from "./Modules/Module7";
import ReactCardSlider from "../Aakash/Carousel/ReactCardSlider";
import Data from "../data";
import Data2 from "../data2";
import Data3 from "../data3";
import GridImage1 from "./GridImage/GridImage1";
export const Home = ()=>{
	return (<>
	<Navbar />
	<Header/>
	<CartItem/>
	<Module1/>
	<ReactCardSlider slides={Data}
 />
	<Module2/>
	<div>form</div>
	<ReactCardSlider slides={Data2} />
	<Module3/>
	<h1>carausel</h1>
	<Module4/>
	<Grid1/>
	<Module5/>
	<ReactCardSlider slides={Data3} />
	<Module6/>
	<GridImage1 />
	<Module7/>
	<Grid2/>
	<Footer/>
	</>)
}