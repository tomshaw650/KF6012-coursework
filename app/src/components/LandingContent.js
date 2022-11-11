export default function LandingContent(props) {
  return (
    <div className="m-10 flex max-w-xl flex-col md:m-20">
      <h2 className="text-5xl text-white md:mt-20">{props.title}</h2>
      <p className="text-xl font-normal text-white">{props.body}</p>
    </div>
  );
}
