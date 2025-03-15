import WorkWithMe from "../WorkWithMe";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <section className="about">
        <h2>ABOUT ME</h2>
        <p>
          I am Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          praesentium distinctio optio veniam delectus minus unde facere
          provident minima voluptatibus quae voluptate voluptas reiciendis
          soluta explicabo, sint, ut quod nostrum maiores nam placeat nobis
          cumque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quo iusto
          aut non aperiam esse corporis corrupti blanditiis enim asperiores
          vitae ullam quaerat distinctio voluptatem, accusantium, doloremque
          rerum ratione laborum modi! Temporibus nesciunt ad autem explicabo in
          magni cupiditate ratione, asperiores earum quos! Consectetur eos quasi
          enim inventore minima beatae, repellendus iste et animi corporis ut
          suscipit optio voluptates illum cumque eius repudiandae cupiditate
          provident aliquam tempora voluptatum quam! Voluptatem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          praesentium distinctio optio veniam delectus minus unde facere
          provident minima voluptatibus quae voluptate voluptas reiciendis
          soluta explicabo, sint, ut quod nostrum maiores nam placeat nobis
          cumque.
        </p>
      </section>
      <section className="services">
        <h2>SERVICES</h2>
        <div className="service">
          <h3>Backend Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            praesentium distinctio optio veniam delectus minus unde facere
            provident minima voluptatibus quae voluptate voluptas reiciendis
            soluta explicabo, sint, ut quod nostrum maiores nam placeat nobis
            cumque.
          </p>
          <WorkWithMe />
        </div>
        <div className="service">
          <h3>Frontend Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            praesentium distinctio optio veniam delectus minus unde facere
            provident minima voluptatibus quae voluptate voluptas reiciendis
            soluta explicabo, sint, ut quod nostrum maiores nam placeat nobis
            cumque.
          </p>
          <WorkWithMe />
        </div>
      </section>
    </>
  );
};

export default Main;
