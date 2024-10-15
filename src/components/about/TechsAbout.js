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
            <Tech>React.js</Tech>
            <Tech>Next.js</Tech>
            <Tech>Vue.js</Tech>
            <Tech>Node.js</Tech>
            <Tech>Python Flask</Tech>
            <Tech>Java Spring</Tech>
            <Tech>MySQL</Tech>
            <Tech>MongoDB</Tech>
            <Tech>AWS</Tech>
            <Tech>Git</Tech>
          </Grid>
        </Col2>
      </Reveal>
    </div>
  );
};