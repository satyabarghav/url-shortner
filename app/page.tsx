export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-5xl font-extrabold">
            Shorten your
            <span className="text-5xl font-extrabold text-violet-600">
              {" "}
              URLs
            </span>
          </h1>
          <br />
          <div className="text-xl">
            <h3 className="font-sans text-slate-500">
              Say Goodbye to{" "}
              <span className="text-red-400 font-semibold">Lengthy</span> URLs
            </h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body text-center">
              <div className="label">
                <div className="label-text text-neutral-content">Long URL</div>
              </div>
              <input
                type="text"
                placeholder="URL goes here ->"
                className="input input-ghost input-primary input-md w-full md:max-w-xs lg:max-w-sm xl:max-w-md"
              />

              <button className="btn btn-outline btn-secondary sm:btn-sm md:btn-md lg:btn-md">
                Shrink
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
