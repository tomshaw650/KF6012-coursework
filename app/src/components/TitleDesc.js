/**
 *
 * TitleDesc is a component to avoid code duplication
 * Sets a title and description, used on each table page
 *
 * @params title - The title of the page
 * @params description - The description of the page, often used to give instructions
 * @params admin - A boolean to determine if the user is an admin, if so show further instruction
 *
 * @author Tom Shaw
 */

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
