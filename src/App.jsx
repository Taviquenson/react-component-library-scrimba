import myPicture from '/picture-of-me.png'
import Badge from '/components/Badge'
import Banner from '/components/Banner'
import Card from '/components/Card'
import Testimonial from '/components/Testimonial'
// import { MdOutlineCloudUpload } from "react-icons/md";


function App() {
  return (
    <>
      <h1>React Library Components</h1>
      <section className="badges">
        <h2 className="badges-section-title section-title">Badges</h2>
        <div className="badges-table">
          <div className="badges-shape-square">
            <h3>Square</h3>
            <div className="badges-container">
              <Badge color="gray">Badge</Badge>
              <Badge color="red">Badge</Badge>
              <Badge color="yellow">Badge</Badge>
              <Badge color="green">Badge</Badge>
              <Badge color="blue">Badge</Badge>
              <Badge color="indigo">Badge</Badge>
              <Badge color="purple">Badge</Badge>
              <Badge color="pink">Badge</Badge>
            </div>
          </div>
          <div className="badges-shape-pill">
            <h3>Pill</h3>
            <div className="badges-container">
              <Badge color="gray" shape="pill">Badge</Badge>
              <Badge color="red" shape="pill">Badge</Badge>
              <Badge color="yellow" shape="pill">Badge</Badge>
              <Badge color="green" shape="pill">Badge</Badge>
              <Badge color="blue" shape="pill">Badge</Badge>
              <Badge color="indigo" shape="pill">Badge</Badge>
              <Badge color="purple" shape="pill">Badge</Badge>
              <Badge color="pink" shape="pill">Badge</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="banners">
        <h2 className="section-title">Banners</h2>
        <h3>Success</h3>
        <Banner
          status='success'
          title='Congratulations!'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
        ></Banner>
        <h3>Warning</h3>
        <Banner
          status='warning'
          title='Attention'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
        ></Banner>
        <h3>Error</h3>
        <Banner
          status='error'
          title='There is a problem with your application'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
        ></Banner>
        <h3>Neutral</h3>
        <Banner
          status='neutral'
          title='Update available'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
        ></Banner>
      </section>

      <section className='card'>
        <h2 className="section-title">Card</h2>
        <h3>Place cursor on card to see hover effect!</h3>
        <Card 
          // jsxIcon={<MdOutlineCloudUpload className='card-icon' color='purple'/>}
          // iconBackgroundColor='green'
          title='Easy Deployment'
          text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'
        ></Card>
      </section>

      <section className='testimonial'>
        <h2 className='section-title'>Testimonial</h2>
        <h3>Reduce your window's size to see mobile version!</h3>
        <Testimonial
          img={myPicture}
          text='I am a fullstack developer focused on making apps for small organizations that anyone can use right away.'
          name='Octavio Camacho'
          position='Fullstack Developer'
        ></Testimonial>
      </section>
    </>
  )
}

export default App
