export default function LandingContent(props) {
  return (
    <div className="m-20 flex max-w-xl flex-col">
      <h2 className="mt-20 text-5xl text-white">{props.title}</h2>
      <p class="text-xl font-normal text-white">{props.body}</p>
    </div>
  );
}
