import React from 'react'

const NotiIcon = props => (
  <svg width={16} height={19} {...props}>
    <title>{'icon/alert/notification_important_24px'}</title>
    <defs>
      <path
        d="M8 18.167c.917 0 1.658-.742 1.658-1.659H6.342c0 .917.741 1.659 1.658 1.659zm5.833-5v-5A5.828 5.828 0 0 0 9.25 2.475V1.5C9.25.808 8.692.25 8 .25S6.75.808 6.75 1.5v.975a5.828 5.828 0 0 0-4.583 5.692v5L.5 14.833v.834h15v-.834l-1.667-1.666zm-5-.834H7.167v-1.666h1.666v1.666zm0-3.333H7.167V5.667h1.666V9z"
        id="prefix__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <g mask="url(#prefix__b)" fill="#000" fillOpacity={0.54}>
        <path d="M-2-1h20v20H-2z" />
      </g>
    </g>
  </svg>
)

export default NotiIcon
