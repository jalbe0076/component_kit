const BackgroundPattern = (mainBgColor: string, secondaryBgColor: string) => {
  return `
    <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2837_72816)">
        <rect width="81" height="81" fill="#F3F4F4" style="fill:#F3F4F4;fill:${mainBgColor};fill-opacity:1;"/>
        <rect x="80.0999" y="0.0991211" width="1" height="1" fill="#E6E7E7" style="fill:#E6E7E7;fill:${secondaryBgColor};fill-opacity:1;"/>
        <rect x="80.0999" y="1.09912" width="1" height="1" fill="#EFF0F0" style="fill:#EFF0F0;fill:${secondaryBgColor};fill-opacity:1;"/>
        <rect x="79.0999" y="0.0991211" width="1" height="1" fill="#EFF0F0" style="fill:#EFF0F0;fill:${secondaryBgColor};fill-opacity:1;"/>
        <rect x="1" y="81" width="1" height="1" transform="rotate(-180 1 81)" fill="#E6E7E7" style="fill:#E6E7E7;fill:${secondaryBgColor};fill-opacity:1;"/>
        <rect x="1" y="80" width="1" height="1" transform="rotate(-180 1 80)" fill="#EFF0F0" style="fill:#EFF0F0;fill:${secondaryBgColor};fill-opacity:1;"/>
        <rect x="2" y="81" width="1" height="1" transform="rotate(-180 2 81)" fill="#EFF0F0" style="fill:#EFF0F0;fill:${secondaryBgColor};fill-opacity:1;"/>
        <rect x="0.0998535" y="41.0991" width="81" height="1" fill="#E5E6E6" style="fill:#E5E6E6;fill:${secondaryBgColor};fill-opacity:1;"/>
        <rect x="41.0999" y="81.0991" width="81" height="1" transform="rotate(-90 41.0999 81.0991)" fill="#E5E6E6" style="fill:#E5E6E6;fill:${secondaryBgColor};fill-opacity:1;"/>
        <rect x="81.0996" y="81.7607" width="115.571" height="1" transform="rotate(-135 81.0996 81.7607)" fill="#E5E6E6" style="fill:#E5E6E6;fill:${secondaryBgColor};fill-opacity:1;"/>
      </g>
    </svg>  
    `;
};

export default BackgroundPattern;
