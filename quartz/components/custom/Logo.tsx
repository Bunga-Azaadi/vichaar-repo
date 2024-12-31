import { joinSegments, pathToRoot } from "../../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { classNames } from "../../util/lang"
import { i18n } from "../../i18n"

const Logo: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  const logoPathLight = joinSegments(baseDir, "static/png/logo-white.png")
  const logoPathDark = joinSegments(baseDir, "static/png/logo-black.png")

  const iconPathLight = joinSegments(baseDir, "static/png/icon-white.png")
  const iconPathDark = joinSegments(baseDir, "static/png/icon-black.png")

  return (
    <a href={baseDir}>
      <div>
        <picture class="logo-light">
          <source media="(min-width: 801px)" srcset={logoPathLight} />
          <img src={iconPathLight} />
        </picture>

        <picture class="logo-dark">
          <source media="(min-width: 801px)" srcset={logoPathDark} />
          <img src={iconPathDark} />
        </picture>

      </div>
      {/* <img class="logo-light" src={logoPathLight} />
      <img class="logo-dark" src={logoPathDark} /> */}
    </a>
  )
}

export default (() => Logo) satisfies QuartzComponentConstructor
