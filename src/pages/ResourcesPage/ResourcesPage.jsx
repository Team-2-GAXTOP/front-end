import { useState } from "react"
import "./ResourcesPage.css"

const ResourcesPage = ({ user, setUser }) => {
    return (
        <div className="wrapperResource">
          <h1>InteGrant Resources</h1>
          <Card
            img="https://i.imgur.com/XGH07n6.jpeg"
            title="Broadband Grant Guides"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto omnis laudantium necessitatibus dolores? Iure recusandae unde illum nisi ipsa facere a odio, tenetur dicta inventore porro laborum eaque mollitia rem."
          />
          <Card
            img="https://i.imgur.com/XGH07n6.jpeg"
            title="Broadband Grant Guides"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto omnis laudantium necessitatibus dolores? Iure recusandae unde illum nisi ipsa facere a odio, tenetur dicta inventore porro laborum eaque mollitia rem."
          />
          <Card
            img="https://i.imgur.com/XGH07n6.jpeg"
            title="Broadband Grant Guides"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto omnis laudantium necessitatibus dolores? Iure recusandae unde illum nisi ipsa facere a odio, tenetur dicta inventore porro laborum eaque mollitia rem."
          />

        </div>
      );
    }
    
    function Card(props) { 
      return (
        <div className="cardResource">
          <div className="grid-item-1">
            <img src={props.img} className="card__image" />
          </div>
          <div className="grid-item-2">
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
          </div>
        </div>
      );
    }

export default ResourcesPage;