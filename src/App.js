import logo from './logo.svg';
import './App.css';
import './style.css';




function App() {
    let btn = document.querySelector(".ok")
    let abc;
     function axe(){   
       abc=()=>{  return 0;}
     }
      
      let change  = ()=>{
         axe.map(function(elt){ return elt;})
       }

  return (
<div className="App">
    <div className='cadre'>
   
   <button type='button' className='ok'>{change()}</button>
   
    

      <div className='logo'><img src="icon-star.svg" alt="" /> </div>
      <div className='texte1'> How did we do </div>
       <div className='texte2'>
      <div>Please let us know how we did with your support</div>
      <div className='t2'>request.All feedback is appreciated to help us </div>
      <div className='t3'>improve our offering!</div>

        
        </div>
        <div className='notes'>
          <div className='note'> 1</div>
           <div className='note'>2</div> 
           <div className='note'>3</div> 
           <div className='note'>4</div> 
           <div className='note'>5</div>
        </div>
        <div>
      <button type='submit'className='boutton'>SUBMIT</button>
        </div>
    </div>
   




    </div>
  );
}

export default App;
