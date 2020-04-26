import * as React from "react"
import * as styles from "./popoutMenu.module.scss"
import { Link } from "gatsby"
import classnames from "classnames"
import Lottie from "react-lottie"
import { Location } from "@reach/router"

import animation from "./x_anim_light.json"

interface Props {
  location?: { pathname: string }
  links: {
    displayText: string
    link: string
  }[]
}
interface State {
  menuActive: boolean
  stopped: boolean
}

const bodymovinOptions = {
  animationData: animation,
  prerender: true,
  autoplay: false,
  loop: false,
}

class PopoutMenuComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      menuActive: false,
      stopped: true,
    }
  }

  menuClicked = () => {
    this.setState({
      menuActive: !this.state.menuActive,
      stopped: false,
    })
  }

  menuItemClicked = (item: string) => {
    if (
      this.props.location &&
      this.props.location.pathname.replace(/\//g, "") ===
        // Need to replace forward slash from item as well to account for the index page '/'
        item.replace(/\//g, "")
    ) {
      this.setState({ menuActive: false })
    }
  }

  render() {
    return (
      <div className={styles.menu}>
        <div
          onClick={this.menuClicked}
          className={classnames(
            styles.menuButton,
            this.state.menuActive ? styles.menuActive : styles.menuInactive
          )}
        >
          {typeof window !== "undefined" && (
            <Lottie
              options={bodymovinOptions}
              isStopped={this.state.stopped}
              direction={this.state.menuActive ? 1 : -1}
            />
          )}
        </div>
        <div
          className={classnames(
            styles.menuContainer,
            this.state.menuActive ? styles.menuActive : ""
          )}
        >
          <div className={styles.menuWrapper}>
            <div className={styles.menuContent}>
              <a
                className={classnames(styles.link, styles.bigLink)}
                href="https://www.gofundme.com/f/help-them-help-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                DONATE
              </a>
              <Link
                className={classnames(styles.link, styles.bigLink)}
                to="/nhs-workers"
              >
                NHS Workers
              </Link>
              <Link
                className={classnames(styles.link, styles.bigLink)}
                to="/about-us"
              >
                About Us
              </Link>
              {this.props.links.map(link => (
                <Link
                  onClick={() => this.menuItemClicked(link.link)}
                  key={link.link}
                  className={styles.link}
                  to={`/${link.link}`}
                >
                  {link.displayText}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const PopoutMenu = (props: Props) => (
  <Location>
    {locationProps => <PopoutMenuComponent {...locationProps} {...props} />}
  </Location>
)

export default PopoutMenu
