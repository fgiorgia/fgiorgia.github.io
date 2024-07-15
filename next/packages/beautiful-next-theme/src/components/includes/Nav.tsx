import { getConfig } from "../../config/getConfig"
import { relativeUrl } from "../../utils/links"

// TODO understand how to get this
const page: { showAvatar?: boolean } = {}


const Nav = () => {
  const mainConfig = getConfig()
  const { site } = mainConfig
  return (
    // TODO fix later
    <nav className="navbar navbar-expand-xl navbar-light fixed-top navbar-custom {% if page.nav-short %}top-nav-short-permanent{% else %}top-nav-regular{% endif %}">

      {site?.titleImg ? (
        <a className="navbar-brand navbar-brand-logo" href="{{ '/' | absolute_url }}"><img alt="{{ site?title }} Logo" src="{{ site?title-img | relative_url}}" /></a>
      ) : site?.title ? (
        <a className="navbar-brand" href="{{ '/' | absolute_url }}">{site?.title}</a>
      ) : null}

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="main-navbar">
        <ul className="navbar-nav ml-auto">
          {site?.navbarLinks?.map((link, i) => {
            const nColonSplits = link.path[0].split(':').length
            const isExternalLink = nColonSplits > 1

            if (i === 0) {
              return (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{link.name}</a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    {link.subPaths?.map((subPath) => {
                      return subPath?.linkParts?.map((linkPart) => {
                        return (
                          <a
                            className="dropdown-item"
                            href={relativeUrl(linkPart.path)}
                            target={isExternalLink ? '_blank' : undefined}
                          >
                            {linkPart.name}
                          </a>
                        )
                      })
                    })}
                  </div>
                </li>
              )
            }
            return (
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="{{ link[1] | relative_url }}"
                  target={isExternalLink ? '_blank' : undefined}
                >
                  {link.name}
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
            <a href="{{ '/' | absolute_url }}">
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