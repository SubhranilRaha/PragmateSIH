import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import { authLogin, authRegister } from "../../api/authReq";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Login() {
  let [categories] = useState({
    School: [
      {
        id: 1,
        title: "School",
      },
    ],
    Student: [
      {
        id: 1,
        title: "Student",
      },
    ],
    Teacher: [
      {
        id: 1,
        title: "Teacher",
      },
    ],
  });
  const navigate = useNavigate();
  const [uniqueId, setUniqueId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    if (uniqueId === "" || password === "") setError("Please fill all fields");
    else {
      setIsLoading(true);
      const data = await authLogin({ uniqueId, password });
      if (data.error) {
        setError(data.error);
        setUniqueId("");
        setPassword("");
      } else {
        navigate(`/${data?.user?.userType}_D`);
      }
      setIsLoading(false);
    }
  };

  const signup = async () => {
    if (email === "" || schoolName === "") setError2("Please fill all fields");
    else {
      setIsLoading(true);
      const data = await authRegister({ name: schoolName, email });
      if (data.error) {
        setError2(data.error);
        setEmail("");
        setSchoolName("");
      } else {
        window.alert("Mail has been sent!");
        window.location.reload();
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="min-w- flex h-screen flex-col items-center bg-gradient-to-r from-orange-500 to-yellow-500 pt-10 sm:px-0 lg:pt-20  lg:pl-10">
      <Tab.Group>
        <Tab.List className="mx-2 mb-5 flex w-96 space-x-1 rounded-xl bg-orange-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-orange-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-96">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx}>
              <div>
                {posts.map((post) => (
                  <main class="mx-5 max-w-lg rounded-lg bg-white p-8 shadow-2xl md:p-12">
                    {(post.title !== "School" ||
                      (post.title === "School" && !showSignUp)) &&
                    isLoading ? (
                      <section>
                        <h3 class="text-2xl font-bold">LOADING...</h3>
                      </section>
                    ) : (
                      (post.title !== "School" ||
                        (post.title === "School" && !showSignUp)) && (
                        <>
                          <section>
                            <h3 class="text-2xl font-bold">WELCOME</h3>
                            <p class="pt-2 text-gray-600">
                              Log in to your{" "}
                              <span className="font-bold">{post.title}</span>{" "}
                              account.
                            </p>
                          </section>

                          {error !== "" && <p class="text-red-600">{error}</p>}

                          <section class="mt-10">
                            <form
                              class="flex flex-col"
                              method="POST"
                              action="#"
                            >
                              <div class="mb-6 rounded pt-3 ">
                                <label
                                  class="mb-2 ml-3 block text-sm font-bold text-gray-700"
                                  for="uniqueid"
                                >
                                  UniqueId
                                </label>
                                <input
                                  type="text"
                                  id="uniqueid"
                                  value={uniqueId}
                                  class="w-full rounded border-b-4 border-gray-300 bg-gray-200 px-3 pb-1 pt-2 text-gray-700 transition duration-500 focus:border-orange-600 focus:outline-none"
                                  onChange={(e) => {
                                    setUniqueId(e.target.value);
                                  }}
                                />
                              </div>
                              <div class="mb-6 rounded pt-3">
                                <label
                                  class="mb-2 ml-3 block text-sm font-bold text-gray-700"
                                  for="password"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  id="password"
                                  value={password}
                                  class="w-full rounded border-b-4 border-gray-300 bg-gray-200 px-3 pb-1 pt-2 text-gray-700 transition duration-500 focus:border-orange-600 focus:outline-none"
                                  onChange={(e) => {
                                    setPassword(e.target.value);
                                  }}
                                />
                              </div>
                              <div class="flex justify-end">
                                <a
                                  href="/#contact"
                                  class="mb-6 text-sm text-orange-600 hover:text-orange-700 hover:underline"
                                >
                                  Forgot your password?
                                </a>
                              </div>
                              <button
                                class="rounded bg-orange-600 py-2 font-bold text-white shadow-lg transition duration-200 hover:bg-orange-700 hover:shadow-xl"
                                type="button"
                                onClick={login}
                              >
                                Log In
                              </button>
                            </form>
                          </section>
                          {post.title === "School" && (
                            <div class="mt-6 max-w-lg text-center">
                              <p class="text-sm text-orange-600">
                                Don't have an account?{" "}
                                <span
                                  onClick={() => {
                                    setShowSignUp(true);
                                  }}
                                  class="font-bold hover:cursor-pointer hover:underline"
                                >
                                  Sign up
                                </span>
                                .
                              </p>
                            </div>
                          )}
                        </>
                      )
                    )}
                    {post.title === "School" && showSignUp && isLoading ? (
                      <section>
                        <h3 class="text-2xl font-bold">LOADING...</h3>
                      </section>
                    ) : (
                      post.title === "School" &&
                      showSignUp && (
                        <>
                          <section>
                            <h3 class="text-2xl font-bold">WELCOME ABOARD! </h3>
                            <p class="pt-2 text-gray-600">
                              Please enter your email. We will send your
                              credentials to you via email.
                            </p>
                          </section>
                          {error2 !== "" && (
                            <p class="text-red-600">{error2}</p>
                          )}
                          <section class="mt-10">
                            <form
                              class="flex flex-col"
                              method="POST"
                              action="#"
                            >
                              <div class="mb-6 rounded pt-3 ">
                                <label
                                  class="mb-2 ml-3 block text-sm font-bold text-gray-700"
                                  for="name"
                                >
                                  School Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  value={schoolName}
                                  class="w-full rounded border-b-4 border-gray-300 bg-gray-200 px-3 pb-1 pt-2 text-gray-700 transition duration-500 focus:border-orange-600 focus:outline-none"
                                  onChange={(e) => {
                                    setSchoolName(e.target.value);
                                  }}
                                />
                              </div>
                              <div class="mb-6 rounded pt-3 ">
                                <label
                                  class="mb-2 ml-3 block text-sm font-bold text-gray-700"
                                  for="uniqueid"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  value={email}
                                  class="w-full rounded border-b-4 border-gray-300 bg-gray-200 px-3 pb-1 pt-2 text-gray-700 transition duration-500 focus:border-orange-600 focus:outline-none"
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                />
                              </div>
                              <button
                                class="rounded bg-orange-600 py-2 font-bold text-white shadow-lg transition duration-200 hover:bg-orange-700 hover:shadow-xl"
                                type="button"
                                onClick={signup}
                              >
                                Send Credentials
                              </button>
                            </form>
                          </section>
                          <div class="mt-6 max-w-lg text-center">
                            <p class="text-sm text-orange-600">
                              Already have an account?{" "}
                              <span
                                onClick={() => {
                                  setShowSignUp(false);
                                }}
                                class="font-bold hover:cursor-pointer hover:underline"
                              >
                                Sign In
                              </span>
                              .
                            </p>
                          </div>
                        </>
                      )
                    )}
                  </main>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
