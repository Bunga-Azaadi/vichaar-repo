// @ts-ignore
import darkmodeScript from "../scripts/darkmode.inline"
import styles from "../styles/darkmode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { i18n } from "../../i18n"
import { classNames } from "../../util/lang"

const DarkModeToggle: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <div style="flex-shrink:0;">
      <input type="checkbox" id="dark-mode-toggle" aria-label="Dark Mode Toggle" />
    </div>
  )
}

DarkModeToggle.beforeDOMLoaded = darkmodeScript
DarkModeToggle.css = styles

export default (() => DarkModeToggle) satisfies QuartzComponentConstructor
