import WorkWithMe from '../WorkWithMe';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title"><span className='bold'>Hey,</span> I'm Charles</h1>
      <p className="hero__description">I help <u>start-ups,</u> developing outstanding web products.</p>
      <WorkWithMe />
    </section>
  );
}

export default Hero;