import { type RefObject } from 'react'

function ActiveTabMark({
  reference,
  direction,
}: {
  reference: RefObject<HTMLDivElement>
  direction: 'horizontal' | 'vertical'
}) {
  return (
    <>
      <div data-active-tab-mark={direction} ref={reference} />
      <style jsx>{`
        div {
          position: absolute;
          background-color: #fff;
          transition-property: transform, width, height;
          transition-duration: 0.3s;
        }

        div[data-active-tab-mark='horizontal'] {
          bottom: 0;
          left: 0;
          width: var(--width);
          height: 3px;
          transform: translate(var(--x), 0);
        }

        div[data-active-tab-mark='vertical'] {
          top: 0;
          bottom: auto;
          left: auto;
          right: 0;
          width: 4px;
          height: var(--height);
          transform: translate(0, var(--y));
        }
      `}</style>
    </>
  )
}

export default ActiveTabMark
