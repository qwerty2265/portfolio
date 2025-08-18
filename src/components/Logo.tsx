interface PortfolioOSLogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 64, className = "" }: PortfolioOSLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        style={{ imageRendering: 'pixelated' }}
      >
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          fill="#c0c0c0"
          stroke="#808080"
          strokeWidth="1"
        />
        <rect
          x="3"
          y="3"
          width="58"
          height="1"
          fill="#ffffff"
        />
        <rect
          x="3"
          y="3"
          width="1"
          height="58"
          fill="#ffffff"
        />
        <rect
          x="3"
          y="60"
          width="58"
          height="1"
          fill="#404040"
        />
        
        <rect
          x="60"
          y="3"
          width="1"
          height="58"
          fill="#404040"
        />
        
        <rect x="12" y="15" width="3" height="20" fill="#000080" />
        <rect x="15" y="15" width="10" height="3" fill="#000080" />
        <rect x="15" y="23" width="8" height="3" fill="#000080" />
        <rect x="23" y="18" width="3" height="5" fill="#000080" />
        
        <rect
          x="38"
          y="18"
          width="16"
          height="12"
          fill="#008080"
          stroke="#000000"
          strokeWidth="1"
        />
        
        <rect
          x="39"
          y="19"
          width="14"
          height="3"
          fill="#0000ff"
        />
        
        <rect x="49" y="20" width="2" height="1" fill="#ffffff" />
        <rect x="51" y="19" width="2" height="3" fill="#ffffff" stroke="#000000" strokeWidth="0.5" />
        
        <rect
          x="45"
          y="40"
          width="12"
          height="8"
          fill="#ffff00"
          stroke="#000000"
          strokeWidth="1"
        />
        <rect
          x="45"
          y="38"
          width="6"
          height="3"
          fill="#ffff00"
          stroke="#000000"
          strokeWidth="1"
        />
        <rect
          x="8"
          y="40"
          width="20"
          height="8"
          fill="#c0c0c0"
          stroke="#000000"
          strokeWidth="1"
        />
        <rect x="9" y="41" width="18" height="1" fill="#ffffff" />
        <rect x="9" y="41" width="1" height="6" fill="#ffffff" />
        <rect x="9" y="47" width="18" height="1" fill="#404040" />
        <rect x="27" y="41" width="1" height="6" fill="#404040" />
        
        <text
          x="18"
          y="46"
          fontSize="6"
          fill="#000000"
          textAnchor="middle"
          fontFamily="monospace"
        >
          OS
        </text>
      </svg>
    </div>
  );
}