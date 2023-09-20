import Pie from "@/Components/Pie";
import { useState, useEffect } from "react";
import Bg from "@/Components/Bg";
import PiComp from "@/Components/piComp";
import Link from "next/link";
const stats = () => {
  const [dataset, setDataset] = useState(null);
  const [isPending, setIsPending] = useState(true);
  console.log(dataset);

  useEffect(() => {
    //real requests take time, so to simulate them we are using setTimeout, this will run this function after 1000ms
    fetch("http://localhost:1200/stats") //fetch api returns a promise that cotains the data from the link that we passed
      //the promise might either be accepted or rejected, the first and second arguments are the functions that are to be called in respective cases
      .then((rs) => {
        //we have a response object returned, we can access data through this object
        //then returns a promise of it's own which can be further resolved using chaining
        //we can either pass the failure function in second argument or we can use a separate .catch() method to give the rejection function
        // console.log(rs);
        return rs.json();
      })
      .then((data) => {
        //once the fetch has been performed we would want to set pending to false
        setDataset(data);
        setIsPending(false);
      });
  }, []);
  //   heathcare, liesure, vacation, essentials, groceries, misc
  let a, b, c, d, e, f;
  if (!isPending) {
    [a, b, c, d, e, f] = [
      dataset[0]["healthcare"],
      dataset[0]["liesure"],
      dataset[0]["vacation"],
      dataset[0]["essentials"],
      dataset[0]["groceries"],
      dataset[0]["misc"],
    ];
  }
  return (
    <div className="flex flex-col justify-center">
      <Bg />
      <div className="flex justify-center text-9xl font-agdasima tracking-wide">
        FinEase
      </div>
      {!isPending && <Pie a={a} b={b} c={c} d={d} e={e} f={f} />}
      <div className="flex h-[30vh] mx-auto gap-20">
        {/* colorScale={["#C8FFBE", "#642ad1", "#279AF1", "#FDE2A5", "#F7934C", "#C2095A"]} */}
        {/* { x: "Healthcare", y: a },
              { x: "Liesure", y: b },
              { x: "Vacation", y: c },
              { x: "Essentials", y: d },
              { x: "Groceries", y: e },
              { x: "Misc", y: f },
 */}
        <div className="flex flex-col gap-4">
          <PiComp color="#C8FFBE" category="Healthcare" expense={a} />
          <PiComp color="#642ad1" category="Liesure" expense={a} />
          <PiComp color="#279AF1" category="Vacation" expense={a} />
        </div>
        <div className="flex flex-col gap-4">
          <PiComp color="#FDE2A5" category="Essentials" expense={a} />
          <PiComp color="#F7934C" category="Groceries" expense={a} />
          <PiComp color="#C2095A" category="Misc" expense={a} />
        </div>
      </div>
        <Link href="/">
          <div
            className={`px-10 py-2 rounded-full bg-black text-white font-agdasima tracking-wide text-xl sm:text-3xl  md:text-4xl border-2 border-white my-6  max-w-[40vw] sm:max-w-[30vw] flex justify-center mx-auto`}
          >
            Home
          </div>
        </Link>
    </div>
  );
};

export default stats;
