const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Souqna
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        We understand that furniture is an investment. That’s why each piece in
        our collection is crafted with attention to detail and made from
        durable, high-quality materials. We partner with trusted suppliers who
        share our commitment to quality, ensuring that every product meets our
        high standards for both style and durability.
      </p>
    </>
  )
}
export default About
