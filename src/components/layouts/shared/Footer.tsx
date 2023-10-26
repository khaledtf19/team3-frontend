import Link from "next/link";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  const currentDate = new Date().getFullYear();

  const linksStyles =
    "border-orange-500 pb-1 transition-all after:hidden\
    after:content-['->'] hover:border-b hover:after:inline-block\
   hover:after:pl-2 hover:text-white";

  return (
    <main className="bg-gray-900 py-5 text-white">
      <div className="border-b border-white/10 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-stretch gap-6 md:justify-between">
            <div className="logo">
              <h3 className="text-xl">LMS website</h3>
              <span className="my-5 block w-64 text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                aspernatur sequi modi tenetur
              </span>
              <div className="icons flex items-center justify-start">
                <Link
                  href="http://facebook.com"
                  className="after:-z- relative z-10 mr-1 bg-gray-800 p-3 text-xl shadow-lg transition after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:bg-orange-500 hover:after:w-full hover:after:blur-sm"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="http://instagram.com"
                  className="after:-z- relative z-10 mr-1 bg-gray-800 p-3 text-xl shadow-lg transition after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:bg-orange-500 hover:after:w-full hover:after:blur-sm"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="http://linkedin.com"
                  className="after:-z- relative z-10 mr-1 bg-gray-800 p-3 text-xl shadow-lg transition after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:bg-orange-500 hover:after:w-full hover:after:blur-sm"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="http://twitter.com"
                  className="after:-z- relative z-10 mr-1 bg-gray-800 p-3 text-xl shadow-lg transition after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:bg-orange-500 hover:after:w-full hover:after:blur-sm"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="http://youtub.com"
                  className="after:-z- relative z-10 mr-1 bg-gray-800 p-3 text-xl shadow-lg transition after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:bg-orange-500 hover:after:w-full hover:after:blur-sm"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>{" "}
            {/* col-span-1  */}
            <div className="flex-grow-1 top-4">
              <h6 className="text-sm">TOP 4 CATEGORY</h6>
              <ul className="list my-5 text-white/50">
                <li className="pb-1">
                  <Link href="/department" className={linksStyles}>
                    Department
                  </Link>
                </li>
                <li className="w-44 whitespace-nowrap pb-1">
                  <Link href="/finance-&-accounting" className={linksStyles}>
                    Finance & Accounting
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="/design" className={linksStyles}>
                    Design
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="/business" className={linksStyles}>
                    Business
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <h6 className="text-sm">QUICK LINKS</h6>
              <ul className="list my-5  text-white/50">
                <li className=" pb-1 ">
                  <Link href="/about" className={linksStyles}>
                    About
                  </Link>
                </li>
                <li className="w-44 pb-1">
                  <Link href="/become-instructor" className={linksStyles}>
                    Become Instructor
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="/contact" className={linksStyles}>
                    Contact
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="/carrer" className={linksStyles}>
                    Carrer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="support">
              <h6 className="text-sm">SUPPORT</h6>
              <ul className="list my-5  text-white/50">
                <li className=" pb-1 ">
                  <Link href="/help" className={linksStyles}>
                    Help Center
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="/faqs" className={linksStyles}>
                    FAQs
                  </Link>
                </li>
                <li className="w-44 pb-1">
                  <Link href="/terms-conditions" className={linksStyles}>
                    Terms & Condition
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="/privacy-policy" className={linksStyles}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="download">
              <h6 className="whitespace-nowrap text-sm">DOWNLOAD OUR APP</h6>
              <Link href="downloadApp/andriod-version">
                <div className="iphone my-2 flex w-fit items-center justify-evenly bg-gray-800 p-2">
                  <FaApple className="me-2 text-3xl" />
                  <div className="info">
                    <span className="m-0 block h-3 text-xs text-white/40">
                      Download Now
                    </span>
                    <p className="text-lg">App Store</p>
                  </div>
                </div>
              </Link>
              <Link href="downloadApp/ios-version">
                <div className="iphone flex w-fit items-center justify-evenly bg-gray-800 p-2">
                  <FaGooglePlay className="me-2 text-3xl" />
                  <div className="info">
                    <span className="m-0 block h-3 text-xs text-white/40">
                      Download Now
                    </span>
                    <p className="text-lg">Play Store</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <p className="copy-rights w-full whitespace-nowrap text-center text-xs text-white/50 sm:block md:inline-block md:w-1/2 md:text-start">
          &copy; {currentDate}-Eduflex. Designed by{" "}
          <br className="block md:hidden" />
          <span className="text-white">Templatecookie</span>. All rights
          reserved
        </p>
        <div
          className="
        mt-5
         inline-block w-full text-center md:mt-0 md:w-1/2 md:text-end "
        >
          <select className="cursor-pointer border border-white bg-gray-900 p-1 text-white/50 outline-none">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>
    </main>
  );
};
// flex items-center justify-between
