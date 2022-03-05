export default () => {
  return (
    <div className="max-w-lg px-2 mx-auto my-16 text-center sm:px-0">
      <div className="mb-8">
        <h2 className="text-base leading-loose uppercase">
          Help people in Ukraine
        </h2>
        <a href="/">
          <h1 className="my-4 text-5xl font-light uppercase">
            Shelter in Austria
          </h1>
        </a>
        <h2 className="my-8 text-xl leading-loose uppercase">
          Thank you very much for participating!
        </h2>
        <h3 className="px-4 text-sm leading-loose">
          <strong>
            Please note that this website is only for connecting people. The
            owner of the website is not reliable for the correctness of any
            information displayed and will not actively contact you regarding
            your assistance.
          </strong>
          <br />
          <br />
          It is upon the people that need your help to contact you using your
          email so please be sure to check your mails more frequently than every
          few days.
          <br />
          <br />
          If you need help, have any questions or want your data removed, please
          contact{" "}
          <a
            className="underline underline-offset-1"
            href="mailto:julian@pufler.dev?subject='Shelter In Austria'"
          >
            me
          </a>{" "}
          with your request.
        </h3>
      </div>
      <div className="flex flex-col hidden">
        <div className="mb-12">
          <button
            type="button"
            className="px-8 py-2 uppercase transition-colors bg-peach-400 hover:bg-peach-500 rounded-3xl"
          >
            List of offers
          </button>
        </div>
        <form
          className="flex flex-col items-center justify-center gap-4"
          method="post"
          action="/"
        >
          <input
            style={{ minWidth: "220px" }}
            className="px-4 py-1 transition-colors border-2 rounded-3xl focus:outline-none border-peach-200 focus:border-peach-300"
            type="text"
            placeholder="Name*"
            name="name"
            required
          ></input>
          <input
            style={{ minWidth: "220px" }}
            className="px-4 py-1 transition-colors border-2 rounded-3xl focus:outline-none border-peach-200 focus:border-peach-300"
            type="email"
            placeholder="E-Mail*"
            name="email"
            required
          ></input>
          <input
            style={{ minWidth: "220px" }}
            className="px-4 py-1 transition-colors border-2 rounded-3xl focus:outline-none border-peach-200 focus:border-peach-300"
            type="text"
            placeholder="District*"
            name="district"
            required
          ></input>
          <textarea
            style={{ minWidth: "220px" }}
            className="px-4 py-1 transition-colors border-2 resize-none rounded-3xl focus:outline-none border-peach-200 focus:border-peach-300"
            placeholder="Possible assistance offered"
            name="message"
            required
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="px-8 py-1 mt-2 uppercase transition-colors bg-peach-400 hover:bg-peach-500 rounded-3xl"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col gap-4 my-8 text-sm">
          <p>
            *Mit der Teilnahme willige ich ein, dass meine E-Mail sowie Bezirk
            und angebotene Hilfeleistung auf dieser Seite veröffentlicht wird.
            (Art. 6 Abs. 1 lit. a DSGVO)
          </p>
          <p>
            *By participating, I agree that my email, district and assistance
            offered will be published on this page. (Art. 6 Abs. 1 lit. a DSGVO)
          </p>
        </div>
        <h2 className="font-bold uppercase">
          Resources for ukrainian refugees and supporters
        </h2>
        <a
          className="underline underline-offset-1"
          href="https://docs.google.com/document/d/1OlZIz-72A2xI2uUOFE07L5ObQGP4JDcXZ2vdIs2P9BQ/"
        >
          https://docs.google.com/document/d/1OlZIz-72A2xI2uUOFE07L5ObQGP4JDcXZ2vdIs2P9BQ/
        </a>
      </div>
    </div>
  );
};