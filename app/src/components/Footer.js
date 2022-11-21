/**
 *
 * Footer component to display the footer of the page
 * Contains my name,my GitHub profile and student number
 *
 * @author Tom Shaw
 *
 */

export default function Footer() {
  return (
    <footer className="sticky bottom-0 mt-16 flex w-full flex-row justify-around gap-10 bg-bgdark py-4 md:mt-0">
      <p className="text-md text-white md:text-lg">
        Created by&nbsp;
        {/* Link to my GitHub. opens in new tab */}
        <a target="_blank" rel="noreferrer" href="http://github.com/tomshaw650">
          Tom Shaw
        </a>
      </p>
      <p className="text-md text-white md:text-lg">Student Number W19025481</p>
    </footer>
  );
}
