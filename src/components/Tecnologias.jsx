import {
DiHtml5,DiCss3,DiJsBadge,DiNodejsSmall,DiMysql,DiReact,DiMongodb,DiPhp
} from "react-icons/di"
import{SiCsharp}from "react-icons/si"
import "../styles/components/tecnologias.sass"

const tecnologias=
[
{id:"html", name:"HTML5", icon: <DiHtml5 />},
{id:"css", name:"CSS3", icon: <DiCss3 />},
{id:"js", name:"JavaScript", icon: <DiJsBadge />},
{id:"node", name:"Node.js", icon: <DiNodejsSmall />},
{id:"mysql", name:"Mysql", icon: <DiMysql />},
{id:"react", name:"React", icon: <DiReact />},
{id:"csharp", name:"CSharp", icon: <SiCsharp />},
{id:"mongodb", name:"MongoDB", icon: <DiMongodb />},
{id:"php", name:"PHP", icon: <DiPhp />},
];

const Tecnologias = () => {
  return (
    <section id="tech-container">
    <h2>Tecnólogias</h2>

    <div className="tech-grid">
      {tecnologias.map((tech)=>(

        <div className="tech-card" id={tech.id} key={tech.id}>{tech.icon}

        <div className="tecnologias-info">
          <h3>{tech.name}</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>

        </div>
      ))}
    </div>
   
  </section>
  )
}

export default Tecnologias