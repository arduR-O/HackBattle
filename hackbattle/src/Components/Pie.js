import { VictorySharedEvents, VictoryPie, VictoryLabel } from "victory";
const Pie = ({ a, b, c, d, e, f }) => {
  return (
    <svg viewBox="0 0 500 400" className="h-[80vh] flex">
      <text x="218" y="210" fill="white">
      ₹ {a+b+c+d+e+f}
      </text>
      <VictorySharedEvents
        events={[
          {
            childName: "pie",
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    childName: "pie",
                    mutation: (props) => {
                      return {
                        style: Object.assign({}, props.style, {
                          fill: "tomato",
                        }),
                      };
                    },
                  },
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    childName: ["pie", "bar"],
                    mutation: () => {
                      return null;
                    },
                  },
                ];
              },
            },
          },
        ]}
      >
        <g transform={"translate(0, 0)"}>
          <VictoryPie
            name="pie"
            colorScale={["#C8FFBE", "#642ad1", "#279AF1", "#FDE2A5", "#F7934C", "#C2095A"]}
            width={500}
            standalone={false}
            style={{
              labels: { fontSize: 10, padding: 10, fill: "#FFFFFF" },
              data: {
                fillOpacity: 0.9,
                stroke: "#ffffff",
                strokeWidth: 0.5,
              },
            }}
            innerRadius={90}
            labelPosition={({ index }) => (index ? "centroid" : "startAngle")}
            labelPlacement={({ index }) => (index ? "parallel" : "vertical")}
            data={[
              { x: "Healthcare", y: a },
              { x: "Liesure", y: b },
              { x: "Vacation", y: c },
              { x: "Essentials", y: d },
              { x: "Groceries", y: e },
              { x: "Misc", y: f },
            ]}
          />
        </g>
      </VictorySharedEvents>
    </svg>
  );
};

export default Pie;
