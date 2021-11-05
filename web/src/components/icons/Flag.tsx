import * as React from 'react';

const Flag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.7 3v18"
      stroke="#222"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <mask id="prefix__a" fill="#fff">
      <path d="M3.7 2.856c0-.752.8-1.232 1.483-.918 2.377 1.094 3.848 1.226 7.438 1.226 3.322 0 4.375-.46 6.219-1.066.933-.307 1.86.406 1.86 1.388v8.742c0 .638-.297 1.25-.862 1.546-1.59.832-4.017 1.426-7.217 1.426-3.398 0-5.907-.361-8.076-1.435-.537-.266-.845-.83-.845-1.43V2.857z" />
    </mask>
    <path
      d="M3.7 2.856c0-.752.8-1.232 1.483-.918 2.377 1.094 3.848 1.226 7.438 1.226 3.322 0 4.375-.46 6.219-1.066.933-.307 1.86.406 1.86 1.388v8.742c0 .638-.297 1.25-.862 1.546-1.59.832-4.017 1.426-7.217 1.426-3.398 0-5.907-.361-8.076-1.435-.537-.266-.845-.83-.845-1.43V2.857z"
      fill="#222"
    />
    <path
      d="M19.838 13.774l-.733-1.4.733 1.4zM5.183 1.938l.66-1.435-.66 1.435zm13.938 1.548v8.742h3.158V3.486H19.12zm-13.842 8.85v-9.48H2.12v9.48h3.16zm-.756-8.963c2.691 1.239 4.438 1.37 8.098 1.37V1.586c-3.521 0-4.715-.133-6.778-1.082l-1.32 2.87zm8.098 1.37c1.736 0 2.944-.12 3.989-.339 1.019-.214 1.86-.522 2.723-.806l-.986-3c-.98.321-1.588.547-2.387.715-.773.162-1.753.272-3.339.272v3.159zm6.484 7.631c-1.302.682-3.46 1.246-6.484 1.246v3.16c3.375 0 6.072-.625 7.949-1.606l-1.465-2.8zm-6.484 1.246c-3.306 0-5.528-.356-7.375-1.27l-1.402 2.83c2.49 1.234 5.287 1.6 8.777 1.6v-3.16zm-10.5-1.284c0 1.12.58 2.279 1.723 2.844l1.402-2.83a.13.13 0 01.031.021c.008.008.011.013.011.014l-.004-.014a.142.142 0 01-.005-.035H2.12zm17-.108a.34.34 0 01-.032.154c-.005.01-.008.011-.004.007a.084.084 0 01.02-.014l1.465 2.799c1.193-.625 1.71-1.853 1.71-2.946h-3.16zm3.158-8.742c0-1.987-1.912-3.553-3.932-2.889l.986 3.001a.19.19 0 01-.088.004.179.179 0 01-.076-.032.116.116 0 01-.049-.084h3.16zm-17-.63a.581.581 0 01-.269.488.523.523 0 01-.487.03l1.32-2.87C4.185-.26 2.12.873 2.12 2.855h3.16z"
      fill="#222"
      mask="url(#prefix__a)"
    />
  </svg>
);

export default Flag;
