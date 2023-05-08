
export const App = () => {

 const square = () =>{
 return(
  <button onClick={onChange} >{value}</button>
 )
 };
 const board = ()=>{
  const [squares, setSquares] = useState(Array(9),fill(null));
  const [xNext, setXNext]= useState(true);

  const hendlerClick =(i)=>{
    if (squares[i]) {
      return
    }
   const nextSquares = squares.slice();
   if (xNext) {
    nextSquares[i]=('x');
   } else {
    nextSquares[i]=('0');
   }
   
   setSquares(nextSquares); 
   setXNext(!xNext);
  };  

  return(
    <square value={squares[0]} onChange={()=>{hendlerClick(0)}}/>,
    <square value={squares[1]} onChange={()=>{hendlerClick(1)}}/>,
    <square value={squares[2]} onChange={()=>{hendlerClick(2)}}/>,
    <square value={squares[3]} onChange={()=>{hendlerClick(3)}}/>,
    <square value={squares[4]} onChange={()=>{hendlerClick(4)}}/>,
    <square value={squares[5]} onChange={()=>{hendlerClick(5)}}/>,
    <square value={squares[6]} onChange={()=>{hendlerClick(6)}}/>,
    <square value={squares[7]} onChange={()=>{hendlerClick(7)}}/>,
    <square value={squares[8]} onChange={()=>{hendlerClick(8)}}/>
  )
  
 };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      React homework template
    </div>
  );
};
