import Button from "@/components/Button";
import SimpleButton from "@/components/SimpleButton";
import Link from "next/link";
import {
  FaApple,
  FaArrowRight,
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
    "pb-1 after:transition-all after:duration-500\
     group flex items-center justify-between bg-transparent hover:bg-transparent\
     text-white/50 hover:text-white text-start pl-0 after:absolute relative after:w-0 after:h-[1px] after:bg-orange-500 \
     after:bottom-0 after:left-0 hover:after:w-full\
     ";

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
                <SimpleButton className="after:-z- relative z-10 mr-1 border-none bg-gray-800 p-3 text-xl text-white shadow-lg transition after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:bg-orange-500 hover:after:w-full hover:after:blur-sm">
                  <Link href="http://facebook.com">
                    <FaFacebookF />
                  </Link>
                </SimpleButton>
                <SimpleButton className="after:-z- relative z-10 mr-1 border-none bg-gray-800 p-3 text-xl text-white shadow-lg transition after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:bg-orange-500 hover:after:w-full hover:after:blur-sm">
                  <Link href="http://instagram.com">
                    <FaInstagram />
                  </Link>
                </SimpleButton>
                <SimpleButton className="after:-z- relative z-10 mr-1 border-none bg-gray-800 p-3 text-xl text-white shadow-lg transition after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:bg-orange-500 hover:after:w-full hover:after:blur-sm">
                  <Link href="http://twitter.com">
                    <FaTwitter />
                  </Link>
                </SimpleButton>
                <SimpleButton className="after:-z- relative z-10 mr-1 border-none bg-gray-800 p-3 text-xl text-white shadow-lg transition after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:bg-orange-500 hover:after:w-full hover:after:blur-sm">
                  <Link href="http://linkedin.com">
                    <FaLinkedin />
                  </Link>
                </SimpleButton>
                <SimpleButton className="after:-z- relative z-10 mr-1 border-none bg-gray-800 p-3 text-xl text-white shadow-lg transition after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:bg-orange-500 hover:after:w-full hover:after:blur-sm">
                  <Link href="http://youtub.com">
                    <FaYoutube />
                  </Link>
                </SimpleButton>
              </div>
            </div>
            <div className="flex-grow-1 top-4">
              <h6 className="text-sm">TOP 4 CATEGORY</h6>
              <Button variant="secondary" className={`${linksStyles} mt-2`}>
                <Link href="/department">Department</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles} w-[168px]`}
              >
                <Link href="/finance-&-accounting">Finance & Accounting</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles}`}
              >
                <Link href="/business">Business</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles}`}
              >
                <Link href="/design">Design</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
            </div>
            <div className="links">
              <h6 className="text-sm">QUICK LINKS</h6>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles} mt-4`}
              >
                <Link href="/about">About</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles} w-36`}
              >
                <Link href="/become-instructor">Become instructor</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles}`}
              >
                <Link href="/Contact">Contact</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles}`}
              >
                <Link href="/carrer">Carrer</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
            </div>
            <div className="support">
              <h6 className="text-sm">SUPPORT</h6>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles} mt-4`}
              >
                <Link href="/help-center">Help Center</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles}`}
              >
                <Link href="/faqs">FAQs</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles} w-40`}
              >
                <Link href="/terms-and-condition">Terms & Condition</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                className={`${linksStyles}`}
              >
                <Link href="/privacy-and-policy">Privacy & Policy</Link>
                <FaArrowRight className="hidden pl-1.5 text-sm group-hover:inline-block" />
              </Button>
            </div>
            <div className="download p-1">
              <h6 className="whitespace-nowrap text-[12px]">
                DOWNLOAD OUR APP
              </h6>
              <Button
                variant="secondary"
                size="medium"
                className="my-1 bg-gray-800 p-2 text-white hover:bg-transparent"
              >
                <Link
                  href="/downloadApp/andriod-version"
                  className="flex items-center"
                >
                  <FaApple className="me-2 text-2xl" />
                  <div className="info">
                    <span className="block h-4 text-[10px] text-white/40">
                      Download Now
                    </span>
                    <p className="text-md">App Store</p>
                  </div>
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="medium"
                className="my-1 block bg-gray-800 p-2 text-white hover:bg-transparent"
              >
                <Link
                  href="/downloadApp/ios-version"
                  className="flex items-center"
                >
                  <FaGooglePlay className="me-2 text-2xl" />
                  <div className="info">
                    <span className="block h-4 text-[10px] text-white/40">
                      Download Now
                    </span>
                    <p className="text-md">Play Store</p>
                  </div>
                </Link>
              </Button>
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
        <div className="mt-5 inline-block w-full text-center md:mt-0 md:w-1/2 md:text-end">
          <select className="cursor-pointer border border-white bg-gray-900 p-1 text-white/50 outline-none">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>
    </main>
  );
};
