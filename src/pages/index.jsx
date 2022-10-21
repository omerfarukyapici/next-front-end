import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";


/* 
😀 😃 😄 😁 😆 😅 😂 🤣 🥲 ☺️ 😊 😇 🙂 🙃 😉 😌 😍
🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 
🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭
😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭
🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪
😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 
🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀
😿 😾


👋 🤚 🖐 ✋ 🖖 👌 🤌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆
🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐
*/


export default function Home(props) {

  /* const [todo, setTodo] = useState([]); */

  useEffect(() => {
   /*  const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const data = await res.json()
      setTodo(data)
    }
 */
    /* fetchTodos(); */
    Prism.highlightAll();
  }, [])






  const code = `
    import { useEffect, useState } from "react";

    const Todo = () => {
      const [todo, setTodo] = useState([]);

      useEffect(() => {
      const fetchTodos = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await res.json()
        setTodo(data)
      }
  
        fetchTodos()
      }, [])
  
      //Last value is "todo", We can use "todo" inside "{}"
  
      return(
        <div>
        {
          todo.length === 0 ? (
            <div>Loading...</div>
          ) : (
            todo.map(todo => (
              <ul className="text-white" key={todo.id}>
                <li>{todo.id} : {todo.title}</li>
              </ul>
            ))
          ).slice(0, 5)
        } 
        </div>
      )
    }
    export default Todo;
    
    /*  
    output 👇
    1 : delectus aut autem
    2 : quis ut nam facilis et officia qui
    3 : fugiat veniam minus
    4 : et porro tempora
    5 : laboriosam mollitia et enim quasi adipisci quia provident illum
    */
  `



  /* change the themes under node modules prism themes */

  return (
    <>
      <Header />
      <main className="flex justify-center bg-contentBg">
        <section className="about-content text-[white] w-main_w ">
          {/* <div className="pt-4 pb-10">
            {
              props.data === 0 ? (
                <div>Loading...</div>
              ) : (
                props.data.map(todo => (
                  <ul className="text-white" key={todo.id}>
                    <li>{todo.id} : {todo.title}</li>
                  </ul>
                ))
              ).slice(0, 5)
            }
          </div> */}

          <div>
            <h3 className="pt-4">React.js useState( ) and useEffect( ) 👇</h3>
            <pre className={"language-javascript w-full scrollbar scrollbar-thumb-[grey] scrollbar-height-[1rem] scrollbar-track-blue-300 overflow-y-scroll dark:scrollbar-thumb-blue-100 dark:scrollbar-track-gray-700"}>
              <code>
                {code}
              </code>
            </pre>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}


/* export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data = await res.json()
  return {
    props: {
      data
    }
  }
} */