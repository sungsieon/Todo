import './App.css';
import {useRef,useState} from 'react';


function App() {

const [todos,setTodos] = useState<(string | number)[]>([]);

const listRef = useRef<HTMLInputElement>(null);


  
  const addList = () => {

    if(listRef.current){
      const inputValue = listRef.current.value;
      setTodos((prev) => [...prev,inputValue]);
    }

  }
   

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-[#1A1C23]">
    <div>
    <div className="flex justify-center items-center p-2 text-[2rem]">
    <svg className="mr-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="2" width="18" height="20" rx="2" fill="#FFF"/>
  <path d="M6 5H18" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M6 9H14" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M6 13H18" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M6 17H14" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
  <rect x="4" y="2" width="2" height="20" fill="#2196F3"/>
  <rect x="6" y="2" width="1" height="20" fill="#90CAF9"/>
</svg>
<span className="text-white">My Todo List</span>
    </div>
    <div className=" w-[30rem] h-[35rem] p-8 bg-[#17191F] border-2 border-[#181A20] rounded-[30px] ">

    <div className="flex">
      <input ref={listRef} className="w-full bg-[#1A1C23] p-6 rounded-[15px]" placeholder='할 일을 입력하세요'/>
      <button onClick={addList} className="w-[10rem] bg-[#4C74FF] ml-6 rounded-[15px] text-white">추가</button>
    </div>

    {todos.map((todo, index) => (
      <div key={index} className="flex justify-between bg-white p-6 rounded-[15px] mt-4">
    <label>
    <input type='checkbox'/>
    <span className="ml-2">{todo}</span>
    </label>
     
    <div><span>X</span></div>
    </div>
    ))}
    
    

    </div>
    </div>
    </div>
  );
}

export default App;
