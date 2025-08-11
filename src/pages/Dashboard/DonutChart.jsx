export default function DonutChart() {
  const centerX = 60;
  const centerY = 60;
  const outerRadius = 45;
  const innerRadius = 25;
  
  // Convert percentage to angles (starting from top, clockwise)
  const blueAngle = 170; // 48% ≈ 173 degrees  
  const orangeAngle = 76;  // 21% ≈ 76 degrees
  const greenAngle = 107;  // 31% ≈ 111 degrees
  
  // Starting angles
  const blueStart = -90; // Start from top
  const orangeStart = blueStart + blueAngle + 2; // Small gap
  const greenStart = orangeStart + orangeAngle + 2; // Small gap
  
  const createArcPath = (startAngle, endAngle, outerR, innerR) => {
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = centerX + outerR * Math.cos(startAngleRad);
    const y1 = centerY + outerR * Math.sin(startAngleRad);
    const x2 = centerX + outerR * Math.cos(endAngleRad);
    const y2 = centerY + outerR * Math.sin(endAngleRad);
    
    const x3 = centerX + innerR * Math.cos(endAngleRad);
    const y3 = centerY + innerR * Math.sin(endAngleRad);
    const x4 = centerX + innerR * Math.cos(startAngleRad);
    const y4 = centerY + innerR * Math.sin(startAngleRad);
    
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
  };
  
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-32 h-32">
        {/* Donut Chart SVG */}
        <svg className="w-32 h-32" viewBox="0 0 120 120">
          {/* Blue segment (48%) */}
          <path
            d={createArcPath(blueStart, blueStart + blueAngle, outerRadius, innerRadius)}
            fill="#4285F4"
          />
          
          {/* Orange segment (21%) */}
          <path
            d={createArcPath(orangeStart, orangeStart + orangeAngle, outerRadius, innerRadius)}
            fill="#FF9500"
          />
          
          {/* Green segment (31%) */}
          <path
            d={createArcPath(greenStart, greenStart + greenAngle, outerRadius, innerRadius)}
            fill="#00C851"
          />
        </svg>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs text-gray-500">Total</span>
          <span className="text-sm font-bold text-blue-600">45,251</span>
        </div>
      </div>
    </div>
  );
}