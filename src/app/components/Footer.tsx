export default function Footer() {
  return (
    <footer className="grid w-full grid-cols-1 border-t border-[#2A2826]/15 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center bg-[#2A2826] px-8 py-10 text-[#F7F3EB] text-2xl md:px-16">
        <p className="font-serif">Follow us</p>
        <div className="flex gap-3 mt-4">
          {/* insta */}
          <a
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full border"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full border"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* twitter */}
          <a
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full border"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col  justify-between bg-[#F7F3EB] px-8 py-10 text-[#2A2826] md:px-16">
        <ul className="font-semibold font-serif flex gap-5 text-sm ">
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
          <li>Services</li>
        </ul>
        <div className="grid grid-cols-2 font-serif font-semibold mt-2">
          <div>
            <p>Call us</p>
            <p>xxxxx-xxxxx</p>
          </div>

          <div>
            <p>Email us</p>
            <p>xxxxx@g,ail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
