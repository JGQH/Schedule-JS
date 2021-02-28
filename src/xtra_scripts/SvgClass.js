import { startHours, endHours, weekDays } from '../scripts/Utilities';

const SvgClass = ({blocks = []}) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 600 544" preserveAspectRatio="xMaxYMax">
            <pattern id="grid" width="100" height="32" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 100 0 L 100 32 L 0 32 Z" fill="none" strokeWidth="0.25"/>
            </pattern>
            <rect width="600" height="544" fill="url(#grid)" />
            <text>
                {weekDays.map((text, index) => {
                    return <tspan
                            key={index}
                            x={100 * index + 150}
                            y="16"
                            fontSize={24}
                            dominantBaseline="middle"
                            textAnchor="middle">{text}</tspan>
                })}
            </text>
            <text>
                {Array.from(Array(16), (v, index) => {
                    return <tspan
                            key={index}
                            x="50"
                            y={32 * index + 48}
                            dominantBaseline="middle"
                            textAnchor="middle">{startHours[index]}-{endHours[index]}</tspan>
                })}
            </text>
            
            {blocks.map((block, index) => {
                const day = parseInt(block.Day) + 1;
                const start = parseInt(block.Start);
                const end = parseInt(block.End);

                return <rect
                        key={index}
                        className="class-block"
                        x={day * 100}
                        y={(start + 1) * 32}
                        width={100}
                        height={32 * (end - start + 1)}></rect>
            })}
        </svg>
    )
}

export default SvgClass;