import Container from 'react-bootstrap/Container';
import GoogleDocsViewer from 'react-google-docs-viewer';

const Resume = () => (
  <Container className='p-4'>
    <h1>Resume</h1>
    <a href='http://docs.google.com/document/d/1DjaJCq0QPXuZstYunS2P0mB_ZMpU896jNp_CKAcg1_g/export?format=pdf'>Download PDF</a>
    <GoogleDocsViewer width='100%' height='75vh' fileUrl='http://docs.google.com/document/d/1DjaJCq0QPXuZstYunS2P0mB_ZMpU896jNp_CKAcg1_g/export?format=pdf'/>
  </Container>
);
export default Resume;