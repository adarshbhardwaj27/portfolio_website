const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/adarshbhardwaj27"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 h-1/2">
            <img src="/assets/github.svg" alt="GitHub" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://leetcode.com/u/adarshbhardwaj27/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 h-1/2">
            <img src="/assets/leetcode.svg" alt="LeetCode" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/adarsh-bhardwaj-w/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 h-1/2">
            <img src="/assets/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Adarsh Bhardwaj . All rights reserved.</p>
    </footer>
  );
};

export default Footer;
