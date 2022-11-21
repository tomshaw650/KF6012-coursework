export default function TitleDesc(props) {
  return (
    <>
      <h1 className="mt-2 flex justify-center text-3xl text-white">
        {props.title}
      </h1>
      <h2 className="text-md mt-2 flex justify-center italic text-white">
        {props.description}
      </h2>
      {props.admin ? (
        <h3 className="text-md mt-2 flex justify-center italic text-red">
          {props.admin}
        </h3>
      ) : (
        <></>
      )}
    </>
  );
}
