export default function Hero() {
  return (
    <section className="w-full min-h-dvh hero relative isolate flex justify-center items-center">
      <div className="max-w-285 mx-auto p-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-black md:text-7xl text-5xl">
            Olá<span className="text-primary">,</span> meu nome é João Pedro
          </h1>
          <h2 className="text-4xl">
            <p>
              <span className="text-primary font-bold">Dev Fullstack</span> &{" "}
            </p>
            <p>
              Cursando{" "}
              <span className="text-primary font-bold">
                Engenharia de Software
              </span>
            </p>
          </h2>
          <p className="text-xl">
            Desenvolvimento de software que une performance e boa experiência do
            usuário com sistemas funcionais bem estruturados.
          </p>
          <button className="w-fit py-2 px-6 bg-primary text-background rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-200 font-medium">
            Ver Mais
          </button>
        </div>
      </div>
    </section>
  );
}
