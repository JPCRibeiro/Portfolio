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
            <Tech>Next</Tech>
            <Tech>Angular</Tech>
            <Tech>TypeScript</Tech>
            <Tech>JavaScript</Tech>
            <Tech>HTML</Tech>
            <Tech>CSS</Tech>
            <Tech>Tailwind</Tech>
            <Tech>Photoshop</Tech>
            <Tech>Illustrator</Tech>
            <Tech>Node</Tech>
            <Tech>Git</Tech>
          </Grid>
        </Col2>
      </Reveal>
    </div>
  );
};