import { AiFillCode } from "react-icons/ai";
import { Reveal } from "../Reveal";
import { Col2, Grid, Tech } from "../../styles/About.styled";

export default function Stats() {
  return (
    <div style={{position: 'relative'}}>
      <Reveal>
        <Col2>
          <h4>
            <AiFillCode size="3rem" color="var(--primary-color)" />
            <span>Tecnologias que utilizo</span>
          </h4>
          <Grid>
            <Tech>React</Tech>
            <Tech>Next.js</Tech>
            <Tech>Angular</Tech>
            <Tech>Vue.js</Tech>
            <Tech>TailwindCSS</Tech>
            <Tech>JavaScript</Tech>
            <Tech>Python</Tech>
            <Tech>SQL</Tech>
            <Tech>APIs</Tech>
            <Tech>Git</Tech>
            <Tech>Node.js</Tech>
          </Grid>
        </Col2>
      </Reveal>
    </div>
  );
};