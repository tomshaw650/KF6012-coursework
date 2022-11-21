/**
 *
 * ContentInfo component used to set a heading and description
 * Used on the Landing page and NotFound page to provide information
 * @params title - the heading of the page, set as a <h2>
 * @params error - if an error is set, create a button that links to previous page
 * @params navigate - used to navigate to previous page, leveraging useNavigate from react-router
 *
 * @author Tom Shaw
 *
 */

export default function ContentInfo(props) {
  return (
    <div className="m-10 flex max-w-xl flex-col md:m-20">
      {/* Set the title of the landing content */}
      <h2 className="text-3xl text-white md:mt-20 md:text-5xl">
        {props.title}
      </h2>
      {/* Set the description of the landing content */}
      <p className="text-md font-normal text-white md:text-xl">{props.body}</p>
      {/* If an error is set, create a button that links to previous page */}
      {props.error ? (
        <button
          className="mt-5 flex w-3/4 flex-col rounded-lg bg-blue p-5 text-center text-xl text-white hover:bg-indigo-800"
          onClick={props.navigate}
        >
          Click here to return to the previous page
        </button>
      ) : null}
    </div>
  );
}
