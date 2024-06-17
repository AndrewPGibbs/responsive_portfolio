import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/nav-icon1.svg";

export const Projects = () => {

    const projects = [
        {
            title: 'Project 1',
            description: 'Description and description',
            imUrl: 'dummy image'
        },
        {
            title: 'Project 2',
            description: 'Description and description',
            imUrl: 'dummy image'
        },
        {
            title: 'Project 3',
            description: 'Description and description',
            imUrl: 'dummy image'
        },
        {
            title: 'Project 4',
            description: 'Description and description',
            imUrl: 'dummy image'
        },
    ]
return (
    <section className="projedt" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <Row>
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                        })
                    }
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">

            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
    </section>

)

}