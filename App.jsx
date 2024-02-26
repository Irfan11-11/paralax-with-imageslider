import img1 from './images/img1.png'
import img2 from './images/img2.png'
import text from './images/text.png'
import { useState } from 'react'
import './App.css'

function App() {
  const [offset, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)

  //image slider
  console.clear();

  const elShoes = document.querySelectorAll(".shoe");

  [...elShoes].forEach((shoe) => {
    shoe.addEventListener("click", () => {
      [...document.querySelectorAll(".shoe[data-active]")].forEach(
        (el) => delete el.dataset.active
      );

      shoe.dataset.active = true;
    });
  });

  return (
    <div className="App" >
      <div className="zoom">
        <img src={img1} alt="" id="img1"
          style={{ width: (100 + offset * 0.3) + '%' }}
        />
        <img src={img2} alt="" id="img2"
          style={{ width: (100 + offset * 0.3) + '%' }}
        />
        <img src={text} alt="" id="text"
          style={{ top: `-${10 + offset * 0.3 + '%'}` }}
        />
      </div>

      <div className="container">
        <h1>More Adventure</h1>
        <h5>Hover Here</h5>
        <div className="Images-wrap">
          <div className="photo photo-1"></div>
          <div className="photo photo-2"></div>
          <div className="photo photo-3"></div>
          <div className="photo photo-4"></div>
          <div className="photo photo-5"></div>
          <div className="photo photo-6"></div>
          <div className="photo photo-7"></div>
          <div className="photo photo-8"></div>
          <div className="photo photo-9"></div>
          <div className="photo photo-10"></div>


        </div>
      </div>

      <div className="content">
        <h2>Adventure</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus cupiditate maiores ratione accusantium quia sunt architecto dolorum facilis nam! Incidunt placeat praesentium porro accusantium? Earum aperiam ad rem rerum, natus repellendus illo debitis necessitatibus obcaecati aliquam deleniti voluptas odit quo tempora dolores distinctio enim asperiores error libero sapiente deserunt, vel consectetur aut? Aspernatur culpa, ratione nam officiis debitis incidunt amet vero accusantium aut? Perspiciatis accusamus voluptatum aliquid reprehenderit at reiciendis debitis nesciunt autem assumenda odio nihil qui earum eius veniam, commodi deserunt eaque repellat doloremque facere! Rem enim in molestias quidem maiores doloribus a officia magni, autem tenetur quo quaerat minus culpa mollitia, perferendis iusto provident eum cumque ullam quod! Sint omnis esse repellat dolor illum unde dolores a quaerat quibusdam doloribus laborum, est exercitationem. Corporis non repellat, accusamus perspiciatis tenetur blanditiis natus veniam temporibus excepturi animi pariatur recusandae dicta consectetur doloremque quibusdam? Odio harum, suscipit accusantium est soluta aut. Animi quasi, earum consequuntur ipsa ut exercitationem eligendi et libero, quaerat architecto, placeat natus. Numquam quasi voluptatum, reprehenderit necessitatibus praesentium eaque aliquam neque illo voluptates porro quos facere nesciunt. Culpa et repellendus voluptatibus ea quae aliquid perspiciatis! Ratione doloremque quis nemo adipisci dignissimos officia. Optio alias maxime iste placeat exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit possimus incidunt quam. Provident suscipit magnam quidem ipsam, repellat placeat! Obcaecati asperiores officia natus voluptas assumenda iusto ex aperiam ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quibusdam dicta. Sunt debitis odio doloremque aliquid accusamus ullam fugit numquam consectetur odit? Sequi non, incidunt saepe excepturi maiores nulla exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, quo quisquam ad vel enim similique? Sint voluptate sapiente culpa soluta. Odit facilis ipsa exercitationem laboriosam nostrum omnis natus quis culpa!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus cupiditate maiores ratione accusantium quia sunt architecto dolorum facilis nam! Incidunt placeat praesentium porro accusantium? Earum aperiam ad rem rerum, natus repellendus illo debitis necessitatibus obcaecati aliquam deleniti voluptas odit quo tempora dolores distinctio enim asperiores error libero sapiente deserunt, vel consectetur aut? Aspernatur culpa, ratione nam officiis debitis incidunt amet vero accusantium aut? Perspiciatis accusamus voluptatum aliquid reprehenderit at reiciendis debitis nesciunt autem assumenda odio nihil qui earum eius veniam, commodi deserunt eaque repellat doloremque facere! Rem enim in molestias quidem maiores doloribus a officia magni, autem tenetur quo quaerat minus culpa mollitia, perferendis iusto provident eum cumque ullam quod! Sint omnis esse repellat dolor illum unde dolores a quaerat quibusdam doloribus laborum, est exercitationem. Corporis non repellat, accusamus perspiciatis tenetur blanditiis natus veniam temporibus excepturi animi pariatur recusandae dicta consectetur doloremque quibusdam? Odio harum, suscipit accusantium est soluta aut. Animi quasi, earum consequuntur ipsa ut exercitationem eligendi et libero, quaerat architecto, placeat natus. Numquam quasi voluptatum, reprehenderit necessitatibus praesentium eaque aliquam neque illo voluptates porro quos facere nesciunt. Culpa et repellendus voluptatibus ea quae aliquid perspiciatis! Ratione doloremque quis nemo adipisci dignissimos officia. Optio alias maxime iste placeat exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit possimus incidunt quam. Provident suscipit magnam quidem ipsam, repellat placeat! Obcaecati asperiores officia natus voluptas assumenda iusto ex aperiam ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quibusdam dicta. Sunt debitis odio doloremque aliquid accusamus ullam fugit numquam consectetur odit? Sequi non, incidunt saepe excepturi maiores nulla exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, quo quisquam ad vel enim similique? Sint voluptate sapiente culpa soluta. Odit facilis ipsa exercitationem laboriosam nostrum omnis natus quis culpa!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus cupiditate maiores ratione accusantium quia sunt architecto dolorum facilis nam! Incidunt placeat praesentium porro accusantium? Earum aperiam ad rem rerum, natus repellendus illo debitis necessitatibus obcaecati aliquam deleniti voluptas odit quo tempora dolores distinctio enim asperiores error libero sapiente deserunt, vel consectetur aut? Aspernatur culpa, ratione nam officiis debitis incidunt amet vero accusantium aut? Perspiciatis accusamus voluptatum aliquid reprehenderit at reiciendis debitis nesciunt autem assumenda odio nihil qui earum eius veniam, commodi deserunt eaque repellat doloremque facere! Rem enim in molestias quidem maiores doloribus a officia magni, autem tenetur quo quaerat minus culpa mollitia, perferendis iusto provident eum cumque ullam quod! Sint omnis esse repellat dolor illum unde dolores a quaerat quibusdam doloribus laborum, est exercitationem. Corporis non repellat, accusamus perspiciatis tenetur blanditiis natus veniam temporibus excepturi animi pariatur recusandae dicta consectetur doloremque quibusdam? Odio harum, suscipit accusantium est soluta aut. Animi quasi, earum consequuntur ipsa ut exercitationem eligendi et libero, quaerat architecto, placeat natus. Numquam quasi voluptatum, reprehenderit necessitatibus praesentium eaque aliquam neque illo voluptates porro quos facere nesciunt. Culpa et repellendus voluptatibus ea quae aliquid perspiciatis! Ratione doloremque quis nemo adipisci dignissimos officia. Optio alias maxime iste placeat exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit possimus incidunt quam. Provident suscipit magnam quidem ipsam, repellat placeat! Obcaecati asperiores officia natus voluptas assumenda iusto ex aperiam ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quibusdam dicta. Sunt debitis odio doloremque aliquid accusamus ullam fugit numquam consectetur odit? Sequi non, incidunt saepe excepturi maiores nulla exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, quo quisquam ad vel enim similique? Sint voluptate sapiente culpa soluta. Odit facilis ipsa exercitationem laboriosam nostrum omnis natus quis culpa!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus cupiditate maiores ratione accusantium quia sunt architecto dolorum facilis nam! Incidunt placeat praesentium porro accusantium? Earum aperiam ad rem rerum, natus repellendus illo debitis necessitatibus obcaecati aliquam deleniti voluptas odit quo tempora dolores distinctio enim asperiores error libero sapiente deserunt, vel consectetur aut? Aspernatur culpa, ratione nam officiis debitis incidunt amet vero accusantium aut? Perspiciatis accusamus voluptatum aliquid reprehenderit at reiciendis debitis nesciunt autem assumenda odio nihil qui earum eius veniam, commodi deserunt eaque repellat doloremque facere! Rem enim in molestias quidem maiores doloribus a officia magni, autem tenetur quo quaerat minus culpa mollitia, perferendis iusto provident eum cumque ullam quod! Sint omnis esse repellat dolor illum unde dolores a quaerat quibusdam doloribus laborum, est exercitationem. Corporis non repellat, accusamus perspiciatis tenetur blanditiis natus veniam temporibus excepturi animi pariatur recusandae dicta consectetur doloremque quibusdam? Odio harum, suscipit accusantium est soluta aut. Animi quasi, earum consequuntur ipsa ut exercitationem eligendi et libero, quaerat architecto, placeat natus. Numquam quasi voluptatum, reprehenderit necessitatibus praesentium eaque aliquam neque illo voluptates porro quos facere nesciunt. Culpa et repellendus voluptatibus ea quae aliquid perspiciatis! Ratione doloremque quis nemo adipisci dignissimos officia. Optio alias maxime iste placeat exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit possimus incidunt quam. Provident suscipit magnam quidem ipsam, repellat placeat! Obcaecati asperiores officia natus voluptas assumenda iusto ex aperiam ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quibusdam dicta. Sunt debitis odio doloremque aliquid accusamus ullam fugit numquam consectetur odit? Sequi non, incidunt saepe excepturi maiores nulla exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, quo quisquam ad vel enim similique? Sint voluptate sapiente culpa soluta. Odit facilis ipsa exercitationem laboriosam nostrum omnis natus quis culpa!</p>
      </div>
    </div>
  )
}

export default App
