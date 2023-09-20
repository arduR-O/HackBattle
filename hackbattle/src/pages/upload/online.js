import Bg from "@/Components/Bg";
import { useState, useEffect} from "react";
import Link from "next/link";

const Online = () => {
  const [isPending, setIsPending] = useState(true);
  const [texts, setTexts] = useState(null);
  const [catText, setCatText] = useState({});
  console.log(catText);
  console.log({ 1: [1, 2], 2: [2, 3], 4: [2, 3] });
  //command to run json server--> npx json-server --watch data/db.json --port 8000 (we specified the port since react is running on a port and we don't want it to override it)
  useEffect(() => {
    //real requests take time, so to simulate them we are using setTimeout, this will run this function after 1000ms
    fetch("http://localhost:8000/texts") //fetch api returns a promise that cotains the data from the link that we passed
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
        setIsPending(false);
        setTexts(data);
      });
  }, []);
  const handleClick = (e) => {
    // console.log(e.target.name);
    const id = e.target.name;
    const cat = e.target.value;
    const exp = e.target.dataset.expense;
    const newObj = { ...catText, [id]: [cat, exp] };
    // console.log(cat, exp);
    setCatText(newObj);
  };
  const handleButton = (e) => {
    // e.preventDefault(); //prevents the page from refreshing on submissin
    //now to make a post request->

    fetch("http://localhost:2000/cat", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({ catText }),
    }).then(() => {
      console.log("new blog added!!");
      // const navigate = useNavigate();
      // navigate("/offline");
      //once the blog has been added we would want to redirect the user to home page, that can be done using history
      // history.go(-1); //this will take them one page back
      //   history.push("/"); //will redirect to the home page
    });
  };
  //   heathcare, liesure, vacation, essentials, groceries, misc
  console.log(texts);
  return (
    <div className="flex justify-center" id="scrollable">
      <Bg />
      <div className="flex flex-col">
        <div className="flex justify-center text-9xl font-agdasima tracking-wide">
          FinEase
        </div>
        {/* {!isPending && console.log("yus")} */}
        <div className="flex flex-col gap-8">
          {!isPending &&
            texts.map((text) => {
              //   console.log(text.id, text.vendor);
              return (
                <div key={text.id}>
                  <div className="flex font-agdasima text-4xl gap-6">
                    <div>{text.vendor} -</div>
                    <div>{text.expense}</div>
                  </div>

                  <div class="flex flex-col sm:flex-row px-4">
                    <div class="flex items-center mr-4">
                      <input
                        id={`inline-radio-${text.id}`}
                        type="radio"
                        value="healthcare"
                        data-expense={text.expense}
                        name={`${text.id}`}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={(e) => {
                          handleClick(e);
                        }}
                      />
                      <label
                        for={`inline-radio-${text.id}`}
                        class="ml-2 text-2xl font-agdasima font-medium text-gray-900 dark:text-gray-300"
                      >
                        healthcare
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id={`inline-2-radio-${text.id}`}
                        type="radio"
                        value="liesure"
                        name={`${text.id}`}
                        data-expense={text.expense}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={(e) => {
                          handleClick(e);
                        }}
                      />
                      <label
                        for={`inline-2-radio-${text.id}`}
                        class="ml-2 text-2xl font-agdasima font-medium text-gray-900 dark:text-gray-300"
                      >
                        liesure
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id={`inline-3-radio-${text.id}`}
                        type="radio"
                        value="vacation"
                        data-expense={text.expense}
                        name={`${text.id}`}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={(e) => {
                          handleClick(e);
                        }}
                      />
                      <label
                        for={`inline-3-radio-${text.id}`}
                        class="ml-2 text-2xl font-agdasima font-medium text-gray-900 dark:text-gray-300"
                      >
                        vacation
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id={`inline-4-radio-${text.id}`}
                        type="radio"
                        value="essentials"
                        data-expense={text.expense}
                        name={`${text.id}`}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={(e) => {
                          handleClick(e);
                        }}
                      />
                      <label
                        for={`inline-4-radio-${text.id}`}
                        class="ml-2 text-2xl font-agdasima font-medium text-gray-900 dark:text-gray-300"
                      >
                        essentials
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id={`inline-5-radio-${text.id}`}
                        type="radio"
                        value="groceries"
                        data-expense={text.expense}
                        name={`${text.id}`}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={(e) => {
                          handleClick(e);
                        }}
                      />
                      <label
                        for={`inline-5-radio-${text.id}`}
                        class="ml-2 text-2xl font-agdasima font-medium text-gray-900 dark:text-gray-300"
                      >
                        groceries
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id={`inline-6-radio-${text.id}`}
                        type="radio"
                        value="misc"
                        data-expense={text.expense}
                        name={`${text.id}`}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={(e) => {
                          handleClick(e);
                        }}
                      />
                      <label
                        for={`inline-6-radio-${text.id}`}
                        class="ml-2 text-2xl font-agdasima font-medium text-gray-900 dark:text-gray-300"
                      >
                        misc
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
          <Link
            href="/upload/offline"
            onClick={(e) => {
              handleButton(e);
            }}
          >
            <div
              className={`px-10 py-2 rounded-full bg-black text-white font-agdasima tracking-wide text-xl sm:text-3xl  md:text-4xl border-2 border-white mt-6  max-w-[40vw] sm:max-w-[30vw] flex justify-center mx-auto`}
            >
              Submit
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Online;
