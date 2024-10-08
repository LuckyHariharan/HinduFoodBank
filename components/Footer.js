export default function Footer() {
  return (
    <footer className="pb-4 h-screen text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl tracking-wide text-white">Donate</h2>
        <p className="text-lg leading-relaxed text-gray-400">
          Support Hindu Food Bank by donating funds via Interac e-Transfer.
          Please use our contact email{" "}
          <a
            href="mailto:donate@hindufoodbank.com"
            className="text-orange-400 hover:underline"
          >
            donate@hindufoodbank.com
          </a>{" "}
          for the transfer.
          <br />
          After sending the transfer, follow up with an email including your
          name and email address for our records. Thank you for your generosity.
          <br />
          <span className="text-red-400">Note:</span> Tax receipts are not
          available at this time as we are awaiting charitable status approval.
          Expected by the end of the year.
        </p>

        {/* Footer Bottom Section */}
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2024 Hindu Food Bank.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
