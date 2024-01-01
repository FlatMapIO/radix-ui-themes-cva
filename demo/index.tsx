/** @jsxImportSource voby */
import {
  container,
  flex,
  button,
  iconButton,
  textArea,
  DataScaling,
  DataAccentColor,
  DataGrayColor,
  DataRadius,
  ThemesClasses,
} from '../src'
import { render } from 'voby'
export const App = () => {
  return (
    <main
      data-scaling={DataScaling.DEFAULT}
      data-accent-color={DataAccentColor.DEFAULT}
      data-is-root-theme={true}
      data-gray-color={DataGrayColor.slate}
      data-panel-background
      data-has-background={false}
      data-radius={DataRadius.DEFAULT}
      class={[ThemesClasses.radixThemes, ThemesClasses.light]}
    >
      <div class={container.root({ size: '1', p: '3' })}>
        <div class={[container.inner(), flex({ gap: '3' })]}>
          <button class={iconButton({ size: '2' })}>
            <Icon name='lucide:axe' />
          </button>
          <button class={iconButton({ size: '2' })}>
            <Icon name='lucide:bitcoin' />
          </button>
        </div>
        <div
          data-accent-color={DataAccentColor.ruby}
          class={flex({ direction: 'column', gap: '3' })}
        >
          <div class={textArea.root({})}>
            <textarea
              placeholder='Reply to comment…'
              class={textArea.input()}
            />
            <div class={textArea.chrome()}></div>
          </div>
          <button class={button({ size: '2' })}>Click me</button>
        </div>
      </div>
    </main>
  )
}

const Icon = ({
  name,
  width = '16px',
  height = '16px',
  ...props
}: {
  name: string
  inline?: boolean
  width?: string
  height?: string
  style?: JSX.Style
  rotate?: string
  mode?: 'style'
}) => (
  // @ts-ignore
  <iconify-icon icon={name ?? 'emojione:balloon'} {...props} />
)

render(<App />, document.getElementById('app'))
