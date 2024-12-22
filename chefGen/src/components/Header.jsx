import '../index.css';
import chefLogo from '/images/chef.jpg'

export default function HeaderComp(){
    return(<>
        <header className='chefHeader'>
          <img src={chefLogo}
                className='chefImage'></img>
            <h1>Chef Generator</h1>
        </header> 
    </>)
}