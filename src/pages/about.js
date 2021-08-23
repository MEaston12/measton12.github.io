import { Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const About = () => (<>
  <Row>
    <Col className='order-md-last' md='6'>
      <Image className='w-100' src='/Malcolm-ProfilePic.png' fluid />
    </Col>
    <Col>
      <h1>About Me</h1>
      <p>
        Hello there, my name is Malcolm Easton and welcome to my portfolio! You should be able
        to use the navbar above to navigate around, and the footer below should contain some links to my social medias and whatnot.
      </p>
      <h2>Coding History</h2>
      <p>
        My first real experience programming was competing in MIT's Zero Robotics competition in high school back in 2010.
        It was a nationwide coding competition where the goal was to use the C language to program the behavior of a floating 'spheres'
        robot that could perform 3D translations and rotations in microgravity.  The team I played for, Cyprus High School, managed to 
        take fourth place nationally, with our coding actually being uploaded to and run on the International Space Station.
      </p>
      <p>
        After that, I went to Utah State University on a Presidential Scholarship to study Electrical Engineering with a side interest in Computer 
        Science and Computer Engineering. This is where I picked up my skills in C++ and my general understanding of computer systems.  These were
        some of my favorite courses in that time:
      </p>
      <ul>
        <li>Data Structures: Implementing memory structures like linked lists, binary trees, or hashes.</li>
        <li>Digital Circuits: Designing logic circuits using boolean logic gates and programming FPGAs using Verilog.</li>
        <li>Numerical Approximations: Writing code to calculate approximate solutions to difficult mathematical problems.</li>
      </ul>
      <p>
        I started my career in CAD work back in 2015, during which I developed a great interest in process optimization.  VBA is probably my least favorite
        language to use, but it is nearly unrivaled in its ability to be natively integrated into office workflows (Excel and Microstation both natively support it),
        so I started learning more and more of its quirks until I became proficient enough to write scripts that automated hours-long tedious tasks 
        away into seconds of quick execution.  In my career I also found Autohotkey to be immensely helpful in process optimization as well.  The language itself
        is a bit of a headache but it has some seriously impressive support for generalized automation of tasks at the window manager/user input level.
      </p>
      <p>
        It was during this time that I was approached to handle the development and rollout of a web application for my company.  I accepted the challenge
        and found a great tutorial on MDN that went over development of web applications via Node.js.  It was at this point that I completely fell in love with
        Node and web development.  I successfully created a web application that used server-side rendering via Pug to deliver a Mapbox map app to users that would
        allow them to add points onto a map that displayed a prospective project.  On the project manager's end, the application would display those comments as a list
        of cards adjacent to a map with a set of tools for managing the comments.
      </p>
      <p>
        Having had my first taste of web app development, I decided I needed more, and enrolled in the Univesity of Utah's Coding Bootcamp program.
        I thoroughly enjoyed my time in the course and discovered how awesome React is.  I've learned a ton of skills that are relevant to Full-Stack
        Web Development.
      </p>
      <p>
        I also started and own stake in a profitable independent web app LLC, Tupperbox LLC. That's been a fun venture to be involved in, though the majority of 
        the coding has been done by my partner, I have been pair programming with him to work out difficult problems. I've helped him in finding solutions, and 
        I've been handling much of the business, organization, planning, and legal aspects of the company.  Now that I've completed the University of Utah's Coding Bootcamp I look forward to contributing more 
        directly on the project.
      </p>
    </Col>
  </Row>
</>);
export default About;