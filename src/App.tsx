import { useState } from 'react'

type faq = {

  title: string;
  text: string;
}

const faqs: faq[] = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];
function App() {


  return (
    <>
      <div>
        <Accordion data={faqs} />
      </div>
    </>
  )
}

function Accordion({ data }: any) {

  const [usetext, setUsetext] = useState<faq[]>(faqs);
  const [curOpen, isCurOpen] = useState(null);



  function changeText() {

    setUsetext(usetext)
  }

  return <div className='accordion'>

    {
      data.map((el: any, i: any) =>
        <Item
          title={el.title}
          curOpen={curOpen}
          onCurOpen={isCurOpen}

          num={i}
          key={el.title} >{el.text} </Item>)

    }
  </div>;
}


function Item({ num, title, curOpen, onCurOpen, children }: any) {


  const isopen = num === curOpen;

  //const [isopen, setIsopem] = useState(false);

  function handleToggle() {

    //setIsopem(isopen => !isopen)
    onCurOpen(isopen ? null : num);
  }



  return (

    <div className={`item ${isopen ? "open" : ""}`} onClick={handleToggle} >


      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      < p className='text' > {title}</p >
      <p className='icon'>{isopen ? "-" : "+"}</p>


      {isopen && <p className='content-box'>{children}</p>}


    </div >)


}



export default App
