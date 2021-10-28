import { BootstrapScreenSizeElement } from '../src/components/BootstrapScreenSizeElement'
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css'
import "bootstrap/dist/js/bootstrap.esm"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => <div>
    <Story />
    <BootstrapScreenSizeElement />
  </div>
]