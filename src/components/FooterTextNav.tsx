import { NavLink } from 'react-router-dom'

interface FooterTextNavProps {
    pageLinkURL: string;
    pageLinkText: string;
}

const FooterTextNav = ({pageLinkText, pageLinkURL}: FooterTextNavProps) => {
  return (
    <>
    <div className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-base">
        <div className="flex-1 relative text-lg inline-block max-w-full text-[#1465B4]">
          <NavLink to={pageLinkURL}>
          {pageLinkText}
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default FooterTextNav