import { absoluteUrl, relativeUrl } from "../../utils/links"
import { ContextProps, } from "../../../types"

const isExternalLink = (linkPath: string) => linkPath.split(':').length > 0

const Nav: React.FC<ContextProps> = ({ config, page }) => {
  const { site } = config
  return (
    // TODO fix later
    <nav className={`navbar navbar-expand-xl navbar-light fixed-top navbar-custom ${page.navShort ? 'top-nav-short-permanent' : 'top-nav-regular'}`}>

      {site?.titleImg ? (
        <a className="navbar-brand navbar-brand-logo" href={absoluteUrl('/')}>
          <img alt={`${site?.title} Logo`} src={relativeUrl(site.titleImg)} />
        </a>
      ) : site?.title ? (
        <a className="navbar-brand" href={absoluteUrl('/')}>{site?.title}</a>
      ) : null}

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="main-navbar">
        <ul className="navbar-nav ml-auto">
          {Object.entries(site?.navbarLinks ?? {}).map(([linkName, linkPath], i) => {

            if (i === 0) {
              return (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{linkName}</a>
                  {typeof linkPath !== 'string' && (
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                      {Object.entries(linkPath)?.map(([linkEntryName, linkEntryPath]) => {
                        return (
                          <a
                            className="dropdown-item"
                            href={relativeUrl(linkEntryPath)}
                            target={isExternalLink(linkEntryPath) ? '_blank' : undefined}
                          >
                            {linkEntryName}
                          </a>
                        )

                      })}
                    </div>
                  )}
                </li>
              )
            }
            if (typeof linkPath !== 'string') {
              throw new Error(`'${linkName}' has a path that is not a string`)
            }
            return (
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={relativeUrl(linkPath)}
                  target={isExternalLink(linkPath) ? '_blank' : undefined}
                >
                  {linkName}
                </a>
              </li>
            )
          })}
          {site?.postSearch && (
            <li className="nav-item">
              <a className="nav-link" id="nav-search-link" href="#" title="Search">
                <span id="nav-search-icon" className="fa fa-search"></span>
                <span id="nav-search-text">Search</span>
              </a>
            </li>
          )}
        </ul>
      </div >

      {/* TODO check later */}
      {/* {% if site ? navbar - extra %}
      {% for file in site ? navbar - extra %}
      {% include {{ file }} %}
      {% endfor %}
      {% endif %} */}

      {(site?.avatar && page?.showAvatar !== false) && (
        <div className="avatar-container">
          <div className="avatar-img-border">
            <a href={absoluteUrl('/')}>
              <img alt="Navigation bar avatar" className="avatar-img" src="{{ site?avatar | relative_url }}" />
            </a>
          </div>
        </div>
      )}

      {/* TODO add later */}
      {/* {% include search.html %} */}
    </nav>
  )
}



export default Nav