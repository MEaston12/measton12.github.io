import GoogleDocsViewer from 'react-google-docs-viewer';

const Resume = () => (<>
  <h1>Resume</h1>
  <a href='http://docs.google.com/document/d/1DjaJCq0QPXuZstYunS2P0mB_ZMpU896jNp_CKAcg1_g/export?format=pdf'>Download PDF</a>
  <GoogleDocsViewer width='100%' height='70vh' fileUrl='http://docs.google.com/document/d/1DjaJCq0QPXuZstYunS2P0mB_ZMpU896jNp_CKAcg1_g/export?format=pdf'/>
</>);
export default Resume;