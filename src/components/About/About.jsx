import BackButton from "../../UI/BackButton";
import classes from "./About.module.css";
import random from "/assets/images/about/randomPerson.svg";

const About = () => {
  return (
    <section className={classes.container}>
      <BackButton />
      <section className={classes.bossSection}>
        <h2>SEO: </h2>
        <div className={classes.personCard}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={random} alt="" />
          </div>
          <div className={classes.description}>
            <h3>SEO XXXXX</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
              voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nam sapiente praesentium necessitatibus debitis aut, non
              numquam ut cumque obcaecati maxime dolore, pariatur ipsa iste sit,
              nisi sed ducimus facere repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              reiciendis! Eveniet quae odio voluptas eos fuga nisi. Possimus
              labore quisquam nihil corporis, sit consectetur quis non sequi
              dolorem consequatur corrupti nobis nostrum officiis doloribus
              delectus quo cumque eos suscipit. Aspernatur.
            </p>
            <h4>Lorem ipsum dolor sit amet ?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              doloremque inventore nesciunt, atque at similique ea non rerum
              nobis laborum autem, quod, facilis impedit fugit.
            </p>
          </div>
        </div>
      </section>
      <section className={classes.companySection}>
        <div className={classes.logoContainer}>
          <p className={classes.logo}>PowerPulse</p>
          <h3>Our Goals:</h3>
          <p className={classes.p1}>
            Our primary goal at PowerPulse is to inspire positive change in
            people's lives. We aim to create a fitness community that transcends
            traditional boundaries and empowers individuals from all walks of
            life to pursue their health and wellness goals. We strive to:
          </p>
          <ul>
            <li>
              Empower Transformation: We aim to facilitate personal
              transformations by providing comprehensive fitness solutions that
              cater to various needs, abilities, and aspirations.
            </li>
            <li>
              Promote Inclusivity: Our goal is to foster an environment where
              diversity is celebrated, and everyone feels welcome and supported
              on their fitness journey.
            </li>
            <li>
              Deliver Excellence: We are committed to delivering top-notch
              fitness programs, services, and equipment that reflect our
              dedication to quality and effectiveness.
            </li>
            <li>
              Cultivate Well-Being: We aspire to promote not only physical
              fitness but also mental and emotional well-being. Our approach
              focuses on the interconnectedness of these aspects for overall
              health.
            </li>
          </ul>
          <h3>What we stand for ? </h3>
          <p className={classes.p1}>
            At PowerPulse, we stand for transformation through fitness. We
            believe that every individual has the inherent potential to achieve
            their best self, and we are dedicated to helping them unlock that
            potential through the power of physical activity. Our core values
            drive everything we do, shaping our commitment to excellence,
            inclusivity, and holistic well-being.
          </p>
        </div>
        <div className={classes.rightContainer}>
          <h3 className={classes.mgt1}>our Standards</h3>
          <p className={classes.p2}>
            At PowerPulse, we hold ourselves to the highest standards to ensure
            that our customers receive exceptional experiences and results. Our
            standards are founded on:
          </p>
          <ul>
            <li>
              Expertise: Our team comprises certified fitness professionals who
              bring their expertise to guide and support individuals in their
              fitness journeys.
            </li>
            <li>
              Safety: We prioritize the safety of our clients by maintaining
              equipment and facilities to the highest industry standards and
              promoting safe exercise practices.
            </li>
            <li>
              Customization: We believe that fitness solutions should be
              tailored to individual needs. Our programs are designed to be
              adaptable, considering various fitness levels and goals.
            </li>
            <li>
              Integrity: We are committed to transparent communication, ethical
              practices, and honesty in all our interactions, whether with
              clients, partners, or team members.
            </li>
            <li>
              Continuous Improvement: We are always striving to improve our
              offerings, incorporating the latest research, technology, and best
              practices to provide the best possible experience for our clients.
            </li>
          </ul>
          <p className={classes.p1}>
            In essence, PowerPulse is not just a fitness company; we are a
            community-driven by a passion for positive change and empowerment.
            Our dedication to inclusivity, excellence, and holistic well-being
            sets us apart and drives us to help individuals become the best
            versions of themselves.
          </p>
        </div>
      </section>
    </section>
  );
};
export default About;
